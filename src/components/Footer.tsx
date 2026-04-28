import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-gray-50 font-body leading-relaxed text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/adn-logo.png"
              alt="ADN France Insertion"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-gray-900 font-headline">
              ADN France Insertion
            </span>
          </div>
          <p className="text-gray-500 max-w-xs">
            La seconde chance par l&apos;emploi. Nous accompagnons les personnes
            éloignées de l&apos;emploi vers un nouveau départ durable.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <a
              className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">call</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">
            Services
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="/emploi"
              >
                Offres d&apos;emploi
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="/entreprises"
              >
                Pour les employeurs
              </Link>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Nos programmes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">
            Compagnie
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="/a-propos"
              >
                À propos
              </Link>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Carrières
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">
            Légal
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Mentions Légales
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Politique de Confidentialité
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-orange-600 underline-offset-4 hover:underline transition-all duration-300"
                href="#"
              >
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
        © 2025 ADN France Insertion. La seconde chance par l&apos;emploi.
        Tous droits réservés.
      </div>
    </footer>
  );
}
