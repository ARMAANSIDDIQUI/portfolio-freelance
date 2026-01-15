import { GoogleGenAI } from "@google/genai";

const CONTEXT = `
You are an AI assistant for Armaan Siddiqui's portfolio website.
Armaan is a Full-Stack Developer and Machine Learning Enthusiast based in India.

Key Details:
- Role: Full-Stack Developer | ML & DS Enthusiast | Tech Explorer
- Education: B.Tech in Computer Science at MIT Moradabad.
- Key Skills: React, Node.js, AWS (EC2), MongoDB, Python, Machine Learning, Data Science.
- Notable Projects:
  1. Adarsh Dham: Full-stack ashram management portal.
  2. Chatorzzz: Wholesale B2B E-commerce platform.
  3. Rotary Club Sanskriti: Organization website with admin panel.
  4. CODE++: DSA programming platform with Judge0.

Your goal is to answer questions about Armaan's skills, experience, and availability professionally and concisely.
Act like a high-end digital consultant. Keep answers under 3 sentences unless asked for details.

If asked about hiring Armaan, direct them to the Contact section.
`;

export const getAIResponse = async (query: string): Promise<string> => {
  try {
    // Note: Ensure VITE_GEMINI_API_KEY is set in your .env file
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing");
      return "I am currently in maintenance mode (API Key missing). Please contact Armaan directly.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: query,
      config: {
        systemInstruction: CONTEXT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please reach out to Armaan directly through the contact form.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Armaan is currently focused on high-demand tasks. Please try again later or use the contact form.";
  }
};
