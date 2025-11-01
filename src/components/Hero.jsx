import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Shield, Globe, ArrowRight, Download, MessageCircle } from "lucide-react";

// Replace with your actual constants
const COMMUNITY_LINKS = {
  telegram: "https://t.me/vectorium"
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Zap, label: 'Lightning Fast', value: 'Sub-second', color: 'from-gold to-goldLight' },
    { icon: Shield, label: 'Secure Protocol', value: '100% Safe', color: 'from-goldLight to-gold' },
    { icon: Globe, label: 'Decentralized', value: 'Fully Open', color: 'from-gold via-goldLight to-gold' },
  ];

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center text-center"
      >
        {/* Dynamic mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212,175,55,0.15), transparent 40%)`
          }}
        ></div>

        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)] animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.05),transparent_50%)] animate-pulse-slower"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.05),transparent_50%)] animate-pulse-slowest"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-10">
          <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-[10%] border border-goldLight/10 rounded-full animate-spin-reverse"></div>
          <div className="absolute inset-[20%] border border-gold/10 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Scan lines effect */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/10 to-transparent animate-scan-vertical"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-6xl px-6 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge with enhanced design */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-xl rounded-full border border-gold/30 hover:border-gold/60 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-goldLight/10 to-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated pulse dot */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-br from-gold to-goldLight shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
              </span>
              
              <span className="relative text-sm font-bold text-gold uppercase tracking-widest">Built by Vectorium</span>
              
              <Sparkles className="relative w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 leading-tight animate-fade-in" style={{ animationDelay: '400ms' }}>
            {/* Brand name with extreme styling */}
            <div className="relative inline-block mb-4">
              {/* Glow layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-white to-goldLight blur-3xl opacity-50 animate-pulse-slow"></div>
              
              <div className="relative text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="inline-block bg-gradient-to-r from-yellow-300 via-gold to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(212,175,55,0.8)] animate-gradient bg-[length:200%_auto]">
                  VECT
                </span>
                <span className="inline-block mx-2 md:mx-3">
                  <div className="relative w-3 h-3 md:w-4 md:h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)] animate-pulse-slow"></div>
                </span>
                <span className="inline-block bg-gradient-to-r from-amber-400 via-goldLight to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(212,175,55,0.8)] animate-gradient bg-[length:200%_auto]">
                  AI
                </span>
              </div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold to-transparent">
                <div className="absolute inset-0 bg-white blur-sm"></div>
              </div>
            </div>

            {/* Tagline */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-100 mt-8 leading-tight">
              <div className="mb-2">
                <span className="inline-block hover:text-gold transition-colors duration-500">Empowering</span>{' '}
                <span className="inline-block hover:text-gold transition-colors duration-500">the</span>{' '}
                <span className="inline-block hover:text-gold transition-colors duration-500">Next</span>{' '}
                <span className="inline-block hover:text-gold transition-colors duration-500">Era</span>
              </div>
              <div>
                <span className="inline-block hover:text-gold transition-colors duration-500">of</span>{' '}
                <span className="relative inline-block group/word">
                  <span className="relative z-10 bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent font-black">
                    Intelligent Assets
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-goldLight/20 blur-xl opacity-0 group-hover/word:opacity-100 transition-opacity duration-500"></div>
                </span>
              </div>
            </div>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
            A <span className="relative inline-block group/text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight font-bold">decentralized intelligence protocol</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-goldLight scale-x-0 group-hover/text:scale-x-100 transition-transform duration-500"></span>
            </span>{' '}
            integrating cutting-edge{' '}
            <span className="relative inline-block group/text">
              <span className="text-gold font-bold">AI</span>
              <span className="absolute inset-0 text-goldLight blur-sm opacity-0 group-hover/text:opacity-100 transition-opacity duration-300">AI</span>
            </span>{' '}
            and{' '}
            <span className="relative inline-block group/text">
              <span className="text-gold font-bold">tokenized data streams</span>
              <span className="absolute inset-0 text-goldLight blur-sm opacity-0 group-hover/text:opacity-100 transition-opacity duration-300">tokenized data streams</span>
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '800ms' }}>
            {/* Primary CTA */}
            <div className="relative group/btn">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold via-goldLight to-gold rounded-2xl blur-xl opacity-50 group-hover/btn:opacity-100 animate-pulse-slow transition-opacity duration-700"></div>
              
              <a 
                href="#buy" 
                className="relative flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-gold via-goldLight to-gold rounded-xl font-black text-sm md:text-base lg:text-lg uppercase tracking-widest text-black overflow-hidden group-hover/btn:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-goldLight via-white to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                
                <Zap className="relative w-5 h-5 md:w-6 md:h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="relative">Buy Tokens</span>
                <ArrowRight className="relative w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Secondary CTA */}
<a 
  href="/documents/whitepaper.pdf" 
  download="Vectorium-Whitepaper.pdf"
  className="group relative flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-midnight/40 backdrop-blur-xl rounded-xl font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider text-gold border-2 border-gold/50 hover:border-gold hover:bg-gold/10 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:scale-105"
>
  <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-goldLight/10 to-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
  
  <Download className="relative w-5 h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform duration-300" />
  <span className="relative">Whitepaper</span>
  <ArrowRight className="relative w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
</a>


            {/* Tertiary CTA */}
            <a 
              href={COMMUNITY_LINKS.telegram || "https://t.me/VectoriumProject"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-transparent backdrop-blur-xl rounded-xl font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider text-gray-300 border-2 border-gray-600 hover:border-gold hover:text-gold transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <MessageCircle className="relative w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">Join Community</span>
              <ArrowRight className="relative w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '1000ms' }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`}></div>
                  
                  <div className="relative p-6 md:p-8 bg-gradient-to-br from-midnight/60 via-ink/60 to-midnight/60 backdrop-blur-xl rounded-2xl border border-gold/20 group-hover:border-gold/50 transition-all duration-500 overflow-hidden">
                    {/* Top scan line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                    
                    {/* Background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-4 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full`}></div>
                        <div className={`relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]`}>
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-black" />
                        </div>
                      </div>
                      
                      {/* Value */}
                      <div className="text-2xl md:text-3xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>


                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow z-10">
          <div className="flex flex-col items-center gap-2 text-gold">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Scroll</span>
            <div className="w-8 h-12 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gold rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(-10px, -5px); }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-slowest {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { rotate: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scan-vertical 8s linear infinite;
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        .animate-pulse-slowest {
          animation: pulse-slowest 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}