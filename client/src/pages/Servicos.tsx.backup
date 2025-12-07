import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      id: 'consultoria-marketing',
      title: 'Consultoria de Marketing Digital',
      desc: 'Orientação estratégica completa para transformar seu negócio digitalmente, desde diagnóstico até implementação de soluções integradas que geram resultados mensuráveis.',
      features: ['Diagnóstico de Mercado Completo', 'Planejamento Estratégico Personalizado', 'Análise de Concorrência', 'Definição de KPIs e Metas', 'Acompanhamento de Resultados'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'redes-sociais',
      title: 'Gerenciamento de Redes Sociais',
      desc: 'Gestão completa das suas redes sociais com estratégias que constroem comunidade, engajamento e autoridade de marca em plataformas como Instagram, TikTok, LinkedIn e Facebook.',
      features: ['Criação de Conteúdo Estratégico', 'Gestão de Comunidade', 'Análise de Métricas e Relatórios', 'Estratégia de Crescimento Orgânico', 'Interação com Seguidores'],
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'calendario-conteudo',
      title: 'Calendário de Conteúdo',
      desc: 'Planejamento estratégico de conteúdo com calendário editorial completo, garantindo consistência, relevância e alinhamento com seus objetivos de negócio.',
      features: ['Planejamento Editorial Mensal', 'Pesquisa de Tendências e Temas', 'Cronograma de Publicações', 'Alinhamento com Datas Sazonais', 'Estratégia de Conteúdo Evergreen'],
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2348&auto=format&fit=crop',
    },
    {
      id: 'analise-perfil',
      title: 'Análise de Perfil e Comportamento do Público',
      desc: 'Análise profunda do seu público-alvo, identificando comportamentos, preferências e oportunidades para otimizar suas estratégias de marketing e comunicação.',
      features: ['Análise Demográfica Completa', 'Mapeamento de Comportamento', 'Identificação de Personas', 'Análise de Jornada do Cliente', 'Insights Acionáveis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'mentorias',
      title: 'Mentorias Estratégicas',
      desc: 'Sessões personalizadas de mentoria com especialistas em marketing digital, focadas em resolver desafios específicos e acelerar o crescimento do seu negócio.',
      features: ['Sessões Individuais Personalizadas', 'Orientação Estratégica Focada', 'Resolução de Desafios Específicos', 'Plano de Ação Prático', 'Suporte Pós-Mentoria'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'trafego-pago',
      title: 'Gestão de Tráfego Pago',
      desc: 'Campanhas inteligentes no Google Ads, Meta Ads e LinkedIn Ads, segmentadas para atrair leads qualificados e maximizar o retorno sobre o investimento (ROI).',
      features: ['Gestão de Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads B2B', 'Remarketing Estratégico', 'Otimização de Conversão', 'Relatórios de Performance'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    },
    {
      id: 'edicao-videos',
      title: 'Edição de Vídeos Profissional',
      desc: 'Produção e edição de vídeos profissionais para redes sociais, YouTube, anúncios e institucionais, com qualidade cinematográfica e narrativa envolvente.',
      features: ['Edição Profissional de Vídeos', 'Motion Graphics e Animações', 'Correção de Cor e Áudio', 'Legendas e Closed Captions', 'Formatos Otimizados para Cada Plataforma'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2340&auto=format&fit=crop',
    },
    {
      id: 'branding',
      title: 'Identidade Visual e Branding',
      desc: 'Desenvolvimento completo de identidade visual e estratégia de branding que posiciona sua marca de forma única e memorável no mercado.',
      features: ['Criação de Logotipo', 'Manual de Identidade Visual', 'Paleta de Cores e Tipografia', 'Aplicações em Diversos Formatos', 'Estratégia de Posicionamento de Marca'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2340&auto=format&fit=crop',
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
            Nossos Serviços
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Soluções completas de marketing digital para escalar seu negócio. Cada serviço é desenvolvido com foco em resultados mensuráveis e crescimento sustentável.
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
                <a href={`https://wa.me/5512991895547?text=Olá, gostaria de solicitar um orçamento para ${service.title}.`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
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
          <a href="https://wa.me/5512991895547?text=Olá, gostaria de conversar com um especialista sobre uma solução personalizada." target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
