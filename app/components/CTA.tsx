import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#F6F8FB] text-[#1E293B] py-20 px-6 sm:px-8 border-t border-[#E2E8F0] relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary-dark text-xs sm:text-sm font-semibold mb-6">
          <span>8 offices across the UAE, Hong Kong &amp; the US</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F2C4E] mb-5 leading-tight">
          Ready to move cargo?
        </h2>

        <p className="text-[#5A6B87] text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what&apos;s moving and where. Our freight operations team will
          size up the lane and get back to you within one business day.
        </p>

        {/* Head Office Direct Touchpoints */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm mb-10 text-slate-700">
          <a
            href="tel:+97142952885"
            className="flex items-center gap-2 text-slate-700 hover:text-secondary-dark transition-colors"
          >
            <Phone className="w-4 h-4 text-secondary-dark flex-shrink-0" />
            <span className="font-semibold text-primary">+971 (4) 295 2885</span>
          </a>
          <a
            href="mailto:salesdwc@shepherdshipping.com"
            className="flex items-center gap-2 text-slate-700 hover:text-secondary-dark transition-colors"
          >
            <Mail className="w-4 h-4 text-secondary-dark flex-shrink-0" />
            <span className="font-semibold text-primary">
              salesdwc@shepherdshipping.com
            </span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#184478] hover:bg-[#0F2C4E] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span>Send a shipment enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact#offices"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-primary font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full border border-slate-300 shadow-xs transition-all"
          >
            <span>View all 8 office locations</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
