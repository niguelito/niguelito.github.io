"use client"

import React, { useState, useEffect } from 'react';
import { generateMathTriviaQuestion } from '@/ai/flows/generate-math-trivia-question';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, CheckCircle2, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function MathTrivia() {
  const [loading, setLoading] = useState(false);
  const [questionData, setQuestionData] = useState<{ question: string; answer: string } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ correct: boolean; msg: string } | null>(null);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const fetchQuestion = async (difficulty: 'easy' | 'medium' | 'hard' = 'medium') => {
    setLoading(true);
    setFeedback(null);
    setUserAnswer('');
    try {
      const data = await generateMathTriviaQuestion({ difficulty });
      setQuestionData(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate a question. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionData) return;

    const isCorrect = userAnswer.trim().toLowerCase() === questionData.answer.trim().toLowerCase();
    if (isCorrect) {
      setScore(prev => prev + 10);
      setFeedback({ correct: true, msg: "Excellent! That's correct." });
    } else {
      setFeedback({ correct: false, msg: `Not quite. The correct answer was ${questionData.answer}.` });
    }
  };

  return (
    <Card className="mx-auto w-full max-w-2xl border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between border-b border-primary/10 pb-4">
        <div>
          <CardTitle className="text-2xl font-bold text-primary font-headline">Math AI Trivia</CardTitle>
          <p className="text-sm text-muted-foreground">Powered by Gemini 2.5 Flash</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-bold">
          <Trophy className="h-4 w-4" />
          {score}
        </div>
      </CardHeader>
      <CardContent className="pt-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse">Generating your next challenge...</p>
          </div>
        ) : questionData ? (
          <div className="space-y-6">
            <div className="rounded-xl bg-muted/30 p-8 text-center border border-white/5">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {questionData.question}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Your answer..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="h-12 border-primary/20 bg-background/50 text-lg focus:ring-primary"
                  autoFocus
                  disabled={!!feedback}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={!userAnswer || !!feedback}
                  className="bg-primary hover:bg-primary/90 text-white font-bold"
                >
                  Submit
                </Button>
              </div>
            </form>

            {feedback && (
              <div className={`flex items-center gap-3 rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-300 ${feedback.correct ? 'bg-secondary/20 text-secondary' : 'bg-destructive/20 text-destructive'}`}>
                {feedback.correct ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <p className="font-medium">{feedback.msg}</p>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => fetchQuestion('easy')} className="border-secondary text-secondary hover:bg-secondary/10">Easy</Button>
                <Button variant="outline" size="sm" onClick={() => fetchQuestion('medium')} className="border-primary text-primary hover:bg-primary/10">Medium</Button>
                <Button variant="outline" size="sm" onClick={() => fetchQuestion('hard')} className="border-destructive text-destructive hover:bg-destructive/10">Hard</Button>
              </div>
              <Button 
                variant="ghost" 
                onClick={() => fetchQuestion()} 
                className="gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Next Question
              </Button>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
