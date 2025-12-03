import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importar a função de chat com Google Gemini
async function getChatResponse(userMessage: string, conversationHistory: any[] = []) {
  try {
    // Usar a API do Google Gemini via OpenAI-compatible endpoint
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `Você é um assistente de IA da Apezato Marketing, uma agência de marketing digital especializada em estratégia 4D, tráfego pago, SEO e desenvolvimento web. 
            
Informações sobre a Apezato:
- Metodologia 4D: Diagnóstico, Design, Desenvolvimento e Decolar
- Especializada em nichos High-Ticket e B2B
- Serviços: Web Design, Tráfego Pago (Google Ads, Meta Ads, LinkedIn), SEO & Conteúdo, Social Media
- Contato: WhatsApp (12) 99189-5547, Email: apezatomarketing@gmail.com
- Localização: Jacareí, SP

Você deve:
1. Responder perguntas sobre os serviços da Apezato
2. Explicar a Metodologia 4D
3. Fornecer informações sobre preços e pacotes (quando disponível)
4. Ser amigável e profissional
5. Sugerir agendar uma consultoria gratuita quando apropriado
6. Direcionar para WhatsApp para conversas mais complexas

Responda sempre em português brasileiro, de forma concisa e clara.`,
          },
          ...conversationHistory.map((msg: any) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Erro da API:', error);
      throw new Error('Erro ao conectar com a API de IA');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Erro ao processar chat:', error);
    return 'Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato conosco via WhatsApp: (12) 99189-5547';
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Mensagem inválida' });
      }

      const reply = await getChatResponse(message, conversationHistory);
      res.json({ reply });
    } catch (error) {
      console.error('Erro na rota /api/chat:', error);
      res.status(500).json({ error: 'Erro ao processar a mensagem' });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
