import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light', // Default to light as per reference site, but user can toggle
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'apezato-theme-storage',
    }
  )
);

interface ChatState {
  isOpen: boolean;
  toggleChat: () => void;
  messages: Array<{ id: string; text: string; sender: 'user' | 'bot'; timestamp: number }>;
  addMessage: (text: string, sender: 'user' | 'bot') => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  messages: [
    {
      id: 'welcome',
      text: 'Olá! Sou a IA da Apezato. Como posso ajudar a escalar seu negócio hoje?',
      sender: 'bot',
      timestamp: Date.now(),
    },
  ],
  addMessage: (text, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        { id: Math.random().toString(36).substring(7), text, sender, timestamp: Date.now() },
      ],
    })),
}));
