import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section id="home">
      {/* Hero Area */}
      <div className="relative w-full min-h-[85vh] lg:min-h-[900px] flex flex-col justify-start overflow-hidden bg-transparent">
        {/* Seamless Navbar Transition & Text Contrast Gradient */}
        <div 
          className="absolute inset-0 z-[1]" 
          style={{ background: 'linear-gradient(to bottom, rgba(24, 55, 90, 1) 0%, rgba(24, 55, 90, 1) 100px, rgba(24, 55, 90, 0.7) 250px, rgba(24, 55, 90, 0) 600px)' }}
        />

        {/* Background Video — autoplaying, looping, muted */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-ship.png"
            className="w-full h-full object-cover scale-110 translate-y-24 md:translate-y-32"
            style={{ objectPosition: 'center top' }}
          >
            <source src="/hero,ship_compressed.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content (Aligned top-left) */}
        <div className="relative z-[4] max-w-7xl mx-auto px-6 pt-28 md:pt-32 lg:pt-36 pb-20 w-full">
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

      {/* Animated Stats Bar */}
      <StatsBar />
    </section>
  );
}
