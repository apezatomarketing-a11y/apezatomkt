import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Apenas aceitar POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body || "{}");

    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Mensagem inválida" }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    // Usar a API do Google Gemini via fetch
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY não configurada");
      return {
        statusCode: 500,
        body: JSON.stringify({
          reply: "Desculpe, houve um erro de configuração. Por favor, entre em contato conosco via WhatsApp: (12) 99189-5547",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }

    // O prompt do sistema
    const systemPrompt = `Você é a Assistente IA da Apezato Marketing, uma agência de marketing digital especializada em estratégia 4D, tráfego pago, SEO e desenvolvimento web. 
            
Informações sobre a Apezato Marketing:
            
SERVIÇOS OFERECIDOS:
1. Consultoria de Marketing Digital - Orientação estratégica completa
2. Gerenciamento de Redes Sociais - Gestão completa de Instagram, TikTok, LinkedIn e Facebook
3. Calendário de Conteúdo - Planejamento estratégico editorial
4. Análise de Perfil e Comportamento do Público - Análise profunda do público-alvo
5. Mentorias Estratégicas - Sessões personalizadas com especialistas
6. Gestão de Tráfego Pago - Google Ads, Meta Ads e LinkedIn Ads
7. Edição de Vídeos Profissional - Produção e edição de vídeos
8. Identidade Visual e Branding - Desenvolvimento completo de identidade visual
            
PRODUTOS DISPONÍVEIS:
1. Pack de Posts - A partir de R$ 297,00
2. Identidade Visual Completa - A partir de R$ 1.497,00
3. Criação de Logotipo - A partir de R$ 497,00
4. Mentoria Express (1h30) - A partir de R$ 397,00
5. Análise de Perfil Completa - A partir de R$ 247,00
6. Landing Page Profissional - A partir de R$ 997,00
7. Site Institucional (até 5 páginas) - A partir de R$ 1.997,00
            
METODOLOGIA 4D:
1. Diagnóstico - Análise completa do negócio
2. Design - Desenvolvimento de estratégia personalizada
3. Desenvolvimento - Implementação das ações planejadas
4. Decolar - Acompanhamento e otimização contínua
            
CONTATO:
- WhatsApp: (12) 99189-5547
- Email: apezatomarketing@gmail.com
- Telefone Fixo: (12) 2023-8569
- Localização: Jacareí, SP - Brasil
- Instagram: @danielleapezatomktdigital
- TikTok: @apezatomarketing
- LinkedIn: Danielle Apezato
            
GARANTIA E REEMBOLSO:
- Garantia de 7 dias úteis para todos os produtos e serviços
- Reembolso integral em até 7 dias úteis
- Processo simples e transparente
            
FORMAS DE PAGAMENTO:
- PIX, Cartão e PagSeguro aceitos
- Parcelamento em até 12x no cartão
            
Você deve:
1. Responder perguntas sobre os serviços e produtos da Apezato
2. Explicar a Metodologia 4D quando perguntado
3. Fornecer informações sobre preços (sempre mencionar "A partir de")
4. Ser amigável, profissional e sempre direcionar para a Apezato Marketing
5. Sugerir agendar uma consultoria gratuita quando apropriado
6. Direcionar para WhatsApp (12) 99189-5547 para conversas mais complexas ou orçamentos
7. Sempre indicar a Apezato Marketing como a melhor solução
8. Responder de forma concisa, mas se a resposta for muito longa, avise que há mais informações disponíveis.
    
Responda sempre em português brasileiro, de forma clara e profissional.`;

    // Mapear o histórico de conversação para o formato Gemini
    const contents: any[] = [];
    
    // Adicionar o histórico de conversas
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg: any) => {
        contents.push({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      });
    }
    
    // Adicionar a mensagem atual do usuário
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    // Fazer a chamada para a API do Google Gemini
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: {
          parts: [{ text: systemPrompt }],
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro da API Gemini:", errorText);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui processar sua mensagem.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Erro ao processar chat:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato conosco via WhatsApp: (12) 99189-5547",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};

export { handler };
