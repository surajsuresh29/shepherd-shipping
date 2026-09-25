import { Clock, Building2, LayoutGrid, MapPin } from "lucide-react";

const stats = [
  { number: "21", label: "Years experience in transportation", icon: Clock },
  { number: "2004", label: "Established in Dubai, U.A.E.", icon: Building2 },
  { number: "4", label: "Core services: air, sea, customs, 3PL", icon: LayoutGrid },
  { number: "7", label: "Branches and warehouses", icon: MapPin },
];

export default function Hero() {
  return (
    <section id="home">
      {/* Hero Area */}
      {/* Hero Area */}
      <div className="relative w-full min-h-[85vh] lg:min-h-[900px] flex flex-col justify-start overflow-hidden bg-transparent">
        {/* Seamless Navbar Transition Gradient */}
        <div className="absolute top-0 left-0 right-0 h-48 lg:h-64 bg-gradient-to-b from-primary to-transparent z-[1]" />

        {/* Background Video — autoplaying, looping, muted */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110 translate-y-8"
            style={{ objectPosition: 'center 85%' }}
          >
            <source src="/hero,ship.mp4" type="video/mp4" />
          </video>
        </div>


        {/* Content (Aligned top-left) */}
        <div className="relative z-[4] max-w-7xl mx-auto px-6 pt-8 md:pt-12 lg:pt-16 pb-20 w-full">
          <div className="max-w-4xl bg-black/10 backdrop-blur-[2px] p-4 lg:p-0 rounded-2xl lg:bg-transparent lg:backdrop-blur-none">
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white leading-[1.05] tracking-tight animate-fade-in-up">
              DELIVERING PROMISES,<br className="hidden md:block" /> NOT JUST PACKAGES.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/95 leading-relaxed animate-fade-in-up delay-200 drop-shadow-md font-medium">
              Dubai-based freight forwarder since 2004. Air freight, sea freight,
              customs clearance and 3PL warehousing, handled by one reliable team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#contact"
                className="inline-flex items-center bg-white text-primary font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Get a freight quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center border-2 border-white/80 bg-black/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/30 hover:border-white transition-all duration-300 shadow-xl"
              >
                See our services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary border-t-[3px] border-[#51B0B7] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.035)_0_2px,transparent_2px_26px)]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/15">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={`flex items-center gap-4 py-6 first:pt-0 last:pb-0 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0 flex-1 animate-count-up delay-${(index + 1) * 100}`}
            >
              <div className="flex-none w-14 h-14 rounded-2xl bg-[#51B0B7]/10 border border-[#51B0B7]/30 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#51B0B7]" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[#51B0B7] text-4xl lg:text-5xl font-bold tracking-tight leading-none">
                  {stat.number}
                </div>
                <div className="text-white/90 text-[13px] mt-1.5 font-medium leading-snug max-w-[200px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
