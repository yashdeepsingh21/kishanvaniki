import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream-50/50 to-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/50 to-transparent" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Contact Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Get in <span className="gradient-text-green italic">touch</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto">
            Visit our nursery or reach out to us for plant inquiries, bookings, or partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="p-6 rounded-2xl bg-white border border-forest-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Nursery Address</h4>
                  <p className="text-earth-600 text-sm leading-relaxed">
                    Near Sarkada Chakrajmal, Moradabad Haridwar Road, Dhampur, Bijnor-246761, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-forest-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Phone</h4>
                  <p className="text-earth-600 text-sm">+91 XXXXX XXXXX</p>
                  <p className="text-earth-600 text-sm">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-forest-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Email</h4>
                  <p className="text-earth-600 text-sm">info@kisanvaniki.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-forest-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Working Hours</h4>
                  <p className="text-earth-600 text-sm">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-earth-600 text-sm">Sunday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-forest-100/60 shadow-sm bg-cream-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.77!2d78.5!3d29.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c0e8f4e7ffffff%3A0x0!2sDhampur%2C%20Bijnor%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kisan Vaniki Hitech Nursery Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
