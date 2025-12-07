import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function Produtos() {
  const products = [
    {
      id: 'cardapio-digital',
      title: 'Cardápio Digital',
      price: 'R$ 150',
      priceValue: 150,
      description: 'Cardápio digital profissional e responsivo para seu restaurante ou delivery.',
      features: [
        'Design moderno e atrativo',
        'Totalmente responsivo',
        'Fácil atualização',
        'Integração com WhatsApp',
        'QR Code incluso',
      ],
      highlight: false,
    },
    {
      id: 'identidade-visual',
      title: 'Identidade Visual',
      price: 'A partir de R$ 350',
      priceValue: 350,
      description: 'Identidade visual completa para sua marca, incluindo logotipo e aplicações.',
      features: [
        'Criação de logotipo',
        'Paleta de cores',
        'Tipografia',
        'Aplicações básicas',
        'Arquivos em alta resolução',
      ],
      highlight: false,
    },
    {
      id: 'pack-posts',
      title: 'Pack de Posts',
      price: 'A partir de R$ 550',
      priceValue: 550,
      description: 'Pacotes de posts profissionais para suas redes sociais.',
      packages: [
        { posts: 12, price: 'R$ 550' },
        { posts: 16, price: 'R$ 650' },
        { posts: 20, price: 'R$ 750' },
      ],
      features: [
        'Design profissional',
        'Conteúdo estratégico',
        'Formatos otimizados',
        'Revisões incluídas',
        'Entrega em até 7 dias',
      ],
      highlight: true,
    },
    {
      id: 'calendario-conteudo',
      title: 'Calendário de Conteúdo',
      price: 'R$ 597',
      originalPrice: 'R$ 697',
      priceValue: 597,
      description: 'Roteiro completo de conteúdo para 3 meses no Instagram com orientações para Reels e posts com legenda.',
      features: [
        '3 meses de planejamento',
        'Roteiros para Reels',
        'Posts completos com legenda',
        'Estratégia de hashtags',
        'Orientações de publicação',
        'Análise de tendências',
      ],
      highlight: true,
      badge: 'PROMOÇÃO',
    },
    {
      id: 'sites-landing',
      title: 'Sites e Landing Pages',
      price: 'A partir de R$ 350',
      priceValue: 350,
      description: 'Desenvolvimento de sites profissionais e landing pages de alta conversão.',
      packages: [
        { 
          name: 'Landing Page', 
          price: 'R$ 350',
          features: ['1 página', 'Design responsivo', 'SEO básico']
        },
        { 
          name: 'Site Profissional - OFERTA DE NATAL', 
          price: 'R$ 1.097',
          originalPrice: 'R$ 1.997',
          features: [
            'Domínio Incluso',
            'Site Responsivo (Mobile e Desktop)',
            'Otimização para SEO',
            'Certificado de Segurança SSL',
            'E-mail corporativo (opcional mensal)',
            'Suporte por 30 dias',
          ],
          highlight: true,
        },
      ],
      features: [
        'Design moderno e profissional',
        'Totalmente responsivo',
        'Otimizado para conversão',
        'Integração com ferramentas',
      ],
      highlight: true,
      badge: 'OFERTA DE NATAL',
      extraInfo: 'Parcele em até 12x no cartão ou ganhe 10% de desconto no PIX',
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
            Nossos Produtos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Produtos prontos para impulsionar sua presença digital com qualidade profissional e preços acessíveis.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative glass-card rounded-3xl p-8 border-2 ${
                  product.highlight 
                    ? 'border-primary shadow-2xl shadow-primary/20' 
                    : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {product.badge}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-3">{product.title}</h3>
                  <div className="mb-2">
                    {product.originalPrice && (
                      <p className="text-muted-foreground line-through text-lg">
                        {product.originalPrice}
                      </p>
                    )}
                    <p className={`text-3xl font-bold ${product.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {product.price}
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Packages (if any) */}
                {product.packages && (
                  <div className="mb-6 space-y-3">
                    {product.packages.map((pkg, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-xl p-4">
                        {pkg.name ? (
                          <>
                            <p className="font-semibold mb-2">{pkg.name}</p>
                            {pkg.originalPrice && (
                              <p className="text-sm text-muted-foreground line-through">
                                {pkg.originalPrice}
                              </p>
                            )}
                            <p className={`text-xl font-bold mb-2 ${pkg.highlight ? 'text-primary' : ''}`}>
                              {pkg.price}
                            </p>
                            {pkg.features && (
                              <ul className="space-y-1 text-sm">
                                {pkg.features.map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-primary shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <p className="text-center">
                            <span className="font-bold text-lg">{pkg.posts} posts</span>
                            <span className="text-muted-foreground mx-2">•</span>
                            <span className="text-primary font-semibold">{pkg.price}</span>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Extra Info */}
                {product.extraInfo && (
                  <p className="text-xs text-center text-muted-foreground mb-6 italic">
                    {product.extraInfo}
                  </p>
                )}

                {/* CTA */}
                <a 
                  href={`https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20produto%20${encodeURIComponent(product.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className={`w-full rounded-full ${
                      product.highlight 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg' 
                        : ''
                    }`}
                    size="lg"
                  >
                    Solicitar Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Precisa de um Produto Personalizado?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Entre em contato conosco e vamos criar a solução perfeita para o seu negócio.
          </p>
          <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20personalizado!" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl h-14 px-10 text-lg font-bold">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
