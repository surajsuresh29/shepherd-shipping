import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  Clock,
  ShieldCheck,
  DollarSign,
  Award,
  ArrowRight,
  Boxes,
  Globe,
  Zap,
  Thermometer,
  AlertTriangle,
  Sliders,
  FileCheck,
  CheckCircle2,
  Phone,
  Mail,
  Truck,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Air Freight and Cargo Services in Dubai | Shepherd International Logistics",
  description:
    "Leading air cargo company in Dubai offering airport-to-airport, door-to-door, consolidation, dangerous goods, and express time-defined air freight services worldwide.",
};

const whyChoosePillars = [
  {
    icon: Award,
    title: "Industry Experience",
    description:
      "With years of experience in the industry since 2004, we have the deep knowledge and technical expertise to handle all types of air freight shipments, from standard commercial cargo to chartered aircraft.",
  },
  {
    icon: ShieldCheck,
    title: "Unwavering Reliability",
    description:
      "We are committed to providing reliable air freight services that consistently meet and exceed our customers' expectations through tier-one carrier allocations and round-the-clock supervision.",
  },
  {
    icon: Clock,
    title: "Strict Timeliness",
    description:
      "We understand the vital importance of timely delivery in modern supply chains, and we actively ensure that your goods depart on schedule and arrive on time, every time.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "We offer transparent and competitive pricing across all our Air Freight Services in Dubai, ensuring your business secures top-tier speed and care at optimal market value.",
  },
];

const airServices = [
  {
    icon: Plane,
    title: "Airport-to-Airport Cargo Service",
    description:
      "Our airport-to-airport Air Freight Services in Dubai are ideal for businesses looking to move goods quickly and efficiently. With direct access to an expansive global network of airports and scheduled carriers, we provide reliable, cost-effective routing tailored to your cargo schedule.",
    badge: "Core Service",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery Services",
    description:
      "If you need goods delivered directly to your customers, retail stores, or destination warehouse, our door-to-door air freight service is the complete solution. We manage every touchpoint from origin pickup to final destination delivery for total peace of mind.",
    badge: "Full Custody",
  },
  {
    icon: Boxes,
    title: "Consolidation Services",
    description:
      "Our consolidation services enable you to significantly reduce air transit costs by combining multiple smaller consignments into scheduled larger shipments. Ideal for businesses with regular shipments that do not require full aircraft charter capacity.",
    badge: "Cost-Effective",
  },
  {
    icon: Globe,
    title: "Cross-Trade Cargo Services",
    description:
      "For companies shipping goods from one foreign country directly to another without passing through the UAE, our cross-trade freight services provide a smooth, centralized solution with full documentation management and strict confidentiality.",
    badge: "Multinational",
  },
  {
    icon: Zap,
    title: "Time-Defined & Express Services",
    description:
      "When time is critical, our time-defined express services guarantee strict transit windows. As one of Dubai's premier freight forwarders, our priority express routings ensure your urgent shipments take off on the fastest available flights.",
    badge: "High Velocity",
  },
  {
    icon: Thermometer,
    title: "Special Handling & Temperature Control",
    description:
      "We provide specialized handling for temperature-sensitive pharmaceuticals, perishables, high-value luxury merchandise, and out-of-gauge equipment. Our cargo teams maintain strict thermal integrity and secure protocols from tarmac to storage.",
    badge: "Specialized",
  },
  {
    icon: AlertTriangle,
    title: "Restricted & Dangerous Goods (DGR)",
    description:
      "Transporting restricted and hazardous cargo requires certified expertise. As a trusted Dubai air freight forwarder, Shepherd International possesses the required IATA DGR certifications, compliant UN-packaging, and hazardous declaration capabilities.",
    badge: "IATA Certified",
  },
  {
    icon: Sliders,
    title: "Strategic Capacity Programs",
    description:
      "Every enterprise has distinct shipping cadences. We design customer-specific strategic capacity programs custom-made to secure guaranteed cargo space, lock in predictable rates, and handle seasonal surges seamlessly.",
    badge: "Enterprise",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance & Documentation",
    description:
      "Navigating international customs rules and UAE documentation can be complex. Our in-house brokerage team prepares bills of entry, import/export declarations, and certificates of origin for swift, delay-free clearance through Dubai Customs.",
    badge: "In-House Brokerage",
    link: "/services/customs-clearance",
  },
];

const relatedServices = [
  {
    title: "Sea Freight Solutions",
    description: "FCL and LCL ocean container freight via Jebel Ali Port to major international sea corridors.",
    href: "/services/sea-freight",
  },
  {
    title: "Customs Clearance & Brokerage",
    description: "Daily border and port clearance across Dubai with fast-track documentation and tariff compliance.",
    href: "/services/customs-clearance",
  },
  {
    title: "3PL&4PL Warehousing & Distribution",
    description: "Bonded and ambient storage facilities in Dubai South Free Zone and Guangzhou with order fulfillment.",
    href: "/services/warehousing-distribution",
  },
];

export default function AirFreightPage() {
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
            <Link href="/#services" className="hover:text-secondary transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-secondary font-medium">Air Freight and Cargo</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
                <Plane className="w-4 h-4" />
                <span>Air Freight Services in Dubai</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight font-sans">
                Air Freight and Cargo Services in Dubai
              </h1>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                When it comes to shipping goods internationally, air freight is often the fastest and most efficient way to transport your cargo. If you are looking for reliable and efficient air cargo services in Dubai, look no further than Shepherd International.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-primary font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Request an Air Freight Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+97142851111"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 transition-all"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+971 4 285 1111</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/air-cargo-freighter.jpg"
                    alt="Air cargo freighter loading in Dubai airport"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-primary/75 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">DXB &amp; DWC Hub Operations</div>
                      <div className="text-slate-300 text-xs">Direct airline allocations &amp; daily scheduled departures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUST METRICS STRIP
         ======================================================== */}
      <section className="bg-white border-b border-slate-200/80 py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">20+ Years</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Industry Experience (Since 2004)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">DXB &amp; DWC</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Dual Dubai Airport Hubs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">IATA DGR</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Certified Dangerous Goods</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">100% End-to-End</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Door-to-Door Chain of Custody</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OVERVIEW & WHY CHOOSE US
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Your Trusted Dubai Freight Partner
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2 leading-tight">
            Why Choose Shepherd International for Air Freight Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            As one of the leading and best air cargo companies in Dubai, Shepherd International offers an extensive range of air cargo services to meet your shipping needs. Whether you are shipping a small package or a large commercial shipment, we have the expertise and carrier contracts to ensure seamless execution.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyChoosePillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            COMPLETE SUITE OF SERVICES (9 CORE OFFERINGS)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Comprehensive Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2">
              Our Wide Range of Air Cargo Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              We provide end-to-end air logistics designed to solve complex supply chain demands, backed by real-time tracking, compliant handling, and dedicated account management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-secondary/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center text-primary">
                      <service.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.link && (
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary-dark transition-colors"
                    >
                      <span>Learn about customs clearance</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            HOW OUR AIR CARGO PROCESS WORKS
           ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Smooth Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mt-1">
              How Your Cargo Moves From Origin to Destination
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              A structured 4-step workflow ensuring zero downtime, transparent visibility, and continuous compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="font-bold text-primary text-sm mb-1.5">Consultation &amp; Routing</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                We review dimensions, weight, urgency, and destination to select the optimal airline carrier and booking tier.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="font-bold text-primary text-sm mb-1.5">Pickup &amp; Airport Staging</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Collection from your facility, compliant palletization, security X-ray screening, and ULD container loading.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold text-sm flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="font-bold text-primary text-sm mb-1.5">Air Transit &amp; Clearance</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Live flight tracking alongside pre-arrival document filing to expedite immediate customs release upon touchdown.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold text-sm flex items-center justify-center mb-3">
                4
              </div>
              <h4 className="font-bold text-primary text-sm mb-1.5">Final-Mile Delivery</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Dedicated ground transport to consignee warehouse or customer premises with verified proof of delivery (POD).
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            CALL TO ACTION BANNER
           ======================================================== */}
        <div className="shepherd-stripes-bg text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden mb-20">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to Book Your Air Freight Cargo from Dubai?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Shepherd International is your reliable and efficient air freight company in Dubai. We are committed to providing the best air freight services at competitive prices. Contact our cargo specialists today to schedule your shipment or request an immediate rate quotation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Contact Our Air Cargo Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@shepherd.ae"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/15 transition-all"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@shepherd.ae</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            EXPLORE OTHER FREIGHT SERVICES
           ======================================================== */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-primary">
                Explore Other Freight Solutions
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Comprehensive multimodal logistics managed from our Dubai operations hub.
              </p>
            </div>
            <Link
              href="/#services"
              className="text-xs sm:text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-secondary hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-secondary transition-colors">
                  <span>Explore service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
