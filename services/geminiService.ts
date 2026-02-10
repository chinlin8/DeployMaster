
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askDeploymentAI(question: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: question }] }
      ],
      config: {
        systemInstruction: `You are an expert DevOps and Frontend Engineer specializing in deploying React (Vite/TS) applications to production. 
        Your goal is to help users move their code from the AI Studio sandbox to formal URLs.
        Key platforms to recommend: Vercel, Netlify, and GitHub Pages.
        Explain concepts like Build commands (npm run build), Environment Variables (handling the API_KEY securely), and Domain mapping.
        Be concise, technical yet encouraging, and always emphasize security (don't hardcode API keys).`
      }
    });
    return response.text || "Sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "The deployment assistant is currently offline. Please try again later.";
  }
}
