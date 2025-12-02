import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Ticket } from 'lucide-react';

export default function Suporte() {
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
            Tire suas dúvidas ou abra um chamado para nossa equipe técnica.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-2xl text-center hover:border-primary transition-colors group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Chat Online</h3>
              <p className="text-muted-foreground mb-6">
                Fale agora com nossa IA ou solicite um atendente humano.
              </p>
              <Button variant="outline" className="w-full">Iniciar Chat</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl text-center hover:border-primary transition-colors group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ticket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Abrir Chamado</h3>
              <p className="text-muted-foreground mb-6">
                Para questões técnicas ou financeiras mais complexas.
              </p>
              <Button className="w-full">Novo Ticket</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
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
        </div>
      </section>
    </Layout>
  );
}
