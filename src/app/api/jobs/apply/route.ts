import { NextRequest, NextResponse } from "next/server";
import { getSheets, ensureSheetTab } from "@/lib/google";

export const dynamic = "force-static";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

async function findCandidateByEmail(email: string): Promise<boolean> {
  await ensureSheetTab(SHEET_ID, "Candidatures", [
    "Date", "Nom", "Email", "Téléphone", "Secteur", "Poste",
    "Disponibilité", "Message", "Lien CV",
  ]);

  const res = await getSheets().spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "'Candidatures'!C2:C",
  });

  const rows = res.data.values;
  if (!rows) return false;

  const normalised = email.trim().toLowerCase();
  return rows.some((row) => row[0]?.trim().toLowerCase() === normalised);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email as string)?.trim();
    const jobTitle = (body.jobTitle as string) || "";
    const company = (body.company as string) || "";
    const message = (body.message as string) || "";

    if (!email) {
      return NextResponse.json(
        { error: "L'adresse email est requise." },
        { status: 400 },
      );
    }

    if (!jobTitle) {
      return NextResponse.json(
        { error: "L'offre d'emploi est requise." },
        { status: 400 },
      );
    }

    const exists = await findCandidateByEmail(email);

    if (!exists) {
      return NextResponse.json(
        {
          error: "CV_NOT_FOUND",
          message:
            "Aucun CV trouvé pour cette adresse email. Veuillez d'abord déposer votre CV.",
        },
        { status: 404 },
      );
    }

    const now = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    });

    await ensureSheetTab(SHEET_ID, "Postulations", [
      "Date", "Email", "Offre", "Entreprise", "Message",
    ]);

    await getSheets().spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "'Postulations'!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[now, email, jobTitle, company, message]],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Votre candidature a été enregistrée avec succès.",
    });
  } catch (error) {
    console.error("Job application failed:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de la candidature." },
      { status: 500 },
    );
  }
}
