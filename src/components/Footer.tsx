import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, Mail, MapPin, MessageSquare, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 text-white border-t border-slate-900">
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-black px-4 sm:px-8 lg:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Ready to Put Your Pests to Rest?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl">
              Contact Sabra Thornburg today for an honest, comprehensive inspection of your foundation, weep screeds, or gravel beds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-white text-black px-7 py-3 rounded-full font-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors shadow-xl cursor-pointer"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-black/60 border border-white/20 text-white px-6 py-3 rounded-full font-mono font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
            >
              Call (602) 791-0077
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand & Mission */}
        <div className="lg:col-span-5 flex flex-col">
          <BrandLogo variant="compact" theme="dark" onClick={scrollToTop} className="mb-4" />
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
            Sabra's Termite Pest Weed Control is Phoenix's premier owner-operated desert exterminator. Delivering customized liquid subterranean barriers, targeted bark scorpion control, and pre-emergent weed prevention.
          </p>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-red-400 font-bold">
              AZ LIC. #9110
            </div>
            <span className="text-slate-500">•</span>
            <span className="text-[11px] text-slate-400">Sabra Thornburg, Owner</span>
          </div>
        </div>

        {/* Quick Service Links */}
        <div className="lg:col-span-3 flex flex-col">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-500 mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                Subterranean Termite Protection
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                Arizona Bark Scorpion Defense
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                Pre- &amp; Post-Emergent Weed Control
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                Commercial Warehouse Pest Audits
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('interactive-3d')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-red-400">
                <span>Interactive 3D Defense Model</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Location Details */}
        <div className="lg:col-span-4 flex flex-col">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-500 mb-4">
            Phoenix Office
          </h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-red-400 font-mono font-bold">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-red-400 hover:text-red-300">
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
              <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300">
                WhatsApp Direct: 1 602-791-0077
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Exact Bottom Sleek Theme Bar from Design HTML */}
      <div className="min-h-12 bg-black text-white px-4 sm:px-8 lg:px-12 py-3 flex flex-col sm:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] border-t border-slate-900 gap-3">
        <div>&copy; {new Date().getFullYear()} SABRA'S PEST CONTROL • ALL RIGHTS RESERVED</div>
        
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          <span>Phoenix, AZ</span>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="text-red-500 hover:text-red-400">
            {BUSINESS_INFO.email}
          </a>
          <div className="flex items-center gap-4">
            <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-blue-400">
              FB
            </a>
            <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-emerald-400">
              WA
            </a>
            <button onClick={scrollToTop} className="opacity-70 hover:opacity-100 flex items-center gap-1 cursor-pointer">
              <ArrowUp className="w-3 h-3 text-red-500" />
              TOP
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
