"use client";

import { useState, useRef, type FormEvent } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["pdf", "doc", "docx"]);

type UploadState = "idle" | "uploading" | "success" | "error";

export default function CvUploadForm() {
  const [state, setState] = useState<UploadState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function validateFile(file: File): string | null {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return "Format non autorisé. Seuls PDF, DOC et DOCX sont acceptés.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "Le fichier dépasse la taille maximale de 5 Mo.";
    }
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File | null;

    if (!file || file.size === 0) {
      setErrorMessage("Veuillez sélectionner un fichier.");
      return;
    }

    const validationError = validateFile(file);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setState("uploading");

    try {
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
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg">
        <div className="flex items-center gap-3 mb-2">
          <span className="material-symbols-outlined text-green-400 text-2xl">
            check_circle
          </span>
          <p className="text-white font-bold text-lg">CV envoyé avec succès</p>
        </div>
        <p className="text-white/70 text-sm mb-4">
          Nos consultants reviendront vers vous sous 48 heures.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-white/80 text-sm font-medium hover:text-white transition-colors underline underline-offset-2"
        >
          Envoyer un autre CV
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          required
          placeholder="Votre nom complet"
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:ring-2 focus:ring-white/40 focus:outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Votre email"
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:ring-2 focus:ring-white/40 focus:outline-none"
        />
      </div>
      <div className="relative">
        <input
          name="file"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="block w-full text-sm text-white/70 file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-white/20 file:text-white hover:file:bg-white/30 file:cursor-pointer file:transition-colors cursor-pointer"
        />
        <p className="text-white/40 text-xs mt-1">
          PDF, DOC ou DOCX — 5 Mo max.
        </p>
      </div>

      {errorMessage && (
        <p className="text-red-300 text-sm flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">error</span>
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "uploading"}
        className="bg-white text-gray-900 px-8 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {state === "uploading" ? (
          <>
            <span className="material-symbols-outlined animate-spin text-lg">
              progress_activity
            </span>
            Envoi en cours...
          </>
        ) : (
          "Candidature Spontanée"
        )}
      </button>
    </form>
  );
}
