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

const DISPONIBILITES = [
  "Immédiate",
  "Sous 1 semaine",
  "Sous 2 semaines",
  "Sous 1 mois",
];

type SubmitState = "idle" | "loading" | "success" | "error";

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CvModal({ open, onClose }: CvModalProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/cv/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur lors de l'envoi.");
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
    <Modal open={open} onClose={handleClose} title="Déposer un CV">
      {state === "success" ? (
        <div className="text-center py-8 space-y-4">
          <span
            className="material-symbols-outlined text-green-600 text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <h3 className="text-xl font-bold font-headline text-on-surface">
            CV envoyé avec succès !
          </h3>
          <p className="text-secondary">
            Nos consultants reviendront vers vous sous 48 heures.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Nom complet <span className="text-error">*</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Jean Dupont"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Email <span className="text-error">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="jean@email.com"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Téléphone <span className="text-error">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                required
                placeholder="06 12 34 56 78"
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Secteur souhaité <span className="text-error">*</span>
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
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Poste recherché <span className="text-error">*</span>
            </label>
            <input
              name="position"
              type="text"
              required
              placeholder="ex: Maçon, Conducteur d'engins, Assistant admin..."
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Disponibilité <span className="text-error">*</span>
            </label>
            <select
              name="availability"
              required
              defaultValue=""
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            >
              <option value="" disabled>
                Sélectionner
              </option>
              {DISPONIBILITES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              CV (PDF, DOC, DOCX) <span className="text-error">*</span>
            </label>
            <input
              name="file"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="block w-full text-sm text-secondary file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary-fixed file:text-on-primary-fixed hover:file:bg-primary-fixed-dim file:cursor-pointer file:transition-colors cursor-pointer"
            />
            <p className="text-secondary text-xs mt-1">5 Mo maximum</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Message (optionnel)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Décrivez brièvement votre expérience ou vos attentes..."
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
            />
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
            className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === "loading" ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">
                  progress_activity
                </span>
                Envoi en cours...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">upload</span>
                Envoyer ma candidature
              </>
            )}
          </button>
        </form>
      )}
    </Modal>
  );
}
