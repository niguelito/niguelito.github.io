import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { GamePortal } from '@/components/games/GamePortal';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  PlayCircle, 
  Rocket, 
  ShieldCheck, 
  Trophy, 
  Terminal, 
  LayoutGrid 
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32">
          {/* Background Decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />
          </div>

          <div className="container relative mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8 animate-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NEW: MATH AI TRIVIA NOW LIVE
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-headline">
              Enter the <span className="text-primary italic">Niguelito</span> Digital Hub
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              A futuristic portal to the most engaging mini-games on the web. Challenge your intellect, simulate your empire, and master the arcade.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-white neon-blue-glow rounded-xl">
                Explore Games
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-secondary text-secondary hover:bg-secondary/10 rounded-xl">
                Learn More
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3xl mx-auto">
              {[
                { label: 'Total Players', value: '12K+', icon: ShieldCheck },
                { label: 'Games Active', value: '5', icon: PlayCircle },
                { label: 'Daily Trivia', value: '800+', icon: Trophy },
                { label: 'New Challenges', value: '24/7', icon: Rocket },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <stat.icon className="h-5 w-5 text-primary mb-2" />
                  <span className="text-xl font-bold font-headline">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Directory / Portal */}
        <GamePortal />

        {/* Feature Highlights */}
        <section className="bg-muted/30 py-24 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-card border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">AI-Powered Gaming</h3>
                <p className="text-muted-foreground text-sm">Experience dynamic gameplay where challenges are generated in real-time by cutting-edge AI.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <LayoutGrid className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Seamless Interface</h3>
                <p className="text-muted-foreground text-sm">Lightning fast navigation and minimal UI designed for pure focus on the gaming experience.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Global Leaderboards</h3>
                <p className="text-muted-foreground text-sm">Compete with players worldwide and climb the ranks of the Niguelito ecosystem.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tighter text-foreground font-headline">
              NIGUELITO<span className="text-primary">HUB</span>
            </span>
            <span className="text-xs text-muted-foreground">© 2024 DIGITAL REALM INC.</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
