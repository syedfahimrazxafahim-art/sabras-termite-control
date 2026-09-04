import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { IMAGES } from '../data/images';
import { ShieldCheck, Award, MapPin, Phone, MessageSquare, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight mb-4">
              Local. Trusted. <span className="text-red-600">Effective.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Founded and operated by <strong className="text-slate-950">Sabra Thornburg</strong>, Sabra's Termite Pest Weed Control is built on the philosophy that Phoenix desert homeowners and business owners deserve direct, honest, and scientifically proven extermination.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Unlike large impersonal corporate pest franchises that send rotating sub-contractors, Sabra brings her fully equipped signature red service trailer directly to your property. Holding Arizona State License <strong className="text-red-600 font-mono">LIC. #9110</strong>, we utilize commercial-grade, eco-conscious materials that neutralize scorpions, eradicate subterranean termite colonies, and keep desert gravel beds clean all year long.
            </p>

            {/* Core Credential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-red-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-950">State Licensed &amp; Insured</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Arizona License #9110 with full structural warranty backing.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-black text-red-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase text-slate-950">Pet &amp; Family Safe</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">EPA-registered formulas that dry odorless and non-toxic to pets.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="bg-red-600 text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors shadow-md shadow-red-600/30 cursor-pointer"
              >
                Schedule Free Inspection
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                WhatsApp Sabra
              </a>
            </div>
          </div>

          {/* Right Fleet & Credential Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl relative">
              <div className="h-48 w-full relative overflow-hidden bg-black">
                <img
                  src={IMAGES.servicePerimeter}
                  alt="Sabra's Pest Control field service perimeter treatment in Phoenix"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold">Arizona Department of Agriculture</span>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight">Lic. #9110</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-xs text-slate-300 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Owner On Site:</strong> Sabra personally oversees treatments and client consultations.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Mobile Chemical Rig:</strong> On-board electric high-capacity tanks for deep soil saturation.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong>Greater Phoenix Dispatch:</strong> Serving Scottsdale, Paradise Valley, Glendale, Peoria, Mesa, Chandler, and Valleywide.</span>
                  </div>
                </div>

                {/* Office Location Box */}
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Phoenix Headquarters</span>
                      <p className="text-xs font-semibold text-white mt-0.5">{BUSINESS_INFO.address}</p>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-xs font-mono font-bold text-red-400 hover:text-red-300 mt-2 inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3" />
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
