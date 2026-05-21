import { useInView } from '../hooks/useInView';
import { Building2, Leaf, HeartPulse, Truck, TreePine, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: Building2,
    title: '25+ Advanced Plant Chambers',
    description: 'State-of-the-art climate-controlled chambers ensuring optimal growth conditions for every plant variety.',
    color: 'text-forest-600',
    bg: 'bg-forest-50',
    border: 'border-forest-100',
  },
  {
    icon: Leaf,
    title: 'Original P23 Plants',
    description: 'We specialize in authentic P23 Original Plants — the premium choice trusted by farmers across India.',
    color: 'text-forest-700',
    bg: 'bg-forest-50',
    border: 'border-forest-100',
  },
  {
    icon: HeartPulse,
    title: 'Healthy & Certified Plants',
    description: 'Every plant undergoes rigorous quality checks. We deliver only certified, disease-free plants.',
    color: 'text-earth-600',
    bg: 'bg-earth-50',
    border: 'border-earth-100',
  },
  {
    icon: Truck,
    title: 'All India Plant Booking',
    description: 'Book your plants online and get them delivered anywhere in India. Safe packaging guaranteed.',
    color: 'text-bark-600',
    bg: 'bg-bark-50',
    border: 'border-bark-100',
  },
  {
    icon: TreePine,
    title: 'Direct From Nursery',
    description: 'No middlemen. Every plant comes directly from our nursery to your doorstep, ensuring freshness and quality.',
    color: 'text-forest-600',
    bg: 'bg-forest-50',
    border: 'border-forest-100',
  },
  {
    icon: Headphones,
    title: 'Expert Guidance',
    description: 'Our team of horticulture experts provides planting guidance and after-sale support for every order.',
    color: 'text-earth-600',
    bg: 'bg-earth-50',
    border: 'border-earth-100',
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section id="why-us" className="section-padding bg-gradient-to-b from-cream-50/50 to-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            What makes us <span className="gradient-text-green italic">different</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto">
            We combine traditional horticulture wisdom with modern technology to deliver plants that truly thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group p-7 rounded-2xl bg-white border ${reason.border} hover:border-forest-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${reason.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${reason.color}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-earth-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
