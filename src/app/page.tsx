"use client"
import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { GamePortal } from '@/components/games/GamePortal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  ChevronRight, 
  PlayCircle, 
  Rocket, 
  ShieldCheck, 
  Trophy, 
  Terminal, 
  LayoutGrid,
  FileUser
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-muted/10">
          <div className="container relative mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8 animate-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              miguel lock tf in stop gambling
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-headline">
              Welcome the <span className="text-primary italic">Niguelito</span> Hub
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              I will create the best portal, and quite frankly, I have created the best gaming portal for the best games on the internet.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="#games">
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-white neon-blue-glow rounded-xl">
                  Miguel stop gambling
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-secondary text-secondary hover:bg-secondary/10 rounded-xl">
                Learn More
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-3xl mx-auto">
              {[
                { label: 'Miguel', value: '12', icon: ShieldCheck },
                { label: 'Games Active', value: '6 or 7', icon: PlayCircle },
                { label: 'Daily Visits', value: '14 i think', icon: Trophy },
                { label: 'Uptime', value: '0%', icon: Rocket },
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
                <h3 className="text-xl font-bold font-headline">Performance Optimized</h3>
                <p className="text-muted-foreground text-sm">Idk if you have a potato it might not run, as it has some very complex image processing services to render miguel in his entirety.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <LayoutGrid className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Modern Interface</h3>
                <p className="text-muted-foreground text-sm">Experience a sleek, responsive dashboard built with the latest web technologies.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border border-white/5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Global Access</h3>
                <p className="text-muted-foreground text-sm">Access your favorite games from anywhere in the world on any device.</p>
              </div>
            </div>
          </div>
        </section>

        {/*we dont have one lmao */}
        <section className='py-60 border-y border-white/5 text-center' id="wedonthaveone">
          <h1 className='mx-auto max-w-4xl text-2xl font-extrabold tracking-tight sm:text-6xl font-headline'>Whatever you're looking for</h1>
          <p><br></br>we dont have one</p>
          <p>Just play some games or something</p>
        </section>
      </main>

      <section className='py-60 border-y border-white/5 text-center bg-muted/70' id="supporting">
        <h1 className='mx-auto max-w-4xl text-2xl font-extrabold tracking-tight sm:text-6xl font-headline'>If you're trying to support this work</h1>
        <p><br></br>give miguel money hes paid me at least $30+ to build ts</p>
      </section>

      <section className='py-60 border-y border-white/5 text-center bg-muted/90 text-center' id="loadmiguel">
        <h1 className='mx-auto max-w-4xl text-2xl font-extrabold tracking-tight sm:text-6xl font-headline'>Load a Picture of Miguel</h1>
        <p><br></br>Loading a picture of Miguel takes around 6gb of ram.</p>
        <p>This is because your computer essentially needs to render a celestial object.</p>
        <br></br>
        <p>Are you sure you want to load a picture of Miguel?</p>
        <br></br>
        <a href="/MIGUEL.jpg"
              target="_blank"
              rel="noopener noreferrer"><Button onClick={() => setShowImage(true)} size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-white neon-blue-glow rounded-xl">I want to brick my computer</Button></a>
      
        <br></br>

        <div className='py-20 flex flex-center text-center'>{showImage && (
              <img
                id="miguelimage"
                src={`/MIGUEL.jpg?miguel=${Date.now()}`}
                alt="a massive picture of miguel"
              />
        )}</div>
      </section>

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
