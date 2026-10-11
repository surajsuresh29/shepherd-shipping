export default function Industries() {
  return (
    <section className="shepherd-stripes-bg text-white py-8 sm:py-10 md:py-12 px-6 sm:px-8 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            Industries we move for
          </h2>
          <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed">
            From our Dubai hub, freight moves out to seven sectors across the world.
          </p>
        </div>

        {/* Compact Wave Journey Visualization */}
        <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="min-w-[840px] md:min-w-0 w-full">
            <svg
              viewBox="0 0 1100 216"
              className="w-full h-auto select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dotted Sine Wave Path connecting Dubai to all 7 sectors */}
              <path
                d="M 55 110 C 105 110, 130 84, 180 84 C 245 84, 260 136, 325 136 C 390 136, 405 84, 470 84 C 535 84, 550 136, 615 136 C 680 136, 695 84, 760 84 C 825 84, 840 136, 905 136 C 970 136, 985 84, 1045 84"
                stroke="#51B0B7"
                strokeWidth="1.5"
                strokeDasharray="2.5 3.5"
                strokeOpacity="0.75"
              />

              {/* ========================================================
                  START POINT: Dubai (x: 55, y: 110)
                 ======================================================== */}
              <g className="transition-all duration-300">
                <circle
                  cx="55"
                  cy="110"
                  r="7"
                  fill="#51B0B7"
                  fillOpacity="0.25"
                  stroke="#51B0B7"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
                <circle cx="55" cy="110" r="3.5" fill="#51B0B7" />
                <text
                  x="55"
                  y="129"
                  textAnchor="middle"
                  fill="#CBD5E1"
                  fontSize="12"
                  fontWeight="500"
                  fontFamily="inherit"
                >
                  Dubai
                </text>
              </g>

              {/* ========================================================
                  PEAK 1: Manufacturing (x: 180)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Sector Label */}
                <text
                  x="180"
                  y="32"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Manufacturing
                </text>
                {/* Cog Icon */}
                <g
                  transform="translate(169, 44)"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.4 14a1.5 1.5 0 0 0 .3 1.6l.05.05a1.8 1.8 0 0 1 0 2.5 1.8 1.8 0 0 1-2.5 0l-.05-.05a1.5 1.5 0 0 0-1.6-.3 1.5 1.5 0 0 0-.9 1.4V20a1.8 1.8 0 0 1-3.6 0v-.8A1.5 1.5 0 0 0 8 17.4a1.5 1.5 0 0 0-1.6.3l-.05.05a1.8 1.8 0 0 1-2.5 0 1.8 1.8 0 0 1 0-2.5l.05-.05a1.5 1.5 0 0 0 .3-1.6 1.5 1.5 0 0 0-1.4-.9H2a1.8 1.8 0 0 1 0-3.6h.8A1.5 1.5 0 0 0 4.2 8a1.5 1.5 0 0 0-.3-1.6l-.05-.05a1.8 1.8 0 0 1 0-2.5 1.8 1.8 0 0 1 2.5 0l.05.05a1.5 1.5 0 0 0 1.6.3H9a1.5 1.5 0 0 0 .9-1.4V2a1.8 1.8 0 0 1 3.6 0v.8a1.5 1.5 0 0 0 .9 1.4 1.5 1.5 0 0 0 1.6-.3l.05-.05a1.8 1.8 0 0 1 2.5 0 1.8 1.8 0 0 1 0 2.5l-.05.05a1.5 1.5 0 0 0-.3 1.6V9a1.5 1.5 0 0 0 1.4.9h.8a1.8 1.8 0 0 1 0 3.6h-.8a1.5 1.5 0 0 0-1.4.9Z"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Stem line */}
                <line
                  x1="180"
                  y1="68"
                  x2="180"
                  y2="76"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* Wave Anchor Ring */}
                <circle
                  cx="180"
                  cy="80"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
              </g>

              {/* ========================================================
                  TROUGH 1: Retail & wholesale (x: 325)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Wave Anchor Ring */}
                <circle
                  cx="325"
                  cy="140"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
                {/* Stem line */}
                <line
                  x1="325"
                  y1="144"
                  x2="325"
                  y2="152"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* Shopping Bag Icon */}
                <g
                  transform="translate(314, 154)"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <path
                    d="M4.5 7.5L3 19a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5l-1.5-11.5H4.5Z"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.5V5a3 3 0 0 1 6 0v2.5"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 11.5a2.5 2.5 0 0 0 5 0"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Sector Label */}
                <text
                  x="325"
                  y="196"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Retail &amp; wholesale
                </text>
              </g>

              {/* ========================================================
                  PEAK 2: Automobiles (x: 470)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Sector Label */}
                <text
                  x="470"
                  y="32"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Automobiles
                </text>
                {/* CarFront Icon */}
                <g
                  transform="translate(459, 44)"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M6 7L7.5 3.5A1.5 1.5 0 0 1 8.9 2.5h4.2a1.5 1.5 0 0 1 1.4 1L16 7"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="7"
                    width="16"
                    height="8.5"
                    rx="2"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6.5" cy="11.2" r="1.2" fill="#51B0B7" />
                  <circle cx="15.5" cy="11.2" r="1.2" fill="#51B0B7" />
                  <path
                    d="M9.5 11.5h3"
                    stroke="#51B0B7"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 15.5v2M17 15.5v2"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
                {/* Stem line */}
                <line
                  x1="470"
                  y1="68"
                  x2="470"
                  y2="76"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* Wave Anchor Ring */}
                <circle
                  cx="470"
                  cy="80"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
              </g>

              {/* ========================================================
                  TROUGH 2: Electronics (x: 615)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Wave Anchor Ring */}
                <circle
                  cx="615"
                  cy="140"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
                {/* Stem line */}
                <line
                  x1="615"
                  y1="144"
                  x2="615"
                  y2="152"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* CPU Microchip Icon */}
                <g
                  transform="translate(604, 154)"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <rect
                    x="5"
                    y="5"
                    width="12"
                    height="12"
                    rx="2"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="8.5"
                    y="8.5"
                    width="5"
                    height="5"
                    rx="0.8"
                    stroke="#51B0B7"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.5 1.5v3.5M13.5 1.5v3.5M8.5 17v3.5M13.5 17v3.5M1.5 8.5h3.5M1.5 13.5h3.5M17 8.5h3.5M17 13.5h3.5"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Sector Label */}
                <text
                  x="615"
                  y="196"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Electronics
                </text>
              </g>

              {/* ========================================================
                  PEAK 3: Lifestyle & fashion (x: 760)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Sector Label */}
                <text
                  x="760"
                  y="32"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Lifestyle &amp; fashion
                </text>
                {/* Clothes Hanger Icon */}
                <g
                  transform="translate(749, 44)"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M11 6a2 2 0 1 1 2-2c0 1.5-1.5 2.2-2 3.2"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 7.2L2.5 14a1.2 1.2 0 0 0 .7 2h15.6a1.2 1.2 0 0 0 .7-2L11 7.2Z"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Stem line */}
                <line
                  x1="760"
                  y1="68"
                  x2="760"
                  y2="76"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* Wave Anchor Ring */}
                <circle
                  cx="760"
                  cy="80"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
              </g>

              {/* ========================================================
                  TROUGH 3: Construction (x: 905)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Wave Anchor Ring */}
                <circle
                  cx="905"
                  cy="140"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
                {/* Stem line */}
                <line
                  x1="905"
                  y1="144"
                  x2="905"
                  y2="152"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* HardHat Icon */}
                <g
                  transform="translate(894, 154)"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <path
                    d="M9.5 8V3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V8"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 5a6 6 0 0 1 6 6v2M3 13v-2a6 6 0 0 1 6-6"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="13"
                    width="18"
                    height="3.5"
                    rx="1"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Sector Label */}
                <text
                  x="905"
                  y="196"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Construction
                </text>
              </g>

              {/* ========================================================
                  PEAK 4: Agriculture (x: 1045)
                 ======================================================== */}
              <g className="group cursor-pointer">
                {/* Sector Label */}
                <text
                  x="1045"
                  y="32"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13.5"
                  fontWeight="600"
                  fontFamily="inherit"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                >
                  Agriculture
                </text>
                {/* Leaf Icon */}
                <g
                  transform="translate(1034, 44)"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M11 18.5A7 7 0 0 1 9.5 4.5C15 3.5 16.5 3 18.5 1c1 2 2 4.2 2 8 0 5.5-4.5 9.5-9.5 9.5Z"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 19.5c0-3 1.8-5.3 5-6 2.5-.5 5-2 6-3"
                    stroke="#51B0B7"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                {/* Stem line */}
                <line
                  x1="1045"
                  y1="68"
                  x2="1045"
                  y2="76"
                  stroke="#51B0B7"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                {/* Wave Anchor Ring */}
                <circle
                  cx="1045"
                  cy="80"
                  r="3.2"
                  fill="none"
                  stroke="#51B0B7"
                  strokeWidth="1.5"
                  className="group-hover:fill-[#51B0B7] transition-colors"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
