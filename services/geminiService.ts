

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GroundingChunk, AIAnalysisResult } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Research Assistant will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const model = "gemini-2.5-flash";

export const getAIAnalysis = async (query: string): Promise<AIAnalysisResult> => {
  if (!process.env.API_KEY) {
    return {
        text: "The Research Assistant is currently unavailable because the API key is not configured.",
        sources: []
    };
  }
  
  try {
    const systemInstruction = `You are a Research Assistant for the Housing Justice Research Collaborative. Your purpose is to provide objective, data-informed answers to user questions based on publicly available information about Indiana housing policy, demographics, and legal statutes. Use the information available via Google Search to answer questions. Your tone should be formal and academic. Format your response using markdown for clarity. Always cite your sources meticulously. Do not speculate or offer opinions. Stick to verifiable facts.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

    const sources: GroundingChunk[] = (groundingMetadata?.groundingChunks || [])
      .filter(chunk => chunk.web && chunk.web.uri)
      .map(chunk => ({
        web: {
          uri: chunk.web!.uri!,
          title: chunk.web!.title || chunk.web!.uri!,
        },
      }));

    return { text, sources };

  } catch (error) {
    console.error("Error fetching AI analysis:", error);
    let errorMessage = "An unexpected error occurred while fetching the analysis.";
    if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
    }
    return {
      text: `The analysis could not be completed. ${errorMessage}`,
      sources: []
    };
  }
};