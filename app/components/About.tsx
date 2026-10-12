import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ExperienceBadge from "./ExperienceBadge";

const checkItems = [
  "Air, sea and customs clearance",
  "3PL warehousing",
  "Customised logistics solutions",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 shepherd-stripes-bg text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-white/10">
              <Image
                src="/about-us.jpg"
                alt="Shepherd logistics team at work"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Badge */}
            <ExperienceBadge />
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-in-right">
            {/* Teal Tag */}
            <div className="mb-3">
              <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase">
                About Us
              </span>
              <div className="w-8 h-0.5 bg-secondary rounded-full mt-1.5" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Shepherd International Logistics
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              A leading freight forwarder based in Dubai, U.A.E., established in
              2004, with offices in Dubai, USA, Hong Kong and India. We take pride
              in serving customer needs in the best possible way, creating long
              term business relations and extremely satisfied clients.
            </p>

            {/* Check Items */}
            <ul className="space-y-4 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-slate-200 text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center bg-white hover:bg-secondary text-primary hover:text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
