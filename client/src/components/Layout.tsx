import Chatbot from './Chatbot';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/30 selection:text-primary relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 pt-20 relative z-10">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}
