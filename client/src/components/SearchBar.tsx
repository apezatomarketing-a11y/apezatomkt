import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  path: string;
  category: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Conteúdo pesquisável do site
  const searchableContent: SearchResult[] = [
    // Páginas principais
    { title: 'Início', path: '/', category: 'Página' },
    { title: 'Sobre', path: '/sobre', category: 'Página' },
    { title: 'Contato', path: '/contato', category: 'Página' },
    { title: 'Suporte', path: '/suporte', category: 'Página' },
    
    // Serviços
    { title: 'Gerenciamento de Redes Sociais', path: '/servicos#redes-sociais', category: 'Serviço' },
    { title: 'Gestão de Tráfego Pago', path: '/servicos#trafego-pago', category: 'Serviço' },
    { title: 'Estratégia para Delivery', path: '/servicos#delivery', category: 'Serviço' },
    { title: 'Estratégia para Clínicas', path: '/servicos#clinicas', category: 'Serviço' },
    { title: 'E-commerce', path: '/servicos#ecommerce', category: 'Serviço' },
    { title: 'Branding', path: '/servicos#branding', category: 'Serviço' },
    { title: 'Identidade Visual', path: '/servicos#branding', category: 'Serviço' },
    
    // Produtos
    { title: 'Cardápio Digital', path: '/produtos#cardapio-digital', category: 'Produto' },
    { title: 'Identidade Visual', path: '/produtos#identidade-visual', category: 'Produto' },
    { title: 'Pack de Posts', path: '/produtos#pack-posts', category: 'Produto' },
    { title: 'Calendário de Conteúdo', path: '/produtos#calendario-conteudo', category: 'Produto' },
    { title: 'Sites e Landing Pages', path: '/produtos#sites-landing', category: 'Produto' },
    { title: 'Landing Page', path: '/produtos#sites-landing', category: 'Produto' },
    { title: 'Site Profissional', path: '/produtos#sites-landing', category: 'Produto' },
    
    // Metodologia
    { title: 'Metodologia 4D', path: '/#metodologia', category: 'Sobre' },
    { title: 'Diagnóstico', path: '/#metodologia', category: 'Metodologia' },
    { title: 'Design', path: '/#metodologia', category: 'Metodologia' },
    { title: 'Desenvolvimento', path: '/#metodologia', category: 'Metodologia' },
    { title: 'Decolar', path: '/#metodologia', category: 'Metodologia' },
    
    // Outros
    { title: 'Cases de Sucesso', path: '/#cases', category: 'Portfólio' },
    { title: 'Depoimentos', path: '/#depoimentos', category: 'Social Proof' },
  ];

  // Função de busca com fuzzy matching simples
  const fuzzySearch = (term: string, text: string): boolean => {
    term = term.toLowerCase().replace(/\s+/g, '');
    text = text.toLowerCase().replace(/\s+/g, '');
    
    let termIndex = 0;
    for (let i = 0; i < text.length && termIndex < term.length; i++) {
      if (text[i] === term[termIndex]) {
        termIndex++;
      }
    }
    return termIndex === term.length;
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchableContent.filter(item => 
      fuzzySearch(searchTerm, item.title) || 
      fuzzySearch(searchTerm, item.category)
    );

    setResults(filtered.slice(0, 8)); // Limitar a 8 resultados
  }, [searchTerm]);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <div ref={searchRef} className="relative">
      {/* Ícone de busca */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80 hover:text-primary"
        aria-label="Buscar"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Campo de busca expansível */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-80 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {/* Input de busca */}
            <div className="p-3 border-b border-border/50 flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar serviços, produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Resultados */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result, index) => (
                    <Link key={index} href={result.path}>
                      <a
                        className="block px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors group"
                        onClick={() => {
                          setIsOpen(false);
                          setSearchTerm('');
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {result.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {result.category}
                            </div>
                          </div>
                          <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              ) : searchTerm.trim() !== '' ? (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Nenhum resultado encontrado para "{searchTerm}"
                </div>
              ) : (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  Digite para buscar...
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
