import React from "react";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const scrollToNextSection = () => {
    const games = document.getElementById('games');
    if (games) {
      games.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="main" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1688407832489-cc9db90773f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB1bml2ZXJzZSUyMHNwYWNlfGVufDF8fHx8MTc2Mjg1NTEyOHww&ixlib=rb-4.1.0&q=80&w=1080"                                                         alt="Gaming Universe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Powered by TON Blockchain</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
            MetaForgeVerse - The Gaming
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Universe on TON
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Play, earn, and own across a world of skill-based games built for Telegram and powered by the TON blockchain.
          </p>
          
          <div className="pt-8">
            <a href="https://t.me/MetaForgeVerseBot" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg rounded-full shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" />
                Play Now
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-6 h-6 text-slate-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
