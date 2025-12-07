import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HelpCircle, Mail } from 'lucide-react';
import WhatsappIcon from '@/components/WhatsappIcon';
import { useState } from 'react';
import { toast } from 'sonner';
import { WHATSAPP_NUMBER } from '@/shared/const'; // Importar o número do WhatsApp de um arquivo de constantes

export default function Suporte() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        toast.error('Preencha todos os campos obrigatórios.');
        setIsSubmitting(false);
        return;
      }

      // 1. Montar a mensagem para o WhatsApp
      const whatsappMessage = `
*SOLICITAÇÃO DE SUPORTE*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}
      `.trim();

      // 2. Codificar a mensagem e criar o link
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      // 3. Abrir o link do WhatsApp
      window.open(whatsappLink, '_blank');

      toast.success('Redirecionando para o WhatsApp com sua solicitação de suporte!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: 'Qual o prazo médio para criação de um site?',
      answer: 'Para sites institucionais, o prazo médio é de 15 a 20 dias úteis após o recebimento de todo o material. Landing Pages podem ser entregues em até 7 dias úteis.',
    },
    {
      question: 'Vocês fazem gestão de tráfego para quais plataformas?',
      answer: 'Trabalhamos com Google Ads (Pesquisa, Display, YouTube), Meta Ads (Facebook e Instagram), LinkedIn Ads e TikTok Ads.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Trabalhamos com contrato mensal para gestão de tráfego e social media. Para desenvolvimento web, o pagamento pode ser parcelado em até 12x no cartão ou com desconto à vista.',
    },
    {
      question: 'Vocês emitem Nota Fiscal?',
      answer: 'Sim, emitimos Nota Fiscal para todos os serviços prestados, garantindo total transparência e conformidade fiscal.',
    },
    {
      question: 'O que é a Metodologia 4D?',
      answer: 'É nosso método exclusivo dividido em 4 etapas: Diagnóstico (análise), Design (estratégia visual), Desenvolvimento (execução técnica) e Decolar (otimização e escala).',
    },
    {
      question: 'Qual é o tempo de resposta do suporte?',
      answer: 'Respondemos todas as mensagens em até 24 horas úteis. Para questões urgentes, recomendamos entrar em contato via WhatsApp.',
    },
    {
      question: 'Vocês oferecem suporte pós-projeto?',
      answer: 'Sim! Oferecemos pacotes de suporte e manutenção contínua para garantir que seu site ou campanha funcione perfeitamente.',
    },
    {
      question: 'Como posso acompanhar o progresso do meu projeto?',
      answer: 'Você terá acesso a um painel de controle onde pode acompanhar o progresso em tempo real e se comunicar diretamente com a equipe.',
    },
  ];

  const guaranteeItems = [
    {
      title: 'Garantia de 7 Dias Úteis',
      description: 'Oferecemos garantia de satisfação de 7 dias úteis para todos os nossos produtos e serviços. Se não ficar completamente satisfeita com o resultado, devolvemos 100% do seu investimento conforme acordado em contrato.',
    },
    {
      title: 'Reembolso integral em até 7 dias úteis',
      description: 'Processo simples e transparente, sem burocracia desnecessária.',
    },
  ];

  const paymentMethods = [
    'PIX',
    'Cartão de Crédito',
    'PagSeguro',
    'Parcelamento em até 12x no cartão',
  ];

  return (
    <Layout>
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Central de Ajuda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Estamos aqui para ajudar! Tire suas dúvidas ou entre em contato conosco.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Support Buttons */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.a
              href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20suporte%20via%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-2xl text-center hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <WhatsappIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Suporte via WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Fale conosco agora mesmo via WhatsApp para atendimento rápido.
              </p>
              <Button className="w-full">Abrir WhatsApp</Button>
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@apezatomarketing.com.br" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl text-center hover:border-primary transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Suporte via E-mail</h3>
              <p className="text-muted-foreground mb-6">
                Envie sua dúvida por e-mail e responderemos em até 24 horas úteis.
              </p>
              <span className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Enviar E-mail</span>
            </motion.a>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index ) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>



          {/* Payment Methods Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-heading font-bold mb-8">Política de Pagamentos</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Trabalhamos com total transparência em nossos pagamentos e reembolsos. Conheça nossa política detalhada.
            </p>
            
            <div className="bg-card border border-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Métodos Aceitos</h3>
              <ul className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8">Formulário de Suporte</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Para questões técnicas ou financeiras mais complexas, preencha o formulário abaixo.
            </p>

            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da sua dúvida"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua dúvida ou problema..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Redirecionando...' : 'Enviar Formulário'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
