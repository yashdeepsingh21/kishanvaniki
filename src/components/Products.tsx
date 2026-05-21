import { useInView } from '../hooks/useInView';
import { Leaf, Droplets, Package, Gift, Heart } from 'lucide-react';

const products = [
  {
    name: 'Ayurvedic Cramp Relief Tea',
    description: 'A warming blend of ashwagandha, ginger, and cinnamon to soothe cramps naturally from within.',
    icon: Leaf,
    gradient: 'from-sage-100 to-sage-200/60',
    border: 'border-sage-200/40',
    iconColor: 'text-sage-600',
    accent: 'bg-sage-400/10',
    image: 'https://images.pexels.com/photos/5946631/pexels-photo-5946631.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Organic Gud (Jaggery)',
    description: 'Pure, unrefined jaggery rich in iron and minerals. A wholesome sweetener that nourishes your body.',
    icon: Heart,
    gradient: 'from-cream-100 to-cream-200/60',
    border: 'border-cream-300/40',
    iconColor: 'text-cream-700',
    accent: 'bg-cream-400/10',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Organic Handmade Soap',
    description: 'Gentle, chemical-free soap infused with turmeric and rose. Kind to your skin and the planet.',
    icon: Droplets,
    gradient: 'from-blush-50 to-blush-100/60',
    border: 'border-blush-200/40',
    iconColor: 'text-blush-600',
    accent: 'bg-blush-400/10',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Menstrual Cramp Relief Kit',
    description: 'Everything you need in one box: tea, jaggery, heat patch, and a self-care guide for your hardest days.',
    icon: Package,
    gradient: 'from-lavender-100 to-lavender-200/60',
    border: 'border-lavender-200/40',
    iconColor: 'text-lavender-600',
    accent: 'bg-lavender-400/10',
    image: 'https://images.pexels.com/photos/62623/micellina-italia-restaurant-plate-food-62623.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Mood Swing Comfort Gifts',
    description: 'Thoughtfully curated gift boxes with calming teas, chocolates, and aromatherapy for the days you need extra love.',
    icon: Gift,
    gradient: 'from-sand-100 to-sand-200/60',
    border: 'border-sand-200/40',
    iconColor: 'text-sand-600',
    accent: 'bg-sand-400/10',
    image: 'https://images.pexels.com/photos/2602866/pexels-photo-2602866.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Products() {
  const { ref, isInView } = useInView();

  return (
    <section id="products" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-lavender-600 tracking-widest uppercase mb-3">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sand-800 mb-4">
            Crafted for your <span className="gradient-text italic">comfort</span>
          </h2>
          <p className="text-sand-500 text-lg max-w-2xl mx-auto">
            Each product is rooted in Ayurvedic wisdom and made with organic, ethically sourced ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${product.gradient} backdrop-blur-sm border ${product.border} shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-white/40" />
                </div>

                <div className="p-6">
                  <div className={`w-12 h-12 rounded-2xl ${product.accent} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${product.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-sand-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sand-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
