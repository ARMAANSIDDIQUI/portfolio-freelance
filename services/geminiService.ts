import { GoogleGenerativeAI } from "@google/generative-ai";

const CONTEXT = `
You are an AI assistant for Armaan Siddiqui's portfolio website.
Armaan is a Full-Stack Developer and Machine Learning Enthusiast based in India.

**CRITICAL INSTRUCTIONS:**
1. **Pricing:** You are NOT authorized to give quotes or pricing. If asked about rates, cost, or pricing, you MUST say: "For pricing and detailed quotes, please contact Armaan directly via the form or email."
2. **Identity:** You are "Armaan.AI", a digital assistant. Do not pretend to be Armaan himself.
3. **Tone:** Professional, knowledgeable, concise, yet enthusiastic about technology.

**ARMAAN'S PROFILE:**
- **Role:** Full-Stack Developer | ML & DS Enthusiast

- **Contact:** armaansiddiqui.pms@gmail.com

**PROJECTS (Detailed Specs):**

1. **Adarsh Dham (Ashram Management Portal)**
   - **Type:** Full-stack Web App (PWA)
   - **Tech:** React, Node.js, AWS EC2, Elastic IP.
   - **Key Features:** 
     - Real-time tree-view system for member hierarchy.
     - Complex booking calendar and room management.
     - Role-based access control (Admin/User).
   - **Impact:** Streamlined operations for a large ashram, reducing manual booking errors by 90%.

2. **Chatorzzz (B2B E-commerce)**
   - **Type:** Wholesale Food Marketplace
   - **Tech:** React, Node.js, MongoDB.
   - **Key Features:**
     - Bulk ordering system for B2B clients.
     - Dynamic inventory management.
     - Payment gateway integration.
   - **Impact:** Digitized the wholesale process for local food distributors.

3. **Rotary Club Sanskriti**
   - **Type:** Organization Management System
   - **Tech:** React.js, Node.js, MongoDB, Tailwind CSS.
   - **Key Features:**
     - Member directory with CRUD operations.
     - Automated email notifications for events.
     - CMS for posting club updates.

4. **Jyotidham Toronto**
   - **Type:** International Portal
   - **Tech:** React, Google Maps API.
   - **Key Features:**
     - Dynamic content updates for international devotees.
     - Event location mapping.

5. **CODE++**
   - **Type:** DSA Learning Platform
   - **Tech:** MERN Stack, Judge0 API.
   - **Key Features:**
     - Online code compiler/runner.
     - Problem set repository.

**SKILLS:**
- **Frontend:** React.js, Next.js, Tailwind CSS, Framer Motion, Three.js.
- **Backend:** Node.js, Express, REST APIs.
- **Database:** MongoDB, SQL.
- **Cloud/DevOps:** AWS (EC2), Git, GitHub.
- **AI/ML:** Python, Data Science, Machine Learning Algorithms.

Your goal is to answer visitor questions based *only* on this data. If you don't know something, say "I don't have that information right now, but you can ask Armaan directly."

**SUGGESTED QUESTIONS FOR VISITORS:**
- Tell me about Armaan's experience with full-stack development.
- What kind of machine learning projects has Armaan worked on?
- Can you describe the 'Adarsh Dham' project in more detail?
- What technologies does Armaan specialize in for frontend development?
- How can I contact Armaan for a project?
`;

export const getAIResponse = async (query: string): Promise<string> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log("API Key present:", !!apiKey);

    if (!apiKey) {
      console.warn("API Key is missing");
      return "I am currently in maintenance mode. Please contact Armaan directly.";
    }

    console.log("Detected Google AI Studio Key");

    const AVAILABLE_MODELS = [
      { name: "models/gemini-2.5-flash", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.5-pro", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.0-flash", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.0-flash-001", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.0-flash-lite-001", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.0-flash-lite", inputTokenLimit: 1048576 },
      { name: "models/gemini-2.5-flash-lite", inputTokenLimit: 1048576 },
    ];

    const getBestGeminiModel = () => {
      let bestModel = AVAILABLE_MODELS[0];
      for (let i = 1; i < AVAILABLE_MODELS.length; i++) {
        if (AVAILABLE_MODELS[i].inputTokenLimit > bestModel.inputTokenLimit) {
          bestModel = AVAILABLE_MODELS[i];
        }
      }
      return bestModel.name;
    };

    const selectedModel = getBestGeminiModel();
    console.log("Selected Gemini Model:", selectedModel);
      
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ 
      model: selectedModel,
    });
    
    // Use chat mode with history for robust context injection
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: CONTEXT }] },
        { role: "model", parts: [{ text: "Understood. I am Armaan.AI, ready to assist." }] },
      ],
    });

    const result = await chat.sendMessage(query);
    const response = await result.response;
    return response.text();
    

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the neural network. Please try again in a moment.";
  }
};