"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Terminal } from 'lucide-react';

export function MathTrivia() {
  return (
    <Card className="mx-auto w-full max-w-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm p-12 text-center">
      <CardHeader className="border-b border-primary/10 pb-6">
        <div className="flex justify-center mb-4">
            <Terminal className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-3xl font-bold text-primary font-headline">Math Trivia</CardTitle>
      </CardHeader>
      <CardContent className="pt-8 space-y-4">
        <p className="text-xl font-medium">Coming Soon</p>
        <p className="text-muted-foreground">We are currently reworking the math trivia engine for a faster, client-side experience. Stay tuned!</p>
      </CardContent>
    </Card>
  );
}
