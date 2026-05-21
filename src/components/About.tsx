import { useInView } from '../hooks/useInView';
import { User, Sprout, ShieldCheck, Award, Instagram } from 'lucide-react';

const founders = [
  {
    name: 'Mr. Suresh Chauhan',
    role: 'Founder',
    description: 'Visionary leader with 45 years of experience in plant cultivation and nursery management.',
    image: '/images/founders/suresh-chauhan.svg',
    instagram: 'https://instagram.com/suresh_chauhan',
  },
  {
    name: 'Mr. Sanoj Chauhan',
    role: 'Co-Founder',
    description: 'Expert in advanced plant chamber technology and quality assurance processes.',
    image: '/images/founders/sanoj_chauhan.jpg',
    instagram: 'https://instagram.com/sanoj_chauhan',
  },
  {
    name: 'Mr. Sandeep Chauhan',
    role: 'Co-Founder',
    description: 'Specialist in plant genetics and P23 original plant cultivation techniques.',
    image: '/images/founders/sandeep-chauhan.svg',
    instagram: 'https://instagram.com/sandeep_chauhan',
  },
];

const highlights = [
  { icon: Sprout, label: 'Self-Prepared Plants', desc: 'Every plant is cultivated in-house using our advanced infrastructure' },
  { icon: ShieldCheck, label: '25+ Advanced Chambers', desc: 'State-of-the-art controlled environment chambers for optimal growth' },
  { icon: Award, label: 'Quality Assured', desc: 'Rigorous quality checks ensure only the healthiest plants reach you' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={isInView ? 'animate-slide-in-left' : 'opacity-0'}>
            <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6">
              Growing excellence{' '}
              <span className="gradient-text-green italic">since generations</span>
            </h2>
            <div className="space-y-4 text-earth-700 leading-relaxed">
              <p>
                Kisan Vaniki Hitech Nursery is a premier plant cultivation facility located in
                Dhampur, Bijnor, Uttar Pradesh. We are not just a nursery — we are a complete
                plant production ecosystem where every plant is prepared by us, from seed to
                sapling, ensuring unmatched quality and authenticity.
              </p>
              <p>
                With over 25 advanced plant chambers equipped with modern climate control
                technology, we create the perfect environment for each plant species to thrive.
                Our specialty lies in the P23 Original Plant, a premium variety that has earned
                the trust of farmers and plant buyers across India.
              </p>
              <p>
                Whether you need plants for agriculture, timber, decoration, or medicinal use,
                we supply healthy, certified plants with all India delivery. Our commitment to
                quality and customer satisfaction has made us one of the most trusted names in
                the nursery industry.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-100 transition-colors">
                      <Icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-earth-900">{h.label}</h4>
                      <p className="text-sm text-earth-600">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={isInView ? 'animate-slide-in-right' : 'opacity-0'}>
            <div className="space-y-6">
              {founders.map((f, i) => (
                <div
                  key={f.name}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-cream-50 to-forest-50/30 border border-forest-100/40 hover:border-forest-200/60 shadow-sm hover:shadow-lg transition-all duration-500"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-forest-100">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-4 h-4 text-forest-500" />
                        <span className="text-xs font-semibold text-forest-600 uppercase tracking-wider">
                          {f.role}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-earth-900">
                        {f.name}
                      </h3>
                      <p className="text-sm text-earth-600 mt-1">{f.description}</p>
                      <a
                        href={f.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-forest-600 hover:text-forest-700 transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-forest-800 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Sprout className="w-6 h-6 text-forest-300" />
                <h4 className="font-display text-lg font-bold">Our Mission</h4>
              </div>
              <p className="text-forest-100/90 text-sm leading-relaxed">
                To provide every farmer and plant lover in India with access to premium,
                healthy, and certified plants — grown with advanced technology and delivered
                with care. We believe in nurturing nature, one plant at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
