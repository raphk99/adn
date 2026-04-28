"use client";

import { useState, useRef, type FormEvent } from "react";
import Modal from "./Modal";
import type { Job } from "@/lib/types";

type SubmitState =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "cv_not_found"
  | "uploading_cv";

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

interface PostulerModalProps {
  open: boolean;
  onClose: () => void;
  job: Job;
}

export default function PostulerModal({
  open,
  onClose,
  job,
}: PostulerModalProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const cvFormRef = useRef<HTMLFormElement>(null);

  async function applyToJob(email: string, message: string) {
    const res = await fetch("/api/jobs/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        jobTitle: job.title,
        company: job.company,
        message,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || data.error || "Erreur lors de la postulation.");
    }
  }

  async function handleEmailSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string) || "";

    setSavedEmail(email);
    setSavedMessage(message);

    try {
      const res = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          jobTitle: job.title,
          company: job.company,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error === "CV_NOT_FOUND") {
          setState("cv_not_found");
          return;
        }
        throw new Error(data.message || data.error || "Erreur lors de l'envoi.");
      }

      setState("success");
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue.",
      );
    }
  }

  async function handleCvSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("uploading_cv");
    setErrorMsg("");

    try {
      const formData = new FormData(e.currentTarget);
      formData.set("email", savedEmail);

      const cvRes = await fetch("/api/cv/upload", {
        method: "POST",
        body: formData,
      });

      if (!cvRes.ok) {
        const data = await cvRes.json();
        throw new Error(data.error || "Erreur lors de l'envoi du CV.");
      }

      await applyToJob(savedEmail, savedMessage);

      setState("success");
      cvFormRef.current?.reset();
    } catch (err) {
      setState("cv_not_found");
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue.",
      );
    }
  }

  function handleClose() {
    setState("idle");
    setErrorMsg("");
    setSavedEmail("");
    setSavedMessage("");
    onClose();
  }

  return (
    <Modal open={open} onClose={handleClose} title="Postuler à cette offre">
      {/* Job summary */}
      <div className="bg-surface-container-low rounded-xl p-4 mb-6">
        <p className="font-bold text-on-surface text-lg leading-snug">
          {job.title}
        </p>
        <p className="text-secondary text-sm mt-1 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">apartment</span>
          {job.company}
          <span className="mx-1">·</span>
          <span className="material-symbols-outlined text-base">
            location_on
          </span>
          {job.location}
        </p>
      </div>

      {state === "success" ? (
        <div className="text-center py-8 space-y-4">
          <span
            className="material-symbols-outlined text-green-600 text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <h3 className="text-xl font-bold font-headline text-on-surface">
            Candidature envoyée !
          </h3>
          <p className="text-secondary">
            Votre candidature pour <strong>{job.title}</strong> a bien été
            enregistrée. L&apos;entreprise reviendra vers vous prochainement.
          </p>
          <button
            onClick={handleClose}
            className="mt-4 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Fermer
          </button>
        </div>
      ) : state === "cv_not_found" || state === "uploading_cv" ? (
        <>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <span
              className="material-symbols-outlined text-amber-500 text-xl mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <div>
              <p className="text-sm font-medium text-amber-900">
                Aucun CV trouvé pour <strong>{savedEmail}</strong>
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Complétez le formulaire ci-dessous. Votre CV sera déposé et
                votre candidature envoyée automatiquement.
              </p>
            </div>
          </div>

          <form ref={cvFormRef} onSubmit={handleCvSubmit} className="space-y-4">
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
                  Email
                </label>
                <input
                  type="email"
                  value={savedEmail}
                  disabled
                  className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface-container-low text-secondary outline-none cursor-not-allowed"
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
                defaultValue={savedMessage}
                placeholder="Décrivez brièvement votre expérience ou vos attentes..."
                className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            {errorMsg && (
              <p className="text-error text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">error</span>
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "uploading_cv"}
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "uploading_cv" ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-lg">
                    progress_activity
                  </span>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">upload</span>
                  Déposer mon CV et postuler
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Votre email <span className="text-error">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="jean@email.com"
              className="w-full border border-outline-variant rounded-xl px-4 py-3 text-sm bg-surface focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            />
            <p className="text-secondary text-xs mt-1">
              Utilisez la même adresse que lors du dépôt de votre CV.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
              Message (optionnel)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Pourquoi cette offre vous intéresse..."
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
                Vérification...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">send</span>
                Envoyer ma candidature
              </>
            )}
          </button>
        </form>
      )}
    </Modal>
  );
}
