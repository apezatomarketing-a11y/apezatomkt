import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users, Zap } from 'lucide-react';

export default function Sobre() {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Quem Somos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Mais que uma agência, somos parceiros estratégicos focados em transformar o potencial do seu negócio em resultados reais.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center flex-col-reverse md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-2">Danielle Apezato - Fundadora</h2>
            <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Nossa História</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Apezato Marketing nasceu da necessidade de trazer transparência e performance real para o mercado digital. Fundada com a visão de que cada negócio é único, desenvolvemos a metodologia 4D para garantir que nenhuma etapa do crescimento seja negligenciada.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especializados em nichos High-Ticket e mercado de entregas, entendemos que a venda complexa exige mais do que apenas "likes". Exige estratégia, dados e uma execução impecável.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-medium">Foco em ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-medium">Transparência Total</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-medium">Metodologia Própria</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span className="font-medium">Suporte Premium</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/danielle-apezato.jpeg" 
              alt="Danielle Apezato - Fundadora" 
              className="rounded-2xl shadow-2xl border border-border w-full h-auto"
            />
          </motion.div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Nossos Pilares</h2>
            <p className="text-muted-foreground">Os valores que guiam cada decisão e projeto na Apezato.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Precisão',
                desc: 'Não acreditamos em "achismos". Todas as nossas estratégias são baseadas em dados e análises profundas.',
              },
              {
                icon: Zap,
                title: 'Agilidade',
                desc: 'O mercado digital muda rápido. Nossa equipe está sempre pronta para adaptar e otimizar campanhas em tempo real.',
              },
              {
                icon: Users,
                title: 'Parceria',
                desc: 'Seu sucesso é nosso sucesso. Trabalhamos lado a lado com sua equipe para alcançar os objetivos.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-background border border-border hover:border-primary transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
