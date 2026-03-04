"use client"

import React, { useState } from 'react';
import { MathTrivia } from './MathTrivia';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Coins, Ghost, LayoutGrid, Terminal } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type GameId = 'math-trivia' | 'income-sim' | 'tetris' | 'casino' | 'impostor';

const GAMES = [
  { id: 'math-trivia', title: 'Math AI Trivia', icon: Terminal, color: 'text-primary' },
  { id: 'income-sim', title: 'Income Simulator', icon: Coins, color: 'text-secondary' },
  { id: 'tetris', title: 'Neon Tetris', icon: LayoutGrid, color: 'text-primary' },
  { id: 'casino', title: 'Cyber Casino', icon: Coins, color: 'text-secondary' },
  { id: 'impostor', title: 'Deep Space Impostor', icon: Ghost, color: 'text-destructive' },
] as const;

export function GamePortal() {
  const [activeGame, setActiveGame] = useState<GameId | null>(null);

  if (activeGame === 'math-trivia') {
    return (
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => setActiveGame(null)} 
          className="mb-8 gap-2 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Lobby
        </Button>
        <MathTrivia />
      </div>
    );
  }

  if (activeGame) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="mx-auto max-w-md space-y-6 rounded-2xl border-2 border-dashed border-primary/20 bg-muted/10 p-12">
          <div className="flex justify-center">
            <Terminal className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold font-headline">{activeGame.toUpperCase()} Under Development</h2>
          <p className="text-muted-foreground">This sector of Niguelito Hub is currently offline for maintenance. Please check out Math AI Trivia!</p>
          <Button onClick={() => setActiveGame(null)} variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Return to Hub
          </Button>
        </div>
      </div>
    );
  }

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
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
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
                  Experience the next level of casual gaming in the hub.
                </p>
                <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2">
                  Launch Game →
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
