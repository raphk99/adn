"use client";

import { useState, useRef, type FormEvent } from "react";
import Modal from "./Modal";

const SECTEURS = [
  "BTP / Construction",
  "Industrie",
  "Logistique / Transport",
  "Tertiaire / Administratif",
  "Hôtellerie / Restauration",
  "Commerce / Distribution",
  "Santé / Médico-social",
  "Informatique / Digital",
  "Autre",
];

const CONTRATS = ["Intérim", "CDD", "CDI", "CDI Intérimaire"];

type SubmitState = "idle" | "loading" | "success" | "error";

interface JobPostModalProps {
  open: boolean;
  onClose: () => void;
}

export default function JobPostModal({ open, onClose }: JobPostModalProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const formData = new FormData(e.currentTarget);
      const body = Object.fromEntries(formData.entries());

      const res = await fetch("/api/jobs/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de la publication.");
      }

      setState("success");
      formRef.current?.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue.",
      );
    }
  }

  function handleClose() {
    setState("idle");
    setErrorMsg("");
    onClose();
  }

  return (
    <Modal open={open} onClose={handleClose} title="Publier une offre">
      {state === "success" ? (
        <div className="text-center py-8 space-y-4">
          <span
            className="material-symbols-outlined text-green-600 text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <h3 className="text-xl font-bold font-headline text-on-surface">
            Offre publiée avec succès !
          </h3>
          <p className="text-secondary">
            Notre équipe la validera sous 24 heures. Vous serez notifié par email.
          </p>
          <button
            onClick={handleClose}
            className="mt-4 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Fermer
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Titre du poste <span className="text-error">*</span>
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="ex: Maçon qualifié, Cariste CACES 3..."
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Entreprise <span className="text-error">*</span>
              </label>
              <input
                name="company"
                type="text"
                required
                placeholder="Nom de l'entreprise"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Localisation <span className="text-error">*</span>
              </label>
              <input
                name="location"
                type="text"
                required
                placeholder="Ville ou code postal"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Secteur <span className="text-error">*</span>
              </label>
              <select
                name="sector"
                required
                defaultValue=""
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="" disabled>
                  Choisir un secteur
                </option>
                {SECTEURS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Type de contrat <span className="text-error">*</span>
              </label>
              <select
                name="contractType"
                required
                defaultValue=""
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="" disabled>
                  Choisir
                </option>
                {CONTRATS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Rémunération
              </label>
              <input
                name="salary"
                type="text"
                placeholder="ex: 12,50€/h, 2 200€/mois..."
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Nombre de postes <span className="text-error">*</span>
              </label>
              <input
                name="positions"
                type="number"
                min={1}
                required
                defaultValue={1}
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Date de début souhaitée <span className="text-error">*</span>
            </label>
            <input
              name="startDate"
              type="date"
              required
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Description du poste <span className="text-error">*</span>
            </label>
            <textarea
              name="description"
              rows={4}
              required
              placeholder="Décrivez les missions, compétences requises, horaires..."
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Email de contact <span className="text-error">*</span>
              </label>
              <input
                name="contactEmail"
                type="email"
                required
                placeholder="rh@entreprise.fr"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Téléphone de contact
              </label>
              <input
                name="contactPhone"
                type="tel"
                placeholder="01 23 45 67 89"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          {state === "error" && (
            <p className="text-error text-sm flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">error</span>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full bg-on-surface text-surface py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === "loading" ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                Publication en cours...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">publish</span>
                Publier l&apos;offre
              </>
            )}
          </button>
        </form>
      )}
    </Modal>
  );
}
