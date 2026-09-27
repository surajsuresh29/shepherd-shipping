import Image from "next/image";

const services = [
  {
    id: "air-sea",
    title: "Air & Sea Freight",
    description:
      "Reliable, personalised cargo services by air and sea. Your shipment arrives on time and in the correct condition, whether it is for business or personal needs.",
    image: "/service-sea-freight.png",
    gridClass: "md:col-span-2 md:row-span-1",
    subItems: [
      "Daily customs office engagement. Sun off",
      "Proton logistics planner reviewing a supply chain.",
    ],
  },
  {
    id: "customs",
    title: "Customs Clearance",
    description:
      "An experienced team that keeps your goods moving and delivered safely.",
    image: "/service-customs.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
    subItems: [],
  },
  {
    id: "customised",
    title: "Customised Solutions",
    description:
      "Tailored to your business and budget, for complex supply chains.",
    image: "/service-custom-solutions.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
    subItems: [],
  },
  {
    id: "warehousing",
    title: "3PL Warehousing & Distribution",
    description:
      "Safe storage and management of your goods, with warehouses at Dubai South free zone and in Guangzhou.",
    image: "/warehousing.png",
    gridClass: "md:col-span-1 md:row-span-2",
    subItems: [],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            Complete freight solutions from Dubai to the world
          </h2>
          <p className="mt-4 text-text-gray text-base leading-relaxed">
            Air, sea, customs clearance and 3PL warehousing, with transparent
            service and competitive rates.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Air & Sea Freight - Spans 2 columns */}
          <div className="md:col-span-2 md:row-span-1 group">
            <div className="service-card bg-primary rounded-xl overflow-hidden h-full">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={services[0].image}
                  alt={services[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {services[0].title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* 3PL Warehousing - Spans 2 rows vertically */}
          <div className="md:col-span-1 md:row-span-2 group">
            <div className="service-card bg-primary rounded-xl overflow-hidden h-full flex flex-col">
              <div className="relative flex-1 min-h-[300px] overflow-hidden">
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {services[3].title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {services[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Customs Clearance */}
          <div className="md:col-span-1 md:row-span-1 group">
            <div className="service-card bg-primary rounded-xl overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={services[1].image}
                  alt={services[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {services[1].title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Customised Solutions */}
          <div className="md:col-span-1 md:row-span-1 group">
            <div className="service-card bg-primary rounded-xl overflow-hidden h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {services[2].title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
