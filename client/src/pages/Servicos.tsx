import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      id: 'sites',
      title: 'Web Design & Desenvolvimento',
      desc: 'Sites que não são apenas bonitos, mas máquinas de vendas. Desenvolvemos plataformas rápidas, seguras e otimizadas para conversão.',
      features: ['Landing Pages de Alta Conversão', 'Sites Institucionais', 'E-commerces', 'Otimização de Velocidade (Core Web Vitals)'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    },
    {
      id: 'trafego',
      title: 'Tráfego Pago (Ads)',
      desc: 'Chega de queimar dinheiro. Criamos campanhas estratégicas no Google, Meta e LinkedIn Ads para atrair o público certo no momento de compra.',
      features: ['Gestão de Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads B2B', 'Remarketing Estratégico'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'seo',
      title: 'SEO & Conteúdo',
      desc: 'Domine as buscas orgânicas e construa autoridade. Nossa estratégia de SEO coloca sua marca nas primeiras posições do Google.',
      features: ['SEO On-page e Técnico', 'Link Building', 'Marketing de Conteúdo', 'Otimização de Google Meu Negócio'],
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2348&auto=format&fit=crop',
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
            Nossas Soluções
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Um ecossistema completo de serviços digitais para escalar seu negócio de ponta a ponta.
          </motion.p>
        </div>
      </section>

      <div className="container py-20 space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">{service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Não encontrou o que procura?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Temos soluções personalizadas para cada tipo de negócio. Entre em contato e vamos desenhar juntos a melhor estratégia para você.
          </p>
          <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </Layout>
  );
}
