import React from "react";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { name: "Main", id: "main" },
    { name: "Our mission", id: "mission" },
    { name: "Games", id: "games" },
    { name: "Our benefits", id: "benefits" },
    { name: "Ecosystem", id: "ecosystem" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Contact us", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-2 rounded-lg">
              <img src="/metaforgeverse-icon.svg" alt="MetaForgeVerse" className="h-8 w-8" />
            </div>
            <span className="text-white text-xl font-bold">MetaForgeVerse</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button className="lg:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
