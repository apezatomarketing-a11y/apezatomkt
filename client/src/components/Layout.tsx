import Chatbot from './Chatbot';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/30 selection:text-primary">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}
