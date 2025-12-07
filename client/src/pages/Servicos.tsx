import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Share2, TrendingUp, ShoppingCart, Stethoscope, Package, Palette } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      id: 'redes-sociais',
      icon: Share2,
      title: 'Gerenciamento de Redes Sociais',
      description: 'Gestão completa das suas redes sociais com estratégias personalizadas para aumentar engajamento e fidelizar clientes.',
      features: [
        'Planejamento estratégico de conteúdo',
        'Criação e agendamento de posts',
        'Gestão de comunidade e interações',
        'Relatórios mensais de performance',
        'Análise de concorrência',
        'Otimização contínua baseada em dados',
      ],
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      id: 'trafego-pago',
      icon: TrendingUp,
      title: 'Gestão de Tráfego Pago (Anúncios)',
      description: 'Campanhas estratégicas de anúncios pagos no Google Ads, Meta Ads (Facebook/Instagram), TikTok Ads e LinkedIn Ads.',
      features: [
        'Criação e otimização de campanhas',
        'Segmentação avançada de público',
        'Testes A/B contínuos',
        'Gestão de orçamento e lances',
        'Remarketing e funis de conversão',
        'Relatórios detalhados de ROI',
      ],
      color: 'text-green-500',
      bg: 'bg-green-500/10',
    },
    {
      id: 'delivery',
      icon: Package,
      title: 'Estratégia para Delivery',
      description: 'Estratégias completas para negócios de delivery, integrando marketing orgânico e tráfego pago para maximizar vendas.',
      features: [
        'Otimização de cardápio digital',
        'Estratégias de promoções sazonais',
        'Gestão de apps de delivery (iFood, Rappi, etc)',
        'Marketing orgânico em redes sociais',
        'Campanhas de tráfego pago direcionadas',
        'Análise de métricas e ajustes contínuos',
      ],
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      id: 'clinicas',
      icon: Stethoscope,
      title: 'Estratégia para Clínicas',
      description: 'Marketing digital especializado para clínicas médicas, odontológicas, estéticas e de saúde em geral.',
      features: [
        'Posicionamento de marca no setor de saúde',
        'Gestão de agendamentos online',
        'Conteúdo educativo e autoridade',
        'Campanhas de captação de pacientes',
        'Gestão de reputação online',
        'Conformidade com regulamentações do setor',
      ],
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Soluções completas para lojas virtuais, desde a criação até a otimização de funil de vendas e conversão.',
      features: [
        'Desenvolvimento de loja virtual',
        'Otimização de funil de vendas',
        'Integração com meios de pagamento',
        'Estratégias de upsell e cross-sell',
        'Recuperação de carrinho abandonado',
        'SEO para e-commerce',
      ],
      color: 'text-pink-500',
      bg: 'bg-pink-500/10',
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Branding',
      description: 'Identidade Visual estratégica que reflete o DNA da sua marca e a destaca no mercado, criando conexão com seu público.',
      features: [
        'Criação de identidade visual completa',
        'Desenvolvimento de logotipo',
        'Manual de marca',
        'Aplicações em diversos materiais',
        'Estratégia de posicionamento de marca',
        'Consultoria de rebranding',
      ],
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
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
            Soluções completas de marketing digital para transformar seu negócio e impulsionar resultados reais.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${service.bg} mb-6`}>
                      <service.icon className={`w-5 h-5 ${service.color}`} />
                      <span className={`font-semibold ${service.color}`}>Serviço Especializado</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full ${service.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <ArrowRight className={`w-4 h-4 ${service.color}`} />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a href={`https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="rounded-full">
                        Solicitar Orçamento
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`relative aspect-square rounded-3xl ${service.bg} border-2 border-border overflow-hidden group`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className={`w-48 h-48 ${service.color} opacity-20 group-hover:scale-110 transition-transform duration-500`} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa a crescer no ambiente digital.
          </p>
          <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita!" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl h-14 px-10 text-lg font-bold">
              Agendar Consultoria Gratuita
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
