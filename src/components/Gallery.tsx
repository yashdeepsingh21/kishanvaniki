import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Nursery plant rows',
    label: 'Plant Rows',
  },
  {
    src: 'https://images.pexels.com/photos/4503274/pexels-photo-4503274.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Advanced plant chamber',
    label: 'Advanced Chamber',
  },
  {
    src: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Healthy plant saplings',
    label: 'Healthy Saplings',
  },
  {
    src: 'https://images.pexels.com/photos/1423004/pexels-photo-1423004.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Timber plants section',
    label: 'Timber Section',
  },
  {
    src: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fruit plants area',
    label: 'Fruit Plants Area',
  },
  {
    src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Nursery team at work',
    label: 'Our Team',
  },
];

export default function Gallery() {
  const { ref, isInView } = useInView();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-cream-50/50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Inside our <span className="gradient-text-green italic">nursery</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto">
            Take a look at our advanced chambers, plant rows, and the team that makes it all happen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={galleryItems[lightbox].src.replace('w=600', 'w=1200')}
            alt={galleryItems[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-semibold">
            {galleryItems[lightbox].label}
          </p>
        </div>
      )}
    </section>
  );
}
