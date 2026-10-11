import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Warehouse,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Truck,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  Layers,
  MapPin,
  TrendingDown,
  Clock,
  Sliders,
  Smartphone,
  Eye,
  PackageCheck,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "3PL & 4PL Warehousing and Distribution in Dubai | Shepherd International",
  description:
    "Leading 3PL warehousing company in Dubai, UAE offering bonded and local storage in DAFZA, JAFZA, Deira, and YIWU with high-bay racking, cross-stuffing, electronics storage, and 24/7 CCTV.",
};

const warehouseLocations = [
  {
    hub: "JAFZA (Jebel Ali Free Zone)",
    type: "Bonded Freezone Hub",
    desc: "Duty-suspended bonded storage connected directly to Jebel Ali Port for rapid sea container destuffing and international re-export.",
  },
  {
    hub: "DAFZA (Dubai Airport Freezone)",
    type: "Airside Transit Hub",
    desc: "Fast-fulfillment airport-adjacent facility purpose-built for high-velocity air freight, electronics, and time-critical distributions.",
  },
  {
    hub: "Deira Commercial Hub",
    type: "Mainland Distribution",
    desc: "Centrally positioned for domestic UAE replenishment, wholesale trade distribution, and same-day urban retail dispatch.",
  },
  {
    hub: "Dubai Traders Market (YIWU)",
    type: "Wholesale & Cross-Docking",
    desc: "Strategic consolidation gateway for consumer goods, bulk commodities, and cross-border GCC road freight distribution.",
  },
];

const businessPillars = [
  {
    icon: TrendingDown,
    title: "Cost-Effective Solutions",
    description:
      "Eliminate heavy capital outlays for private warehouse leases. Store in duty-free bonded zones without paying upfront customs duties until mainland dispatch.",
  },
  {
    icon: Clock,
    title: "Reliable & Timely Execution",
    description:
      "We understand that delivery speed defines customer satisfaction. Our streamlined inbound-to-outbound workflows guarantee rapid picking, packing, and dispatch.",
  },
  {
    icon: Sliders,
    title: "Flexible & Scalable Space",
    description:
      "Easily scale your allocated pallet footprint up or down based on seasonal inventory surges, new product launches, or market expansion without rigid contracts.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Liability & Risk",
    description:
      "State-of-the-art warehousing facilities, professional industrial packing, and standardized material handling reduce transit damages and operational liabilities.",
  },
];

const facilityCapabilities = [
  {
    icon: Warehouse,
    title: "3PL Warehousing with Free Zone License",
    description:
      "Our 3PL warehousing with a certified Freezone license enables businesses to store, sort, and distribute goods within designated free zones without paying customs duty, enhancing cash flow and slashing logistics overhead.",
    badge: "Duty-Free Bonded",
  },
  {
    icon: Layers,
    title: "Interlocking & Heavy Racking Systems",
    description:
      "Our facilities are fully engineered with modernized interlocking and heavy selective pallet racking systems, optimizing vertical cubic capacity while ensuring safe, damage-free storage for products of all dimensions.",
    badge: "Heavy Storage",
  },
  {
    icon: Zap,
    title: "Modernized Forklifts & Man-Lift Fleet",
    description:
      "Equipped with modern electric reach trucks, counterbalance forklifts, and man-lift equipment, our warehouse teams retrieve, restock, and stage pallets with speed and precision.",
    badge: "Advanced Equipment",
  },
  {
    icon: Truck,
    title: "Loading Yards with Multiple Docking Bays",
    description:
      "Spacious outdoor staging yards and multi-bay loading docks equipped with hydraulic dock levelers accommodate ocean containers and domestic curtain-siders simultaneously for zero queue times.",
    badge: "Multi-Dock Yards",
  },
  {
    icon: Smartphone,
    title: "Special Facilities for Electronics & Mobiles",
    description:
      "Dedicated, climate-controlled, and high-security zones specially designed for mobile phones, computers, and delicate electronic components, protected by anti-static and anti-pilferage protocols.",
    badge: "Secure Caged Area",
  },
  {
    icon: Boxes,
    title: "Direct Cross-Stuffing & Container Destuffing",
    description:
      "Save demurrage and detention charges with direct container cross-stuffing. We transfer cargo directly between sea containers and domestic distribution trailers with rapid palletization.",
    badge: "Cross-Docking",
  },
  {
    icon: PackageCheck,
    title: "Repacking, Labeling & Value-Added Services",
    description:
      "Full value-added logistics including shrink-wrapping, bilingual Arabic/English compliance labeling, customized kitting, bundle packing, and quality inspection prior to retail dispatch.",
    badge: "Value-Added",
  },
  {
    icon: Eye,
    title: "24/7 CCTV Monitoring & High Security",
    description:
      "Round-the-clock high-definition CCTV video surveillance covering all interior aisles, loading docks, and exterior perimeter yards ensures complete product security and client peace of mind.",
    badge: "24/7 Monitored",
  },
];

const relatedServices = [
  {
    title: "Air Freight and Cargo Services",
    description: "High-velocity air freight connecting Dubai (DXB & DWC) to worldwide hubs with priority carrier allocations.",
    href: "/services/air-freight",
  },
  {
    title: "Sea Freight Company in Dubai",
    description: "FCL and LCL ocean container shipping via Jebel Ali Port to international trade corridors.",
    href: "/services/sea-freight",
  },
  {
    title: "Customs Clearance & Documentation",
    description: "Fast-track UAE border release, E-Mirsal filing, electronic delivery orders, and deposit refunds.",
    href: "/services/customs-clearance",
  },
];

export default function WarehousingDistributionPage() {
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
            <span className="text-secondary font-medium">Warehousing &amp; Distribution</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
                <Warehouse className="w-4 h-4" />
                <span>3PL Warehousing Company in Dubai, UAE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight font-sans">
                3PL &amp; 4PL Warehousing and Distribution (Local &amp; Freezone)
              </h1>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                Shepherd International is your trusted partner for all your warehousing and distribution needs in the UAE. With strategically located warehouses across Deira, DAFZA, JAFZA, and Dubai Traders Market YIWU, we offer businesses scalable storage, duty-free freezone logistics, and streamlined distribution.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-primary font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Request Warehousing Rates</span>
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

            {/* Hero Visual Card with Warehouse Interior */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/warehouse-interior.jpg"
                    alt="Modern 3PL warehouse facility in Dubai with high-bay pallet racking"
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
                      <Warehouse className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">DAFZA, JAFZA &amp; YIWU Hubs</div>
                      <div className="text-slate-300 text-xs">Bonded duty-free licenses &amp; 24/7 CCTV security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STRATEGIC LOCATION HUBS STRIP
         ======================================================== */}
      <section className="bg-white border-b border-slate-200/80 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-4 text-center sm:text-left">
            Strategic Warehousing Footprint Across the UAE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warehouseLocations.map((loc, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                    <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{loc.hub}</span>
                  </div>
                  <span className="inline-block text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-secondary/15 text-primary mb-2">
                    {loc.type}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {loc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE 3PL & 4PL BUSINESS ADVANTAGES
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Enterprise Value
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2 leading-tight">
            Why Partner with Shepherd International for Warehousing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            Choosing a trusted warehouse company in Dubai ensures that your storage and fulfillment needs are handled professionally. Partnering with Shepherd International entitles your business to significant commercial and operational advantages.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {businessPillars.map((pillar, index) => (
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
            FULL SUITE OF FACILITY CAPABILITIES (8 CAPABILITIES)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Modern Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2">
              Our 3PL Warehousing &amp; Distribution Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              Explore our comprehensive range of storage, cross-stuffing, and value-added logistics services designed to handle cargo of all types, shapes, and volumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-secondary/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center text-primary">
                      <capability.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {capability.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            FREE ZONE BONDED ADVANTAGE SPOTLIGHT
           ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Duty-Suspension Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mt-1 mb-4">
                3PL Warehousing with Free Zone License
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Shepherd Shipping is a leading 3PL warehousing company in Dubai, UAE, offering top-tier logistics solutions including 3PL warehousing with a Freezone license.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our Freezone bonded warehousing services provide an added commercial advantage by enabling businesses to store and distribute goods within designated free zone boundaries without paying customs duties until goods enter mainland commerce or are re-exported. This significantly enhances cash flow and slashes landed logistics costs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>No customs duty on re-exported cargo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Integrated inventory tracking system</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Direct container transfer from Jebel Ali Port</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>24/7 CCTV surveillance &amp; security guards</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-base font-bold text-primary mb-3">Facility Specifications Summary</h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Modernized forklift and man-lift equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>All storage types: interlocking &amp; heavy racking systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Safe packing &amp; multi-dock loading/unloading yards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Dedicated secure zones for mobile phones &amp; electronics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Direct cross-stuffing &amp; repacking services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>24/7 CCTV monitoring &amp; access control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CALL TO ACTION BANNER
           ======================================================== */}
        <div className="shepherd-stripes-bg text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden mb-20">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Secure Your Space
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to Optimize Your Warehousing &amp; Distribution?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              If you’re looking for a reliable warehousing company in Dubai or across the UAE, Shepherd International is here to provide you with high-quality storage and seamless logistics. Contact our warehousing team today to discuss space availability or request a tailored rate quote.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-primary font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Contact Our Warehousing Desk</span>
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
