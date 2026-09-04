import React from 'react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/businessData';
import { Star, MessageSquareQuote, CheckCircle2, HelpCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="w-full bg-slate-50 py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
            Trusted By Valley <span className="text-red-600">Homeowners</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Read how Sabra's customized desert barrier protocols protect families and properties against Arizona pests.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{t.date}</span>
                </div>

                <p className="text-slate-700 text-xs leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-950">{t.author}</h4>
                    <span className="text-[10px] text-slate-500 block">{t.neighborhood}</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-red-700">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phoenix Pest FAQ Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-black text-red-600 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                Frequently Asked Desert Pest Questions
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 className="font-bold text-xs sm:text-sm text-slate-950 mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
