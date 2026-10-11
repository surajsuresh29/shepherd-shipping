"use client";

import { useActionState, useState, useRef, useEffect } from "react";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { sendEnquiry, type EnquiryState } from "@/app/actions/send-enquiry";

interface OfficeLocation {
  name: string;
  sublabel: string;
  address: string;
  phones: string[];
  hours: string;
  isComingSoon?: boolean;
}

const officesData: OfficeLocation[] = [
  {
    name: "Head Office",
    sublabel: "DAFZA, Dubai",
    address: "D-07, DAFZA, Dubai–UAE, PO Box: 121743",
    phones: [
      "+971 56 175 7275",
      "+971 56 175 7303",
      "+971 56 175 7279",
      "+971 (4) 295 2885",
    ],
    hours: "Mon to Sat, 8:30am–3:00pm, Sun off",
  },
  {
    name: "Branch 2",
    sublabel: "Naif, Dubai",
    address: "Al Dalal Building, S03, Naif, Dubai",
    phones: [
      "+971 56 175 7275",
      "+971 50 175 7146",
      "+971 (4) 3207687",
    ],
    hours: "Mon to Sat, 11am–11:30pm, Sun off",
  },
  {
    name: "Branch 3",
    sublabel: "Jebel Ali Free Zone",
    address:
      'Warehouse # A001, Dubai Traders Market "Yiwu Market", Jebel Ali Free Zone, Dubai, UAE',
    phones: [
      "+971 56 175 7275",
      "+971 50 175 7209",
      "+971 (4) 330 5266",
    ],
    hours: "Mon to Sat, 8:30am–6:30pm, Sun off",
  },
  {
    name: "Branch 4",
    sublabel: "Jebel Ali North",
    address: "Building No. RA08FB01, near Gate No. 7, Jebel Ali North",
    phones: [
      "+971 56 175 7275",
      "+971 50 175 7209",
      "+971 (4) 330 5266",
    ],
    hours: "Mon to Sat, 8:30am–6:30pm, Sun off",
  },
  {
    name: "Branch 5",
    sublabel: "Umm Ramool, Rashidiya",
    address:
      "Shepherd International Logistics, Warehouse No. 8, 5th Street, Umm Ramool, Rashidiya",
    phones: [
      "+971 042579479",
      "+9710501757146",
    ],
    hours: "Mon to Sat, 8:30am–6:30pm, Sun off",
  },
  {
    name: "Hong Kong Branch",
    sublabel: "Kwun Tong",
    address:
      "Shepherd International Logistics Hong Kong Limited, Unit D1, 12/F, Hoi Bun Industrial Building, 6 Wing Yip Street, Kwun Tong, 觀塘榮業街6號 海濱工業大廈12樓D1室",
    phones: ["+852 9444 5554"],
    hours: "—",
  },
  {
    name: "Miami Branch",
    sublabel: "Florida, USA",
    address: "1701 NW 84th Ave, Suite B-16, Miami, FL 33126",
    phones: ["+1-877-841-1954"],
    hours: "—",
  },
  {
    name: "India",
    sublabel: "coming soon",
    address: "—",
    phones: ["—"],
    hours: "—",
    isComingSoon: true,
  },
];

const initialActionState: EnquiryState = {
  success: false,
};

export default function ContactClient() {
  const [state, formAction, isPending] = useActionState(
    sendEnquiry,
    initialActionState
  );

  const turnstileRef = useRef<TurnstileInstance>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isDismissed, setIsDismissed] = useState(false);
  const [formKey, setFormKey] = useState(0);

  // Controlled form state so values are retained during validation errors
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    shipmentType: "Air Freight",
    expectedDate: "",
    origin: "",
    destination: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Sync with submittedValues returned from server action if available
  useEffect(() => {
    if (state.submittedValues && !state.success) {
      setFormData((prev) => ({
        fullName: state.submittedValues?.name ?? prev.fullName,
        company: state.submittedValues?.company ?? prev.company,
        email: state.submittedValues?.email ?? prev.email,
        phone: state.submittedValues?.phone ?? prev.phone,
        shipmentType: state.submittedValues?.serviceType ?? prev.shipmentType,
        expectedDate: state.submittedValues?.expectedDate ?? prev.expectedDate,
        origin: state.submittedValues?.origin ?? prev.origin,
        destination: state.submittedValues?.destination ?? prev.destination,
        details: state.submittedValues?.message ?? prev.details,
      }));
    }
  }, [state.timestamp, state.success, state.submittedValues]);

  // Sync dismiss status when a new submission occurs
  useEffect(() => {
    if (state.success) {
      setIsDismissed(false);
    }
  }, [state.timestamp, state.success]);

  // Reset turnstile when an error occurs so the user can complete the challenge again
  useEffect(() => {
    if (state.timestamp && !state.success) {
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }, [state.timestamp, state.success]);

  // When form is submitted successfully, scroll directly to the confirmation card
  useEffect(() => {
    if (state.success && !isDismissed) {
      // Clear any #offices anchor from URL so the browser doesn't pull the screen down
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      const timer = setTimeout(() => {
        confirmationRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [state.success, isDismissed]);

  const handleResetForm = () => {
    setIsDismissed(true);
    setFormKey((prev) => prev + 1);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      shipmentType: "Air Freight",
      expectedDate: "",
      origin: "",
      destination: "",
      details: "",
    });
    setTurnstileToken("");
    turnstileRef.current?.reset();
    formRef.current?.reset();
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <main
      className="min-h-screen bg-white"
      style={{
        fontFamily:
          'var(--font-manrope), var(--font-inter), "Noto Sans HK", "Microsoft JhengHei", "PingFang HK", system-ui, sans-serif',
      }}
    >
      {/* =========================================================================
          1. HERO SECTION (Dark navy gradient with diagonal stripes)
         ========================================================================= */}
      <section className="shepherd-stripes-bg text-white pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Headline & Subhead */}
            <div className="lg:col-span-7">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-[1.08]"
                style={{
                  fontFamily:
                    'var(--font-archivo), var(--font-inter), system-ui, sans-serif',
                  fontWeight: 800,
                }}
              >
                Let&apos;s talk cargo
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Tell us what&apos;s moving and where — a specialist in air, sea,
                land or customs will size up the lane and get back to you within
                one business day.
              </p>
            </div>

            {/* Right Column: Quick Contact Rail (Head Office only, hairline dividers, no cards) */}
            <div className="lg:col-span-5 border-t border-b border-white/10 divide-y divide-white/10">
              {/* Phone Row */}
              <div className="py-4 flex items-start gap-3.5">
                <Phone
                  className="w-4 h-4 text-[#51B0B7] mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-0.5">
                    Call the office
                  </span>
                  <a
                    href="tel:+97142952885"
                    className="text-white font-medium text-sm sm:text-base hover:text-[#51B0B7] transition-colors"
                  >
                    +971 (4) 295 2885
                  </a>
                </div>
              </div>

              {/* Email Row */}
              <div className="py-4 flex items-start gap-3.5">
                <Mail
                  className="w-4 h-4 text-[#51B0B7] mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-0.5">
                    General sales
                  </span>
                  <a
                    href="mailto:salesdwc@shepherdshipping.com"
                    className="text-white font-medium text-sm sm:text-base hover:text-[#51B0B7] transition-colors break-all"
                  >
                    salesdwc@shepherdshipping.com
                  </a>
                </div>
              </div>

              {/* Office Hours Row */}
              <div className="py-4 flex items-start gap-3.5">
                <Clock
                  className="w-4 h-4 text-[#51B0B7] mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-0.5">
                    Office hours
                  </span>
                  <p className="text-white/80 text-sm font-normal">
                    Mon–Sat, 8:30am–3:00pm · Sun off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FORM SECTION (Light background #F6F8FB, max-width ~760px, underlined fields)
         ========================================================================= */}
      <section
        ref={sectionRef}
        id="enquiry"
        className="bg-[#F6F8FB] text-[#1E293B] py-20 px-6 sm:px-8 border-b border-[#E2E8F0] min-h-[550px] scroll-mt-24 transition-all"
      >
        <div className="max-w-[760px] mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0F2C4E] tracking-tight mb-3 text-left"
              style={{
                fontFamily:
                  'var(--font-archivo), var(--font-inter), system-ui, sans-serif',
                fontWeight: 700,
              }}
            >
              Send a shipment enquiry
            </h2>
            <p className="text-[#5A6B87] text-sm sm:text-base leading-relaxed text-left">
              The more detail you give us up front, the faster we can quote — rough
              dimensions and dates are fine if you don&apos;t have exact figures
              yet.
            </p>
          </div>

          {/* Form / Success Feedback */}
          {state.success && !isDismissed ? (
            <div
              ref={confirmationRef}
              className="bg-white border-l-4 border-[#51B0B7] p-8 sm:p-10 text-left shadow-sm rounded-xs scroll-mt-32 my-4"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-[#51B0B7] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-[#0F2C4E] mb-2">
                    Enquiry received
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {state.message ||
                      "Thank you! Our freight operations team will review your cargo lane and reply with pricing and transit schedules within one business day."}
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 bg-[#184478] hover:bg-[#51B0B7] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Send another enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form
              key={formKey}
              ref={formRef}
              action={formAction}
              className="text-left"
              noValidate
            >
              {/* Form-level error alert */}
              {state.errors?._form && (
                <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Submission error</span>
                    <p className="text-xs mt-0.5 text-red-700">
                      {state.errors._form[0]}
                    </p>
                  </div>
                </div>
              )}

              {/* Hidden Turnstile Token Input */}
              <input
                type="hidden"
                name="turnstileToken"
                value={turnstileToken}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                {/* Full name* */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Full name <span className="text-[#51B0B7]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                  {state.errors?.name && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                  {state.errors?.company && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {state.errors.company[0]}
                    </p>
                  )}
                </div>

                {/* Email* */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Email <span className="text-[#51B0B7]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                  {state.errors?.email && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971..."
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                  {state.errors?.phone && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {state.errors.phone[0]}
                    </p>
                  )}
                </div>

                {/* Service type */}
                <div>
                  <label
                    htmlFor="shipmentType"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Service type
                  </label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Air Freight">Air Freight</option>
                    <option value="Sea Freight">Sea Freight</option>
                    <option value="Land Transport">Land Transport</option>
                    <option value="Customs Clearance">Customs Clearance</option>
                    <option value="Warehousing & Distribution">
                      Warehousing &amp; Distribution
                    </option>
                    <option value="Multimodal / Project Cargo">
                      Multimodal / Project Cargo
                    </option>
                  </select>
                </div>

                {/* Expected date */}
                <div>
                  <label
                    htmlFor="expectedDate"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Expected date
                  </label>
                  <input
                    type="text"
                    id="expectedDate"
                    name="expectedDate"
                    value={formData.expectedDate}
                    onChange={handleChange}
                    placeholder="e.g. Mid-November"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                {/* Origin */}
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Origin
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    placeholder="City, country"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="City, country"
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                {/* Shipment details / Message (full width)* */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="details"
                    className="block text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider mb-1.5"
                  >
                    Shipment details / Message <span className="text-[#51B0B7]">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Cargo type, approximate weight/volume, any special handling requirements..."
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors resize-y"
                  />
                  {state.errors?.message && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Cloudflare Turnstile Verification Widget */}
              <div className="mt-8 pt-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0F2C4E] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#51B0B7]" />
                    <span>Security Verification</span>
                  </div>
                  <div className="min-h-[65px]">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={
                        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                        "1x00000000000000000000AA"
                      }
                      onSuccess={(token) => setTurnstileToken(token)}
                      onExpire={() => setTurnstileToken("")}
                      onError={() => setTurnstileToken("")}
                      options={{
                        theme: "light",
                        size: "normal",
                      }}
                    />
                  </div>
                  {state.errors?.turnstile && (
                    <p className="text-xs text-red-600 mt-1 font-medium">
                      {state.errors.turnstile[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button & Subnotes */}
              <div className="mt-8 pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-[#184478] hover:bg-[#51B0B7] disabled:bg-slate-400 text-white px-7 py-3.5 font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2.5 cursor-pointer disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#51B0B7] shadow-sm active:scale-[0.99]"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Verifying &amp; sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send enquiry</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                <div className="text-xs text-slate-500 leading-relaxed mt-4 space-y-0.5">
                  <p>We reply from our operations team, not an automated chatbot.</p>
                  <p>
                    For immediate urgent shipments, call our Head Office directly at{" "}
                    <a
                      href="tel:+97142952885"
                      className="text-[#184478] font-semibold hover:text-[#51B0B7] transition-colors"
                    >
                      +971 (4) 295 2885
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. OUR OFFICES SECTION (Full width dark gradient band, manifest-style sheet)
         ========================================================================= */}
      <section
        id="offices"
        className="shepherd-stripes-bg text-white py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 sm:mb-12 max-w-2xl text-left">
            <span className="inline-block text-[#51B0B7] text-xs font-semibold tracking-wider uppercase mb-2">
              Global Presence
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{
                fontFamily:
                  'var(--font-archivo), var(--font-inter), system-ui, sans-serif',
                fontWeight: 700,
              }}
            >
              Our offices
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              8 locations across the UAE, Hong Kong, and North America.
            </p>
          </div>

          {/* Manifest Table / Sheet */}
          <div className="overflow-x-auto border-t border-b border-white/15">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/15 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 pr-6 font-semibold w-[22%]">Office</th>
                  <th className="py-3.5 px-6 font-semibold w-[38%]">Address</th>
                  <th className="py-3.5 px-6 font-semibold w-[22%]">Phone(s)</th>
                  <th className="py-3.5 pl-6 font-semibold w-[18%]">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/90">
                {officesData.map((office, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.03] transition-colors align-top"
                  >
                    {/* Office Name & Sublabel */}
                    <td className="py-4 pr-6">
                      <div className="font-semibold text-white">
                        {office.name}
                      </div>
                      <div className="text-xs text-[#51B0B7] mt-0.5">
                        {office.sublabel}
                      </div>
                    </td>

                    {/* Address */}
                    <td className="py-4 px-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {office.isComingSoon ? (
                        <span className="text-slate-500 italic">
                          Location details coming soon
                        </span>
                      ) : (
                        office.address
                      )}
                    </td>

                    {/* Phones */}
                    <td className="py-4 px-6 text-xs sm:text-sm">
                      {office.isComingSoon ? (
                        <span className="text-slate-500">—</span>
                      ) : (
                        <div className="space-y-1">
                          {office.phones.map((p, pIdx) => (
                            <div key={pIdx}>
                              <a
                                href={`tel:${p.replace(/[^0-9+]/g, "")}`}
                                className="text-white hover:text-[#51B0B7] transition-colors whitespace-nowrap"
                              >
                                {p}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </td>

                    {/* Hours */}
                    <td className="py-4 pl-6 text-xs text-slate-300">
                      {office.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
