"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e7e7e7]">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
              aria-label="Makazi Fumigation Home"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/images/logo.png"
                  alt="Makazi Fumigation & Pest Control"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              {/* <div className="flex flex-col">
                <span className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#5bad6a] transition-colors">
                  Makazi Fumigation
                </span>
                <span className="text-xs text-[#6d6d6d] tracking-wide">
                  Your partner in pest control
                </span>
              </div> */}
            </Link>

            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#5bad6a]"
                      : "text-[#1a1a1a] hover:text-[#5bad6a]"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button href="/contact" variant="primary" size="sm">
                Request a Survey
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-[#1a1a1a] hover:text-[#5bad6a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5bad6a] focus:ring-offset-2 rounded-lg"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-20 bg-white border-b border-[#e7e7e7] shadow-lg transition-transform duration-300 ${
          isMenuOpen
            ? "translate-y-0"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="container-custom py-6 space-y-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#5bad6a]"
                  : "text-[#1a1a1a] hover:text-[#5bad6a]"
              }`}
              onClick={closeMenu}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={closeMenu}
            >
              Request a Survey
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
