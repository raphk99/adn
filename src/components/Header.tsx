"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/emploi", label: "Candidats" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 glass-header shadow-2xl shadow-gray-900/5">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/detxwbzq0/image/upload/v1777388155/adn-logo_vrz0cd.png"
            alt="ADN France Insertion"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-xl font-black tracking-tight text-gray-900 font-headline">
            ADN France Insertion
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-orange-600 font-bold border-b-2 border-orange-600 pb-1 font-headline tracking-[-0.02em]"
                    : "text-gray-600 font-medium hover:text-orange-600 transition-all duration-300 font-headline tracking-[-0.02em]"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/emploi"
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-semibold active:scale-95 transition-transform"
        >
          Je me lance
        </Link>
      </nav>
    </header>
  );
}
