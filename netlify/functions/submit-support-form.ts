import { Handler } from "@netlify/functions";
import { Resend } from "resend";

// A chave de API será injetada pelo Netlify a partir das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST" ) {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    
    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields: name, email, subject, and message." }),
      };
    }

    // Montar o corpo do e-mail
    const emailBody = `
      Nova submissão de formulário de Suporte:

      Nome: ${data.name}
      E-mail: ${data.email}
      Assunto: ${data.subject}
      Mensagem:
      ---
      ${data.message}
      ---
    `;

    // Enviar o e-mail usando Resend
    const { data: resendData, error } = await resend.emails.send({
      from: "Formulário de Suporte <contato@apezatomarketing.com.br>", // Use seu e-mail verificado
      to: "contato@apezatomarketing.com.br", // E-mail do usuário
      subject: `[SUPORTE] ${data.subject}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send email via Resend.", error: error.message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted and email sent successfully!", resendId: resendData?.id }),
    };
  } catch (error) {
    console.error("Handler Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error." }),
    };
  }
};

export { handler };
