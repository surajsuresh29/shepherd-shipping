import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

interface ServicePlaceholderProps {
  title: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  highlights: {
    title: string;
    desc: string;
  }[];
  relatedServices: {
    label: string;
    href: string;
  }[];
}

export default function ServicePlaceholder({
  title,
  badge,
  description,
  icon: Icon,
  highlights,
  relatedServices,
}: ServicePlaceholderProps) {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20">
      {/* Hero Banner with Shepherd Stripes */}
      <section className="shepherd-stripes-bg text-white py-14 sm:py-20 px-6 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
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
            <span className="text-secondary font-medium">{title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-semibold mb-4">
                <Icon className="w-4 h-4" />
                <span>{badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-secondary text-primary hover:text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full border border-white/15 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mt-12 sm:mt-16">
        {/* Core Capabilities */}
        <div className="mb-14">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Service Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Backed by our Dubai hub infrastructure, strategic global carrier partnerships, and two decades of freight experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Information Notice / Placeholder Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                <Clock className="w-4 h-4" />
                <span>Page Under Development</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                Detailed service specifications coming soon
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                We are actively assembling dedicated rate guides, route timetables, and operational case studies for this service. In the meantime, our operations team is fully active and available.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Operations Active 24/7</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email Operations</div>
                <a
                  href="mailto:info@shepherd.ae"
                  className="text-primary font-semibold text-sm sm:text-base hover:text-secondary transition-colors"
                >
                  info@shepherd.ae
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Direct Inquiries</div>
                <a
                  href="tel:+97142851111"
                  className="text-primary font-semibold text-sm sm:text-base hover:text-secondary transition-colors"
                >
                  +971 4 285 1111
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services Navigation */}
        <div className="pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Explore Other Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200/80 hover:border-secondary hover:shadow-sm transition-all"
              >
                <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  {service.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
