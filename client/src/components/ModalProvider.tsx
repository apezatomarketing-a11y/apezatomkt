import { createContext, useContext, useState, ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ModalContextType {
  openModal: (type: 'privacy' | 'terms' | 'cookies' | 'cases') => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal deve ser usado dentro de ModalProvider');
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [openModal, setOpenModal] = useState<'privacy' | 'terms' | 'cookies' | 'cases' | null>(null);

  const handleOpenModal = (type: 'privacy' | 'terms' | 'cookies' | 'cases') => {
    setOpenModal(type);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const modalContent = {
    privacy: {
      title: '🔐 Política de Privacidade',
      description: 'Como protegemos seus dados',
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            A Apezato Marketing está comprometida com a proteção de seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos suas informações.
          </p>
          <h4 className="font-bold text-foreground">Coleta de Dados</h4>
          <p>
            Coletamos informações que você fornece voluntariamente através de formulários, como nome, e-mail, telefone e informações sobre sua empresa.
          </p>
          <h4 className="font-bold text-foreground">Uso de Dados</h4>
          <p>
            Seus dados são utilizados exclusivamente para:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fornecer serviços solicitados</li>
            <li>Enviar comunicações relevantes</li>
            <li>Melhorar nossos serviços</li>
            <li>Cumprir obrigações legais</li>
          </ul>
          <h4 className="font-bold text-foreground">Segurança</h4>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado.
          </p>
          <h4 className="font-bold text-foreground">Seus Direitos</h4>
          <p>
            Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais. Entre em contato conosco para exercer esses direitos.
          </p>
          <p className="text-xs">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      ),
    },
    terms: {
      title: '📄 Termos de Uso',
      description: 'Condições de uso do nosso site e serviços',
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Bem-vindo aos Termos de Uso da Apezato Marketing. Ao acessar e usar nosso site, você concorda com estes termos.
          </p>
          <h4 className="font-bold text-foreground">1. Uso Aceitável</h4>
          <p>
            Você concorda em usar este site apenas para fins legítimos e não para qualquer atividade que viole leis ou direitos de terceiros.
          </p>
          <h4 className="font-bold text-foreground">2. Propriedade Intelectual</h4>
          <p>
            Todo o conteúdo do site, incluindo textos, imagens, logos e designs, é propriedade da Apezato Marketing ou de seus fornecedores.
          </p>
          <h4 className="font-bold text-foreground">3. Limitação de Responsabilidade</h4>
          <p>
            A Apezato Marketing não é responsável por danos indiretos, incidentais ou consequentes resultantes do uso do site.
          </p>
          <h4 className="font-bold text-foreground">4. Links Externos</h4>
          <p>
            Não somos responsáveis pelo conteúdo de sites externos vinculados ao nosso site.
          </p>
          <h4 className="font-bold text-foreground">5. Modificações</h4>
          <p>
            Reservamos o direito de modificar estes termos a qualquer momento. Alterações entram em vigor imediatamente após publicação.
          </p>
          <p className="text-xs">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      ),
    },
    cookies: {
      title: '🍪 Política de Cookies',
      description: 'Como usamos cookies no nosso site',
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Este site utiliza cookies para melhorar sua experiência de navegação e fornecer funcionalidades personalizadas.
          </p>
          <h4 className="font-bold text-foreground">O que são Cookies?</h4>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador que ajudam a lembrar suas preferências e atividades.
          </p>
          <h4 className="font-bold text-foreground">Tipos de Cookies Utilizados</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site</li>
            <li><strong>Cookies de Desempenho:</strong> Ajudam a entender como você usa o site</li>
            <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências</li>
            <li><strong>Cookies de Marketing:</strong> Rastreiam sua atividade para publicidade direcionada</li>
          </ul>
          <h4 className="font-bold text-foreground">Controle de Cookies</h4>
          <p>
            Você pode controlar e/ou deletar cookies através das configurações do seu navegador. No entanto, isso pode afetar a funcionalidade do site.
          </p>
          <h4 className="font-bold text-foreground">Consentimento</h4>
          <p>
            Ao continuar navegando neste site, você consente com o uso de cookies conforme descrito nesta política.
          </p>
          <p className="text-xs">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      ),
    },
    cases: {
      title: '⭐ Cases de Sucesso',
      description: 'Histórias reais de transformação digital',
      content: (
        <div className="space-y-6 text-sm text-muted-foreground max-h-[400px] overflow-y-auto">
          {[
            {
              title: 'Clínica de Estética - ROI 300%',
              description: 'Transformamos o site em uma máquina de agendamentos com a Metodologia 4D.',
              result: 'Agenda lotada em 3 meses',
              client: 'Dr. Ana Paula',
            },
            {
              title: 'E-commerce de Moda - Conversão +40%',
              description: 'Redesign completo focado em UX/UI e otimização de funil de vendas.',
              result: 'Faturamento aumentou em 40% em 6 meses',
              client: 'Fernanda Lima',
            },
            {
              title: 'Agência de Consultoria - ROI Triplicado',
              description: 'Gestão de tráfego pago estratégica com segmentação avançada.',
              result: 'ROI triplicado em 3 meses',
              client: 'Carlos Mendes',
            },
            {
              title: 'Clínica Odontológica - 150 Novos Pacientes',
              description: 'Estratégia de SEO + Social Media + Tráfego Pago integrada.',
              result: '150 novos pacientes em 4 meses',
              client: 'Dra. Mariana',
            },
            {
              title: 'SaaS B2B - 50 Novos Clientes',
              description: 'Landing page de alta conversão + Ads estratégicos para decisores.',
              result: '50 novos clientes pagantes em 2 meses',
              client: 'Ricardo Tech',
            },
          ].map((caseItem, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-b-0">
              <h4 className="font-bold text-foreground mb-2">{caseItem.title}</h4>
              <p className="mb-2">{caseItem.description}</p>
              <p className="text-primary font-semibold mb-2">✅ {caseItem.result}</p>
              <p className="text-xs text-muted-foreground italic">— {caseItem.client}</p>
            </div>
          ))}
        </div>
      ),
    },
  };

  const currentModal = modalContent[openModal as keyof typeof modalContent];

  return (
    <ModalContext.Provider value={{ openModal: handleOpenModal, closeModal: handleCloseModal }}>
      {children}

      <Dialog open={!!openModal} onOpenChange={(open) => !open && handleCloseModal()}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{currentModal?.title}</DialogTitle>
            <DialogDescription>{currentModal?.description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {currentModal?.content}
          </div>
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
}
