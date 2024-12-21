import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateSummary(content: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = `Summarize the following blog post in 2-3 sentences:\n\n${content}`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}