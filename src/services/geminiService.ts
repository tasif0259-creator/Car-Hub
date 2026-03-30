import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateProductDescription = async (productName: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a short, elegant, and enticing 2-sentence fashion description for a ${productName}. Focus on style, comfort, and quality.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating description:", error);
    return "Elevate your everyday style with this meticulously crafted piece, designed for both comfort and sophistication.";
  }
};
