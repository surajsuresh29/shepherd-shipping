import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Blogs", href: "/blog" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Shepherdshipping",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shepherd-international",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shepherdinternationallogistics",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/internatio11581",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@shepherdinternationallogistics",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.186 24C5.466 24 0 18.534 0 11.814 0 5.094 5.466 0 12.186 0c6.72 0 12.186 5.094 12.186 11.814 0 .616-.046 1.23-.137 1.836a1.2 1.2 0 0 1-2.38-.36 9.873 9.873 0 0 0 .117-1.476C21.972 6.42 17.58 2.4 12.186 2.4c-5.394 0-9.786 4.02-9.786 9.414 0 5.394 4.392 9.414 9.786 9.414 2.68 0 5.163-.996 6.993-2.805a1.2 1.2 0 0 1 1.696 1.696C18.636 22.374 15.54 24 12.186 24zm4.186-13.88c0-3.37-2.45-5.52-5.786-5.52-3.337 0-5.787 2.15-5.787 5.52 0 3.37 2.45 5.52 5.787 5.52 1.835 0 3.37-.665 4.385-1.895a1.2 1.2 0 0 1 1.874 1.498c-1.5 1.82-3.71 2.797-6.26 2.797-4.66 0-8.186-3.15-8.186-7.92 0-4.77 3.526-7.92 8.186-7.92 4.66 0 8.186 3.15 8.186 7.92 0 .584-.047 1.16-.14 1.725-.66 3.99-3.84 5.92-7.3 5.92-2.11 0-3.92-.88-4.94-2.43a1.2 1.2 0 0 1 2.02-1.3c.6 1 1.7 1.33 2.92 1.33 2.1 0 4.19-1.22 4.68-3.98.05-.28.08-.57.08-.85zm-5.786 3.12c-2.02 0-3.386-1.36-3.386-3.12 0-1.76 1.366-3.12 3.386-3.12 2.02 0 3.386 1.36 3.386 3.12 0 1.76-1.366 3.12-3.386 3.12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deeper text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo, Description & Socials */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/shepherd-icon.png"
                alt="Shepherd logo icon"
                width={72}
                height={72}
                className="h-16 w-16 lg:h-[72px] lg:w-[72px] object-contain rounded-xl"
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
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Shepherd International Logistics. Your shipping partner since 2004.
            </p>
            <a
              href="https://shepherdshipping.com"
              className="text-secondary text-sm hover:underline block mb-5"
            >
              shepherdshipping.com
            </a>

            {/* Social Media Handles */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-secondary hover:bg-secondary hover:text-primary text-white/70 flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Head Office */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Head office
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  D-07, Dafza, Dubai–UAE
                  <br />
                  PO Box: 121743
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>+971 (4) 295 2885</p>
                  <p>+971 56 175 7275</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>salesdwc@shepherdshipping.com</p>
                  <p>infodwc@shepherdshipping.com</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>Mon to Sat, 8:30am to 3:00 pm</p>
                  <p>Sun off</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">
              Quick links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Shepherd International logistics. All rights reserved
          </p>

          {/* Secondary social link row in bottom bar */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="text-white/40 hover:text-secondary transition-colors p-1"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href="https://shepherdshipping.com"
            className="text-white/40 text-xs hover:text-secondary transition-colors"
          >
            shepherdshipping.com
          </a>
        </div>
      </div>
    </footer>
  );
}
