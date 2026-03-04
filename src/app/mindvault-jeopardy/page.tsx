import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function JeopardyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="mx-auto max-w-md w-full space-y-6 rounded-2xl border-2 border-dashed border-primary/20 bg-muted/10 p-12 text-center">
          <div className="flex justify-center">
            <HelpCircle className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold font-headline uppercase">MindVault Jeopardy Under Construction</h2>
          <p className="text-muted-foreground">The vaults are being filled with questions. Please check back later!</p>
          <Link href="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Hub
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
