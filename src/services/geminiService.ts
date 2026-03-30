import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateCarDescription = async (carModel: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a short, professional, and enticing 2-sentence marketing description for a ${carModel}.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating description:", error);
    return "Experience luxury and performance like never before with this exceptional vehicle.";
  }
};
