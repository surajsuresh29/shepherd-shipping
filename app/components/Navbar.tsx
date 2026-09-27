"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent pt-4 px-4" : "bg-primary pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto flex items-center justify-between px-6 lg:px-10 py-4 transition-all duration-300 ${
          isScrolled
            ? "max-w-7xl bg-primary/70 backdrop-blur-lg rounded-full shadow-2xl border border-white/10 w-full"
            : "max-w-7xl bg-transparent rounded-none shadow-none border-transparent w-full"
        }`}
      >
        {/* Brand Lockup: Icon + Stacked Text */}
        <a href="/" className="flex items-center gap-4 lg:gap-5 flex-shrink-0">
          <Image
            src="/shepherd-icon.png"
            alt="Shepherd logo icon"
            width={72}
            height={72}
            className="h-16 w-16 lg:h-[72px] lg:w-[72px] object-contain rounded-xl"
            priority
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-white text-[28px] lg:text-[32px] font-normal tracking-wide font-serif leading-none">
              SHEPHERD
            </span>
            <hr className="border-t-[1.5px] border-white mt-1 mb-1 lg:mt-1 lg:mb-1 w-full" />
            <span className="text-white text-[13px] lg:text-[14px] font-sans font-semibold uppercase tracking-normal leading-none text-left">
              YOUR SHIPPING PARTNER
            </span>
          </div>
        </a>

        {/* Right side: Nav Links + CTA Button */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link text-white text-[15px] font-medium tracking-wide hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-primary font-semibold text-[15px] px-7 py-2.5 rounded-full hover:scale-105 transition-all duration-300 relative z-[60]"
          >
            Get a quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-base font-medium block py-2 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-primary font-semibold px-6 py-2 rounded-full transition-all duration-300 mt-2"
              >
                Get a quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
