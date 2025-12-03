import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GoogleGenAI } from '@google/genai'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {


  // Apenas aceitar POST requests
  if (event.httpMethod !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const { message, conversationHistory } = JSON.parse(event.body || "{}");

    if (!message || typeof message !== "string") {
return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
    }

    // Usar o SDK do Google Gemini
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY; // Tentativa de compatibilidade com a chave antiga
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const GEMINI_MODEL = "gemini-2.5-flash"; // Usando o modelo mais recente e eficiente

// O prompt do sistema será usado como systemInstruction no SDK do Gemini.
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

    // Mapear o histórico de conversação para o formato Gemini (SDK)
    const geminiHistory = (conversationHistory || []).map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "model", // Gemini usa 'model' para o assistente
      parts: [{ text: msg.text }],
    }));

    // O histórico completo é a concatenação do histórico anterior e a nova mensagem
    const fullConversation = [...geminiHistory, { role: "user", parts: [{ text: message }] }];

    // A API do Gemini (SDK) suporta systemInstruction e o array de contents.
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: fullConversation,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const reply = response.text;

return new Response(JSON.stringify({ reply }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",

          },
        });
	  } catch (error) {
	    console.error("Erro ao processar chat:", error);
return new Response(JSON.stringify({
          reply:
            "Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato conosco via WhatsApp: (12) 99189-5547",
        }), {
          status: 500,
          headers: {
            "Content-Type": "application/json",

          },
        });
	}

}

export default handler;