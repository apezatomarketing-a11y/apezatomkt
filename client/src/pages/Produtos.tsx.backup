import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Sparkles, MessageSquare, BarChart3, Globe, Layout as LayoutIcon } from 'lucide-react';

export default function Produtos() {
  const products = [
    {
      id: 'pack-posts',
      title: 'Pack de Posts',
      desc: 'Pacote completo de posts profissionais para redes sociais, com design exclusivo e estratégia de conteúdo alinhada ao seu negócio.',
      price: 'A partir de R$ 297',
      icon: Sparkles,
      category: 'Social Media',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para o Pack de Posts.',
    },
    {
      id: 'identidade-visual',
      title: 'Identidade Visual Completa',
      desc: 'Desenvolvimento completo de identidade visual profissional, incluindo logotipo, paleta de cores, tipografia e manual de aplicação.',
      price: 'A partir de R$ 297',
      icon: Palette,
      category: 'Branding',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Identidade Visual Completa.',
    },
    {
      id: 'logotipo',
      title: 'Criação de Logotipo',
      desc: 'Desenvolvimento de logotipo profissional e exclusivo para sua marca, com até 3 propostas e revisões ilimitadas.',
      price: 'A partir de R$ 397',
      icon: Palette,
      category: 'Design',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Criação de Logotipo.',
    },
    {
      id: 'mentoria-express',
      title: 'Mentoria Express (1h30)',
      desc: 'Sessão de mentoria personalizada de 1h30 com especialista em marketing digital para resolver desafios específicos do seu negócio.',
      price: 'A partir de R$ 497',
      icon: MessageSquare,
      category: 'Consultoria',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Mentoria Express (1h30).',
    },
    {
      id: 'analise-perfil',
      title: 'Análise de Perfil Completa',
      desc: 'Análise profunda do seu perfil nas redes sociais com relatório detalhado de métricas, oportunidades e plano de ação estratégico.',
      price: 'A partir de R$ 397',
      icon: BarChart3,
      category: 'Análise',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Análise de Perfil Completa.',
    },
    {
      id: 'landing-page',
      title: 'Landing Page Profissional',
      desc: 'Desenvolvimento de landing page de alta conversão, responsiva e otimizada para SEO, com design exclusivo e foco em resultados.',
      price: 'A partir de R$ 897',
      icon: Globe,
      category: 'Web',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Landing Page Profissional.',
    },
    {
      id: 'site-institucional',
      title: 'Site Institucional (até 5 páginas)',
      desc: 'Site institucional completo com até 5 páginas, design responsivo, otimização para buscadores e integração com redes sociais.',
      price: 'A partir de R$ 1.297',
      icon: LayoutIcon,
      category: 'Web',
      whatsappMessage: 'Olá, gostaria de solicitar orçamento para Site Institucional (até 5 páginas).',
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
            Nossos Produtos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Produtos digitais prontos para usar que vão acelerar o crescimento do seu negócio. Desenvolvidos por especialistas e testados no mercado.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <product.icon className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-border">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {product.desc}
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-border">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <a href={`https://wa.me/5512991895547?text=${encodeURIComponent(product.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Solicitar Orçamento
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Precisa de algo personalizado?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvemos produtos sob medida para atender necessidades específicas do seu negócio. Entre em contato e vamos criar a solução ideal para você.
          </p>
          <a href="https://wa.me/5512991895547?text=Olá, gostaria de conversar sobre um produto personalizado." target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
