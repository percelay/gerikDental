"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import ToothLogo from "@/components/ToothLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Services", "Contact"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-surface shadow-sm border-b border-border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMenuOpen(false)}
            >
              <ToothLogo
                className="w-8 h-8 flex-shrink-0 transition-colors duration-300"
                color={scrolled || menuOpen ? "var(--color-primary)" : "white"}
              />
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl md:text-2xl font-bold leading-tight transition-colors duration-300 ${
                    scrolled || menuOpen ? "text-primary" : "text-white"
                  }`}
                >
                  Gerik Dental
                </span>
                <span
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                    scrolled || menuOpen ? "text-muted" : "text-white/60"
                  }`}
                >
                  Fairbanks, Alaska
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-text hover:text-accent"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9074565665"
                className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                  scrolled
                    ? "text-muted hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                (907) 456-5665
              </a>
              <Link
                href="#contact"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded transition-colors duration-200 hover:bg-primary-hover"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`md:hidden p-2 rounded transition-colors duration-200 ${
                scrolled || menuOpen ? "text-text" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface pt-16 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-serif text-3xl text-text hover:text-primary transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="border-t border-border pt-8 space-y-4">
            <a
              href="tel:9074565665"
              className="flex items-center gap-3 text-muted hover:text-primary transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              (907) 456-5665
            </a>
            <Link
              href="#contact"
              className="block px-6 py-3 bg-primary text-primary-foreground text-center font-medium rounded transition-colors duration-200 hover:bg-primary-hover"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
