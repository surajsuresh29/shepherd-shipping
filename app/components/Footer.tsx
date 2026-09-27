import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Air Freight and Cargo Services in Dubai", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deeper text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Description */}
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
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Shepherd International Logistics. Your shipping partner.
            </p>
            <a
              href="https://shepherdshipping.com"
              className="text-secondary text-sm hover:underline"
            >
              shepherdshipping.com
            </a>
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
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 Shepherd International logistics. All rights reserved
          </p>
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
