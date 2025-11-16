import React from "react";
import { DollarSign, Gamepad2, Wallet, Target, Users, Shield, Gift, Globe } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn Real Rewards",
    description: "Win $TON and in-game coins through battles and tournaments.",
  },
  {
    icon: Gamepad2,
    title: "Play Multiple Games",
    description: "Explore fighting, strategy, and shooter worlds in one ecosystem.",
  },
  {
    icon: Wallet,
    title: "Own Your Assets",
    description: "Keep, trade, or rent your NFTs directly via Tonkeeper wallet.",
  },
  {
    icon: Target,
    title: "Skill-Based, Not Luck-Based",
    description: "Your gameplay and strategy decide your rewards.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "Vote, build, and grow together through the MetaForgeVerse DAO.",
  },
  {
    icon: Shield,
    title: "Powered by TON",
    description: "Fast, secure, and transparent blockchain transactions.",
  },
  {
    icon: Gift,
    title: "Boosts & Spins",
    description: "Multiply your earnings with special packages and daily spins.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Play instantly on Telegram — no downloads, just pure fun.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            🎮 Why Join MetaForgeVerse?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the future of gaming with real ownership and rewards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
