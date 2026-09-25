import Image from "next/image";
import { CheckCircle } from "lucide-react";

const checkItems = [
  "Air, sea and customs clearance",
  "3PL warehousing",
  "Customised logistics solutions",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/about-us.png"
                alt="Shepherd logistics team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-2 md:bottom-6 md:left-6 bg-secondary text-white px-5 py-4 rounded-xl shadow-lg flex items-center gap-3">
              <span className="text-3xl font-extrabold">21</span>
              <span className="text-xs leading-tight font-medium max-w-[120px]">
                Years experience in transportation
              </span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-in-right">
            {/* Teal Tag */}
            <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-3">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Shepherd International Logistics
            </h2>

            <p className="text-text-gray text-base leading-relaxed mb-8">
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
                  <span className="text-text-dark text-sm font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-8 py-3.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
