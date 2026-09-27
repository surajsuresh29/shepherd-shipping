import { UserCheck, MessageCircle, Globe } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "A Dedicated Account Manager",
    description:
      "Reliable, personalised cargo services from an experienced team that ensures your goods arrive safely and on time.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication, Start to Finish",
    description:
      "We help businesses grow through smooth logistics, open communication, and a customer-centric approach.",
  },
  {
    icon: Globe,
    title: "National to Global Reach",
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
            Why Businesses Choose Shepherd
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`feature-card flex flex-col bg-white rounded-xl p-8 shadow-sm border border-border-light animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center justify-between mb-6">
                  {/* Icon badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#51B0B7]/10 border border-[#51B0B7]/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#51B0B7]" strokeWidth={1.8} />
                  </div>
                </div>
                {/* Teal accent line */}
                <div className="w-12 h-1 bg-secondary rounded-full mb-6" />
                <h3 className="text-lg font-bold text-primary mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[#5A6B87] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
