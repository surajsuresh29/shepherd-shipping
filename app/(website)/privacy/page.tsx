import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shepherd International Logistics Dubai",
  description:
    "Learn how Shepherd International Logistics collects, protects, and uses your data, including transparency regarding cookies, Microsoft Clarity, and analytics.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Hero Header */}
      <section className="shepherd-stripes-bg text-white pt-36 pb-20 px-6 sm:px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6 animate-fade-in-up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#51B0B7] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 animate-fade-in-up delay-100">
            <span className="w-5 h-[2px] bg-[#51B0B7] inline-block" />
            <span className="text-[#51B0B7] text-xs font-bold tracking-widest uppercase">
              DATA PRIVACY &amp; TRANSPARENCY
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 animate-fade-in-up delay-100">
            Privacy Policy
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Your trust is our cornerstone. This policy details how Shepherd International Logistics handles your personal information, cookies, and website interactions.
          </p>

          <p className="text-slate-400 text-xs mt-4">
            Last Updated: October 2026
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xs border border-slate-200/80 p-8 sm:p-12 lg:p-16 space-y-12">
          
          {/* Section 1: Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#18375A] flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#51B0B7] flex-shrink-0" />
              <span>1. Overview</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Shepherd International Logistics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website{" "}
              <Link href="/" className="text-[#18375A] font-medium underline underline-offset-2 hover:text-[#51B0B7]">
                shepherdshipping.com
              </Link>
              . We provide global air freight, sea freight, customs clearance, and 3PL warehousing solutions from Dubai, UAE. We are committed to safeguarding the privacy and confidentiality of our clients, cargo shippers, and website visitors.
            </p>
          </div>

          {/* Section 2: Microsoft Clarity & Analytics (Highlighted Mandatory Disclosure) */}
          <div className="space-y-4 rounded-xl bg-slate-50 border-2 border-[#51B0B7]/30 p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="bg-[#51B0B7] text-[#0f2640] text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Important Transparency Notice
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#18375A]">
              2. Microsoft Clarity and Behavioral Analytics
            </h2>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-slate-800">
                We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the{" "}
                <a
                  href="https://privacy.microsoft.com/en-us/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18375A] font-bold underline underline-offset-2 hover:text-[#51B0B7] inline-flex items-center gap-1"
                >
                  <span>Microsoft Privacy Statement</span>
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </a>
                .
              </p>
            </div>
          </div>

          {/* Section 3: Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#18375A]">
              3. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We collect information you directly provide when requesting freight quotations, submitting shipping inquiries, or contacting our operations desks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-base">
              <li>
                <strong className="text-slate-800">Contact Details:</strong> Full name, company name, email address, phone number, and physical office location.
              </li>
              <li>
                <strong className="text-slate-800">Shipment Specifications:</strong> Origin and destination ports, cargo description, estimated weights, dimensions, and preferred modes of transport (Air, Ocean, Customs Brokerage, Warehousing).
              </li>
              <li>
                <strong className="text-slate-800">Automated Technical Information:</strong> IP address, browser type, device information, operating system, and interaction records collected via cookies and security firewalls.
              </li>
            </ul>
          </div>

          {/* Section 4: How We Use Your Data */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#18375A]">
              4. How We Use Your Data
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Your personal and logistics information is processed solely for legitimate commercial and operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-base">
              <li>Preparing accurate freight rate estimates and routing options.</li>
              <li>Communicating with you regarding bookings, customs documentation, and shipment updates.</li>
              <li>Preventing automated spam, fraudulent submissions, and abuse via Cloudflare Turnstile protection.</li>
              <li>Improving website performance, navigation clarity, and customer experience.</li>
              <li>Fulfilling legal, customs, and regulatory compliance obligations in the UAE, GCC, and destination jurisdictions.</li>
            </ul>
          </div>

          {/* Section 5: Cookies and Tracking */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#18375A]">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our website uses cookies and similar technologies to ensure core functionality, security, and analytics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Essential &amp; Security Cookies</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Required for site navigation, secure form transmissions, and bot prevention (Cloudflare Turnstile). These cannot be disabled.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Performance &amp; Analytics Cookies</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Supplied by partners like Microsoft Clarity to help us understand navigation patterns and optimize usability. You can adjust your browser cookie settings at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Data Security & Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#18375A]">
              6. Data Security and Confidentiality
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We implement industry-standard technical and operational safeguards to protect your data against unauthorized access, loss, or misuse. We do not sell, rent, or trade your personal or shipping information to third-party data brokers.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-[#18375A]">
              7. Contact Our Privacy &amp; Compliance Team
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              If you have any questions about this Privacy Policy, your personal data, or our analytics practices, please contact us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <MapPin className="w-5 h-5 text-[#51B0B7] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-slate-600">
                  <strong className="block text-slate-800 font-semibold mb-0.5">Head Office</strong>
                  D-07, DAFZA, Dubai, UAE<br />PO Box 121743
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <Phone className="w-5 h-5 text-[#51B0B7] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-slate-600">
                  <strong className="block text-slate-800 font-semibold mb-0.5">Phone Inquiries</strong>
                  +971 (4) 295 2885<br />+971 56 175 7275
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <Mail className="w-5 h-5 text-[#51B0B7] mt-0.5 flex-shrink-0" />
                <div className="text-xs text-slate-600">
                  <strong className="block text-slate-800 font-semibold mb-0.5">Email Support</strong>
                  salesdwc@shepherdshipping.com<br />infodwc@shepherdshipping.com
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
