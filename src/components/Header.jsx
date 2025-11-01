import React, { useState, useEffect } from "react";
import logo from "../assets/logos/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['about', 'vision', 'team', 'docs'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', icon: '💎' },
    { href: '#vision', label: 'Vision', icon: '🔮' },
     { href: '#docs', label: 'Docs', icon: '📡' },
    { href: '#team', label: 'Team', icon: '⚡' }
   
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-3xl shadow-[0_0_120px_rgba(212,175,55,0.2)]' 
            : 'bg-transparent'
        }`}
      >
        {/* Enhanced top glow line with dual layers */}
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ${scrolled ? 'opacity-100' : 'opacity-70'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-goldLight to-transparent animate-pulse-slow"></div>
        </div>

        {/* Enhanced glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[150px] transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`absolute top-0 right-1/4 w-96 h-96 bg-goldLight/20 rounded-full blur-[150px] transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`absolute top-0 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-[120px] transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'} animate-pulse-slow`}></div>
        </div>
        
        <nav className={`container relative z-10 transition-all duration-700 flex justify-between items-center ${scrolled ? 'py-3' : 'py-6'}`}>
          {/* ULTIMATE FUTURISTIC LOGO */}
          <a href="#" className="flex items-center gap-4 group relative z-20">
            {/* Logo container with 3D effect */}
            <div className="relative perspective-1000">
              {/* Triple orbiting rings effect */}
              <div className="absolute inset-0 -m-6">
                <div className="absolute inset-0 border border-gold/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 border border-goldLight/30 rounded-full animate-spin-reverse"></div>
                <div className="absolute inset-4 border border-gold/20 rounded-full animate-spin-slow" style={{animationDuration: '10s'}}></div>
              </div>
              
              
              
              {/* Logo with hexagon frame */}
              
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-yellow-400/20 rounded-2xl"></div>
                
                <img
                  src={logo}
                  alt="Vectorium"
                  className={`relative transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 ${
                    scrolled ? 'h-9 w-auto' : 'h-11 w-auto'
                  }`}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.9)) brightness(1.3) contrast(1.1)',
                  }}
                />
                

              
              {/* Enhanced particle effects */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-br from-gold to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(212,175,55,1)]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Enhanced brand text with cyberpunk styling */}
            <div className="hidden sm:block relative">
              <div className="text-2xl font-black tracking-tighter leading-none relative">
                <span className="bg-gradient-to-r from-gold via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] animate-shimmer">
                  VECT
                </span>
                <span className="text-gold mx-1 animate-pulse-slow">•</span>
                <span className="bg-gradient-to-r from-yellow-400 via-gold to-white bg-clip-text text-transparent animate-shimmer" style={{animationDelay: '0.5s'}}>
                  AI
                </span>
                {/* Glitch overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-100">
                  <span className="bg-gradient-to-r from-gold to-red-500 bg-clip-text text-transparent" style={{transform: 'translate(2px, -1px)'}}>
                    VECT•AI
                  </span>
                </div>
              </div>
              <div className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] -mt-1 flex items-center gap-2">
                <span className="inline-block w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                <span className="group-hover:text-gold transition-colors duration-500">Decentralized Intelligence</span>
              </div>
              
              {/* Enhanced animated underline */}
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-white blur-sm"></div>
              </div>
            </div>
          </a>

          {/* ENHANCED FUTURISTIC DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Navigation container with enhanced glass effect */}
            <div className="flex items-center gap-2 px-5 py-2.5 bg-black/50 backdrop-blur-2xl rounded-2xl border border-gold/30 shadow-[inset_0_0_80px_rgba(212,175,55,0.05),0_0_40px_rgba(212,175,55,0.1)]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className={`group relative px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-500 ${
                      isActive ? 'text-gold' : 'text-gray-300'
                    }`}
                  >
                    {/* Active indicator with glow */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-yellow-400/30 rounded-xl border border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-yellow-400/10 rounded-xl animate-pulse-slow"></div>
                      </>
                    )}
                    
                    {/* Enhanced hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/20 to-yellow-400/0 rounded-xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                    
                    {/* Icon & Label */}
                    <span className="relative flex items-center gap-2.5 group-hover:text-gold transition-colors duration-300">
                      <span className={`text-lg transition-all duration-500 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'scale-90 opacity-60 group-hover:scale-110 group-hover:opacity-100'}`}>
                        {link.icon}
                      </span>
                      <span className="relative">
                        {link.label}
                        {/* Enhanced glitch effect on hover */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-100 text-yellow-400" style={{transform: 'translate(1px, -1px)'}}>
                          {link.label}
                        </span>
                      </span>
                    </span>
                    
                    {/* Enhanced animated border bottom */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-gold to-yellow-400 transition-all duration-500 ${
                      isActive ? 'w-3/4 shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'w-0 group-hover:w-3/4'
                    }`}>
                      <div className="absolute inset-0 bg-white blur-sm"></div>
                    </div>
                    
                    {/* Enhanced scan line effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/0 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 opacity-0 group-hover:opacity-100 rounded-xl"></div>
                    
                    {/* Pulse ring on active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl border-2 border-gold/40 animate-ping opacity-20"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* ULTIMATE PREMIUM CTA BUTTON */}
            <div className="relative group/cta ml-4">
              {/* Outer glow ring with animation */}
              <div className="absolute -inset-3 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-2xl blur-2xl opacity-60 group-hover/cta:opacity-100 animate-pulse-slow transition-opacity duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-gold to-yellow-400 rounded-2xl blur-xl opacity-50 group-hover/cta:opacity-80 transition-opacity duration-700"></div>
              
              {/* Button container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-xl blur-lg opacity-80"></div>
                
                <a 
                  href="#buy" 
                  className="relative flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-gold via-yellow-300 to-gold rounded-xl font-black text-sm uppercase tracking-widest text-black overflow-hidden group-hover/cta:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(212,175,55,0.6)]"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Scanning light effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Diagonal shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent -translate-x-full -translate-y-full group-hover/cta:translate-x-full group-hover/cta:translate-y-full transition-transform duration-1000 delay-100"></div>
                  
                  {/* Rocket icon with animation */}
                  <span className="relative text-xl group-hover/cta:animate-bounce drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]">🚀</span>
                  
                  {/* Text */}
                  <span className="relative flex items-center gap-2 drop-shadow-[0_0_2px_rgba(0,0,0,0.3)]">
                    Buy Tokens
                    <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  
                  {/* Enhanced border glow */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/60 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"></div>
                  
                  {/* Corner sparkles */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 delay-100 shadow-[0_0_10px_rgba(255,255,255,1)]"></div>
                </a>
              </div>
            </div>
          </div>

          {/* ENHANCED FUTURISTIC MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative p-3.5 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-2xl rounded-xl border-2 border-gold/40 hover:border-gold transition-all duration-500 group overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-yellow-400/30 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
            
            {/* Hamburger with enhanced cyberpunk style */}
            <div className="relative flex flex-col justify-center gap-1.5 w-6">
              <span className={`h-[3px] rounded-full bg-gradient-to-r from-gold to-yellow-400 shadow-[0_0_12px_rgba(212,175,55,1)] transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`h-[3px] rounded-full bg-gradient-to-r from-gold to-yellow-400 shadow-[0_0_12px_rgba(212,175,55,1)] transition-all duration-500 ${menuOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`h-[3px] rounded-full bg-gradient-to-r from-gold to-yellow-400 shadow-[0_0_12px_rgba(212,175,55,1)] transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Enhanced bottom scan line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan"></div>
        </div>
      </header>

      {/* ULTIMATE FUTURISTIC MOBILE MENU */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Enhanced backdrop with blur and grain */}
        <div 
          className={`absolute inset-0 bg-black/90 backdrop-blur-3xl transition-opacity duration-700 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-yellow-400/5"></div>
        </div>
        
        {/* Enhanced menu panel */}
        <div className={`absolute top-20 right-4 left-4 max-w-md mx-auto transition-all duration-700 ${
          menuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-10 opacity-0 scale-95'
        }`}>
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-3xl rounded-3xl border-2 border-gold/40 shadow-[0_0_120px_rgba(212,175,55,0.4)] overflow-hidden">
            {/* Enhanced animated top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
            </div>
            
            {/* Enhanced background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            
            <div className="relative p-8 space-y-3">
              {navLinks.map((link, i) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="group relative flex items-center gap-4 p-5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl border border-gold/30 hover:border-gold/60 hover:bg-gold/15 transition-all duration-500 overflow-hidden"
                  style={{ 
                    animationDelay: `${i * 80}ms`,
                    animation: menuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {/* Enhanced hover scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Icon with glow */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold/30 to-yellow-400/30 rounded-xl border border-gold/40 group-hover:scale-110 group-hover:border-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <span className="text-2xl drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">{link.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Label with glow effect */}
                  <span className="relative z-10 flex-1 text-lg font-bold text-gray-200 group-hover:text-gold transition-colors duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0)]  group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                    {link.label}
                  </span>
                  
                  {/* Enhanced arrow */}
                  <svg className="relative z-10 w-6 h-6 text-gold/60 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold/0 group-hover:border-gold rounded-tr-lg transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold/0 group-hover:border-gold rounded-bl-lg transition-all duration-500"></div>
                </a>
              ))}
              
              {/* Enhanced mobile CTA */}
              <div className="pt-4" style={{ 
                animationDelay: '320ms',
                animation: menuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
              }}>
                <div className="relative group/mobile-cta">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gold via-yellow-300 to-gold rounded-2xl blur-2xl opacity-80 group-hover/mobile-cta:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                  
                  <a
                    href="#buy"
                    onClick={() => setMenuOpen(false)}
                    className="relative flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-gold via-yellow-300 to-gold rounded-2xl font-black text-lg uppercase tracking-wider text-black shadow-[0_0_60px_rgba(212,175,55,0.7)] group-hover/mobile-cta:shadow-[0_0_100px_rgba(212,175,55,0.9)] transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 opacity-0 group-hover/mobile-cta:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/mobile-cta:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative text-2xl drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"></span>
                    <span className="relative drop-shadow-[0_0_2px_rgba(0,0,0,0.3)]">Buy Tokens Now</span>
                    <svg className="relative w-6 h-6 group-hover/mobile-cta:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/50 opacity-0 group-hover/mobile-cta:opacity-100 transition-opacity duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Enhanced bottom scan line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        
        /* Custom scrollbar for the page */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #D4AF37, #F4E5B0);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #F4E5B0, #D4AF37);
        }

        /* Utility classes for colors */
        .text-gold {
          color: #D4AF37;
        }
        .text-goldLight {
          color: #F4E5B0;
        }
        .bg-gold {
          background-color: #D4AF37;
        }
        .bg-goldLight {
          background-color: #F4E5B0;
        }
        .border-gold {
          border-color: #D4AF37;
        }
        .border-goldLight {
          border-color: #F4E5B0;
        }
        .bg-midnight {
          background-color: #0A0E27;
        }
        .bg-ink {
          background-color: #1A1D3A;
        }
        
        /* Gradient utilities */
        .from-gold {
          --tw-gradient-from: #D4AF37;
        }
        .to-gold {
          --tw-gradient-to: #D4AF37;
        }
        .via-gold {
          --tw-gradient-via: #D4AF37;
        }
        .from-goldLight {
          --tw-gradient-from: #F4E5B0;
        }
        .to-goldLight {
          --tw-gradient-to: #F4E5B0;
        }
        .via-goldLight {
          --tw-gradient-via: #F4E5B0;
        }
        .from-midnight {
          --tw-gradient-from: #0A0E27;
        }
        .to-midnight {
          --tw-gradient-to: #0A0E27;
        }
        .via-midnight {
          --tw-gradient-via: #0A0E27;
        }
        .from-ink {
          --tw-gradient-from: #1A1D3A;
        }
        .to-ink {
          --tw-gradient-to: #1A1D3A;
        }
        .via-ink {
          --tw-gradient-via: #1A1D3A;
        }
      `}</style>
    </>
  );
}