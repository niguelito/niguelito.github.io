import React from 'react';
import Link from 'next/link';
import { Gamepad2, Info, LayoutDashboard, Zap } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="rounded-lg bg-primary/20 p-2 text-primary transition-colors group-hover:bg-primary/30">
            <Zap className="h-6 w-6 fill-primary" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground font-headline">
            NIGUELITO<span className="text-primary">HUB</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#games" className="text-muted-foreground transition-colors hover:text-primary">
            Games
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Leaderboard
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Community
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full border border-primary px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
