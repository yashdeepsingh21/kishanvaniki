import { TreePine, Instagram, Facebook, Youtube, Phone, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Plants', href: '#plants' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Plants', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const plantLinks = [
  'P23 Original Plant',
  'Fruit Plants',
  'Timber Plants',
  'Decorative Plants',
  'Medicinal Plants',
  'Seasonal Plants',
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center shadow-md">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="font-display text-lg font-bold text-white block">
                  Kisan Vaniki
                </span>
                <span className="text-[10px] font-medium text-forest-400 tracking-widest uppercase">
                  Hitech Nursery
                </span>
              </div>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed max-w-xs">
              India's trusted high-tech plant nursery. Premium P23 Original Plants and wide variety of nursery plants with all India delivery.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/kisanvaniki" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-forest-900 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-forest-900 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-forest-900 flex items-center justify-center hover:bg-forest-700 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-forest-300 hover:text-forest-100 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Plant Varieties</h4>
            <div className="space-y-2">
              {plantLinks.map((link) => (
                <a
                  key={link}
                  href="#plants"
                  className="block text-sm text-forest-300 hover:text-forest-100 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-forest-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-forest-300">+91 XXXXX XXXXX</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-forest-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-forest-300">info@kisanvaniki.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-forest-400">
            2026 Kisan Vaniki Hitech Nursery. All rights reserved.
          </p>
          <p className="text-sm text-forest-400 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for Indian farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
