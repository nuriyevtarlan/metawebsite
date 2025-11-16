import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ecosystemPartners = [
  { name: "TON", description: "Blockchain" },
  { name: "Telegram", description: "Platform" },
  { name: "Tonkeeper", description: "Wallet" },
  { name: "DeDust", description: "DEX" },
  { name: "Getgems", description: "NFT Marketplace" },
  { name: "TONPlay", description: "Gaming" },
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <svg className="h-4 w-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-purple-300 text-sm">Our Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Integrated with the best projects in the TON ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ecosystemPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 group flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1634024521600-0772a6b89fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGNvaW58ZW58MXx8fHwxNzYyNzkyMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={partner.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>
              <div>
                <h3 className="text-white mb-1">{partner.name}</h3>
                <p className="text-slate-500 text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
