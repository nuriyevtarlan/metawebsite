import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Zap, Users } from "lucide-react";

export function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1726584596597-87415e36bd23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZ2FtaW5nfGVufDF8fHx8MTc2Mjg1NTEyOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Blockchain Gaming"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <Target className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Our Mission</span>
            </div>

            <h2 className="text-4xl md:text-5xl text-white">
              Building the next-gen GameFi ecosystem on TON
            </h2>

            <p className="text-xl text-slate-300">
              Where gamers play, earn, and own together.
            </p>

            <div className="grid gap-4 pt-6">
              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Skill-Based Gaming</h3>
                  <p className="text-slate-400 text-sm">
                    Pure gameplay skill determines your success and rewards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Community First</h3>
                  <p className="text-slate-400 text-sm">
                    Built by gamers, for gamers, with transparent governance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
