import { useInView } from '../hooks/useInView';
import { ShieldCheck, Leaf, Heart, Sparkles, Clock, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'No chemicals, no preservatives. Just pure, earth-derived ingredients your body recognizes.',
    color: 'text-sage-500',
    bg: 'bg-sage-50',
  },
  {
    icon: ShieldCheck,
    title: 'Ayurvedic Wisdom',
    description: 'Formulated using time-tested Ayurvedic principles that have healed for thousands of years.',
    color: 'text-lavender-500',
    bg: 'bg-lavender-50',
  },
  {
    icon: Heart,
    title: 'Gentle on You',
    description: 'Designed specifically for feminine bodies. Soothing, never harsh. Comfort first, always.',
    color: 'text-blush-500',
    bg: 'bg-blush-50',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Small-batch, handcrafted with care. Every product meets the highest standards of purity.',
    color: 'text-cream-600',
    bg: 'bg-cream-50',
  },
  {
    icon: Clock,
    title: 'Fast Relief',
    description: 'Feel the difference within minutes. Our formulas are designed for quick, effective comfort.',
    color: 'text-sand-500',
    bg: 'bg-sand-50',
  },
  {
    icon: Globe,
    title: 'Ethically Sourced',
    description: 'Supporting local farmers and sustainable practices. Good for you, good for the planet.',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
  },
];

export default function Benefits() {
  const { ref, isInView } = useInView();

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-white to-lavender-50/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-lavender-600 tracking-widest uppercase mb-3">
            Why MoonEase
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sand-800 mb-4">
            Wellness that <span className="gradient-text italic">works</span>
          </h2>
          <p className="text-sand-500 text-lg max-w-2xl mx-auto">
            We believe your period products should be as intentional as your self-care routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-lavender-100/40 hover:border-lavender-200/60 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-sand-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sand-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
