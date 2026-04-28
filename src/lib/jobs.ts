import { getSheets, ensureSheetTab } from "./google";
import type { Job } from "./types";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

export async function fetchJobs(): Promise<Job[]> {
  await ensureSheetTab(SHEET_ID, "Offres", [
    "Date", "Titre", "Entreprise", "Localisation", "Secteur", "Contrat",
    "Rémunération", "Postes", "Début", "Description", "Email contact", "Tél. contact",
  ]);

  const res = await getSheets().spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "'Offres'!A2:L",
  });

  const rows = res.data.values;
  if (!rows || rows.length === 0) return [];

  return rows.map((row, index) => ({
    id: String(index + 1),
    posted: row[0] ?? "",
    title: row[1] ?? "",
    company: row[2] ?? "",
    location: row[3] ?? "",
    sector: row[4] ?? "",
    contractType: row[5] ?? "",
    salary: row[6] ?? "",
    positions: row[7] ?? "",
    startDate: row[8] ?? "",
    description: row[9] ?? "",
    contactEmail: row[10] ?? "",
    contactPhone: row[11] ?? "",
  }));
}
