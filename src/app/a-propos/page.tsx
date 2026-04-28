import Image from "next/image";

export const metadata = {
  title: "À Propos | ADN France Insertion",
  description:
    "ADN France Insertion croit en la seconde chance. Nous accompagnons les personnes éloignées de l'emploi vers un nouveau départ durable.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary font-semibold text-xs tracking-wider uppercase mb-6">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              Depuis 2015
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-[-0.04em] text-on-surface leading-[0.95] mb-8 font-headline">
              L&apos;<span className="text-primary italic">Humain</span> au
              Cœur <br />
              de la Réinsertion.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Chez ADN France Insertion, nous croyons que chaque personne mérite
              une seconde chance. Nous accompagnons celles et ceux que la vie a
              éloignés de l&apos;emploi vers un nouveau départ professionnel,
              avec bienveillance et détermination.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative z-20 transform translate-x-4">
              {/* Photo souhaitée : portrait authentique et chaleureux, personne engagée dans l'accompagnement social, cadre bienveillant */}
              <Image
                alt="Portrait d'un membre de l'équipe ADN"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOAazEFdpta5MD0rYqTLVB-01yQ84Wd_IZraLJD7SEhuI4dqoJTUcqW-2enSf_nyAxHDr81UzfYvUp9b6oTbc2KdckFN6r5WOXHlkrfbrY2WfFdwpo809ypSqHSyMecnQwywhRnTGp17aWlG7t7S3DhvnYtclGK5cGlM0j0zm-0yZ3jnwDen4Ml3HyHx2HiVbVz6c9A3uorkk9zjSWPUCaM3KdyuXjNMnJdGfR1_YyYBYn1aXOPJe9iTSHfp2gS4hwqtmQb5sogg"
                width={500}
                height={625}
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-on-surface font-headline">
                Nos Valeurs Fondamentales
              </h2>
              <p className="text-on-surface-variant text-lg">
                Nous plaçons l&apos;humain au centre de chaque action, avec la
                conviction que personne n&apos;est définitivement exclu.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "favorite",
                title: "Bienveillance",
                desc: "Chaque personne est accueillie sans jugement. Nous créons un espace de confiance où chacun peut se reconstruire à son rythme.",
              },
              {
                icon: "trending_up",
                title: "Persévérance",
                desc: "Le chemin vers l'emploi n'est pas toujours linéaire. Nous restons à vos côtés à chaque étape, même dans les moments difficiles.",
              },
              {
                icon: "diversity_3",
                title: "Inclusion",
                desc: "Jeunes, seniors, personnes en situation de handicap, réfugiés... Nous croyons en la richesse de chaque parcours et de chaque différence.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-bold mb-8 font-headline">
                Notre Équipe Engagée
              </h2>
              <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
                Une équipe passionnée par l&apos;humain, convaincue que
                l&apos;emploi est le premier levier de dignité et
                d&apos;inclusion sociale.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                  <p className="italic text-on-surface font-medium text-lg">
                    &ldquo;Donner une seconde chance, ce n&apos;est pas de la
                    charité. C&apos;est reconnaître que le talent n&apos;a pas
                    de parcours type.&rdquo;
                  </p>
                  <span className="block mt-4 text-sm font-bold uppercase tracking-widest text-primary">
                    — Marc Durand, Fondateur
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform rotate-2">
                  {/* Photo souhaitée : portrait chaleureux et authentique, pas trop corporate */}
                  <Image
                    alt="Jean-Pierre Lefebvre"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOAazEFdpta5MD0rYqTLVB-01yQ84Wd_IZraLJD7SEhuI4dqoJTUcqW-2enSf_nyAxHDr81UzfYvUp9b6oTbc2KdckFN6r5WOXHlkrfbrY2WfFdwpo809ypSqHSyMecnQwywhRnTGp17aWlG7t7S3DhvnYtclGK5cGlM0j0zm-0yZ3jnwDen4Ml3HyHx2HiVbVz6c9A3uorkk9zjSWPUCaM3KdyuXjNMnJdGfR1_YyYBYn1aXOPJe9iTSHfp2gS4hwqtmQb5sogg"
                    width={192}
                    height={192}
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-headline">
                    Jean-Pierre Lefebvre
                  </h4>
                  <p className="text-primary font-semibold mb-3">
                    Directeur des Parcours
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Spécialiste de l&apos;accompagnement socio-professionnel,
                    il coordonne les programmes de retour à l&apos;emploi sur
                    l&apos;ensemble du territoire.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform -rotate-2">
                  {/* Photo souhaitée : portrait chaleureux et authentique, pas trop corporate */}
                  <Image
                    alt="Sophie Morel"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB50JpAuJ0fxfwAVCX3EAhNXKHZqopmvE1nIt7CHzvq-thuSueDFhiPJkPk5IhELZBEVHceoj4wuUm0rRCBtJpdxzqq2YNKMcAwaYYdVXG__zPkkHBse-_TqN91MH5z5zu_bQZKQYjrEHNyhF3eqLtnP8kjDQhFEKcIPApK25DOODWfZkvYGvOtssTAC9rodjvhe-BypfF7vOY7MD8sXKVKJdQKivxiuuKp7cCUnSe2EBLGCmgcMj4hUiQAGCSBcOs0qr06FPl4g"
                    width={192}
                    height={192}
                    unoptimized
                  />
                </div>
                <div className="text-left md:text-right">
                  <h4 className="text-2xl font-bold font-headline">
                    Sophie Morel
                  </h4>
                  <p className="text-primary font-semibold mb-3">
                    Responsable Accompagnement & Formation
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Conçoit les parcours de formation et de montée en compétences
                    adaptés à chaque profil, en lien avec les entreprises
                    partenaires.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform rotate-1">
                  {/* Photo souhaitée : portrait chaleureux et authentique, pas trop corporate */}
                  <Image
                    alt="Antoine Bernard"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpW5M8zDht009u2G3ZkHAa5CESVEFZhv7fSFPhU4JPrT-zv7FS92JIluCcxggNUQL22yvK2AmacGLGNg3MERQWezA2DebzL-JNi8TjPP-LjExbtzjM7PFIsD-kzXSxLmYjX-2JHuKjBwAahPzFGw7IjWXnr1a0k1vKouryIKd6MAT3QkD2h5npIgqDQEQnzoZtwFvr9aHpMzqTcnJqeFO_gbnua5BYMCZk1Dg0JbGhKSp7zJBMpBah8S9q3K3dfoRWWthF8f2EHg"
                    width={192}
                    height={192}
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-headline">
                    Antoine Bernard
                  </h4>
                  <p className="text-primary font-semibold mb-3">
                    Responsable Antennes Île-de-France
                  </p>
                  <p className="text-on-surface-variant leading-relaxed">
                    Anime le réseau des antennes franciliennes et développe les
                    partenariats locaux avec les acteurs de l&apos;insertion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8 font-headline">
              Nous Contacter
            </h2>
            <p className="text-on-surface-variant text-lg mb-12">
              Que vous souhaitiez reprendre un emploi ou recruter autrement,
              nous sommes là pour vous accompagner avec bienveillance et
              professionnalisme.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-bold">Siège Social</p>
                  <p className="text-on-surface-variant">
                    124 Avenue des Champs-Élysées, 75008 Paris
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-bold">E-mail</p>
                  <p className="text-on-surface-variant">
                    contact@adnfrance-insertion.fr
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-bold">Téléphone</p>
                  <p className="text-on-surface-variant">
                    +33 (0) 1 45 67 89 00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-2xl shadow-gray-900/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                    Prénom
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface"
                    placeholder="Jean"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                    Nom
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface"
                    placeholder="Dupont"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                  E-mail Professionnel
                </label>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface"
                  placeholder="jean@entreprise.fr"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                  Type de Demande
                </label>
                <select className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface appearance-none">
                  <option>Je souhaite reprendre un emploi</option>
                  <option>Je souhaite recruter avec impact</option>
                  <option>Demande de partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1">
                  Votre Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface"
                  placeholder="Dites-nous en plus sur vos besoins..."
                  rows={4}
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
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
