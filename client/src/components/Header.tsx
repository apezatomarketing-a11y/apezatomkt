import { useThemeStore } from '@/lib/store';
import { AnimatePresence, motion } from 'framer-motion';
import WhatsappIcon from './WhatsappIcon';
import SearchBar from './SearchBar';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToTop } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    {
      name: 'Serviços',
      path: '/servicos',
      dropdown: [
        { name: 'Consultoria de Marketing Digital', path: '/servicos#consultoria-marketing' },
        { name: 'Gerenciamento de Redes Sociais', path: '/servicos#redes-sociais' },
        { name: 'Calendário de Conteúdo', path: '/servicos#calendario-conteudo' },
        { name: 'Análise de Perfil e Comportamento', path: '/servicos#analise-perfil' },
        { name: 'Mentorias Estratégicas', path: '/servicos#mentorias' },
        { name: 'Gestão de Tráfego Pago', path: '/servicos#trafego-pago' },
        { name: 'Edição de Vídeos Profissional', path: '/servicos#edicao-videos' },
        { name: 'Identidade Visual e Branding', path: '/servicos#branding' },
      ],
    },
    {
      name: 'Produtos',
      path: '/produtos',
      dropdown: [
        { name: 'Pack de Posts', path: '/produtos#pack-posts' },
        { name: 'Identidade Visual Completa', path: '/produtos#identidade-visual' },
        { name: 'Criação de Logotipo', path: '/produtos#logotipo' },
        { name: 'Mentoria Express (1h30)', path: '/produtos#mentoria-express' },
        { name: 'Análise de Perfil Completa', path: '/produtos#analise-perfil' },
        { name: 'Landing Page Profissional', path: '/produtos#landing-page' },
        { name: 'Site Institucional (até 5 páginas)', path: '/produtos#site-institucional' },
      ],
    },
    { name: 'Contato', path: '/contato' },
    { name: 'Suporte', path: '/suporte' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group" onClick={scrollToTop}>
            <div className="flex items-center gap-2 group">
              <img src="/images/logo-small.png" alt="Apezato Marketing Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Apezato Marketing</span>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href={item.path}>
                <a
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                  onClick={!item.dropdown ? scrollToTop : undefined}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
              </Link>
              
              {/* Animated Underline */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />

              {/* Dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                  >
                    <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-2 overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.name} href={subItem.path}>
                          <a className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                            {subItem.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <SearchBar />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
          
          <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 font-semibold flex items-center gap-2">
              <WhatsappIcon className="w-4 h-4" />
              Agendar Consultoria
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-foreground hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-6 flex items-center justify-between border-b border-border/50">
                <span className="font-heading font-bold text-xl">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    {item.dropdown ? (
                      <button
                        className="flex items-center justify-between w-full text-lg font-medium text-foreground/90 hover:text-primary transition-colors"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link href={item.path}>
                        <a
                          className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            scrollToTop();
                          }}
                        >
                          {item.name}
                        </a>
                      </Link>
                    )}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-border mt-2">
                        {item.dropdown.map((subItem) => (
                          <Link key={subItem.name} href={subItem.path}>
                            <a
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                                // Não chamar scrollToTop aqui, pois são âncoras
                              }}
                            >
                              {subItem.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mt-auto pt-8">
                  <a href="https://wa.me/5512991895547?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria%20gratuita%20para%20o%20meu%20neg%C3%B3cio." target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold py-6 flex items-center justify-center gap-2">
                      <WhatsappIcon className="w-5 h-5" />
                      Agendar Consultoria
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
