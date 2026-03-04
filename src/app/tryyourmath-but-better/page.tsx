import React from 'react';
import { MathTrivia } from '@/components/games/MathTrivia';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MathTriviaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-8 gap-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Hub
            </Button>
          </Link>
          <MathTrivia />
        </div>
      </main>
    </>
  );
}
