import type {
  Service,
  Testimonial,
  TeamMember,
  FaqItem,
  BenefitItem,
  StatItem,
} from './types';
import procImg1 from '../assets/images/procedimento-facial-1.jpg';
import procImg2 from '../assets/images/procedimento-facial-2.jpg';
import heroImg from '../assets/images/hero-especialista.jpg';

export const SITE = {
  name: 'Essência Estética',
  phone: '(81) 99999-9999',
  whatsappNumber: '5581999999999',
  whatsappMessage: 'Olá! Gostaria de agendar uma avaliação na Essência Estética.',
  email: 'contato@essenciaestetica.com.br',
  address: 'Av. Boa Viagem, 1200 — Boa Viagem, Recife - PE',
  instagram: '@essenciaestetica',
  hours: [
    { days: 'Segunda a Sexta', time: '09h às 19h' },
    { days: 'Sábado', time: '09h às 15h' },
    { days: 'Domingo', time: 'Fechado' },
  ],
};

export const STATS: StatItem[] = [
  { id: 'clientes', value: '3.200+', label: 'Clientes atendidas' },
  { id: 'satisfacao', value: '98%', label: 'Índice de satisfação' },
  { id: 'anos', value: '12', label: 'Anos de experiência' },
  { id: 'avaliacoes', value: '4.9/5', label: 'Avaliação média' },
];

export const SERVICES: Service[] = [
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    description:
      'Procedimentos minimamente invasivos que equilibram as proporções do rosto, suavizando linhas de expressão e devolvendo viço à pele.',
    benefits: ['Resultado natural', 'Procedimento rápido', 'Pouco ou nenhum tempo de recuperação'],
    image: procImg1,
  },
  {
    id: 'bioestimulador',
    name: 'Bioestimulador de Colágeno',
    description:
      'Estimula a produção natural de colágeno, melhorando firmeza, textura e elasticidade da pele de forma progressiva.',
    benefits: ['Efeito gradual e duradouro', 'Melhora a firmeza', 'Indicado para todas as idades'],
    image: procImg2,
  },
  {
    id: 'limpeza-pele',
    name: 'Limpeza de Pele Profunda',
    description:
      'Protocolo completo de higienização, extração e hidratação para uma pele renovada, equilibrada e radiante.',
    benefits: ['Remove impurezas', 'Equilibra a oleosidade', 'Pele visivelmente mais luminosa'],
    image: procImg1,
  },
  {
    id: 'corporal-modelador',
    name: 'Tratamento Corporal Modelador',
    description:
      'Tecnologia avançada para redução de medidas, melhora da textura da pele e definição corporal.',
    benefits: ['Reduz medidas', 'Melhora a textura da pele', 'Protocolo personalizado'],
    image: procImg2,
  },
  {
    id: 'skincare-avancado',
    name: 'Skincare Avançado',
    description:
      'Combinação de ativos de alta performance e equipamentos modernos para tratar manchas, poros e sinais de envelhecimento.',
    benefits: ['Uniformiza o tom da pele', 'Reduz poros dilatados', 'Resultados visíveis desde as primeiras sessões'],
    image: procImg1,
  },
  {
    id: 'fios-pdo',
    name: 'Fios de PDO (Lifting)',
    description:
      'Técnica de sustentação que reposiciona tecidos flácidos, promovendo efeito lifting sem cirurgia.',
    benefits: ['Efeito lifting imediato', 'Estimula colágeno', 'Minimamente invasivo'],
    image: procImg2,
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'profissionais',
    title: 'Profissionais Especialistas',
    description: 'Equipe formada por biomédicos e esteticistas com certificação contínua nas técnicas mais avançadas do mercado.',
    icon: 'certificate',
  },
  {
    id: 'equipamentos',
    title: 'Equipamentos de Última Geração',
    description: 'Tecnologia importada e protocolos validados clinicamente para garantir segurança e resultados consistentes.',
    icon: 'device',
  },
  {
    id: 'personalizado',
    title: 'Atendimento Personalizado',
    description: 'Cada protocolo é desenhado a partir da avaliação individual, respeitando o tempo e os objetivos de cada cliente.',
    icon: 'heart',
  },
  {
    id: 'seguranca',
    title: 'Segurança em Primeiro Lugar',
    description: 'Produtos registrados, protocolos de biossegurança rigorosos e ambiente clínico totalmente equipado.',
    icon: 'shield',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marina Costa',
    role: 'Cliente há 2 anos',
    rating: 5,
    text: 'Me senti acolhida desde a primeira avaliação. O resultado da harmonização facial foi natural, exatamente o que eu queria — ninguém percebe que fiz procedimento, só elogiam minha pele.',
    photo: '',
  },
  {
    id: 't2',
    name: 'Patrícia Lemos',
    role: 'Cliente há 8 meses',
    rating: 5,
    text: 'Profissionais extremamente qualificados e um espaço impecável. O bioestimulador transformou a firmeza da minha pele em poucos meses. Recomendo de olhos fechados.',
    photo: '',
  },
  {
    id: 't3',
    name: 'Renata Albuquerque',
    role: 'Cliente há 1 ano',
    rating: 5,
    text: 'Já passei por outras clínicas e nenhuma me deu a segurança que encontrei aqui. Explicam tudo, respeitam meu tempo e o resultado supera o esperado.',
    photo: '',
  },
  {
    id: 't4',
    name: 'Camila Ferreira',
    role: 'Cliente há 6 meses',
    rating: 5,
    text: 'O atendimento é o que mais me encanta: pontual, cuidadoso e sem pressa. Saí da limpeza de pele com a sensação de ter renovado completamente o rosto.',
    photo: '',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'm1',
    name: 'Dra. Ana Beatriz Souza',
    specialty: 'Especialista em Harmonização Facial',
    certifications: ['Biomedicina Estética', 'Pós-graduação em Toxina Botulínica'],
    photo: heroImg,
  },
  {
    id: 'm2',
    name: 'Juliana Martins',
    specialty: 'Especialista em Tratamentos Corporais',
    certifications: ['Esteticista Certificada', 'Especialização em Tecnologias Corporais'],
    photo: '',
  },
  {
    id: 'm3',
    name: 'Fernanda Lima',
    specialty: 'Especialista em Skincare Avançado',
    certifications: ['Esteticista Certificada', 'Formação em Peelings e Microagulhamento'],
    photo: '',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Os procedimentos têm contraindicações?',
    answer:
      'Cada cliente passa por uma avaliação individual antes de qualquer procedimento. Nossa equipe verifica histórico de saúde, alergias e expectativas para indicar o tratamento mais seguro e adequado.',
  },
  {
    id: 'f2',
    question: 'Quanto tempo dura o resultado dos tratamentos?',
    answer:
      'Varia conforme o procedimento. Harmonização facial costuma durar de 8 a 12 meses, enquanto bioestimuladores de colágeno têm efeito progressivo que pode durar até 18 meses. Na avaliação, explicamos a expectativa específica do seu caso.',
  },
  {
    id: 'f3',
    question: 'Existe tempo de recuperação após os procedimentos?',
    answer:
      'A maioria dos nossos tratamentos é minimamente invasiva, com recuperação rápida. Pequenos vermelhidões ou inchaços leves podem ocorrer e geralmente se resolvem em 24 a 48 horas, dependendo do protocolo.',
  },
  {
    id: 'f4',
    question: 'Como funciona a primeira avaliação?',
    answer:
      'A avaliação é feita por um de nossos especialistas, que analisa sua pele e ouve seus objetivos para montar um plano de tratamento personalizado, com valores e cronograma claros antes de qualquer decisão.',
  },
  {
    id: 'f5',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos cartões de crédito e débito, Pix e parcelamento em até 12x para protocolos completos. Fale com nossa equipe pelo WhatsApp para condições especiais.',
  },
];