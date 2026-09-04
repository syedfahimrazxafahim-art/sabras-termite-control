import React, { useState } from 'react';
import { Shield, Bug, Zap, CheckCircle2, ArrowRight, Activity, Radar, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onExploreService
}) => {
  const [active3DMode, setActive3DMode] = useState<'perimeter' | 'termites' | 'scorpions' | 'weeds'>('perimeter');

  const modeDetails = {
    perimeter: {
      title: 'SECURE PERIMETER',
      status: 'Active Defense Shield',
      desc: '360° sub-slab barrier & weep-screed powder protection.',
      metric: '100% Boundary Lock',
      badgeColor: 'bg-red-600',
      icon: Shield
    },
    termites: {
      title: 'SUBTERRANEAN RADAR',
      status: 'Acoustic & Moisture Scan',
      desc: 'Continuous detection of subterranean termite tunnels in Arizona soils.',
      metric: '4-Foot Deep Trenching',
      badgeColor: 'bg-amber-600',
      icon: Radar
    },
    scorpions: {
      title: 'SCORPION ELIMINATION',
      status: 'Blacklight Micro-Barrier',
      desc: 'Targeted defense against Arizona bark scorpions and black widows.',
      metric: 'Zero Interior Entry',
      badgeColor: 'bg-red-700',
      icon: Zap
    },
    weeds: {
      title: 'DESERT WEED SHIELD',
      status: 'UV-Stabilized Pre-Emergent',
      desc: '6-month seed suppression across decomposed granite & rock beds.',
      metric: 'HOA Certified Clean',
      badgeColor: 'bg-emerald-600',
      icon: Compass
    }
  };

  const currentMode = modeDetails[active3DMode];
  const IconComponent = currentMode.icon;

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Primary Sleek Hero Section */}
      <section className="relative min-h-[500px] lg:h-[520px] flex items-center px-6 sm:px-10 lg:px-12 overflow-hidden bg-slate-950 py-12 lg:py-0">
        {/* Sleek Radial Background Gradient */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="z-10 w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-5 uppercase tracking-tighter">
            Protection <br />
            Against the <br />
            <span className="text-red-600">Unseen.</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Sabra's Termite, Pest, and Weed Control delivers scientific desert perimeter treatment for guaranteed pest-free homes and commercial facilities.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onOpenQuote}
              className="bg-red-600 text-white px-7 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider border border-slate-800 text-white hover:bg-slate-900 transition-colors"
            >
              Direct Dispatch
            </a>
          </div>

          {/* Sleek Emergency & Stats Counter */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-900 w-full max-w-md">
            <div className="flex flex-col">
              <a 
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-white font-black text-xl sm:text-2xl hover:text-red-500 transition-colors font-mono tracking-tight"
              >
                1 602-791-0077
              </a>
              <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency Response
              </span>
            </div>

            <div className="w-px h-10 bg-slate-800 self-center" />

            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">5,000+</span>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                Homes Protected
              </span>
            </div>

            <div className="w-px h-10 bg-slate-800 self-center hidden sm:block" />

            <div className="flex flex-col hidden sm:flex">
              <span className="text-white font-bold text-xl sm:text-2xl font-mono">#9110</span>
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                AZ State License
              </span>
            </div>
          </div>
        </div>

        {/* Right 3D Interactive Card Stage */}
        <div className="w-full lg:w-1/2 relative h-full flex items-center justify-center mt-10 lg:mt-0">
          <div className="w-full max-w-[440px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative flex flex-col group overflow-hidden p-6 transition-all duration-300 hover:border-slate-700">
            {/* Top Interactive Mode Switcher */}
            <div className="flex items-center justify-between gap-1 bg-slate-950 p-1.5 rounded-xl border border-slate-800 mb-6">
              {(['perimeter', 'termites', 'scorpions', 'weeds'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActive3DMode(mode)}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    active3DMode === mode
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {mode === 'perimeter' ? '3D Shield' : mode}
                </button>
              ))}
            </div>

            {/* Simulated 3D Defense Core Visualizer */}
            <div className="relative h-48 w-full bg-slate-950/80 rounded-xl border border-slate-800/80 flex flex-col items-center justify-center p-4 overflow-hidden">
              {/* Radial Radar Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full border border-red-500/20 animate-ping opacity-30" />
                <div className="w-32 h-32 rounded-full border border-red-500/30" />
                <div className="w-20 h-20 rounded-full border border-red-500/40" />
              </div>

              {/* Pulsing Central 3D Node */}
              <div className={`w-18 h-18 ${currentMode.badgeColor} rounded-full flex items-center justify-center shadow-xl shadow-red-600/30 transition-all duration-500 relative z-10 group-hover:scale-105`}>
                <IconComponent className="w-9 h-9 text-white" />
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse" />
              </div>

              <div className="mt-4 text-center z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-mono font-bold tracking-wider">
                  <Activity className="w-3 h-3 text-red-500 animate-pulse" />
                  {currentMode.status}
                </div>
              </div>
            </div>

            {/* Card Content & Details */}
            <div className="pt-5 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-black text-lg uppercase tracking-tight">
                  {currentMode.title}
                </h3>
                <span className="text-[11px] font-bold text-red-500 bg-red-950/60 border border-red-900 px-2 py-0.5 rounded">
                  {currentMode.metric}
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {currentMode.desc}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-mono">
                  Standard: AZ Spec 9110
                </span>
                <button
                  onClick={() => onExploreService(active3DMode === 'perimeter' ? 'scorpion-pest' : active3DMode === 'termites' ? 'termite-control' : active3DMode === 'scorpions' ? 'scorpion-pest' : 'weed-control')}
                  className="text-xs font-bold text-white hover:text-red-500 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Protocol Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sleek 3-Column Service Bar (Directly from Sleek Interface Theme) */}
      <section className="min-h-[180px] grid grid-cols-1 md:grid-cols-3 bg-white border-b border-slate-100">
        <div 
          onClick={() => onExploreService('termite-control')}
          className="border-b md:border-b-0 md:border-r border-slate-100 p-8 hover:bg-slate-50 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm tracking-tight text-slate-950 group-hover:text-red-600 transition-colors">
                Termite Inspection
              </h4>
              <span className="text-[10px] text-red-600 font-bold tracking-wider uppercase">Subterranean Defense</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Comprehensive structural analysis and subterranean barrier installation specifically formulated for Arizona slab foundations.
          </p>
        </div>

        <div 
          onClick={() => onExploreService('scorpion-pest')}
          className="border-b md:border-b-0 md:border-r border-slate-100 p-8 hover:bg-slate-50 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm tracking-tight text-slate-950 group-hover:text-red-600 transition-colors">
                Pest Eradication
              </h4>
              <span className="text-[10px] text-red-600 font-bold tracking-wider uppercase">Scorpions • Ants • Roaches</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Targeted solutions for scorpions, ants, black widows, and crickets with eco-safe, human- and pet-friendly formulations.
          </p>
        </div>

        <div 
          onClick={() => onExploreService('weed-control')}
          className="p-8 hover:bg-slate-50 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-black uppercase text-sm tracking-tight text-slate-950 group-hover:text-red-600 transition-colors">
                Weed Control
              </h4>
              <span className="text-[10px] text-red-600 font-bold tracking-wider uppercase">Pre- &amp; Post-Emergent</span>
            </div>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Pre-emergent and post-emergent treatments keeping your Phoenix decomposed granite and desert xeriscaping pristine.
          </p>
        </div>
      </section>
    </div>
  );
};
