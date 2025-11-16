import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Swords, Brain, Target } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Battle Arena",
    category: "Fighting",
    description: "Engage in intense PvP battles and prove your combat skills",
    image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdodGluZyUyMGdhbWV8ZW58MXx8fHwxNzYyNzc1NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Swords,
  },
  {
    id: 2,
    title: "Strategy Masters",
    category: "Strategy",
    description: "Build your empire and outsmart opponents in strategic warfare",
    image: "https://images.unsplash.com/photo-1677816156435-e844da620fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGdhbWUlMjBib2FyZHxlbnwxfHx8fDE3NjI4MzIzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Brain,
  },
  {
    id: 3,
    title: "Cosmic Shooters",
    category: "Shooter",
    description: "Fast-paced action in space combat tournaments",
    image: "https://images.unsplash.com/photo-1759491978401-1dc6f38b6780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9vdGVyJTIwZ2FtZXxlbnwxfHx8fDE3NjI4MjQzODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Target,
  },
];

export function GamesSection() {
  return (
    <section id="games" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <Swords className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Our Games</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Explore Our Gaming Universe
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Multiple game genres, one unified ecosystem
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {games.map((game) => (
              <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-3">
                  <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-white text-sm">
                        {game.category}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                          <game.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl text-white">{game.title}</h3>
                      </div>
                      
                      <p className="text-slate-400">{game.description}</p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full"
                      >
                        <a href="https://t.me/MetaForgeVerseBot" target="_blank" rel="noopener noreferrer">
                          Play Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" />
          <CarouselNext className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" />
        </Carousel>
      </div>
    </section>
  );
}
