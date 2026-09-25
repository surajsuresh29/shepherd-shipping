export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-primary relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to ship with Shepherd?
        </h2>
        <p className="text-white/75 text-base md:text-lg mb-8 leading-relaxed">
          Call +971 (4) 295 2885 or email salesdwc@shepherdshipping.com
        </p>
        <a
          href="mailto:salesdwc@shepherdshipping.com"
          className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl cta-pulse"
        >
          Get a freight quote
        </a>
      </div>
    </section>
  );
}
