import { GoogleGenAI, Type } from "@google/genai";
import { SaaSIdea } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateSaaSIdea = async (niche: string): Promise<SaaSIdea> => {
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    console.warn("API_KEY not found in environment variables. Returning mock data.");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Mock SaaS Generator",
          tagline: "API Key Missing Demo",
          description: "This is a mock response because the API key is missing. In a real environment, Gemini would generate a unique idea based on your input.",
          monetization: "Subscription $10/mo",
          techStack: ["React", "Node", "Gemini"]
        });
      }, 1000);
    });
  }

  const model = "gemini-2.5-flash";
  const prompt = `Generate a creative and viable Micro-SaaS idea for the niche: "${niche}". 
  The response must be a JSON object with the following fields:
  - title: A catchy name for the SaaS.
  - tagline: A short 1-sentence value proposition.
  - description: A brief explanation of what it does (max 2 sentences).
  - monetization: How it makes money (e.g., Monthly Sub, Freemium).
  - techStack: An array of 3-4 key technologies recommended.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            description: { type: Type.STRING },
            monetization: { type: Type.STRING },
            techStack: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "tagline", "description", "monetization", "techStack"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as SaaSIdea;
    }
    throw new Error("Empty response from Gemini");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate idea. Please try again.");
  }
};