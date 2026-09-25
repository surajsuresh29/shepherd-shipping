const features = [
  {
    title: "Leading Freight Forwarding Company in Dubai",
    description:
      "Reliable and personalised cargo services from an experienced team that ensures your goods arrive safely and on time.",
  },
  {
    title: "Reliable Forwarding Companies in Dubai",
    description:
      "We do not just transport freight. We help businesses grow through smooth logistics, open communication and a customer-centric approach.",
  },
  {
    title: "Complete Freight Solutions with Trusted Dubai Freight Forwarders",
    description:
      "National, regional and global reach give your business a competitive edge, with smooth coordination on every shipment.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-bg-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why businesses choose Shepherd
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card bg-white rounded-xl p-8 shadow-sm border border-border-light animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Teal accent line */}
              <div className="w-12 h-1 bg-secondary rounded-full mb-6" />
              <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
