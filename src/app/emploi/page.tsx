import Image from "next/image";
import { fetchJobs } from "@/lib/jobs";
import type { Job } from "@/lib/types";
import CvUploadForm from "@/components/CvUploadForm";
import JobList from "@/components/JobList";

export const metadata = {
  title: "Offres d'Emploi & Réinsertion | ADN France Insertion",
  description:
    "Découvrez nos offres d'emploi adaptées à votre parcours. ADN France Insertion vous accompagne vers un retour à l'emploi durable.",
};

export const dynamic = "force-static";

function JobPostingJsonLd({ job }: { job: Job }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "FR",
      },
    },
    baseSalary: job.salary,
    datePosted: job.posted,
    employmentType: job.contractType || "TEMPORARY",
    description: job.description || `${job.title} chez ${job.company} — ${job.location}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function EmploiPage() {
  let jobs: Job[] = [];
  try {
    jobs = await fetchJobs();
  } catch (error) {
    console.error("Failed to load jobs for SSR:", error);
  }

  return (
    <>
      {jobs.map((job) => (
        <JobPostingJsonLd key={`ld-${job.id}`} job={job} />
      ))}

      {/* Hero Section */}
      <section className="bg-surface-container-low pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase rounded-sm mb-4">
                OFFRES D&apos;EMPLOI &amp; RÉINSERTION
              </span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-[-0.03em] leading-tight text-on-surface mb-6">
                Votre nouvelle chance <br /> commence{" "}
                <span className="text-primary italic">ici</span>.
              </h2>
              <p className="text-lg text-secondary leading-relaxed max-w-lg">
                Des opportunités adaptées à votre parcours et vos envies. Nous
                construisons avec vous un chemin vers un emploi stable et
                épanouissant.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 min-w-[140px]">
                <p className="text-3xl font-black text-primary">
                  {jobs.length > 0 ? jobs.length.toLocaleString("fr-FR") : "—"}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
                  Opportunités Disponibles
                </p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10 min-w-[140px]">
                <p className="text-3xl font-black text-primary">48h</p>
                <p className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
                  Accompagnement sous
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-2xl shadow-on-surface/5 flex flex-col md:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-surface-container">
              <span className="material-symbols-outlined text-outline mr-3">
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline/60 font-medium"
                placeholder="Métier, mots-clés..."
                type="text"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-surface-container">
              <span className="material-symbols-outlined text-outline mr-3">
                location_on
              </span>
              <select className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-medium appearance-none">
                <option>Toute la France</option>
                <option>Paris &amp; Île-de-France</option>
                <option>Lyon &amp; Rhône-Alpes</option>
                <option>Marseille &amp; Sud</option>
              </select>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-surface-container">
              <span className="material-symbols-outlined text-outline mr-3">
                category
              </span>
              <select className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-medium appearance-none">
                <option>Tous secteurs</option>
                <option>BTP &amp; Construction</option>
                <option>Logistique &amp; Transport</option>
                <option>Tertiaire &amp; Services</option>
              </select>
            </div>
            <div className="flex-1 flex items-center px-4 py-3 md:py-0">
              <span className="material-symbols-outlined text-outline mr-3">
                description
              </span>
              <select className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-medium appearance-none">
                <option>Contrat</option>
                <option>Intérim</option>
                <option>CDD</option>
                <option>CDI</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-surface-tint text-on-primary px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-headline font-bold text-on-surface">
              Opportunités pour vous
            </h3>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary">
              Trier par:
              <button className="flex items-center gap-1 text-on-surface font-bold hover:text-primary transition-colors">
                Plus récentes{" "}
                <span className="material-symbols-outlined text-xs">
                  expand_more
                </span>
              </button>
            </div>
          </div>

          <JobList jobs={jobs} />
        </div>
      </section>

      {/* Bento CTA Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[500px]">
            <div className="md:col-span-12 lg:col-span-8 relative bg-gray-900 rounded-3xl overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              {/* Photo souhaitée : personne en situation de travail avec un tuteur ou collègue, atmosphère d'encouragement et de progression */}
              <Image
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcITNkGN3NO-XafQ2-fiKQ-vRHqRcWWY3K8wmShMciQOMv_Wg78T_rP0r-t2TjBj9C8pwVWzYjWa6MdwfnxxZM_U1wdkEm1gkOsxqcg2-GrtsalE1XH7u3VhmNcheMMScM3J8l72gnRX86asTn-5oJF5rQMGhrHlNqB7lF2m8xBEOG33_JQccqmrZDdRGhL7K73acTf_qq467ZhrMfBbhcp0YzNL225IMa7NSWdnNjQiS9CFwKN7ZrKgHhL_T9oG60tDnoNV7fkQ"
                alt="Candidat accompagné vers l'emploi"
                fill
                unoptimized
              />
              <div className="relative z-20 h-full p-8 md:p-12 flex flex-col justify-end min-h-[400px]">
                <h3 className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-4">
                  Vous ne trouvez pas l&apos;offre qui vous correspond ?
                </h3>
                <p className="text-white/80 text-lg max-w-lg mb-8">
                  Déposez votre CV, nous vous rappelons sous 48 heures pour
                  construire ensemble votre projet de retour à l&apos;emploi.
                </p>
                <CvUploadForm />
              </div>
            </div>
            <div className="md:col-span-12 lg:col-span-4 bg-primary rounded-3xl p-8 md:p-12 flex flex-col justify-center shadow-2xl">
              <span
                className="material-symbols-outlined text-white text-5xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                support_agent
              </span>
              <h3 className="text-3xl font-headline font-extrabold text-white mb-4">
                Votre Référent Personnel
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Un accompagnateur dédié qui vous connaît et vous guide : bilan
                de compétences, préparation aux entretiens, suivi en poste.
              </p>
              <a
                className="text-white font-bold flex items-center gap-2 group"
                href="#"
              >
                Prendre RDV{" "}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
