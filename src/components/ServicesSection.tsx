import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/businessData';
import { ServiceItem } from '../types';
import { ShieldAlert, Bug, Flower2, Building2, Check, ArrowRight, AlertOctagon, HelpCircle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
  selectedServiceId?: string | null;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenQuote,
  selectedServiceId
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    selectedServiceId || SERVICES_DATA[0].id
  );

  const currentService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Bug':
        return <Bug className="w-6 h-6 text-red-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-red-600" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-red-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-red-600" />;
      default:
        return <Bug className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="services" className="w-full bg-slate-50 py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Specialized Pest, Termite &amp; <span className="text-red-600">Weed Defense</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Arizona's harsh desert climate breeds resilient pests and aggressive weed cycles. Sabra Thornburg provides custom formulated treatments built for Phoenix soil, heat, and monsoons.
          </p>
        </div>

        {/* 4 Sleek Service Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-950 border-red-600 text-white shadow-xl scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-red-600 text-white shadow-md' : 'bg-black text-red-600'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className={`font-black text-base uppercase tracking-tight mb-2 ${
                    isSelected ? 'text-white' : 'text-slate-950'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isSelected ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isSelected ? 'text-red-400' : 'text-slate-400'
                  }`}>
                    AZ Protocol
                  </span>
                  <span className={`text-xs font-bold flex items-center gap-1 ${
                    isSelected ? 'text-white' : 'text-red-600'
                  }`}>
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Service Detailed Specification Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold uppercase rounded-full">
                    {currentService.category.toUpperCase()} PROTOCOL
                  </span>
                  <span className="text-slate-400 text-xs font-mono">
                    Lic. #9110 Guaranteed
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight mb-4">
                  {currentService.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentService.fullDesc}
                </p>

                {/* Key Service Features */}
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3">
                  Core Treatment Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {currentService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenQuote(currentService.title)}
                  className="bg-red-600 text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors shadow-md shadow-red-600/20 cursor-pointer"
                >
                  Schedule {currentService.title}
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-bold text-slate-800 hover:text-red-600 flex items-center gap-1.5"
                >
                  <span>Immediate Phone Consult: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Arizona Climate & Biology Fact Box */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-slate-950 text-white p-6 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertOctagon className="w-4 h-4" />
                  Arizona Environmental Challenge
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {currentService.desertChallenge}
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-red-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                  Sabra's Proven Application Standard
                </div>
                <p className="text-red-950 text-xs leading-relaxed font-medium">
                  {currentService.treatmentProtocol}
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">Guaranteed Re-treatment:</span>
                <span className="font-black text-red-600 uppercase">100% Free if Pests Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
