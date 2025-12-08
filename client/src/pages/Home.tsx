import Layout from '@/components/Layout';
import { useModal } from '@/components/ModalProvider';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, PenTool, Play, Rocket, Search, CheckCircle2, TrendingUp, Clock, Award } from 'lucide-react';

import { useEffect, useState } from 'react';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import AnimatedCounter from '@/components/AnimatedCounter';
import CarouselTestimonials from '@/components/CarouselTestimonials';
import CircularServices from '@/components/CircularServices';
import SnowflakesEffect from '@/components/SnowflakesEffect';


export default function Home() {
  const { openModal } = useModal();


  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Layout>
      <SnowflakesEffect />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">


        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left lg:order-last"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Agência de <AnimatedHeadline words={['Marketing Digital', 'Criação de Sites', 'Gestão de Redes Sociais', 'Tráfego Pago', 'Branding']} />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Estratégia Digital que <span className="text-gradient">Transforma Sua Marca</span> em Autoridade e Vendas.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Da concepção ao tráfego pago. A metodologia 4D da Apezato impulsiona negócios B2B e Saúde com precisão cirúrgica.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20aumentar%20minhas%20vendas%20com%20a%20Apezato%20Marketing." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 h-14 px-8 text-lg font-semibold group">
                  Quero Vender Mais
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
<button onClick={() => openModal('cases')} className="w-full sm:w-auto rounded-full border border-primary/20 hover:bg-primary/5 hover:border-primary/50 h-14 px-8 text-lg font-semibold group inline-flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-primary fill-primary" />
                </div>
                Ver Cases de Sucesso
              </button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                + de <AnimatedCounter end={90} /> Projetos Entregues
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                +<AnimatedCounter end={10} />M em Vendas
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="/images/danielle-inicio.png" 
              alt="Danielle Apezato" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10 glass-card object-cover aspect-[4/5]"
            />
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-10 z-20 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                </div>
                <span className="font-bold text-sm">ROI Triplicado</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[85%]" />
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-10 z-20 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
<div className="text-sm font-bold">
                  <span className="text-primary">100%</span> Satisfação
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Circular Services */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nossos Serviços</h2>
            <p className="text-muted-foreground text-lg">
              Soluções completas para impulsionar seu negócio no ambiente digital.
            </p>
          </div>
          <CircularServices />
        </div>
      </section>

      {/* Promoção Especial de Natal */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDI2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-lg font-bold"
              >
                🎄 PROMOÇÃO ESPECIAL DE NATAL 🎄
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Comece 2026 com um Site Profissional e Otimizado para Sua Empresa
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforme sua presença digital com sites que vendem 24 horas por dia. Desenvolvimento profissional, design moderno e SEO incluso para sua empresa aparecer no Google.
              </p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <p className="text-muted-foreground line-through text-2xl mb-2">De R$ 2.000</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary mb-4">
                    por apenas R$ 1.097
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  'Domínio Incluso',
                  'Site Responsivo (Mobile e Desktop)',
                  'Otimização para SEO',
                  'Certificado de Segurança SSL',
                  'E-mail corporativo (opcional mensal)',
                  'Suporte por 30 dias',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mb-6">
                <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20quero%20aproveitar%20a%20promo%C3%A7%C3%A3o%20de%20Natal%20e%20criar%20meu%20site%20profissional!" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 h-16 px-12 text-xl font-bold group">
                    QUERO MEU SITE AGORA
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4 font-semibold">
                  Vagas limitadas até 31/12
                </p>
              </div>

              <p className="text-center text-muted-foreground">
                Parcele em até 12x no cartão ou ganhe 10% de desconto no PIX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology 4D Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nossa Metodologia <span className="text-primary">4D</span></h2>
            <p className="text-muted-foreground text-lg">
              Um processo transparente e focado em resultados mensuráveis, garantindo que cada etapa do seu projeto digital seja executada com precisão estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'D1',
                title: 'Diagnóstico',
                desc: 'Análise profunda de mercado e concorrentes para definir o norte estratégico.',
                icon: Search,
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
              },
              {
                id: 'D2',
                title: 'Design',
                desc: 'UX/UI focado em conversão e identidade visual que conecta e vende.',
                icon: PenTool,
                color: 'text-green-600',
                bg: 'bg-green-600/10',
              },
              {
                id: 'D3',
                title: 'Desenvolvimento',
                desc: 'Execução da Estratégia/Planejamento definido a partir do Diagnóstico.',
                icon: Code2,
                color: 'text-teal-500',
                bg: 'bg-teal-500/10',
              },
              {
                id: 'D4',
                title: 'Decolar',
                desc: 'Gestão de tráfego e otimização contínua para escalar resultados.',
                icon: Rocket,
                color: 'text-lime-500',
                bg: 'bg-lime-500/10',
              },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 rounded-2xl relative group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 p-4 font-bold text-6xl opacity-5 ${item.color}`}>
                  {item.id}
                </div>
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${item.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Soluções Completas para o Seu Negócio</h2>
              <p className="text-muted-foreground text-lg">
                Não entregamos apenas serviços, entregamos um ecossistema de crescimento para sua empresa.
              </p>
            </div>
<a href="/servicos" className="inline-flex">
              <Button variant="outline" className="rounded-full">Ver Todos os Serviços</Button>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Design & Landing Pages',
                desc: 'Páginas de alta conversão projetadas para transformar visitantes em leads qualificados.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
              },
              {
                title: 'Tráfego Pago (Ads)',
                desc: 'Campanhas estratégicas no Google e Meta Ads para atrair o público certo no momento certo.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
              },
              {
                title: 'Gestão de Redes Sociais',
                desc: 'Estratégias de Marketing personalizadas para qualquer rede social, aumentando seu engajamento e fidelizando clientes.',
                image: '/images/social-media-management.png',
              },
              {
                title: 'Branding',
                desc: 'Identidade Visual estratégica que reflete o DNA da sua marca e a destaca no mercado, criando conexão com seu público.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2340&auto=format&fit=crop',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <a href="/servicos" className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Sua Empresa Precisa de um Site Profissional */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Por Que Sua Empresa Precisa de um Site Profissional em 2026?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Visibilidade no Google',
                desc: 'Mais de 90% dos consumidores pesquisam no Google antes de comprar. Um site otimizado coloca sua empresa na frente dos clientes certos no momento certo.',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
              },
              {
                icon: Award,
                title: 'Credibilidade Profissional',
                desc: 'Empresas com sites transmitem mais confiança e autoridade. Aumente suas vendas com uma presença digital que impressiona e converte.',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
              },
              {
                icon: Clock,
                title: 'Vendas 24/7',
                desc: 'Seu site trabalha para você mesmo quando você está dormindo. Receba contatos e vendas a qualquer hora, de qualquer lugar.',
                color: 'text-green-500',
                bg: 'bg-green-500/10',
              },
              {
                icon: TrendingUp,
                title: 'Vantagem Competitiva',
                desc: 'Destaque-se da concorrência com um site moderno, rápido e otimizado para aparecer nas primeiras posições do Google.',
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Diferencial */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nosso Diferencial</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-3xl border-2 border-primary/20 shadow-2xl text-center"
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                  Com a Apezato Marketing, você não é só mais um cliente.
                </p>
                <p className="text-xl md:text-2xl text-primary font-semibold mb-8">
                  Nós somos parceiros. Seu sucesso é o nosso sucesso.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mantemos uma rotina de contato diário com nossos clientes para atualizações sobre o projeto. Você nunca fica sem saber o andamento do seu trabalho.
                </p>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Aqui, transparência e proximidade fazem parte do nosso DNA. Sua empresa merece uma agência que realmente se importa com seus resultados.
                </p>
                <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Apezato%20Marketing!" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-14 px-10 text-lg font-bold">
                    QUERO CONHECER A APEZATO
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O Que Dizem Nossos Parceiros</h2>
            <p className="text-muted-foreground">Histórias reais de quem transformou seu negócio com a Apezato.</p>
          </div>

	          <CarouselTestimonials />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Pronto para o Próximo Nível?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Não deixe sua empresa estagnada. Agende agora uma consultoria estratégica gratuita e descubra o potencial oculto do seu negócio.
          </p>
          <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 h-16 px-10 text-xl font-bold animate-pulse hover:animate-none transition-all hover:scale-105">
              Agendar Consultoria Gratuita
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
