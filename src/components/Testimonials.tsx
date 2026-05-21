import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajendra Singh',
    location: 'Rajasthan',
    role: 'Farmer',
    text: 'I ordered 200 P23 plants from Kisan Vaniki Nursery and every single one was healthy and well-rooted. The growth rate has been exceptional. This is the best nursery I have worked with.',
    rating: 5,
  },
  {
    name: 'Anita Sharma',
    location: 'Madhya Pradesh',
    role: 'Plant Buyer',
    text: 'The quality of plants is outstanding. I received my order within a week, properly packed. The team even followed up to check if the plants were doing well. Truly professional.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    location: 'Gujarat',
    role: 'Agriculture Consultant',
    text: 'I have been recommending Kisan Vaniki to all my clients. Their P23 variety is genuine and the plants are disease-free. The advanced chambers they use really make a difference in plant health.',
    rating: 5,
  },
  {
    name: 'Sunita Devi',
    location: 'Uttar Pradesh',
    role: 'Organic Farmer',
    text: 'From booking to delivery, everything was smooth. The fruit plants I received are already flowering. The nursery team provided excellent guidance on planting and care. Highly recommended.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-forest-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cream-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Trusted by <span className="gradient-text-green italic">farmers</span> across India
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto">
            Hear from farmers and plant buyers who trust Kisan Vaniki for their plant needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-cream-50/80 to-forest-50/30 border border-forest-100/40 hover:border-forest-200/60 shadow-sm hover:shadow-lg transition-all duration-500 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-forest-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-earth-400 text-earth-400" />
                ))}
              </div>
              <p className="text-earth-700 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-earth-900">{t.name}</p>
                  <p className="text-sm text-earth-500">{t.role}, {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
