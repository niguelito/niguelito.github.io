'use server';
/**
 * @fileOverview A flow to generate unique math trivia questions.
 *
 * - generateMathTriviaQuestion - A function that handles the generation of a math trivia question.
 * - GenerateMathTriviaQuestionInput - The input type for the generateMathTriviaQuestion function.
 * - GenerateMathTriviaQuestionOutput - The return type for the generateMathTriviaQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Input schema for the math trivia question generation flow.
 * Defines an optional difficulty level for the trivia question.
 */
const GenerateMathTriviaQuestionInputSchema = z.object({
  difficulty: z.enum(['easy', 'medium', 'hard']).optional().describe('The difficulty level of the math trivia question.'),
});
export type GenerateMathTriviaQuestionInput = z.infer<typeof GenerateMathTriviaQuestionInputSchema>;

/**
 * Output schema for the math trivia question generation flow.
 * Contains the generated question and its correct answer.
 */
const GenerateMathTriviaQuestionOutputSchema = z.object({
  question: z.string().describe('The generated math trivia question.'),
  answer: z.string().describe('The correct answer to the math trivia question.'),
});
export type GenerateMathTriviaQuestionOutput = z.infer<typeof GenerateMathTriviaQuestionOutputSchema>;

/**
 * Generates a unique math trivia question based on the provided input.
 * If a difficulty is specified, the question will adhere to that level.
 * @param input - An object containing optional difficulty level.
 * @returns A promise that resolves to an object containing the question and its answer.
 */
export async function generateMathTriviaQuestion(input: GenerateMathTriviaQuestionInput): Promise<GenerateMathTriviaQuestionOutput> {
  return generateMathTriviaQuestionFlow(input);
}

// Defines the prompt for the LLM to generate math trivia questions.
const prompt = ai.definePrompt({
  name: 'generateMathTriviaQuestionPrompt',
  input: {schema: GenerateMathTriviaQuestionInputSchema},
  output: {schema: GenerateMathTriviaQuestionOutputSchema},
  prompt: `You are an expert at creating unique and engaging math trivia questions.
Generate a single math trivia question and its correct answer.

{{#if difficulty}}
The difficulty level requested is: {{{difficulty}}}.
{{/if}}

Ensure the question is suitable for a trivia game and the answer is clear and concise.`,
});

// Defines the Genkit flow to handle the math trivia question generation.
const generateMathTriviaQuestionFlow = ai.defineFlow(
  {
    name: 'generateMathTriviaQuestionFlow',
    inputSchema: GenerateMathTriviaQuestionInputSchema,
    outputSchema: GenerateMathTriviaQuestionOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate math trivia question output.');
    }
    return output;
  }
);
