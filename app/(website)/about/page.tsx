import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Globe,
  Building2,
  MapPin,
  HeartHandshake,
  Clock,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Check,
} from "lucide-react";
import ExperienceBadge from "@/app/components/ExperienceBadge";

export const metadata: Metadata = {
  title: "About Us | Shepherd International Logistics Dubai",
  description:
    "Established in 2004, Shepherd International Logistics is a leading freight forwarding company with offices in Dubai, Hong Kong, USA, and India. Certified WCA World and IATA member.",
};

const globalOffices = [
  {
    city: "Dubai, UAE",
    role: "Global Headquarters",
    detail: "JAFZA, DAFZA, Deira & Dubai Traders Market hubs managing air, ocean, and 3PL warehousing.",
  },
  {
    city: "Hong Kong",
    role: "Asia-Pacific Gateway",
    detail: "Strategic staging and consolidation connecting Greater China and Asian manufacturing corridors.",
  },
  {
    city: "United States",
    role: "Americas Operations",
    detail: "Trans-Pacific freight coordination, North American customs brokerage, and nationwide distribution.",
  },
  {
    city: "India",
    role: "South Asian Hub",
    detail: "Bilateral trade forwarding, textile & manufacturing logistics, and multimodal regional shipping.",
  },
];

const missionPillars = [
  {
    icon: HeartHandshake,
    title: "OUTSTANDING SERVICE",
    tagline: "Excellent and friendly customer service",
    description:
      "We believe our clients' success is our success. We go the extra mile with proactive customer care, dedicated account managers, and continuous shipment communication.",
  },
  {
    icon: Clock,
    title: "24/7 SUPPORT",
    tagline: "Being on time every time",
    description:
      "Global freight moves around the clock. Our operations desk operates 24/7 to monitor transit milestones, resolve customs questions, and ensure strict on-time delivery.",
  },
  {
    icon: Lightbulb,
    title: "SMART SOLUTIONS",
    tagline: "Providing efficient and cost-effective solutions",
    description:
      "We design intelligent supply chain routes combining air, ocean, and road freight to optimize transit times while keeping landed freight costs lean and competitive.",
  },
  {
    icon: ShieldCheck,
    title: "RELIABILITY",
    tagline: "Constant and timely delivery",
    description:
      "Consistent space allocations with top ocean carriers and airlines guarantee that your cargo leaves on schedule and reaches its destination without unexpected disruption.",
  },
  {
    icon: TrendingUp,
    title: "CONTINUOUS UPGRADES",
    tagline: "Ongoing optimization of infrastructure & operations",
    description:
      "We continuously invest in warehouse automation, digital customs filing (E-Mirsal 2 / eDO), and staff training to stay at the cutting edge of modern logistics.",
  },
  {
    icon: Star,
    title: "COMMITTED TO EXCELLENCE",
    tagline: "Bringing a superior level of professionalism",
    description:
      "We uphold stringent quality controls, regulatory compliance, and transparent documentation across every shipment we manage worldwide.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20">
      {/* ========================================================
          HERO BANNER SECTION
         ======================================================== */}
      <section className="shepherd-stripes-bg text-white py-14 sm:py-20 px-6 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-secondary font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Established in 2004 • Over Two Decades of Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight font-sans">
              About Shepherd International Logistics
            </h1>
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
              A premier international freight forwarder based in Dubai with global offices in Hong Kong, the USA, and India. We specialize in providing exceptional logistics services, handling even the most complex challenges with deep industry expertise and dedication.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          GLOBAL OFFICES STRIP
         ======================================================== */}
      <section className="bg-white border-b border-slate-200/80 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-4 text-center sm:text-left">
            Our Global Office Network
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalOffices.map((office, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-base mb-1">
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{office.city}</span>
                  </div>
                  <span className="inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-secondary/15 text-primary mb-2">
                    {office.role}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {office.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHO WE ARE SECTION
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
              <Image
                src="/about-us.jpg"
                alt="Shepherd logistics manager overseeing cargo operations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Floating Experience Badge */}
            <ExperienceBadge />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-block text-secondary text-xs font-bold uppercase tracking-wider mb-2">
              Who We Are
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight mb-6">
              Your Reliable Shipping Partner Around the World
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-primary font-semibold">Shepherd International Logistics</strong>, established in 2004, is one of the top freight forwarding companies with offices in Dubai, Hong Kong, USA, and India. We specialize in providing exceptional logistics services, handling even the most complex challenges with expertise.
              </p>
              <p>
                Our experienced team delivers efficient, reliable, and cost-effective solutions tailored to each client&apos;s needs. We know that time is critical in logistics, so we offer fast and dependable cargo services to minimize delays. Our commitment is to ensure your shipments arrive safely and on schedule, every time.
              </p>
              <p>
                At Shepherd International, we believe our clients&apos; success is our success. We go the extra mile with outstanding customer service, always ready to answer your questions and provide shipment updates. Trust us to guide you through the logistics process with professionalism and care.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Established in 2004</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Multinational Presence</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>WCA &amp; IATA Accredited</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            OUR MISSION & VISION (6 CORE PILLARS)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-1">
              Our Mission &amp; Vision
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              We operate on foundational values that ensure every shipment, from a single parcel to chartered vessels, is treated with unmatched precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-secondary/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center text-primary mb-5">
                    <pillar.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-1 uppercase tracking-wider group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-secondary mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            COMMITMENT CALLOUT BANNER
           ======================================================== */}
        <div className="bg-gradient-to-r from-primary to-[#0f2846] text-white rounded-2xl p-8 sm:p-10 mb-20 shadow-xl border border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 text-secondary">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif tracking-wide leading-snug">
              &ldquo;We are committed to delivering professional services of the highest standard.&rdquo;
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3">
              Ensuring the safety, compliance, and on-time performance of global freight for two decades.
            </p>
          </div>
        </div>

        {/* ========================================================
            OUR ACCREDITATIONS SECTION (WCA WORLD & IATA)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Global Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-1">
              Our Accreditations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
              Shepherd International Logistics is accredited and recognized by the world&apos;s most rigorous international aviation and freight forwarding federations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accreditation 1: WCA World */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-28 w-full max-w-[280px] mb-6 flex items-center">
                  <Image
                    src="/accreditation-wca.png"
                    alt="WCA World - Leading the World in Logistics Partnering"
                    width={280}
                    height={120}
                    className="object-contain max-h-24 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  WCA World (World Cargo Alliance)
                </h3>
                <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                  Leading the World in Logistics Partnering
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  WCA World is the world&apos;s largest and most powerful network of independent freight forwarders, connecting over 190 countries. Membership guarantees verified financial security, operational peer-review, and an expansive global alliance to handle cargo smoothly anywhere on earth.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Financial protection &amp; global forwarding alliance</span>
              </div>
            </div>

            {/* Accreditation 2: IATA */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-28 w-full max-w-[240px] mb-6 flex items-center">
                  <Image
                    src="/accreditation-iata.png"
                    alt="IATA - International Air Transport Association logo"
                    width={240}
                    height={120}
                    className="object-contain max-h-24 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  IATA (International Air Transport Association)
                </h3>
                <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                  Global Aviation Standard of Excellence
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  IATA accreditation represents the gold standard in air cargo forwarding. It authorizes Shepherd International to issue air waybills directly, secure priority airline freighter allocations, and enforce strict international standards for dangerous goods and air transport safety.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Direct airline air waybill issuance &amp; IATA DGR certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CALL TO ACTION BANNER
           ======================================================== */}
        <div className="shepherd-stripes-bg text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Let&apos;s Connect
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to Partner with Dubai&apos;s Trusted Freight Forwarder?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Trust Shepherd International to guide you through your international logistics with professionalism, care, and transparent execution. Contact our team today to learn more about how we can support your business.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Contact Our Global Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@shepherd.ae"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 transition-all"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@shepherd.ae</span>
              </a>
              <a
                href="tel:+97142851111"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 transition-all"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <span>+971 4 285 1111</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
