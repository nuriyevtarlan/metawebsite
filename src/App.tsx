import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MissionSection } from "./components/MissionSection";
import { GamesSection } from "./components/GamesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <GamesSection />
        <BenefitsSection />
        <EcosystemSection />
        <RoadmapSection />
        <ContactSection />
      </main>
    </div>
  );
}
