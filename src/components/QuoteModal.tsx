import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Shield, ArrowRight, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillService = ''
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    phone: '',
    email: '',
    propertyAddress: '',
    zipCode: '85028',
    serviceType: prefillService || 'Termite & Scorpion Defense',
    pestConcern: 'Bark Scorpions & Desert Insects',
    urgency: 'standard',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 relative my-8">
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white">
              Request Free Inspection &amp; Quote
            </h3>
            <p className="text-xs text-slate-400">
              Phoenix Metropolitan Service Area • Fast Dispatch
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight text-slate-950 mb-2">
              Inspection Requested!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Sabra Thornburg or our dispatch technician will review your property at <strong>{formData.propertyAddress}</strong> ({formData.zipCode}) and contact you within 30–60 minutes.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 w-full mb-6 text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Immediate Urgent Need?
              </span>
              <p className="text-xs text-slate-700">
                Call Sabra directly for emergency scorpion or termite swarms:
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="mt-2 text-sm font-black text-red-600 hover:text-red-700 flex items-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-black text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-colors cursor-pointer"
            >
              Done &amp; Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Miller"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(602) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phoenix Property Street Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 10645 N Tatum Blvd"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Zip Code *
                </label>
                <input
                  type="text"
                  required
                  placeholder="85028"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 bg-white"
                >
                  <option value="Complete Termite Protection">Complete Termite Protection</option>
                  <option value="Scorpion & General Pest Management">Scorpion &amp; General Pest</option>
                  <option value="Desert Weed Control Solutions">Desert Weed Control</option>
                  <option value="Commercial & Warehouse Inspection">Commercial &amp; Warehouse</option>
                  <option value="All-Inclusive Property Shield">All-Inclusive Property Shield</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Urgency Level
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600 bg-white"
                >
                  <option value="immediate">Urgent / Active Infestation (24hr)</option>
                  <option value="standard">Standard This Week</option>
                  <option value="preventative">Routine Seasonal Prevention</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                Specific Pest Notes or Property Details
              </label>
              <textarea
                rows={2}
                placeholder="Where are pests seen? (e.g. bark scorpions near pool, termite mud tubes on stem wall, weeds in rock yard)"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-hidden focus:border-red-600"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero Obligation • 100% Free Estimate</span>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-7 py-3 rounded-full font-black text-xs uppercase tracking-wider hover:bg-black transition-colors shadow-md shadow-red-600/30 cursor-pointer flex items-center gap-2"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
