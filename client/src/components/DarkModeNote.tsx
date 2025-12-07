import { useState, useEffect } from 'react';
import { X, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DarkModeNote() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Verificar se já foi fechado anteriormente
    const wasClosed = localStorage.getItem('darkModeNoteClosed');
    if (wasClosed) {
      setIsClosed(true);
      return;
    }

    // Mostrar após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    localStorage.setItem('darkModeNoteClosed', 'true');
  };

  if (isClosed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 left-6 z-50 max-w-xs"
        >
          <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-xl p-4">
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors shadow-md"
              aria-label="Fechar"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Moon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Dica de Navegação
                </p>
                <p className="text-xs text-muted-foreground">
                  Coloque o site no modo escuro para melhor experiência
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
