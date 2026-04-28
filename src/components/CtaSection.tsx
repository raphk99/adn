"use client";

import { useState } from "react";
import Image from "next/image";
import CvModal from "./CvModal";
import JobPostModal from "./JobPostModal";

export default function CtaSection() {
  const [cvOpen, setCvOpen] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black font-headline tracking-tighter mb-8 leading-tight">
                Prêt à écrire un{" "}
                <span className="text-primary italic">nouveau chapitre</span> ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 bg-surface-container-lowest rounded-2xl editorial-shadow">
                  <div className="bg-primary-fixed p-3 rounded-xl text-on-primary-fixed">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Candidat</h4>
                    <p className="text-secondary mb-4">
                      Faites le premier pas vers votre nouveau départ. Nous vous
                      accompagnons à chaque étape.
                    </p>
                    <button
                      onClick={() => setCvOpen(true)}
                      className="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Déposer un CV
                    </button>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 bg-surface-container-lowest rounded-2xl editorial-shadow">
                  <div className="bg-secondary-fixed p-3 rounded-xl text-on-secondary-fixed">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Recruteur</h4>
                    <p className="text-secondary mb-4">
                      Engagez-vous pour l&apos;inclusion et recrutez des talents
                      motivés, accompagnés et formés.
                    </p>
                    <button
                      onClick={() => setJobOpen(true)}
                      className="bg-on-surface text-white px-6 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Publier une offre
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] rotate-6 scale-105" />
              {/* Photo souhaitée : groupe diversifié de personnes en formation ou en situation de travail, visages souriants, ambiance collaborative */}
              <Image
                alt="Groupe de candidats en formation"
                className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] editorial-shadow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-W_7Gmw0OhI2SutdJAuqeXLaDAMXwq8PxqlmXSaAziGpsW386xo57hzLA8ux1e5DOeiF9NDQ9VCO7Ggy0444gUgZ6JUhZGC__1yONS0MKu3li--MhVUeE7XH2hvUg8OqiulPEy3mVi7dhzebVx391Z4P40sIVKGMEpNDfKJIAoQrF03rCeccqLr5XYfPa7KzVh-KoVm9FzWYHB_i2vuw26zLFQtQmSyGe8k98kLvqgNgWcNBQebci1I_7oHUHYl3TO3edr1YTg"
                width={700}
                height={500}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
      <JobPostModal open={jobOpen} onClose={() => setJobOpen(false)} />
    </>
  );
}
