"use client";

import { useState } from "react";
import type { Job } from "@/lib/types";
import PostulerModal from "./PostulerModal";

export default function JobList({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [postulerOpen, setPostulerOpen] = useState(false);

  function handlePostuler(job: Job) {
    setSelectedJob(job);
    setPostulerOpen(true);
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">
          work_off
        </span>
        <p className="text-xl text-on-surface-variant font-medium">
          Aucune offre disponible pour le moment.
        </p>
        <p className="text-secondary mt-2">
          Revenez bientôt ou déposez votre candidature spontanée ci-dessous.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="group bg-surface-container-lowest p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between transition-all duration-300 hover:translate-y-[-4px] shadow-sm hover:shadow-xl hover:shadow-on-surface/5 border border-transparent hover:border-primary/10"
          >
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center text-primary overflow-hidden shrink-0">
                <span className="material-symbols-outlined text-3xl">
                  apartment
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    {job.title}
                  </h4>
                  {job.contractType && (
                    <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider">
                      {job.contractType}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-secondary">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      apartment
                    </span>{" "}
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">
                      location_on
                    </span>{" "}
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">
                      payments
                    </span>{" "}
                    {job.salary}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 pt-6 md:pt-0 border-surface-container">
              <div className="hidden lg:block text-right">
                <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">
                  Publié le
                </p>
                <p className="text-sm font-medium text-on-surface">
                  {job.posted}
                </p>
              </div>
              <div className="flex gap-3 flex-1 md:flex-none">
                <button className="flex-1 md:flex-none px-6 py-3 rounded-lg font-bold text-sm bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors">
                  Détails
                </button>
                <button
                  onClick={() => handlePostuler(job)}
                  className="flex-1 md:flex-none px-8 py-3 rounded-lg font-bold text-sm bg-primary text-on-primary shadow-md hover:shadow-lg hover:bg-surface-tint transition-all"
                >
                  Postuler
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedJob && (
        <PostulerModal
          open={postulerOpen}
          onClose={() => setPostulerOpen(false)}
          job={selectedJob}
        />
      )}
    </>
  );
}
