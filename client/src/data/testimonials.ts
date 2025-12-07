import { Star } from 'lucide-react';

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
  avatarInitials: string;
}

export const testimonials: Testimonial[] = [
  // Depoimentos Existentes
  {
    name: 'Dr. Ana Paula',
    role: 'Clínica de Estética',
    text: 'A Apezato transformou nosso site em uma máquina de agendamentos. A agenda está lotada e o posicionamento da marca mudou completamente.',
    stars: 5,
    avatarInitials: 'AP',
  },
  {
    name: 'Carlos Mendes',
    role: 'CEO TechSolutions',
    text: 'ROI triplicado em 3 meses de gestão de tráfego. A equipe é extremamente técnica e transparente com os dados.',
    stars: 5,
    avatarInitials: 'CM',
  },
  {
    name: 'Fernanda Lima',
    role: 'E-commerce de Moda',
    text: 'O redesign da nossa loja virtual aumentou a conversão em 40%. O cuidado com a experiência do usuário foi o diferencial.',
    stars: 5,
    avatarInitials: 'FL',
  },
  // Novos Depoimentos Gerados
  {
    name: 'Ricardo Almeida',
    role: 'Gerente Comercial, Consórcio Mais',
    text: 'A estratégia de tráfego pago da Apezato nos trouxe leads qualificados que nunca havíamos alcançado. O funil de vendas está mais eficiente e o custo por aquisição caiu 35%.',
    stars: 5,
    avatarInitials: 'RA',
  },
  {
    name: 'Juliana Santos',
    role: 'Corretora de Seguros, Segura Mais',
    text: 'O novo site e a gestão de conteúdo nos posicionaram como autoridade no mercado de planos de saúde. O aumento na confiança do cliente é notável.',
    stars: 5,
    avatarInitials: 'JS',
  },
  {
    name: 'Marcelo Costa',
    role: 'Proprietário, Costa Imóveis',
    text: 'A campanha de Google Ads para imóveis de alto padrão foi um sucesso. A segmentação foi precisa e gerou contatos de alto valor em poucas semanas.',
    stars: 5,
    avatarInitials: 'MC',
  },
  {
    name: 'Dr. Lucas Ferreira',
    role: 'Clínica Veterinária Patas Felizes',
    text: 'A gestão de redes sociais humanizou nossa marca e aumentou o engajamento da comunidade. Nossos agendamentos de consultas e vacinas cresceram 50%.',
    stars: 5,
    avatarInitials: 'LF',
  },
  {
    name: 'Dra. Camila Oliveira',
    role: 'Endocrinologista',
    text: 'O branding e a criação de conteúdo científico para o Instagram me posicionaram como referência. Minha agenda de teleconsultas está sempre cheia.',
    stars: 5,
    avatarInitials: 'CO',
  },
  {
    name: 'Pedro Henrique',
    role: 'Dono da Pizzaria Forno Mágico',
    text: 'A estratégia de tráfego para delivery no Instagram e Google Maps foi um divisor de águas. O volume de pedidos online dobrou nos finais de semana.',
    stars: 5,
    avatarInitials: 'PH',
  },
];
