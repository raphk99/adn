import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[795px] flex items-center pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed text-sm font-semibold tracking-wide">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              RÉINSERTION &amp; SECONDE CHANCE
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-[-0.04em] text-on-surface">
              Chaque parcours mérite un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                nouveau depart
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
              ADN France Insertion accompagne les personnes éloignées de
              l&apos;emploi vers un nouveau départ. Formation, accompagnement
              humain et mise en emploi durable : ensemble, on construit votre
              avenir.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/emploi"
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg editorial-shadow flex items-center gap-2 active:scale-95 transition-transform"
              >
                Je me lance
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/entreprises"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-colors"
              >
                Je recrute autrement
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden editorial-shadow transform rotate-2">
              {/* Photo souhaitée : personne souriante en tenue de travail, diversité visible (genre, origine, âge), atmosphère chaleureuse et authentique */}
              <Image
                alt="Personne accompagnée en situation de travail"
                className="w-full h-[600px] object-cover"
                src="/hero-headshot.png"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-white font-medium italic">
                  &ldquo;Grâce à ADN, j&apos;ai retrouvé confiance en moi et un
                  emploi stable après 3 ans d&apos;éloignement.&rdquo;
                </p>
                <span className="block text-primary-fixed-dim mt-2 text-sm font-bold">
                  — Fatima K., Agente de nettoyage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "2,300+", label: "Personnes Accompagnées" },
              { value: "420", label: "Entreprises Engagées" },
              { value: "87%", label: "Taux de Retour à l'Emploi" },
              { value: "12", label: "Antennes en France" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="block text-4xl md:text-5xl font-black font-headline text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-secondary font-medium uppercase tracking-widest text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Benefits */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">
            Pourquoi ADN France Insertion ?
          </h2>
          <p className="text-secondary text-lg max-w-2xl">
            Nous croyons que chacun mérite une seconde chance. Notre
            accompagnement humain et personnalisé aide les personnes éloignées
            de l&apos;emploi à retrouver dignité, confiance et stabilité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Card: For Seekers */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2.5rem] editorial-shadow flex flex-col justify-between min-h-[400px]">
            <div>
              <span
                className="material-symbols-outlined text-primary text-5xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person_search
              </span>
              <h3 className="text-3xl font-bold font-headline mb-4">
                Pour les Candidats
              </h3>
              <p className="text-secondary text-lg max-w-md">
                Quel que soit votre parcours, nous vous accompagnons pas à pas
                vers un emploi stable : bilan, formation, coaching et suivi
                personnalisé.
              </p>
            </div>
            <ul className="mt-8 space-y-3 grid grid-cols-2">
              {[
                "Accompagnement Personnalisé",
                "Coaching & Confiance",
                "Aide aux Démarches",
                "Formations Qualifiantes",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-on-surface font-medium"
                >
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Small Card: Support */}
          <div className="md:col-span-4 bg-primary text-on-primary p-10 rounded-[2.5rem] flex flex-col justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-6 mx-auto">
              support_agent
            </span>
            <h3 className="text-2xl font-bold font-headline mb-4">
              Un Référent Dédié
            </h3>
            <p className="text-primary-fixed leading-relaxed opacity-90">
              Un accompagnateur unique qui vous connaît, vous écoute et vous
              guide tout au long de votre parcours de réinsertion.
            </p>
          </div>

          {/* Small Card: Digital */}
          <div className="md:col-span-4 bg-surface-container-low p-10 rounded-[2.5rem] border-2 border-transparent hover:border-primary/10 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              app_shortcut
            </span>
            <h3 className="text-xl font-bold font-headline mb-2">
              Suivi de votre Parcours
            </h3>
            <p className="text-secondary">
              Suivez vos progrès, vos formations et vos démarches depuis
              votre espace personnel sécurisé.
            </p>
          </div>

          {/* Large Card: For Employers */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2.5rem] editorial-shadow flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span
                className="material-symbols-outlined text-primary text-5xl mb-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                corporate_fare
              </span>
              <h3 className="text-3xl font-bold font-headline mb-4">
                Pour les Entreprises Engagées
              </h3>
              <p className="text-secondary text-lg mb-6">
                Recrutez des talents motivés et engagés, tout en contribuant
                à l&apos;inclusion sociale. Votre impact RSE commence ici.
              </p>
              <Link
                href="/entreprises"
                className="text-primary font-bold flex items-center gap-2 group"
              >
                Recruter avec impact
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex-1 w-full h-full min-h-[200px] rounded-2xl overflow-hidden">
              {/* Photo souhaitée : moment d'échange chaleureux entre un accompagnateur et un candidat, ambiance bienveillante */}
              <Image
                alt="Échange entre un accompagnateur et un candidat"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyfXvwUb6ggUwyRQLNyDCm9NsoTkcWeUQJXd4eUXzZgOwRw7gnMrnv6bxxzN8Qzc-fDVblgRHFUoRHjEZ-w5AReXYrIjH6I2-dY_4rGFsq-WBg9RiMgBpetHTnLKkdj3Vgwyj69KJNy-KeiCW-YnK0wYGtL2Sfbk1bEJE4fV22UD6xgjiwG7uRpZwTjtxI43M_1MqZfPCaaJOfOCBCDwEfRuIgVgGYx5hAGZaeu57ga4ymkEP8K7qt_JgmdVityDf4JJUI3YFoKg"
                width={500}
                height={300}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* Map Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-4">
            Près de chez vous
          </h2>
          <p className="text-secondary text-lg">
            Nos antennes vous accueillent du lundi au vendredi pour construire
            ensemble votre projet de réinsertion.
          </p>
        </div>
        <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden grayscale contrast-125 editorial-shadow">
          {/* Photo souhaitée : carte de France stylisée montrant le réseau des antennes ADN France Insertion */}
          <Image
            alt="Réseau des antennes ADN en France"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI0sxVwhIt4RKm8HFiAxyOwqFmRBbVkYzD-I22BJduTLKrdcKx6r--rtobq6W7mEEtIL_RlVzD4I0lxP8AhUHArTW97xbs45mbeTHBFOYarHCaWLy_fEe7DpVm_yAWbK0dt85LIynyrxMMj1JXMFcdBRY4mXx2Q_rtRS0b3bRhb08pHkn4kQH62cb09kDIZlD9F9aFNZfpWQsZiBkA7WFwOiNNObKeFfQscRRKh_hlP7tzs_o0CyDy2_IyYgto3FHqtO3wjHfS3Q"
            width={1280}
            height={400}
            unoptimized
          />
        </div>
      </section>

      {/* FAB */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <button className="bg-primary text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">
            chat_bubble
          </span>
        </button>
      </div>
    </>
  );
}
