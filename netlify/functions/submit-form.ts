import { Handler } from "@netlify/functions";
import { Resend } from "resend";
import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://mmsvitsvienetiqbjqct.supabase.co';
// Usando a chave de serviço (service_role secret) para inserção segura no backend
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseKey) {
  console.error("SUPABASE_KEY is not set.");
  // Retorna um cliente Supabase que falhará na inserção, mas não no build.
  // Isso é um fallback, mas o ideal é que a chave esteja sempre presente.
}
const supabase = createClient(supabaseUrl, supabaseKey || '');

// A chave de API será injetada pelo Netlify a partir das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body || "{}");
    
    // Validação básica
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields: name, email, and message." }),
      };
    }

    // Montar o corpo do e-mail
    const emailBody = `
      Nova submissão de formulário de contato:

      Nome: ${data.name}
      E-mail: ${data.email}
      WhatsApp: ${data.phone || 'Não informado'}
      Empresa: ${data.company_name || 'Não informado'}
      Site: ${data.website || 'Não informado'}
      Orçamento Estimado: ${data.budget_range || 'Não informado'}
      Mensagem:
      ---
      ${data.message}
      ---
    `;

    // Enviar o e-mail usando Resend
    const { data: resendData, error } = await resend.emails.send({
      from: "Formulário de Contato <contato@apezatomarketing.com.br>", // O domínio 'onboarding@resend.dev' é um domínio de teste da Resend. O usuário deve configurar um domínio verificado.
      to: "contato@apezatomarketing.com.br", // E-mail do usuário
      subject: `Nova Mensagem de Contato de ${data.name}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to send email via Resend.", error: error.message }),
      };
    }

    // Lógica de inserção no Supabase
    const { error: supabaseError } = await supabase
      .from('form_submissions')
      .insert({
        form_type: 'contact',
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phone || null,
        company_name: data.company_name || null,
        website: data.website || null,
        budget_range: data.budget_range || null,
        resend_id: resendData?.id,
      });

    if (supabaseError) {
      console.error("Supabase Error:", supabaseError);
      // O erro no Supabase não deve impedir o sucesso do e-mail, mas deve ser logado.
      // Se for crítico, descomente o retorno de erro abaixo:
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to save form data to Supabase.", error: supabaseError.message }),
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
