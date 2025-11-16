import React from "react";
import { CheckCircle2, Circle, Rocket } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    items: [
      "Platform architecture design",
      "Smart contract development",
      "Initial game prototypes",
      "Community building",
    ],
  },
  {
    phase: "Phase 2",
    title: "Launch",
    status: "current",
    items: [
      "Beta testing on Telegram",
      "First game releases",
      "Token generation event",
      "Partnership announcements",
    ],
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    status: "upcoming",
    items: [
      "Additional game releases",
      "Tournament system launch",
      "NFT marketplace integration",
      "Mobile app development",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem",
    status: "upcoming",
    items: [
      "DAO governance launch",
      "Cross-chain integration",
      "Developer SDK release",
      "Global tournaments",
    ],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Rocket className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Roadmap to the Future
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building the most comprehensive GameFi ecosystem on TON
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {item.status === "completed" ? (
                      <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    ) : item.status === "current" ? (
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center animate-pulse">
                        <Circle className="h-6 w-6 text-blue-500 fill-blue-500" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-slate-800/50 border-2 border-slate-700 flex items-center justify-center">
                        <Circle className="h-6 w-6 text-slate-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-blue-400 text-sm">{item.phase}</span>
                        <h3 className="text-2xl text-white mt-1">{item.title}</h3>
                      </div>
                      {item.status === "current" && (
                        <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm">
                          In Progress
                        </span>
                      )}
                      {item.status === "completed" && (
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm">
                          Completed
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center gap-2 text-slate-400"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span>{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-8 bg-slate-800"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
