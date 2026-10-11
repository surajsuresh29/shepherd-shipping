"use client";

import { useState } from "react";
import { Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

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

export default function ContactClient() {
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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
      <section className="bg-[#F6F8FB] text-[#1E293B] py-20 px-6 sm:px-8 border-b border-[#E2E8F0]">
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

          {/* Form */}
          {submitted ? (
            <div className="bg-white border-l-4 border-[#51B0B7] p-8 text-left shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#51B0B7] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-[#0F2C4E] mb-2">
                    Enquiry received
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Thank you, {formData.fullName || "valued client"}. Our freight
                    operations team will review your cargo lane and reply with
                    pricing and transit schedules within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
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
                    }}
                    className="text-xs font-semibold text-[#184478] hover:text-[#51B0B7] transition-colors underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                {/* Full name* */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                </div>

                {/* Email* */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                </div>

                {/* Service type */}
                <div>
                  <label
                    htmlFor="shipmentType"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
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

                {/* Shipment details (full width) */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="details"
                    className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Shipment details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Cargo type, approximate weight/volume, any special handling..."
                    className="w-full bg-transparent border-0 border-b border-slate-300 rounded-none px-0 py-2.5 text-sm text-[#0F2C4E] placeholder:text-slate-400 focus:border-[#51B0B7] focus:ring-0 focus:outline-none transition-colors resize-y"
                  />
                </div>
              </div>

              {/* Submit Button & Subnotes */}
              <div className="mt-8 pt-2">
                <button
                  type="submit"
                  className="bg-[#184478] hover:bg-[#0F2C4E] text-white px-7 py-3.5 font-semibold text-sm transition-colors inline-flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#51B0B7]"
                >
                  <span>Send enquiry</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <div className="text-xs text-slate-500 leading-relaxed mt-4 space-y-0.5">
                  <p>We reply from our operations team, not an automated chatbot.</p>
                  <p>We respect your privacy; details are never shared.</p>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. OUR OFFICES SECTION (Full width dark gradient band, manifest-style sheet)
         ========================================================================= */}
      <section id="offices" className="shepherd-stripes-bg text-white py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 sm:mb-12 max-w-2xl text-left">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2"
              style={{
                fontFamily:
                  'var(--font-archivo), var(--font-inter), system-ui, sans-serif',
                fontWeight: 700,
              }}
            >
              Our offices
            </h2>
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
              Eight locations across the UAE and overseas, each handling its own
              pickups, customs and warehousing.
            </p>
          </div>

          {/* Manifest Sheet */}
          <div className="w-full">
            {/* Header row (Desktop only: small caps labels) */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 pb-3 border-b border-white/10 text-[11px] font-semibold uppercase tracking-wider text-slate-400/90 select-none">
              <div className="md:col-span-3">Office</div>
              <div className="md:col-span-4">Address</div>
              <div className="md:col-span-3">Phone</div>
              <div className="md:col-span-2">Hours</div>
            </div>

            {/* Office Rows with hairline dividers */}
            <div className="divide-y divide-white/10">
              {officesData.map((office) => (
                <div
                  key={office.name}
                  className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start text-left"
                >
                  {/* Office Column */}
                  <div className="md:col-span-3">
                    <span className="block text-white font-semibold text-base sm:text-lg leading-snug">
                      {office.name}
                    </span>
                    <span className="block text-[#51B0B7] text-xs font-medium mt-0.5 uppercase tracking-wide">
                      {office.sublabel}
                    </span>
                  </div>

                  {/* Address Column */}
                  <div className="md:col-span-4">
                    <span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Address
                    </span>
                    {office.isComingSoon ? (
                      <span className="text-[#51B0B7] text-sm italic">
                        coming soon
                      </span>
                    ) : (
                      <p
                        className="text-slate-300 text-sm leading-relaxed"
                        style={{
                          fontFamily:
                            'var(--font-manrope), "Noto Sans HK", "Microsoft JhengHei", "PingFang HK", system-ui, sans-serif',
                        }}
                      >
                        {office.address}
                      </p>
                    )}
                  </div>

                  {/* Phone Column */}
                  <div className="md:col-span-3">
                    <span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Phone
                    </span>
                    {office.phones.length === 1 && office.phones[0] === "—" ? (
                      <span className="text-slate-400 text-sm">—</span>
                    ) : (
                      <div className="flex flex-col gap-1 text-sm text-slate-300">
                        {office.phones.map((phone, pIdx) => (
                          <a
                            key={pIdx}
                            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                            className="hover:text-[#51B0B7] transition-colors inline-block"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hours Column */}
                  <div className="md:col-span-2">
                    <span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Hours
                    </span>
                    <span className="text-slate-300 text-sm leading-relaxed block">
                      {office.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
