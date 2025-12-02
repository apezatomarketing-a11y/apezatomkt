import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, Download, MonitorPlay, ShoppingCart } from 'lucide-react';

export default function Produtos() {
  const products = [
    {
      id: 1,
      title: 'E-book: Guia Definitivo do Tráfego Pago',
      desc: 'Aprenda a criar campanhas que vendem de verdade. Do zero ao avançado.',
      price: 'R$ 47,90',
      icon: BookOpen,
      category: 'E-book',
    },
    {
      id: 2,
      title: 'Pack de Templates para Social Media',
      desc: 'Mais de 100 templates editáveis no Canva para profissionalizar seu Instagram.',
      price: 'R$ 97,00',
      icon: Download,
      category: 'Templates',
    },
    {
      id: 3,
      title: 'Consultoria Express (1h)',
      desc: 'Uma hora de mentoria focada para destravar seu negócio digital.',
      price: 'R$ 297,00',
      icon: MonitorPlay,
      category: 'Consultoria',
    },
    {
      id: 4,
      title: 'Checklist de SEO 2025',
      desc: 'O passo a passo completo para colocar seu site na primeira página do Google.',
      price: 'Gratuito',
      icon: BookOpen,
      category: 'Material Rico',
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
            Produtos Digitais
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ferramentas e conhecimentos práticos para acelerar seu crescimento.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
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
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="rounded-full gap-2">
                      Comprar
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
