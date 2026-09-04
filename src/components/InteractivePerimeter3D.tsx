import React, { useState } from 'react';
import { Shield, Bug, Flower2, Building2, CheckCircle2, ChevronRight, AlertTriangle, Eye, Layers, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface InteractivePerimeter3DProps {
  onOpenQuote: (pestType?: string) => void;
}

export const InteractivePerimeter3D: React.FC<InteractivePerimeter3DProps> = ({ onOpenQuote }) => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const [propertyType, setPropertyType] = useState<'residential' | 'ranch' | 'commercial'>('residential');
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const defenseLayers = [
    {
      id: "slab",
      name: "Sub-Slab & Foundation",
      target: "Subterranean Termites",
      depth: "0 - 4 Feet Underground",
      method: "Liquid Termiticide Trenching & Expansion Joint Injection",
      threatLevel: "High (Structural Destruction)",
      detail: "Creates an unbroken liquid perimeter underneath stem walls preventing Arizona subterranean termites from constructing mud tubes into wooden sill plates.",
      statusColor: "text-amber-500",
      badgeColor: "bg-amber-600"
    },
    {
      id: "stucco",
      name: "Weep Screed & Stucco",
      target: "Arizona Bark Scorpions & Spiders",
      depth: "Ground Level to 3 Feet Up",
      method: "Micro-Encapsulated Repellent & Borate Dust Injection",
      threatLevel: "Critical (Venomous Stings)",
      detail: "Seals the 1/16-inch weep screed gap at the bottom of stucco exterior walls where bark scorpions harbor during intense summer daytime heat.",
      statusColor: "text-red-500",
      badgeColor: "bg-red-600"
    },
    {
      id: "yard",
      name: "Xeriscape & Rock Beds",
      target: "Monsoon Weeds & Crickets",
      depth: "10 - 30 Foot Yard Perimeter",
      method: "UV-Polymer Pre-Emergent Spray & Soil Drench",
      threatLevel: "Medium (Rapid Invasions)",
      detail: "Pre-emergent polymers bind with decomposed granite and decorative quartz rock, sterilizing weed seed beds before seasonal summer rains.",
      statusColor: "text-emerald-500",
      badgeColor: "bg-emerald-600"
    },
    {
      id: "commercial",
      name: "Warehouse Racks & Docks",
      target: "Commercial Pallet Roaches & Rodents",
      depth: "Interior Bays & Loading Docks",
      method: "Low-Volume Clean Fogging & Tamper-Evident Bait Stations",
      threatLevel: "High (Audit Failure Risk)",
      detail: "Customized for distribution hubs, manufacturing plants, and food storage facilities compliant with Arizona health codes.",
      statusColor: "text-blue-500",
      badgeColor: "bg-blue-600"
    }
  ];

  const currentLayer = defenseLayers[selectedLayer];

  return (
    <div className="w-full bg-slate-950 text-white py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-900 pb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              Phoenix Desert <span className="text-red-600">Perimeter Defense</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Explore how Sabra's multi-tier treatment system seals Arizona properties from the soil line to the roof deck against extreme desert conditions.
            </p>
          </div>

          {/* Property Selector Buttons */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {(['residential', 'ranch', 'commercial'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setPropertyType(type)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  propertyType === type
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {type === 'residential' ? 'Home' : type === 'ranch' ? 'Ranch / Acre' : 'Commercial'}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Visual Stage and Interactive Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Interactive Cross-Section Stage */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden group">
            {/* Top Bar with Live Readout */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                  SIMULATION: {propertyType.toUpperCase()} DEFENSE MATRIX
                </span>
              </div>
              <span className="text-xs font-mono text-red-500 bg-red-950 border border-red-800/80 px-2.5 py-0.5 rounded-full">
                LIC. #9110 CERTIFIED
              </span>
            </div>

            {/* 3D Graphic Canvas Representation */}
            <div className="relative h-80 sm:h-96 w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between p-6 select-none">
              {/* Perspective grid floor */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

              {/* Sky / Roof Zone */}
              <div 
                onClick={() => setActiveZone('roof')}
                className={`relative z-10 p-3 rounded-xl border transition-all cursor-pointer ${
                  activeZone === 'roof' 
                    ? 'bg-red-900/30 border-red-500 text-white' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-red-400" />
                    Tier 1: Roofline, Eaves &amp; Attic Inlets
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Bird &amp; Bee Barrier</span>
                </div>
              </div>

              {/* Structure / Weep Screed Zone */}
              <div 
                onClick={() => {
                  setSelectedLayer(1);
                  setActiveZone('weep');
                }}
                className={`relative z-10 p-4 rounded-xl border transition-all cursor-pointer my-2 ${
                  selectedLayer === 1 || activeZone === 'weep'
                    ? 'bg-red-600/20 border-red-500 text-white shadow-lg shadow-red-600/10' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black uppercase tracking-tight flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500" />
                    Tier 2: Weep Screed &amp; Stucco Seal
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white uppercase">
                    Bark Scorpion Gate
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Micro-encapsulated dusting inside weep screeds creates an invisible mortality boundary.
                </p>
              </div>

              {/* Ground / Foundation Sub-Slab Zone */}
              <div 
                onClick={() => {
                  setSelectedLayer(0);
                  setActiveZone('slab');
                }}
                className={`relative z-10 p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedLayer === 0 || activeZone === 'slab'
                    ? 'bg-amber-950/40 border-amber-500 text-white shadow-lg' 
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-black uppercase tracking-tight flex items-center gap-2">
                    <Bug className="w-4 h-4 text-amber-500" />
                    Tier 3: Subterranean Soil Barrier
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white uppercase">
                    Termite Trench Zone
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  4-foot deep continuous liquid bond blocking subterranean termite tunnel access to foundation.
                </p>
              </div>

              {/* Desert Yard Perimeter Zone */}
              <div 
                onClick={() => {
                  setSelectedLayer(2);
                  setActiveZone('yard');
                }}
                className={`relative z-10 p-3 rounded-xl border transition-all cursor-pointer mt-2 ${
                  selectedLayer === 2 || activeZone === 'yard'
                    ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg' 
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <Flower2 className="w-4 h-4 text-emerald-400" />
                    Tier 4: Decomposed Granite &amp; Rock Beds
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Pre-Emergent Weed Seal</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>*Click any tier to inspect scientific application protocols.</span>
              <span className="text-red-400 font-bold">100% Phoenix Weatherproof</span>
            </div>
          </div>

          {/* Right: Detailed Specification & Booking Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Layer Selector Tabs */}
            <div className="grid grid-cols-2 gap-2">
              {defenseLayers.map((layer, idx) => (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedLayer === idx
                      ? 'bg-red-600 border-red-500 text-white shadow-lg'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                    Tier {idx + 1}
                  </div>
                  <div className="text-xs font-extrabold truncate">
                    {layer.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Tier Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black uppercase px-2.5 py-1 rounded ${currentLayer.badgeColor} text-white`}>
                  Target: {currentLayer.target}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentLayer.depth}
                </span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                {currentLayer.name}
              </h3>

              <div className="mb-4 text-xs font-semibold text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>Threat: {currentLayer.threatLevel}</span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {currentLayer.detail}
              </p>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-6">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Sabra's Application Standard:
                </span>
                <p className="text-xs font-mono text-slate-200">
                  {currentLayer.method}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenQuote(currentLayer.target)}
                  className="w-full sm:flex-1 bg-red-600 text-white py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-600/30"
                >
                  <span>Book Tier Inspection</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-xs font-bold text-white text-center transition-colors"
                >
                  Call (602) 791-0077
                </a>
              </div>
            </div>

            {/* Trust Assurance Strip */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Non-staining odorless formulas
              </span>
              <span className="text-white font-bold">Safe for Desert Pets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
