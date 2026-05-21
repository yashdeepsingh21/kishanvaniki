import { useCountUp } from '../hooks/useCountUp';
import { Leaf, Truck, Building2 } from 'lucide-react';

export default function CTABanner() {
  const chambers = useCountUp(25, 2000, '+');
  const plants = useCountUp(50, 2000, 'K+');
  const delivery = useCountUp(28, 2000, '+');

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Nursery background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Premium P23 Original Plants Across India
          </h2>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto">
            From our advanced chambers to your doorstep — quality plants delivered nationwide.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-forest-500 to-forest-600 text-white font-semibold shadow-lg shadow-forest-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Plants Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div ref={chambers.ref} className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-forest-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-forest-300" />
            </div>
            <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
              {chambers.count}
            </p>
            <p className="text-forest-300 font-medium">Advanced Chambers</p>
          </div>

          <div ref={plants.ref} className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-forest-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-forest-300" />
            </div>
            <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
              {plants.count}
            </p>
            <p className="text-forest-300 font-medium">Plants Cultivated</p>
          </div>

          <div ref={delivery.ref} className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-forest-500/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-forest-300" />
            </div>
            <p className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
              {delivery.count}
            </p>
            <p className="text-forest-300 font-medium">States Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
