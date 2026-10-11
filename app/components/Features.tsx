const reasons = [
  {
    numeral: "01",
    title: "One person who knows your account",
    description:
      "You deal with one account manager who knows your cargo, routes and deadlines. Call or message them directly.",
  },
  {
    numeral: "02",
    title: "An update at every handover",
    description:
      "You hear from us at pickup, customs clearance, departure and delivery, not only when something goes wrong.",
  },
  {
    numeral: "03",
    title: "UAE to international destinations",
    description:
      "Deliveries across the UAE, plus regular lanes to the US, China, Hong Kong and India.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#d9dee5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-12 text-left">
          Why businesses choose Shepherd
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={item.numeral}
              className={`flex flex-col text-left ${
                index === 0
                  ? "pb-8 md:pb-0 md:pl-0 md:pr-8"
                  : index === 1
                  ? "pt-8 pb-8 border-t border-[#d9dee5] md:pt-0 md:pb-0 md:border-t-0 md:border-l md:border-[#d9dee5] md:px-8"
                  : "pt-8 border-t border-[#d9dee5] md:pt-0 md:border-t-0 md:border-l md:border-[#d9dee5] md:px-8"
              }`}
            >
              <span className="text-[40px] leading-none font-semibold text-secondary mb-4">
                {item.numeral}
              </span>
              <h3 className="text-xl font-bold text-primary mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#5A6B87] text-sm md:text-[15px] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
