import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Contato from "@/pages/Contato";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Produtos from "@/pages/Produtos";
import Servicos from "@/pages/Servicos";
import Sobre from "@/pages/Sobre";
import Suporte from "@/pages/Suporte";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/servicos" component={Servicos} />
      <Route path="/produtos" component={Produtos} />
      <Route path="/contato" component={Contato} />
      <Route path="/suporte" component={Suporte} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster position="top-right" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
