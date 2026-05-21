import { useInView } from '../hooks/useInView';
import { Star, Leaf, Apple, TreePine, Flower2, Pill, Sun } from 'lucide-react';

const plants = [
  {
    name: 'P23 Original Plant',
    description: 'Our flagship premium variety. High-yield, fast-growing, and trusted by farmers across India. The original P23 genetics for maximum results.',
    icon: Star,
    badge: 'Best Seller',
    badgeColor: 'bg-forest-600 text-white',
    gradient: 'from-forest-600 to-forest-800',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Fruit Plants',
    description: 'Mango, guava, lemon, papaya and more. Grafted fruit plants that bear fruit faster and healthier.',
    icon: Apple,
    badge: 'Popular',
    badgeColor: 'bg-earth-500 text-white',
    gradient: 'from-earth-500 to-earth-700',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Timber Plants',
    description: 'Teak, shisham, neem and other timber species. Strong, straight-growth plants for long-term investment.',
    icon: TreePine,
    badge: null,
    badgeColor: '',
    gradient: 'from-bark-500 to-bark-700',
    image: 'https://images.pexels.com/photos/1423004/pexels-photo-1423004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Decorative Plants',
    description: 'Beautiful flowering and foliage plants for gardens, parks, and landscapes. Add beauty to any space.',
    icon: Flower2,
    badge: null,
    badgeColor: '',
    gradient: 'from-forest-500 to-forest-700',
    image: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Medicinal Plants',
    description: 'Tulsi, aloe vera, ashwagandha and more. Traditional healing plants grown with organic methods.',
    icon: Pill,
    badge: null,
    badgeColor: '',
    gradient: 'from-earth-400 to-earth-600',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Seasonal Plants',
    description: 'Seasonal vegetables and flowers. Fresh stock available every season for your kitchen garden.',
    icon: Sun,
    badge: null,
    badgeColor: '',
    gradient: 'from-forest-400 to-forest-600',
    image: 'https://images.pexels.com/photos/4503274/pexels-photo-4503274.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Plants() {
  const { ref, isInView } = useInView();

  return (
    <section id="plants" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Our Plants
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Featured <span className="gradient-text-green italic">plant varieties</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto">
            From our advanced chambers to your farm — explore our wide range of premium plants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, i) => {
            const Icon = plant.icon;
            return (
              <div
                key={plant.name}
                className={`group relative rounded-2xl overflow-hidden bg-white border border-forest-100/60 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {plant.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${plant.badgeColor}`}>
                      {plant.badge}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plant.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-earth-900 mb-2">
                    {plant.name}
                  </h3>
                  <p className="text-earth-600 text-sm leading-relaxed mb-4">
                    {plant.description}
                  </p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-50 text-forest-700 font-semibold text-sm hover:bg-forest-100 hover:text-forest-800 transition-all duration-300 group-hover:bg-forest-600 group-hover:text-white"
                  >
                    <Leaf className="w-4 h-4" />
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
