import { NextRequest, NextResponse } from "next/server";
import { getSheets, ensureSheetTab } from "@/lib/google";
import { supabase, CV_BUCKET } from "@/lib/supabase";

export const dynamic = "force-static";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9À-ÿ._\- ]/g, "_").slice(0, 200);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;
    const name = (formData.get("name") as string) || "Anonyme";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const sector = (formData.get("sector") as string) || "";
    const position = (formData.get("position") as string) || "";
    const availability = (formData.get("availability") as string) || "";
    const message = (formData.get("message") as string) || "";

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier fourni." },
        { status: 400 },
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Le fichier dépasse la taille maximale de 5 Mo." },
        { status: 413 },
      );
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        {
          error:
            "Format non autorisé. Seuls PDF, DOC et DOCX sont acceptés.",
        },
        { status: 415 },
      );
    }

    const timestamp = new Date().toISOString().slice(0, 10);
    const safeName = sanitizeFilename(name);
    const ext = file.name.split(".").pop() || "pdf";
    const storagePath = `${timestamp}/CV_${safeName}_${Date.now()}.${ext}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } = await supabase.storage
      .from(CV_BUCKET)
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      return NextResponse.json(
        { error: "Échec de l'envoi du fichier." },
        { status: 500 },
      );
    }

    const { data: urlData } = supabase.storage
      .from(CV_BUCKET)
      .getPublicUrl(storagePath);

    const fileLink = urlData.publicUrl;

    const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    await ensureSheetTab(SHEET_ID, "Candidatures", [
      "Date", "Nom", "Email", "Téléphone", "Secteur", "Poste", "Disponibilité", "Message", "Lien CV",
    ]);

    await getSheets().spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "'Candidatures'!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [now, name, email, phone, sector, position, availability, message, fileLink],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Votre CV a été envoyé avec succès.",
    });
  } catch (error) {
    console.error("CV upload failed:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du CV." },
      { status: 500 },
    );
  }
}
