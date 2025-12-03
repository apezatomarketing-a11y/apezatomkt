import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'wouter';
import { useModal } from './ModalProvider';
import TikTokIcon from './TikTokIcon';
import WhatsappIcon from './WhatsappIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useModal();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <img src="/images/logo-small.png" alt="Apezato Marketing Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
                <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Apezato Marketing</span>
              </a>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Estratégia digital que transforma sua marca em autoridade e vendas. Metodologia 4D exclusiva para escalar negócios B2B e Saúde.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.tiktok.com/@apezatomarketing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/danielleapezatomktdigital/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://br.linkedin.com/in/danielle-apezato-785ab3305" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300">
                <WhatsappIcon className="w-5 h-5" />
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
                <Link href="/contato">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
                </Link>
              </li>
              <li>
                <Link href="/suporte">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Suporte</a>
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
                <WhatsappIcon className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  (12) 99189-5547 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:apezatomarketing@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  apezatomarketing@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

	        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Apezato Marketing. Todos os direitos reservados.
          </p>
<div className="flex items-center gap-6 text-sm mx-auto md:mx-0">
		            <button onClick={() => openModal('privacy')} className="text-muted-foreground hover:text-primary transition-colors">
		              🔐 Privacidade
		            </button>
		            <button onClick={() => openModal('terms')} className="text-muted-foreground hover:text-primary transition-colors">
		              📄 Termos de Uso
		            </button>
		            <button onClick={() => openModal('cookies')} className="text-muted-foreground hover:text-primary transition-colors">
		              🍪 Política de Cookies
		            </button>
		          </div>
        </div>
      </div>
    </footer>
  );
}
