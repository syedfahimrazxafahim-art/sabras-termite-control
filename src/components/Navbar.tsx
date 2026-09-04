import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tabId: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Gallery' },
    { id: 'about', label: 'Contact' }
  ];

  const handleNav = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 bg-white sticky top-0 border-b border-slate-200/80 shadow-xs" id="main-header">
      <div className="max-w-7xl mx-auto h-16 sm:h-18 px-4 sm:px-8 flex items-center justify-between">
        {/* Logo & Company Name */}
        <BrandLogo onClick={() => handleNav('home')} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative cursor-pointer ${
                  isActive 
                    ? 'text-red-600' 
                    : 'text-slate-700 hover:text-red-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Call to action button for contact */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenQuote}
            className="bg-black hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
            id="header-contact-cta"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-sm font-bold uppercase tracking-wider py-2 transition-colors ${
                  currentTab === link.id ? 'text-red-600' : 'text-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-red-600 hover:bg-black text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

