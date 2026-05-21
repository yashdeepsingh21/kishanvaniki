import { useState, type FormEvent } from 'react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const productOptions = [
  'Ayurvedic Cramp Relief Tea',
  'Organic Gud (Jaggery)',
  'Organic Handmade Soap',
  'Menstrual Cramp Relief Kit',
  'Mood Swing Comfort Gifts',
];

const priceOptions = [
  'Under Rs. 200',
  'Rs. 200 - 500',
  'Rs. 500 - 1000',
  'Above Rs. 1000',
];

export default function Feedback() {
  const { ref, isInView } = useInView();
  const [wouldPurchase, setWouldPurchase] = useState<boolean | null>(null);
  const [interestedProduct, setInterestedProduct] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [contact, setContact] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (wouldPurchase === null) {
      setError('Please let us know if you would purchase our products.');
      return;
    }
    if (!interestedProduct) {
      setError('Please select which product interests you most.');
      return;
    }
    if (!expectedPrice) {
      setError('Please select your expected price range.');
      return;
    }
    if (!contact.trim()) {
      setError('Please share your email or Instagram handle.');
      return;
    }

    setError('');
    setSubmitting(true);

    const { error: dbError } = await supabase.from('feedback_submissions').insert({
      would_purchase: wouldPurchase,
      interested_product: interestedProduct,
      expected_price: expectedPrice,
      contact: contact.trim(),
    });

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="feedback" className="section-padding bg-gradient-to-b from-cream-50/30 to-lavender-50/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cream-300/50 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-lavender-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blush-100/20 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-lavender-600 tracking-widest uppercase mb-3">
            Your Voice Matters
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-sand-800 mb-4">
            Help us <span className="gradient-text italic">shape</span> MoonEase
          </h2>
          <p className="text-sand-500 text-lg">
            We are building this for you. Tell us what you think.
          </p>
        </div>

        {submitted ? (
          <div className={`text-center p-12 rounded-3xl bg-white/70 backdrop-blur-sm border border-lavender-100/40 shadow-sm ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-semibold text-sand-800 mb-2">
              Thank you!
            </h3>
            <p className="text-sand-500">
              Your feedback means the world to us. We will keep you updated on our launch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-sm border border-lavender-100/40 shadow-sm space-y-8 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {/* Would you purchase? */}
            <div>
              <label className="block font-display text-lg font-medium text-sand-800 mb-3">
                Would you purchase these products?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setWouldPurchase(true)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 border ${
                    wouldPurchase === true
                      ? 'bg-sage-50 border-sage-300 text-sage-700 shadow-sm'
                      : 'bg-white/50 border-lavender-100 text-sand-500 hover:border-lavender-200'
                  }`}
                >
                  Yes, definitely
                </button>
                <button
                  type="button"
                  onClick={() => setWouldPurchase(false)}
                  className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 border ${
                    wouldPurchase === false
                      ? 'bg-blush-50 border-blush-300 text-blush-700 shadow-sm'
                      : 'bg-white/50 border-lavender-100 text-sand-500 hover:border-lavender-200'
                  }`}
                >
                  Maybe later
                </button>
              </div>
            </div>

            {/* Which product interests you most? */}
            <div>
              <label className="block font-display text-lg font-medium text-sand-800 mb-3">
                Which product interests you most?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productOptions.map((product) => (
                  <button
                    key={product}
                    type="button"
                    onClick={() => setInterestedProduct(product)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 border text-left ${
                      interestedProduct === product
                        ? 'bg-lavender-50 border-lavender-300 text-lavender-700 shadow-sm'
                        : 'bg-white/50 border-lavender-100 text-sand-500 hover:border-lavender-200'
                    }`}
                  >
                    {product}
                  </button>
                ))}
              </div>
            </div>

            {/* Expected price */}
            <div>
              <label className="block font-display text-lg font-medium text-sand-800 mb-3">
                What price would you expect?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {priceOptions.map((price) => (
                  <button
                    key={price}
                    type="button"
                    onClick={() => setExpectedPrice(price)}
                    className={`py-3 px-3 rounded-xl text-sm font-medium transition-all duration-300 border text-center ${
                      expectedPrice === price
                        ? 'bg-cream-50 border-cream-400 text-cream-800 shadow-sm'
                        : 'bg-white/50 border-lavender-100 text-sand-500 hover:border-lavender-200'
                    }`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block font-display text-lg font-medium text-sand-800 mb-3">
                Email or Instagram handle
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="you@email.com or @yourhandle"
                className="w-full px-5 py-3.5 rounded-xl bg-white/50 border border-lavender-100 text-sand-800 placeholder:text-sand-300 focus:outline-none focus:border-lavender-300 focus:ring-2 focus:ring-lavender-100 transition-all duration-300"
              />
            </div>

            {error && (
              <p className="text-blush-600 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium shadow-lg shadow-lavender-200/50 hover:shadow-xl hover:shadow-lavender-300/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
