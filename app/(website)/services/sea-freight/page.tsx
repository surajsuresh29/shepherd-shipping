import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Anchor,
  Globe,
  FileText,
  Boxes,
  Truck,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
  Snowflake,
  Layers,
  ClipboardList,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sea Freight Company in Dubai | Shepherd International Logistics",
  description:
    "Leading sea freight and container shipping company in Dubai. FCL, LCL consolidation, breakbulk, RO-RO, hazardous cargo, reefer, and door-to-door ocean freight via Jebel Ali Port.",
};

const keyBenefits = [
  {
    icon: Globe,
    title: "Expansive Global Port Network",
    description:
      "Strategic presence and agent alliances across major global shipping hubs in Asia, Europe, and North America, offering smooth end-to-end marine transport solutions.",
  },
  {
    icon: Compass,
    title: "Tailored Client Solutions",
    description:
      "Unlike generic freight forwarders offering one-size-fits-all services, we customize routings, container allocations, and delivery schedules to fit your exact cargo profile.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Rigorous Compliance",
    description:
      "From standard dry vans to hazardous chemical IMO containers and specialized out-of-gauge equipment, every consignment is stowed and secured with precision.",
  },
  {
    icon: Anchor,
    title: "Jebel Ali Port Integration",
    description:
      "Direct daily operations at Jebel Ali Port—the Middle East's premier maritime gateway—ensuring accelerated container turnarounds and priority carrier space.",
  },
];

const seaFreightServices = [
  {
    icon: Boxes,
    title: "FCL & LCL Consolidation Services",
    description:
      "We provide both Full Container Load (FCL) and Less than Container Load (LCL) consolidation services to meet the diverse scale of our clients. Whether shipping high-volume exclusive containers or combining smaller consignments to minimize freight expenditure, we have the capacity and resources to manage your cargo.",
    badge: "Core Ocean Freight",
  },
  {
    icon: Truck,
    title: "Door-to-Door & Port-to-Port Services",
    description:
      "We offer comprehensive door-to-door and port-to-port ocean freight services for both import and export shipments. Our experienced professionals handle every operational detail with precision—from supplier pickup to final destination delivery—ensuring cargo arrives on time and in perfect condition.",
    badge: "Full Custody",
  },
  {
    icon: FileText,
    title: "Document Preparation, Charter & Part Charter",
    description:
      "Shepherd International provides full document preparation, vessel chartering, and part-charter solutions. Our dynamic maritime specialists are deeply versed in international shipping conventions and bills of lading, ensuring documentation is accurate, compliant, and issued without delay.",
    badge: "Charter Solutions",
  },
  {
    icon: ClipboardList,
    title: "Vendor & Purchase Order Management",
    description:
      "We offer vendor and purchase order management to streamline multi-supplier international procurement. We liaise directly with your factories and vendors to guarantee production schedules match container stuffing deadlines, keeping shipments on track.",
    badge: "Supply Chain",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Cargo Handling (IMDG)",
    description:
      "We specialize in handling hazardous cargo for both LCL and FCL sea shipments. Our experts are certified in the International Maritime Dangerous Goods (IMDG) Code, enforcing rigorous safety procedures for chemical, flammable, and regulated materials.",
    badge: "Certified IMDG",
  },
  {
    icon: Globe,
    title: "Cross-Trade Ocean Freight",
    description:
      "Our cross-trade services enable businesses to ship containerized cargo between two foreign countries without routing through the UAE. This reduces transit days, trims unnecessary handling expenses, and protects commercial supplier confidentiality.",
    badge: "Multilateral",
  },
  {
    icon: Layers,
    title: "Break Bulk, RO-RO & Project Cargo",
    description:
      "We deliver specialized project logistics including conventional breakbulk, Roll-on/Roll-off (RO-RO) for wheeled vehicles and plant machinery, and complex industrial equipment. Our engineering team plans rigging, heavy lifting, and vessel securing from port to site.",
    badge: "Heavy Lift",
  },
  {
    icon: Anchor,
    title: "Oversized Cargo on Special Equipment",
    description:
      "When cargo dimensions exceed standard ISO containers, we deploy specialized equipment including Flat Racks, Open Tops, and Platform containers. We execute precision lashings and surveys to ensure completely damage-free ocean voyages.",
    badge: "Out-of-Gauge",
  },
  {
    icon: Snowflake,
    title: "Perishable Cargo (Reefer Containers)",
    description:
      "We provide specialized refrigerated FCL services for temperature-sensitive perishables, food supplies, and pharmaceuticals. Our team monitors pre-trip inspections (PTI), cold chain setpoints, and terminal plug-in times from origin to discharge.",
    badge: "Cold Chain FCL",
  },
  {
    icon: FileText,
    title: "Shipping Documentation & Import Customs Clearance",
    description:
      "We provide exclusive shipping documentation and customs clearance for import shipments arriving at Jebel Ali and UAE marine ports. Our customs specialists manage port dues, bills of entry, and clearance for swift container release.",
    badge: "Port Clearance",
    link: "/services/customs-clearance",
  },
];

const relatedServices = [
  {
    title: "Air Freight and Cargo Services",
    description: "High-velocity international air transport via DXB & DWC for urgent or time-critical shipments.",
    href: "/services/air-freight",
  },
  {
    title: "Customs Clearance & Brokerage",
    description: "Fast-track UAE border release, document preparation, and tariff optimization across Dubai ports.",
    href: "/services/customs-clearance",
  },
  {
    title: "3PL&4PL Warehousing & Distribution",
    description: "Bonded and ambient storage in Dubai South Free Zone and Guangzhou with seamless container destuffing.",
    href: "/services/warehousing-distribution",
  },
];

export default function SeaFreightPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20">
      {/* ========================================================
          HERO BANNER SECTION
         ======================================================== */}
      <section className="shepherd-stripes-bg text-white py-14 sm:py-20 px-6 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-secondary transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-secondary font-medium">Sea Freight</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
                <Ship className="w-4 h-4" />
                <span>Sea Freight Company in Dubai</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight font-sans">
                Sea Freight Company in Dubai
              </h1>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                As the world becomes increasingly globalized, shipping goods internationally is essential to business growth. While air freight handles urgent deliveries, sea freight offers the most cost-effective and scalable solution for larger, commercial shipments. For businesses seeking a dependable sea freight company in Dubai, Shepherd International is the finest in the region.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Request an Ocean Freight Quote</span>
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

            {/* Hero Visual Card with Container Vessel */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/service-sea-freight.png"
                    alt="Shepherd container vessel sailing open ocean"
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
                      <Anchor className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">Jebel Ali Port Terminal Hub</div>
                      <div className="text-slate-300 text-xs">Direct liner bookings &amp; global container services</div>
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
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Global Reach</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Asia, Europe &amp; North America</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">FCL &amp; LCL</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Full &amp; Consolidated Containers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Jebel Ali Hub</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Direct UAE Port Integrations</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Project &amp; Breakbulk</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Specialized Heavy Equipment</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE SHEPHERD FOR SEA FREIGHT
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Global Maritime Operations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2 leading-tight">
            Why Choose Shepherd International for Ocean Freight
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            Shepherd International is one of the leading sea shipping companies in Dubai, offering a comprehensive spectrum of marine transport services. Whether you need standard dry containers, refrigerated reefers, or complex breakbulk charters, we have the global agent network and maritime expertise to move your cargo safely, sustainably, and on schedule.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-secondary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            FULL SUITE OF SEA FREIGHT SERVICES (10 OFFERINGS)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Comprehensive Maritime Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2">
              Our Sea Freight Services in Dubai
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              Explore our full range of ocean transportation capabilities, backed by transparent tracking, certified marine handling, and competitive liner freight rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seaFreightServices.map((service, index) => (
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
                      <span>Explore customs clearance &amp; documentation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            CONTAINER TYPES & EQUIPMENT REFERENCE BOX
           ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Equipment Fleet
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mt-1">
              Versatile Container &amp; Vessel Equipment Options
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We match your cargo weight, volume, and temperature parameters with the optimal marine equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-secondary font-bold text-base mb-1">Standard Dry Containers</div>
              <div className="text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">20ft / 40ft / 40ft High Cube</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                General merchandise, FMCG, retail inventory, and dry manufactured commodities stowed securely for worldwide voyages.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-secondary font-bold text-base mb-1">Refrigerated Reefers</div>
              <div className="text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">Precise Thermal Control</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Active refrigeration technology maintaining setpoints from -30°C to +30°C for perishables, dairy, and pharmaceuticals.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-secondary font-bold text-base mb-1">Special Equipment</div>
              <div className="text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">Open Tops &amp; Flat Racks</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Top-loading cranes and collapsible end frames designed for oversized machinery, pipes, steel, and out-of-gauge units.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-secondary font-bold text-base mb-1">RO-RO &amp; Breakbulk</div>
              <div className="text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">Vehicles &amp; Project Cargo</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Roll-on/roll-off ramps for industrial rolling stock alongside dedicated breakbulk holds for extreme heavy-lift structures.
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
              Book Your Voyage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to Ship by Sea with Dubai&apos;s Leading Forwarder?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Sea freight remains the most cost-effective and sustainable way for businesses in Dubai to move cargo across the globe. With our extensive carrier connections and commitment to exceptional customer service, Shepherd International is your ideal maritime partner.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Request a Sea Freight Quote</span>
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
