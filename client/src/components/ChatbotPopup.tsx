import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useChatStore } from '@/lib/store';\n\nexport default function ChatbotPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Mostrar popup após 3 segundos
    const timer = setTimeout(() => {
      if (!isClosed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);\n  };\n\n  const { toggleChat } = useChatStore();\n\n  const handleOpenChat = () => {\n    toggleChat();\n    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-6 z-40 max-w-sm"
        >
          <div className="relative bg-card border-2 border-primary/30 rounded-2xl shadow-2xl p-4 cursor-pointer" onClick={handleOpenChat}>
            {/* Botão fechar */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Conteúdo */}
            <div className="flex items-start gap-4">
              {/* Foto */}
              <div className="shrink-0">
                <img
                  src="https://i.imgur.com/8xY6n2X.jpg"
                  alt="Danielle Apezato"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-lg"
                />
              </div>

              {/* Mensagem */}
              <div className="flex-1">
                <div className="bg-primary/10 rounded-2xl rounded-tl-none p-4 relative">
                  {/* Balão de fala */}
                  <div className="absolute -left-2 top-0 w-0 h-0 border-t-[12px] border-t-primary/10 border-r-[12px] border-r-transparent" />
                  
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Danielle Apezato
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Como posso te ajudar?
                  </p>
                </div>
              </div>
            </div>

            {/* Seta apontando para o chatbot */}
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-primary/30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
