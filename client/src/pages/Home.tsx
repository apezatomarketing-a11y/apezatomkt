import Layout from '@/components/Layout';
import { useModal } from '@/components/ModalProvider';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, PenTool, Play, Rocket, Search, Star } from 'lucide-react';
import { useEffect, useState } from 'react';


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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">


        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase">
              Agência de Marketing Digital 4D
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
                + de 90 Projetos Entregues
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                +10M em Vendas
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="/images/Danielle Apezato (foto inicio).jpeg" 
              alt="Danielle Apezato" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10 glass-card object-cover aspect-[4/5]"
            />
            
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
                desc: 'Sites rápidos, seguros e otimizados para performance máxima.',
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
<a href="/servicos#top" className="inline-flex">
              <Button variant="outline" className="rounded-full">Ver Todos os Serviços</Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                title: 'SEO & Conteúdo',
                desc: 'Posicionamento orgânico para garantir autoridade e tráfego qualificado a longo prazo.',
                image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2348&auto=format&fit=crop',
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

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">O Que Dizem Nossos Parceiros</h2>
            <p className="text-muted-foreground">Histórias reais de quem transformou seu negócio com a Apezato.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Ana Paula',
                role: 'Clínica de Estética',
                text: 'A Apezato transformou nosso site em uma máquina de agendamentos. A agenda está lotada e o posicionamento da marca mudou completamente.',
                stars: 5,
              },
              {
                name: 'Carlos Mendes',
                role: 'CEO TechSolutions',
                text: 'ROI triplicado em 3 meses de gestão de tráfego. A equipe é extremamente técnica e transparente com os dados.',
                stars: 5,
              },
              {
                name: 'Fernanda Lima',
                role: 'E-commerce de Moda',
                text: 'O redesign da nossa loja virtual aumentou a conversão em 40%. O cuidado com a experiência do usuário foi o diferencial.',
                stars: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-background p-8 rounded-2xl border border-border relative"
              >
                <div className="absolute top-6 right-8 text-6xl text-primary/10 font-serif">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 relative z-10 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 h-16 px-10 text-xl font-bold animate-pulse hover:animate-none transition-all hover:scale-105">
            Agendar Consultoria Gratuita
          </Button>
        </div>
      </section>
    </Layout>
  );
}
