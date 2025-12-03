import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const geminiKey = process.env.GEMINI_API_KEY;
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      hasGeminiKey: !!geminiKey,
      keyLength: geminiKey ? geminiKey.length : 0,
      keyPrefix: geminiKey ? geminiKey.substring(0, 10) + "..." : "not set",
      allEnvKeys: Object.keys(process.env).filter(k => k.includes('GEMINI') || k.includes('API'))
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export { handler };
