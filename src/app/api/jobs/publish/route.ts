import { NextRequest, NextResponse } from "next/server";
import { getSheets, ensureSheetTab } from "@/lib/google";

export const dynamic = "force-static";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      company,
      location,
      sector,
      contractType,
      salary,
      positions,
      startDate,
      description,
      contactEmail,
      contactPhone,
    } = body;

    if (!title || !company || !location || !sector || !contractType) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 },
      );
    }

    const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    await ensureSheetTab(SHEET_ID, "Offres", [
      "Date", "Titre", "Entreprise", "Localisation", "Secteur", "Contrat",
      "Rémunération", "Postes", "Début", "Description", "Email contact", "Tél. contact",
    ]);

    await getSheets().spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "'Offres'!A:L",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            now,
            title,
            company,
            location,
            sector,
            contractType,
            salary || "",
            String(positions || 1),
            startDate || "",
            description || "",
            contactEmail || "",
            contactPhone || "",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Votre offre a été publiée avec succès.",
    });
  } catch (error) {
    console.error("Job publish failed:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la publication de l'offre." },
      { status: 500 },
    );
  }
}
