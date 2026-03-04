"use client"

import React from 'react';
import { Coins, Ghost, LayoutGrid, Terminal, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const GAMES = [
  { id: 'math-trivia', title: 'Math Trivia', icon: Terminal, color: 'text-primary', path: '/tryyourmath-but-better' },
  { id: 'income-sim', title: 'Income Simulator', icon: Coins, color: 'text-secondary', path: '/income-simulator' },
  { id: 'tetris', title: 'Tetris', icon: LayoutGrid, color: 'text-primary', path: '/tetris' },
  { id: 'casino', title: 'Cyber Casino', icon: Coins, color: 'text-secondary', path: '/casino-simulator' },
  { id: 'impostor', title: 'Impostor', icon: Ghost, color: 'text-destructive', path: '/imposter' },
  { id: 'jeopardy', title: "MindVault Jeopardy", icon: HelpCircle, color: 'text-primary', path: '/mindvault-jeopardy' }
] as const;

export function GamePortal() {
  return (
    <section id="games" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Game <span className="text-primary">Directory</span>
          </h2>
          <p className="mt-2 text-muted-foreground">Select a portal to enter the digital realm.</p>
        </div>
        <div className="flex gap-2">
          <div className="h-1 w-24 rounded-full bg-primary" />
          <div className="h-1 w-8 rounded-full bg-secondary" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((game) => {
          const placeholder = PlaceHolderImages.find(p => p.id === game.id);
          return (
            <Link
              key={game.id}
              onClick={() => window.location.href = game.path}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_30px_rgba(61,153,245,0.2)]"
            >
              <div className="aspect-video w-full relative">
                {placeholder && (
                  <Image
                    src={placeholder.imageUrl}
                    alt={game.title}
                    fill
                    className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={placeholder.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-background/80 p-2 backdrop-blur-md">
                   <game.icon className={`h-5 w-5 ${game.color}`} />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors">{game.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  Launch the next generation of web-based gaming experiences.
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2">
                  Launch Game →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
