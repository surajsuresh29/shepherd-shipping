import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  Anchor,
  Laptop,
  Building,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Customs Clearance & Documentation in Dubai | Shepherd International",
  description:
    "Leading clearing and forwarding agents in Dubai offering E-Mirsal DPA portal services, electronic delivery orders (eDO), customs inspections, deposit refunds, and fast-track clearance.",
};

const valuePillars = [
  {
    icon: Laptop,
    title: "E-Mirsal & DPA Portal Direct",
    description:
      "Direct digital integration with Dubai Customs E-Mirsal and Dubai Port Authority systems for instantaneous electronic declarations and automated duty settlement.",
  },
  {
    icon: Zap,
    title: "Own Electronic Delivery Order (eDO)",
    description:
      "Proprietary electronic delivery order issuance with Dubai ports ensuring accelerated gate passes and eliminating physical paperwork bottlenecks.",
  },
  {
    icon: RotateCcw,
    title: "Expedited Deposit Refunds",
    description:
      "Dedicated reconciliation and documentation submission to recover customs deposits and transit bank guarantees without administrative delays.",
  },
  {
    icon: Scale,
    title: "Rigorous Regulatory Compliance",
    description:
      "Decades of expertise in UAE tariff codes, Free Zone regulations, and regulatory agency approvals ensuring zero fines, penalties, or hold-ups.",
  },
];

const customsServices = [
  {
    icon: Laptop,
    title: "E-Mirsal – DPA Portal Services",
    description:
      "We offer full E-Mirsal and DPA portal electronic services that allow you to submit customs documents digitally, saving you time and money. Our streamlined process enables rapid declaration processing, duty calculation, and instant clearance status notifications.",
    badge: "Digital Brokerage",
  },
  {
    icon: FileCheck,
    title: "Own Electronic Delivery Order (eDO)",
    description:
      "We operate our own electronic delivery order system with Dubai port authorities, ensuring your cargo is cleared in a timely and efficient manner. Our team works hand-in-hand with terminal dispatchers for prompt container release.",
    badge: "Port Authorized",
  },
  {
    icon: Anchor,
    title: "Ship-Shore-Ship Transshipment Services",
    description:
      "Our ship-shore-ship services provide seamless cargo handling, temporary staging, transit documentation, and customs clearance for vessels calling at Dubai ports. We ensure all maritime paperwork is validated prior to vessel berthing.",
    badge: "Transshipment",
  },
  {
    icon: RotateCcw,
    title: "Customs Deposit Refund Services",
    description:
      "We provide custom deposit refund services to help you recover duties and cash deposits paid for customs clearance or temporary importation. Our specialists assemble all export proofs, bills of entry, and clearance certificates to expedite recovery.",
    badge: "Duty Recovery",
  },
  {
    icon: ShieldCheck,
    title: "Specialized Inspections (Foodstuff, Chemicals & Industrial)",
    description:
      "We coordinate and supervise inspection services for Dubai Customs, Dubai Municipality, and chemical regulatory bodies. Whether clearing perishable foodstuff, certified chemical compounds, or industrial machinery, we ensure swift approvals.",
    badge: "Regulatory Sampling",
  },
  {
    icon: AlertTriangle,
    title: "Restricted & Dangerous Goods Clearance",
    description:
      "Our experienced professionals manage clearance for restricted, hazardous, and regulated consignments. We take every necessary precaution, secure civil defense and Ministry permits, and ensure rigorous adherence to safety laws.",
    badge: "Hazmat & Permits",
  },
  {
    icon: Sliders,
    title: "Customer-Specific Strategic Capacity Programs",
    description:
      "Our strategic capacity programs are custom-made to your business model. We analyze your monthly import/export volumes, tariff schedules, and delivery locations to build a personalized clearance framework that reduces per-unit costs.",
    badge: "Enterprise",
  },
  {
    icon: FileText,
    title: "Complete Customs Clearance & Document Preparation",
    description:
      "Our end-to-end customs clearance and document preparation services ensure all commercial invoices, packing lists, certificates of origin, and import declarations are meticulously audited and filed, making cross-border trade effortless.",
    badge: "Full Documentation",
  },
];

const regulatoryAgencies = [
  { name: "Dubai Customs", role: "E-Mirsal 2 Declarations & Tariffs" },
  { name: "DP World", role: "Jebel Ali Port & Terminal Gate Access" },
  { name: "Dubai Municipality", role: "Food & Health Safety Approvals" },
  { name: "MOIAT / ESMA", role: "Product Conformity & Standards" },
  { name: "Dubai Trade", role: "Single Window Unified Clearance" },
  { name: "Civil Defense", role: "Dangerous Goods & Chemical Permits" },
];

const relatedServices = [
  {
    title: "Air Freight and Cargo Services",
    description: "Scheduled flight allocations and express airport cargo clearance via Dubai International & DWC.",
    href: "/services/air-freight",
  },
  {
    title: "Sea Freight Company in Dubai",
    description: "FCL, LCL ocean consolidation, and specialized equipment shipping via Jebel Ali Port.",
    href: "/services/sea-freight",
  },
  {
    title: "3PL&4PL Warehousing & Distribution",
    description: "Bonded free zone storage and distribution in Dubai South and Guangzhou for cleared inventory.",
    href: "/services/warehousing-distribution",
  },
];

export default function CustomsClearancePage() {
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
            <span className="text-secondary font-medium">Customs Clearance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
                <FileCheck className="w-4 h-4" />
                <span>Clearing and Forwarding Agents in Dubai</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight font-sans">
                Customs Clearance &amp; Documentation in Dubai
              </h1>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                Shepherd International offers an extensive range of solutions for customs clearance and documentation services in Dubai. As experienced and reliable clearing and forwarding agents, we understand that customs procedures can be complex and time-consuming. We offer fast-track services to simplify, expedite, and safeguard your cross-border supply chain.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Request Customs Clearance</span>
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

            {/* Hero Visual Card with Port Inspector */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/service-customs.jpg"
                    alt="Customs clearance inspector reviewing cargo containers in Dubai port"
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
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">Dubai Customs &amp; Port Authorized</div>
                      <div className="text-slate-300 text-xs">Direct eDO issuance, E-Mirsal filing &amp; physical inspections</div>
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
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">E-Mirsal 2</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Instant Digital Port Filing</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Own eDO</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Electronic Delivery Orders</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">100% Recovery</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Customs Deposit Refunds</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-primary">Multi-Agency</div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">Food, Chemical &amp; Hazmat Approvals</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CORE BROKERAGE STRENGTHS
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Fast-Track Clearance in Dubai
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2 leading-tight">
            Why Partner with Shepherd International for Customs Clearance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
            Our expertise in customs clearance and document preparation has enabled us to become one of the premier clearing and forwarding agents in Dubai. We take the time to audit your tariff classifications, pre-file electronic entries, and eliminate unexpected delays.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valuePillars.map((pillar, index) => (
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
            FULL SUITE OF CUSTOMS CLEARANCE SERVICES (8 SERVICES)
           ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              End-to-End Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary tracking-tight mt-2">
              Our Customs Clearance &amp; Documentation Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              Explore our comprehensive range of port, airport, and border clearance services tailored to help your business trade seamlessly across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customsServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-secondary/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center text-primary">
                      <service.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            REGULATORY PORTAL & AGENCY INTEGRATION SHOWCASE
           ======================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Government &amp; Port Integrations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight mt-1">
              Connected Directly to Key UAE Authorities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our licensed customs brokers interact daily with all major regulatory portals and municipal departments across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {regulatoryAgencies.map((agency, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between text-center"
              >
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary font-bold text-xs flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="font-bold text-primary text-xs sm:text-sm">{agency.name}</div>
                <div className="text-slate-500 text-[11px] mt-1 leading-tight">{agency.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            CALL TO ACTION BANNER
           ======================================================== */}
        <div className="shepherd-stripes-bg text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden mb-20">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Fast-Track Clearance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to Clear Your Goods Through Dubai Customs?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              As one of Dubai’s leading clearing and forwarding agents, Shepherd International understands the unique compliance challenges businesses face. Contact our licensed customs brokerage team today for assistance with import permits, duty estimates, or urgent cargo release.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Contact Our Customs Desk</span>
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
