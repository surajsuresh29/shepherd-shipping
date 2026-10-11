"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Plane,
  Ship,
  FileCheck,
  Warehouse,
} from "lucide-react";

const serviceOptions = [
  {
    label: "Air Freight and Cargo Services",
    href: "/services/air-freight",
    icon: Plane,
  },
  {
    label: "Sea Freight",
    href: "/services/sea-freight",
    icon: Ship,
  },
  {
    label: "Customs Clearance",
    href: "/services/customs-clearance",
    icon: FileCheck,
  },
  {
    label: "3PL&4PL Warehousing & Distribution",
    href: "/services/warehousing-distribution",
    icon: Warehouse,
  },
];

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Locations", href: "/contact#offices" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

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
        <Link href="/" className="flex items-center gap-4 lg:gap-5 flex-shrink-0">
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
        </Link>

        {/* Right side: Nav Links + CTA Button */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                const isServicesActive =
                  pathname === "/#services" || pathname.startsWith("/services");
                return (
                  <li
                    key="Services"
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center gap-1">
                      <a
                        href="/#services"
                        className={`nav-link text-[15px] font-medium tracking-wide transition-colors ${
                          isServicesActive
                            ? "text-secondary"
                            : "text-white hover:text-secondary"
                        }`}
                      >
                        Services
                      </a>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setServicesOpen((prev) => !prev);
                        }}
                        aria-expanded={servicesOpen}
                        aria-label="Toggle Services dropdown menu"
                        className="p-1 text-white hover:text-secondary transition-colors rounded-md focus:outline-none"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? "rotate-180 text-secondary" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Services Dropdown Menu */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[310px] z-50 animate-fade-in">
                        <div className="bg-[#0f2640]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2.5 overflow-hidden">
                          <div className="px-3 pt-1.5 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-white/5 mb-1">
                            Core Freight Services
                          </div>
                          <div className="space-y-1">
                            {serviceOptions.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 text-white hover:text-secondary transition-all group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all flex-shrink-0">
                                  <service.icon className="w-4 h-4" />
                                </div>
                                <span className="text-[13px] font-medium leading-snug group-hover:text-secondary transition-colors">
                                  {service.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              const isActive =
                link.href === "/blog"
                  ? pathname.startsWith("/blog")
                  : link.href === "/about"
                  ? pathname.startsWith("/about")
                  : link.href === "/contact"
                  ? pathname.startsWith("/contact")
                  : pathname === link.href;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-link text-[15px] font-medium tracking-wide transition-colors ${
                      isActive ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="/contact"
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
          <ul className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <li key="Services" className="border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <a
                        href="/#services"
                        onClick={() => setMobileOpen(false)}
                        className="text-white text-base font-medium hover:text-secondary transition-colors"
                      >
                        Services
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2 text-slate-300 hover:text-white"
                        aria-label="Toggle services submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-secondary" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Service Submenu for Mobile */}
                    {mobileServicesOpen && (
                      <ul className="pl-3 py-1 space-y-1 border-l-2 border-secondary/40 ml-2 animate-fade-in">
                        {serviceOptions.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2.5 py-2 text-sm text-slate-200 hover:text-secondary transition-colors"
                            >
                              <service.icon className="w-4 h-4 text-secondary flex-shrink-0" />
                              <span>{service.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white text-base font-medium block py-2 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/contact"
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
