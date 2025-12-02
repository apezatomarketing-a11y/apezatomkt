import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <img src="/images/logo.png" alt="Apezato Marketing Logo" className="h-10 w-auto" />
            <p className="text-muted-foreground leading-relaxed">
              Estratégia digital que transforma sua marca em autoridade e vendas. Metodologia 4D exclusiva para escalar negócios B2B e Saúde.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/sobre">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Nossos Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Cases de Sucesso</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Blog & Insights</a>
                </Link>
              </li>
              <li>
                <Link href="/carreiras">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Trabalhe Conosco</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Serviços</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/servicos#sites">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Criação de Sites</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos#trafego">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Tráfego Pago</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos#seo">
                  <a className="text-muted-foreground hover:text-primary transition-colors">SEO & Conteúdo</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos#social">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Social Media</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos#consultoria">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Consultoria Estratégica</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">Jacareí, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+551220238569" className="text-muted-foreground hover:text-primary transition-colors">
                  (12) 2023-8569
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contato@apezato.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@apezato.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Apezato Marketing. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacidade">
              <a className="text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            </Link>
            <Link href="/termos">
              <a className="text-muted-foreground hover:text-primary transition-colors">Termos de Uso</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
