import React, { useState } from 'react';
import { ALL_CUSTOMER_IMAGES } from '../data/images';
import { Eye, X, ChevronRight, CheckCircle2 } from 'lucide-react';

interface WorkGalleryProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<typeof ALL_CUSTOMER_IMAGES[0] | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos (9)' },
    { id: 'fleet', label: 'Fleet & Rig' },
    { id: 'field', label: 'Field Applications' },
    { id: 'termites-pests', label: 'Termites & Pests' },
    { id: 'commercial', label: 'Commercial & Facility' }
  ];

  const filteredImages = ALL_CUSTOMER_IMAGES.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fleet') return item.id === 'img-banner' || item.id === 'img-card' || item.id === 'img-flyer';
    if (activeFilter === 'field') return item.id === 'img-sabra' || item.id === 'img-hazmat';
    if (activeFilter === 'termites-pests') return item.id === 'img-termites' || item.id === 'img-roaches' || item.id === 'img-cricket';
    if (activeFilter === 'commercial') return item.id === 'img-warehouse' || item.id === 'img-hazmat';
    return true;
  });

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-12 border-b border-slate-100" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Without any eyebrow label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Our Pest Control <span className="text-red-600">Work</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mt-2 leading-relaxed">
              Real field photography documenting Sabra's high-pressure mobile trailer rig, on-site perimeter treatments, macro termite detection, and commercial warehouse protection throughout Phoenix.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="self-start md:self-auto bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-colors shadow-sm cursor-pointer"
          >
            Schedule Free Inspection
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid displaying all customer images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col group cursor-pointer hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container with proportional display */}
              <div className="h-64 w-full relative overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-red-600" />
                    Inspect Photo
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider text-red-400 border border-red-500/30">
                  {img.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex flex-col flex-grow justify-between bg-slate-950 text-white">
                <div>
                  <h3 className="font-bold text-sm text-white group-hover:text-red-400 transition-colors leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {img.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-slate-300 font-medium">Phoenix Metro</span>
                  <span className="text-red-500 font-semibold font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Verified Work
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Image Inspection Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="bg-red-600 text-white px-2.5 py-0.5 rounded text-xs font-bold uppercase">
                    {selectedImage.category}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">
                    Sabra's Field Record • Lic. #9110
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="max-h-[60vh] w-full bg-black flex items-center justify-center p-2">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[55vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 text-white border-t border-slate-800">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {selectedImage.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      const title = selectedImage.title;
                      setSelectedImage(null);
                      onOpenQuote(title);
                    }}
                    className="w-full sm:flex-1 bg-red-600 text-white py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                  >
                    <span>Request Service Related to this Photo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
