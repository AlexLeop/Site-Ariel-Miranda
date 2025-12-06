import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-950 text-slate-400 py-2.5 hidden md:block border-b border-navy-900 z-50 relative">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center text-[11px] font-medium tracking-wide uppercase">
          <div className="flex items-center gap-6">
            <a 
              href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone size={12} className="text-gold-500" />
              {CONTACT_INFO.whatsapp}
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Mail size={12} className="text-gold-500" />
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-500 cursor-default">
            <MapPin size={12} className="text-gold-500" />
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>
      </div>

      <header 
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/90 backdrop-blur-md shadow-lg py-3' 
            : 'md:top-[38px] top-0 bg-white/95 md:bg-white py-5 shadow-sm md:shadow-none'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href={`#${SectionId.HOME}`} className="flex flex-col group cursor-pointer" aria-label="Ariel Miranda - Início">
              <img 
                src="https://cache2net3.com/Repositorio/19349/Logo/LOGO.png" 
                alt="Ariel Miranda" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="relative text-xs font-bold text-navy-800 hover:text-gold-600 transition-colors uppercase tracking-widest py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200">
               <a 
                 href={CONTACT_INFO.social.instagram}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-navy-900 hover:text-gold-600 transition-transform hover:-translate-y-0.5"
                 aria-label="Instagram"
               >
                 <Instagram size={20} />
               </a>
               <a 
                 href={CONTACT_INFO.social.linkedin}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-navy-900 hover:text-gold-600 transition-transform hover:-translate-y-0.5"
                 aria-label="LinkedIn"
               >
                 <Linkedin size={20} />
               </a>
               <a 
                 href={CONTACT_INFO.social.whatsapp}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-navy-900 hover:text-gold-600 transition-transform hover:-translate-y-0.5"
                 aria-label="WhatsApp"
               >
                 <MessageCircle size={20} />
               </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy-900 p-2 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-50 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white/80 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col border-l border-white/40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-navy-900/5">
           <div className="flex flex-col">
              <img 
                src="https://cache2net3.com/Repositorio/19349/Logo/LOGO.png" 
                alt="Ariel Miranda" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-navy-900/5 rounded-full text-navy-900 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={20} />
            </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="group flex items-center justify-between py-4 text-navy-900 font-heading font-bold uppercase text-sm tracking-wider border-b border-navy-900/5 hover:text-gold-600 hover:pl-2 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
              <ArrowRight size={16} className="text-slate-400 group-hover:text-gold-500 transition-colors" />
            </a>
          ))}
        </nav>

        {/* Sidebar Footer / CTA */}
        <div className="p-6 bg-navy-900/5 border-t border-navy-900/5">
          <a 
            href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
            className="flex items-center justify-center gap-2 w-full py-4 bg-gold-500 text-white font-bold uppercase text-xs tracking-widest rounded-md shadow-lg shadow-gold-500/30 mb-6 hover:bg-gold-600 transition-colors"
          >
            WhatsApp Agora
          </a>
          
          <div className="space-y-4">
             <a 
               href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`} 
               className="flex items-center gap-3 text-slate-500 text-sm hover:text-gold-600 transition-colors"
             >
                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shadow-sm text-gold-600">
                  <Phone size={14} />
                </div>
                <span className="font-medium">{CONTACT_INFO.whatsapp}</span>
             </a>
             <a 
               href={`mailto:${CONTACT_INFO.email}`}
               className="flex items-center gap-3 text-slate-500 text-sm hover:text-gold-600 transition-colors"
             >
                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shadow-sm text-gold-600">
                  <Mail size={14} />
                </div>
                <span className="font-medium truncate">{CONTACT_INFO.email}</span>
             </a>
             <a 
                href={CONTACT_INFO.instagram}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 text-sm hover:text-gold-600 transition-colors"
             >
                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center shadow-sm text-gold-600">
                  <Instagram size={14} />
                </div>
                <span className="font-medium">@perito.arielmiranda</span>
             </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button (Global) */}
      <a 
        href={`https://wa.me/55${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 group-hover:scale-125 transition-transform duration-1000 ease-out animate-pulse"></span>
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor" 
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.231-.298.347-.497.116-.198.058-.371-.029-.544-.087-.174-.785-1.892-1.075-2.592-.283-.675-.57-.584-.785-.595l-.671-.008c-.23 0-.603.086-.919.43-.316.342-1.209 1.182-1.209 2.882s1.239 3.344 1.411 3.577c.172.233 2.437 3.722 5.903 5.218 2.378 1.026 3.28 1.026 4.832.964 1.554-.062 3.442-1.407 3.924-2.765.482-1.358.482-2.522.338-2.765-.144-.243-.539-.387-.836-.536z" />
          <path d="M12.004 2c-5.514 0-10 4.486-10 10 0 1.838.502 3.564 1.373 5.06l-1.373 4.94 5.078-1.364c1.458.825 3.125 1.364 4.922 1.364 5.514 0 10-4.486 10-10s-4.486-10-10-10zm0 18.26c-1.578 0-3.076-.43-4.406-1.18l-.316-.18-3.13.842.844-3.042-.195-.317c-.818-1.326-1.297-2.882-1.297-4.542 0-4.561 3.71-8.26 8.26-8.26 4.55 0 8.26 3.699 8.26 8.26 0 4.56-3.71 8.259-8.26 8.259z" />
        </svg>
      </a>
    </>
  );
};

export default Header;