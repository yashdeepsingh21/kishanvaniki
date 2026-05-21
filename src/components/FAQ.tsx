import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Are your products safe for sensitive skin?',
    a: 'Absolutely. All our products are made with 100% natural, organic ingredients. Our handmade soaps are free from sulfates, parabens, and artificial fragrances. However, we always recommend doing a patch test if you have specific allergies.',
  },
  {
    q: 'How quickly does the Cramp Relief Tea work?',
    a: 'Most women feel relief within 20-30 minutes of drinking the tea. The warming herbs like ginger and cinnamon work quickly to relax uterine muscles. For best results, drink it at the first sign of cramps.',
  },
  {
    q: 'What is in the Menstrual Cramp Relief Kit?',
    a: 'The kit includes our Ayurvedic Cramp Relief Tea (7 sachets), Organic Gud (jaggery) cubes, a reusable heat patch, and a printed self-care guide with breathing exercises and Ayurvedic tips for period wellness.',
  },
  {
    q: 'Is the jaggery really organic?',
    a: 'Yes. Our Gud is sourced from certified organic farms in Maharashtra. It is made using traditional pressing methods with no chemicals, no additives, and no refining. Just pure, mineral-rich jaggery.',
  },
  {
    q: 'Can I gift the Mood Swing Comfort box?',
    a: 'That is exactly what it is designed for! Each box comes beautifully packaged with a handwritten note option. It includes calming chamomile tea, dark chocolate, a lavender sachet, and a guided journal. Perfect for someone you care about.',
  },
  {
    q: 'Do you ship across India?',
    a: 'Yes, we ship to all major cities and most pin codes across India. Delivery typically takes 3-5 business days. We also offer express delivery in metro cities.',
  },
];

export default function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200/50 to-transparent" />

      <div className="max-w-3xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-lavender-600 tracking-widest uppercase mb-3">
            Questions?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sand-800 mb-4">
            We have <span className="gradient-text italic">answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-lavender-100/60 bg-white/70 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-lavender-200/80 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-medium text-sand-800 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-lavender-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-sand-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
