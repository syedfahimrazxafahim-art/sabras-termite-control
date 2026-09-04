import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractivePerimeter3D } from './components/InteractivePerimeter3D';
import { WorkGallery } from './components/WorkGallery';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [prefillService, setPrefillService] = useState<string>('');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Scroll to top on tab change
  const handleNavigate = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPrefillService(serviceName);
    } else {
      setPrefillService('');
    }
    setIsQuoteOpen(true);
  };

  const handleExploreService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 font-sans flex flex-col selection:bg-red-600 selection:text-white">
      {/* Global Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Views */}
      <main className="flex-grow flex flex-col">
        {currentTab === 'home' && (
          <>
            {/* Sleek Hero Section with 3D Preview and 3-Card Bar */}
            <HeroSection
              onOpenQuote={() => handleOpenQuote()}
              onExploreService={handleExploreService}
            />

            {/* Interactive 3D Perimeter Experience */}
            <InteractivePerimeter3D onOpenQuote={handleOpenQuote} />

            {/* Dedicated "Our Pest Control Work" Section */}
            <WorkGallery onOpenQuote={handleOpenQuote} />

            {/* Core Services Overview */}
            <ServicesSection
              onOpenQuote={handleOpenQuote}
              selectedServiceId={selectedServiceId}
            />

            {/* About Sabra Thornburg & Lic. #9110 */}
            <AboutSection onOpenQuote={() => handleOpenQuote()} />

            {/* Phoenix Reviews & FAQ */}
            <ReviewsSection />
          </>
        )}

        {currentTab === 'services' && (
          <div className="flex flex-col">
            <div className="bg-slate-950 text-white py-12 px-6 sm:px-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  Pest, Termite &amp; Weed Solutions
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                  Explore scientific treatments specifically engineered for the Sonoran Desert. From subterranean liquid barriers to xeriscape pre-emergents.
                </p>
              </div>
            </div>

            <ServicesSection
              onOpenQuote={handleOpenQuote}
              selectedServiceId={selectedServiceId}
            />

            <InteractivePerimeter3D onOpenQuote={handleOpenQuote} />
          </div>
        )}

        {currentTab === 'interactive-3d' && (
          <div className="flex flex-col">
            <div className="bg-slate-950 text-white py-12 px-6 sm:px-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  Interactive Perimeter Protection
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                  Simulate property defenses against scorpions, subterranean termites, and persistent Arizona monsoon weeds.
                </p>
              </div>
            </div>

            <InteractivePerimeter3D onOpenQuote={handleOpenQuote} />
            <WorkGallery onOpenQuote={handleOpenQuote} />
          </div>
        )}

        {currentTab === 'work' && (
          <div className="flex flex-col">
            <div className="bg-slate-950 text-white py-12 px-6 sm:px-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  Our Pest Control Work
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                  Browse documented field applications, mobile trailer operations, and verified pest eliminations throughout Phoenix.
                </p>
              </div>
            </div>

            <WorkGallery onOpenQuote={handleOpenQuote} />
            <ReviewsSection />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="flex flex-col">
            <div className="bg-slate-950 text-white py-12 px-6 sm:px-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  Owner-Operated Phoenix Pest Control
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                  Meet Sabra Thornburg and discover how personalized, trailer-rigged extermination protects what matters most.
                </p>
              </div>
            </div>

            <AboutSection onOpenQuote={() => handleOpenQuote()} />
            <WorkGallery onOpenQuote={handleOpenQuote} />
          </div>
        )}

        {currentTab === 'reviews' && (
          <div className="flex flex-col">
            <div className="bg-slate-950 text-white py-12 px-6 sm:px-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                  Client Reviews &amp; Testimonials
                </h1>
                <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                  5-star rated termite, scorpion, and weed control throughout Maricopa County.
                </p>
              </div>
            </div>

            <ReviewsSection />
            <AboutSection onOpenQuote={() => handleOpenQuote()} />
          </div>
        )}
      </main>

      {/* Global Sleek Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Persistent Mobile Quick-Action Floating Strip */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 bg-red-600 text-white py-2.5 px-3 rounded-full text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-red-600/30"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (602) 791-0077</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white py-2.5 px-3 rounded-full text-center text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenQuote()}
          className="bg-white text-black py-2.5 px-3.5 rounded-full text-center text-xs font-black uppercase tracking-wider"
        >
          Quote
        </button>
      </div>

      {/* Free Inspection & Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefillService={prefillService}
      />
    </div>
  );
}
