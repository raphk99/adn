import Image from "next/image";

export const metadata = {
  title: "Entreprises Engagées | ADN France Insertion",
  description:
    "Recrutez autrement avec ADN France Insertion. Des talents motivés, accompagnés et formés pour un impact social et humain concret.",
};

export default function EntreprisesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 editorial-grid gap-8">
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block px-4 py-1.5 bg-surface-container-highest text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Recrutement solidaire
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] text-on-surface mb-8">
              Recrutez{" "}
              <span className="text-primary italic">Autrement.</span>
              <br />
              Recrutez Humain.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              En recrutant avec ADN France Insertion, vous offrez une seconde
              chance à des personnes motivées et accompagnées, tout en
              renforçant votre engagement RSE et votre impact social.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all"
                href="#request-talent"
              >
                Recruter avec impact
              </a>
              <a
                className="bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-highest transition-all"
                href="#services"
              >
                Découvrir nos solutions
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 transform rotate-2">
              {/* Photo souhaitée : entretien d'embauche chaleureux, poignée de main sincère, diversité visible */}
              <Image
                alt="Entretien d'embauche inclusif"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBshkvkCMCFBYL-26fo1P2Q5NkOM4lzzP-2QsLdfM6uQwlkCiHpjyZGzMFLJ_y77LA-M3nhEUNvVC_8bwwdhiU3Mk5y9nYUBXxDsKQMRWoL3KWXo3wTOdcNXsmJ8ApHMsQvN4fyhKDvEJEPyDeJTB1WvrnprDwvNO4RG7APypFlIDwwbWATM0TbYlO2RC8QyREhi1JKVdlQwDsDs4SMsEH5IaLSlUX29poQvfmBpvsKSTnfVXmNn_bJPemJr35hVAzXqxp47r4zaQ"
                width={500}
                height={625}
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-2xl max-w-xs transform -rotate-3">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="font-headline font-bold text-2xl">98%</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant leading-snug">
                Taux de satisfaction des entreprises partenaires pour nos
                recrutements solidaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR / Inclusion Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">
              Notre Mission : La Réinsertion par l&apos;Emploi
            </h2>
            <p className="text-lg text-on-surface-variant">
              Nous ne nous contentons pas de remplir des postes. Nous offrons
              une seconde chance à des personnes éloignées de l&apos;emploi en
              les formant, en les accompagnant et en les mettant en relation
              avec des entreprises engagées.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  diversity_3
                </span>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  Recrutement Solidaire
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">
                  Nous identifions des candidats motivés parmi des publics
                  éloignés de l&apos;emploi. Chaque personne est accompagnée,
                  formée et préparée pour s&apos;intégrer durablement dans
                  votre équipe.
                </p>
              </div>
              <div className="mt-12 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  Réinsertion par l'emploi
                </span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  Jeunes sans Qualification
                </span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  Seniors en Reconversion
                </span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded">
                  Réfugiés
                </span>
              </div>
            </div>
            <div className="bg-primary p-10 rounded-2xl text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white text-4xl mb-6">
                school
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Formation &amp; Montée en Compétences
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Nous investissons dans chaque personne. Grâce à des programmes
                de formation certifiés, nous préparons nos candidats aux
                exigences de votre secteur et leur donnons les clés de la
                réussite.
              </p>
              <a className="inline-flex items-center gap-2 font-bold hover:underline underline-offset-4" href="#">
                En savoir plus{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                monitoring
              </span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                Suivi d&apos;Impact Social
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Reporting détaillé sur l&apos;impact humain de vos recrutements.
                Mesurez concrètement votre contribution à la réinsertion et à
                l&apos;inclusion.
              </p>
            </div>
            <div className="md:col-span-2 relative h-64 md:h-auto rounded-2xl overflow-hidden group">
              {/* Photo souhaitée : équipe diversifiée sur un chantier ou en entrepôt, entraide visible, fierté du travail */}
              <Image
                alt="Équipe diversifiée au travail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOsqgkpwA8wRXFD7PuTs3y7RJmXEkXz9HXOAnwSKaTd8hetTxQGNqt4uGGNl0nAM_2kzqjlPnvN-fDjFAvxC2fuqH3ozQcwyK4IfMKd8jkxYorjFsSYcqaCNSafR9spiGjWWSYfOe-vY9ApdRNDkvMCclwKnywDZraooqdAhxKeBwlIQXg6ULwWraSmpiAjqWtVP8ECabaBCr4d5EsADb5UYWfwjYsLMeMfpmb9v9gL1e1PWmTO_2IbuId3X70tPETzDldE0aPBw"
                width={800}
                height={400}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <p className="text-white font-headline text-xl font-bold">
                  Chaque recrutement est une chance offerte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-32 bg-surface" id="services">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                Solutions de Recrutement Solidaire
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-primary">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                  <span className="font-bold">Recrutement Inclusif</span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    person_search
                  </span>
                  <span className="font-medium text-on-surface-variant">
                    Accompagnement en Poste
                  </span>
                </li>
                <li className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    assignment_turned_in
                  </span>
                  <span className="font-medium text-on-surface-variant">
                    Reporting &amp; Impact RSE
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden">
                  {/* Photo souhaitée : accompagnateur accueillant un candidat, ambiance de confiance et de soutien */}
                  <Image
                    alt="Accueil d'un candidat en agence"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOi4rSFeYeWPsi9nrBirYS7c2qVPKvi4ZDtHwzaHvOAdJSJqEgcwVn84IsST3_aUAH2RUXcDaQXcfpvuTsSf_U_sWkkiqY33gHShE16Z0oVVapkEQd4ielbHSTd2sZkuKe5ypaHwSyJlbgTv7f386KyxCHwXKKuSM9OYo4iRD4Ta0z_liZTC94cGtOcJPDKk6URbFXigb9qbRmWg0wQnGEAzPlIm-mO83TJLbAGKlQz83eM5U5o--y96UMfjX9ZEb_Kkhs3WPLDg"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="font-headline text-xl font-bold">
                  Mise en Relation Rapide
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Grâce à notre vivier de candidats accompagnés et formés, nous
                  vous proposons des profils motivés sous 48 heures.
                </p>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden">
                  {/* Photo souhaitée : personne en apprentissage encadrée par un tuteur, atmosphère d'encouragement */}
                  <Image
                    alt="Formation en situation de travail"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNMsOmLuzEGRs4zYWmtkxXc8mq6Xg5knQ9p7Z4lh7NLjr9GAVhBq46IfXrF0s_uqAj1ttZz0nMzverScI54YXhHf2j_XJRKAA8ZSBtK5lQusohIbiO7A--JbudfdXY9oUXB_CAYUXzr9F5D1PiK8meZKtBFSrpdD0Oj3kd1HhK-zO8_YZrRCYqZqqE4A7O3bWw1BZ0DiwOKgjNAPOhqd28hzKKCa-Fbr28vREU7PouQ9FIwXiy2T7BDo0XPDhq9dBhmkYNSBXNA"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="font-headline text-xl font-bold">
                  Secteurs à Fort Impact
                </h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Logistique, BTP, services, restauration : nous formons et
                  accompagnons des candidats pour les secteurs qui recrutent et
                  qui transforment des vies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight">
              Ils recrutent autrement avec nous
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale mb-24">
            {["BTP GLOBAL", "LOGISTIX", "URBAN CORP", "TECH FLOW"].map(
              (name) => (
                <span
                  key={name}
                  className="text-3xl font-black font-headline tracking-tighter"
                >
                  {name}
                </span>
              )
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest p-12 rounded-3xl shadow-2xl shadow-black/5 relative">
              <span
                className="material-symbols-outlined text-primary-container text-6xl absolute top-8 right-8 opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="text-xl italic text-on-surface-variant leading-relaxed mb-8">
                &ldquo;Recruter avec ADN, c&apos;est donner sa chance à des
                personnes que d&apos;autres agences n&apos;auraient même pas
                rencontrées. Et le résultat est là : des collaborateurs
                motivés, fiables et reconnaissants.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container" />
                <div>
                  <p className="font-bold">Jean-Pierre Durand</p>
                  <p className="text-sm text-on-surface-variant">
                    Directeur RH, BTP Global Group
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-12 rounded-3xl shadow-2xl shadow-black/5 relative">
              <span
                className="material-symbols-outlined text-primary-container text-6xl absolute top-8 right-8 opacity-20"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="text-xl italic text-on-surface-variant leading-relaxed mb-8">
                &ldquo;L&apos;accompagnement ne s&apos;arrête pas au
                recrutement. ADN suit chaque personne dans son intégration,
                et ça change tout pour la pérennité de l&apos;emploi.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container" />
                <div>
                  <p className="font-bold">Marie Laurent</p>
                  <p className="text-sm text-on-surface-variant">
                    Responsable Opérationnelle, Logistix FR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-surface" id="request-talent">
        <div className="max-w-7xl mx-auto px-8 editorial-grid gap-16">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-headline text-5xl font-extrabold tracking-tight mb-8">
              Prêt à recruter avec impact ?
            </h2>
            <p className="text-lg text-on-surface-variant mb-12">
              Décrivez vos besoins en recrutement, et nos équipes vous
              proposeront des candidats accompagnés et formés, adaptés à votre
              secteur.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Ligne Entreprises</h4>
                  <p className="text-on-surface-variant">
                    +33 (0)1 45 67 89 00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Siège Paris</h4>
                  <p className="text-on-surface-variant">
                    124 Avenue des Champs-Élysées, 75008 Paris
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <form className="bg-surface-container-low p-10 md:p-12 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">
                    Nom Complet
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Jean Dupont"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">
                    Nom de l&apos;Entreprise
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Votre Entreprise"
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">
                    Email Professionnel
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="jean@entreprise.fr"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant ml-1">
                    Numéro de Téléphone
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+33 6 00 00 00 00"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">
                  Détails du Projet / Besoins
                </label>
                <textarea
                  className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Décrivez les postes, le nombre de personnes et vos attentes..."
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-3 py-2">
                <input
                  className="rounded text-primary focus:ring-primary h-5 w-5 border-surface-variant"
                  id="csr-interest"
                  type="checkbox"
                />
                <label
                  className="text-sm text-on-surface-variant"
                  htmlFor="csr-interest"
                >
                  Je souhaite recevoir un reporting sur l&apos;impact social
                  de mes recrutements.
                </label>
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all active:scale-[0.98]"
                type="submit"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
