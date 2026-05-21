import { useState, type FormEvent } from 'react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, Loader2, TreePine } from 'lucide-react';

const plantTypes = [
  'P23 Original Plant',
  'Fruit Plants',
  'Timber Plants',
  'Decorative Plants',
  'Medicinal Plants',
  'Seasonal Plants',
];

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi',
];

export default function Booking() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    state: '',
    plantType: '',
    quantity: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) { setError('Please enter your full name.'); return; }
    if (!form.mobile.trim() || form.mobile.trim().length < 10) { setError('Please enter a valid mobile number.'); return; }
    if (!form.state) { setError('Please select your state.'); return; }
    if (!form.plantType) { setError('Please select a plant type.'); return; }
    if (!form.quantity.trim()) { setError('Please enter the quantity.'); return; }

    setError('');
    setSubmitting(true);

    const { error: dbError } = await supabase.from('booking_inquiries').insert({
      full_name: form.fullName.trim(),
      mobile_number: form.mobile.trim(),
      state: form.state,
      plant_type: form.plantType,
      quantity: form.quantity.trim(),
      message: form.message.trim(),
    });

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-cream-50/50 to-forest-50/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-200/50 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-forest-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cream-200/20 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-forest-600 tracking-widest uppercase mb-3">
            Book Your Plants
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Send a <span className="gradient-text-green italic">booking inquiry</span>
          </h2>
          <p className="text-earth-600 text-lg">
            Fill in the details below and our team will get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className={`text-center p-12 rounded-2xl bg-white border border-forest-100 shadow-sm ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-2">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-earth-600">
              Thank you for your interest. Our team will contact you shortly to confirm your booking.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`p-8 md:p-10 rounded-2xl bg-white border border-forest-100/60 shadow-sm space-y-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-earth-800 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 placeholder:text-earth-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-earth-800 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 placeholder:text-earth-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-earth-800 mb-2">State</label>
                <select
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300 appearance-none"
                >
                  <option value="">Select your state</option>
                  {indianStates.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-earth-800 mb-2">Plant Type</label>
                <select
                  value={form.plantType}
                  onChange={(e) => setForm({ ...form, plantType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300 appearance-none"
                >
                  <option value="">Select plant type</option>
                  {plantTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-earth-800 mb-2">Quantity</label>
              <input
                type="text"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                placeholder="e.g., 50 plants, 100 plants"
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 placeholder:text-earth-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-earth-800 mb-2">Message (Optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Any specific requirements or questions..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-forest-100 text-earth-900 placeholder:text-earth-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all duration-300 resize-none"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-forest-600 to-forest-700 text-white font-semibold shadow-lg shadow-forest-200/50 hover:shadow-xl hover:shadow-forest-300/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Booking Inquiry
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-earth-500 text-sm">
              <TreePine className="w-4 h-4 text-forest-500" />
              We respond within 24 hours
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
