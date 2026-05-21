import { ChevronDown, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Nursery plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/70 to-forest-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-forest-950/20" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-32 right-[10%] animate-float opacity-20">
        <Leaf className="w-16 h-16 text-forest-300 rotate-12" />
      </div>
      <div className="absolute bottom-40 left-[8%] animate-float animation-delay-400 opacity-15">
        <Leaf className="w-12 h-12 text-forest-400 -rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-500/20 backdrop-blur-sm border border-forest-400/30 mb-8 animate-fade-in-down">
            <Leaf className="w-4 h-4 text-forest-300" />
            <span className="text-sm font-medium text-forest-200">
              Established in Bijnor, Uttar Pradesh
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            India's Trusted{' '}
            <span className="text-forest-300 italic">High-Tech</span>
            <br />
            Plant Nursery
          </h1>

          <p className="text-lg md:text-xl text-forest-100/90 leading-relaxed max-w-xl mb-10 animate-fade-in-up animation-delay-200">
            Premium Quality P23 Original Plants and Wide Variety of Nursery Plants
            Available Across India. Grown with care, delivered with trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold shadow-lg shadow-forest-500/30 hover:shadow-xl hover:shadow-forest-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Plants Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Nursery
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-forest-300/60" />
      </div>
    </section>
  );
}
