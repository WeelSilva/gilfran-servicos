export const BRAND = {
  name: 'GILFRAN',
  subtitle: 'EXCLUSIVE SERVICE',
  subTag: 'SERVIÇOS',
  handle: '@gilfranserv',
  instagramUrl: 'https://www.instagram.com/gilfranserv/',
  facebookUrl: 'https://www.facebook.com/Gilfran-Serv-496678751141685',
  phoneDisplay: '(11) 94539-6410',
  whatsappNumber: '5511945396410',
  email: 'gilfraservicos@gmail.com',
  city: 'São Paulo & Grande SP',
} as const

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export interface BlindModelSpec {
  id: 'rolo-solar' | 'horizontal-madeira' | 'embutida-blackout' | 'cortina-wave'
  name: string
  shortName: string
  category: string
  description: string
  idealFor: string
  uvBlockBase: number
  privacyBase: number
  thermalBase: number
  hasTilt: boolean
}

export const BLIND_MODELS: BlindModelSpec[] = [
  {
    id: 'rolo-solar',
    name: 'Persiana Rolô Tela Solar',
    shortName: 'Rolô Solar',
    category: 'Controle Térmico & Varandas',
    description:
      'Bloqueia raios UV preservando a vista da cidade. Ideal para varandas envidraçadas e escritórios corporativos.',
    idealFor: 'Varandas Gourmet & Escritórios',
    uvBlockBase: 92,
    privacyBase: 76,
    thermalBase: 88,
    hasTilt: false,
  },
  {
    id: 'horizontal-madeira',
    name: 'Persiana Horizontal (Madeira / Alumínio)',
    shortName: 'Horizontal',
    category: 'Controle Preciso de Lâminas',
    description:
      'Regulagem milimétrica da inclinação das lâminas para dosar luz natural e privacidade com estética arquitetônica.',
    idealFor: 'Salas de Reunião, Home Office & Quartos',
    uvBlockBase: 86,
    privacyBase: 94,
    thermalBase: 82,
    hasTilt: true,
  },
  {
    id: 'embutida-blackout',
    name: 'Persiana Embutida / Integrada',
    shortName: 'Embutida',
    category: 'Vedação Total & Manutenção',
    description:
      'Sistema integrado à esquadria da janela. Realizamos instalação e troca de esteira, cordão e recolhedor com precisão.',
    idealFor: 'Dormitórios & Apartamentos de Alto Padrão',
    uvBlockBase: 99,
    privacyBase: 100,
    thermalBase: 96,
    hasTilt: false,
  },
  {
    id: 'cortina-wave',
    name: 'Cortina Sob Medida (Voil / Wave)',
    shortName: 'Cortina Wave',
    category: 'Acabamento Residencial Nobre',
    description:
      'Caimento contínuo em ondas perfeitas, confeccionada sob medida para integrar amplitude, conforto acústico e sofisticação.',
    idealFor: 'Salas de Estar & Suítes Residenciais',
    uvBlockBase: 78,
    privacyBase: 85,
    thermalBase: 80,
    hasTilt: false,
  },
]

export interface ServicePillar {
  id: string
  badge: string
  title: string
  subtitle: string
  description: string
  items: string[]
  ctaText: string
  whatsappMessage: string
  accent: string
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'vendas',
    badge: '01 • Projetos Sob Medida',
    title: 'Venda & Instalação de Persianas e Cortinas',
    subtitle: 'Todas as marcas, tecidos técnicos e esquadrias',
    description:
      'Medição técnica no local, consultoria para escolha do tecido ou lâmina ideal e instalação limpa com alinhamento a laser para residências e empresas.',
    items: [
      'Persianas Rolô (Tela Solar e Blackout)',
      'Persianas Horizontais (Alumínio e Madeira)',
      'Cortinas Sob Medida em Voil e Blackout',
      'Venda e Instalação de Janelas',
    ],
    ctaText: 'Orçar Projeto Sob Medida',
    whatsappMessage:
      'Olá Gilfran! Gostaria de solicitar uma medição e orçamento para compra e instalação sob medida.',
    accent: 'from-[#C9A96E]/20 to-transparent',
  },
  {
    id: 'manutencao',
    badge: '02 • Assistência Técnica Especializada',
    title: 'Manutenção de Persianas & Janelas',
    subtitle: 'Recupere sua persiana sem precisar trocar a peça inteira',
    description:
      'Solução rápida para persianas embutidas, externas ou internas que travaram, ficaram pesadas ou tiveram desgaste de peças.',
    items: [
      'Troca de esteira, cordão e recolhedor/coletor de persiana embutida',
      'Substituição de comandos, correntes e freios',
      'Reparo e regulagem de janelas e esquadrias',
      'Atendimento preventivo para escritórios e condomínios',
    ],
    ctaText: 'Agendar Reparo Técnico',
    whatsappMessage:
      'Olá Gilfran! Preciso de manutenção técnica para persiana/janela. Gostaria de agendar uma avaliação.',
    accent: 'from-amber-500/15 to-transparent',
  },
  {
    id: 'higienizacao',
    badge: '03 • Saúde & Conservação',
    title: 'Lavagem & Higienização Profissional',
    subtitle: 'Remoção profunda de ácaros, poeira e manchas',
    description:
      'Processo técnico específico para cada fibra e material, devolvendo a aparência original sem danificar blackout, tecidos nobres ou estofados.',
    items: [
      'Lavagem e higienização técnica de cortinas e persianas',
      'Higienização profunda de sofás e estofados',
      'Lavagem e sanitização de colchões',
      'Limpeza de carpetes e pós-obra residencial/comercial',
    ],
    ctaText: 'Solicitar Higienização',
    whatsappMessage:
      'Olá Gilfran! Gostaria de um orçamento para lavagem e higienização (cortinas / persianas / estofados).',
    accent: 'from-emerald-500/15 to-transparent',
  },
]

export interface DiagnosticSymptom {
  id: string
  symptom: string
  category: string
  affectedType: string
  diagnosisTitle: string
  solutionDetail: string
  estimatedTime: string
  savingsNote: string
  whatsappMessage: string
}

export const DIAGNOSTIC_SYMPTOMS: DiagnosticSymptom[] = [
  {
    id: 'cordao-arrebentado',
    symptom: 'Fita, cordão ou corrente arrebentou ou desfiou',
    category: 'Desgaste de Acionamento',
    affectedType: 'Persiana Embutida / Rolô / Horizontal',
    diagnosisTitle: 'Troca de Esteira, Cordão e Recolhedor / Coletor',
    solutionDetail:
      'Substituímos a fita/cordão desgastado, revisamos o coletor (recolhedor) e lubrificamos o eixo para que a persiana suba leve como nova.',
    estimatedTime: 'Execução rápida no local (1h a 2h)',
    savingsNote: 'Economia média de até 75% em relação à troca da janela completa.',
    whatsappMessage:
      'Olá Gilfran! Fiz o diagnóstico no site: minha persiana está com o cordão/fita ou recolhedor danificado e preciso de orçamento para troca.',
  },
  {
    id: 'persiana-travada',
    symptom: 'Persiana embutida travou, caiu torta ou está muito pesada',
    category: 'Mecânica Interna',
    affectedType: 'Persiana Integrada à Janela',
    diagnosisTitle: 'Revisão de Eixo, Esteira e Guia Lateral',
    solutionDetail:
      'Desmontagem segura da caixa da persiana integrada, realinhamento das lâminas da esteira, troca de travas laterais e calibração da mola/eixo.',
    estimatedTime: 'Atendimento técnico no mesmo dia ou agendado',
    savingsNote: 'Evita danos definitivos à esquadria de alumínio ou vidro.',
    whatsappMessage:
      'Olá Gilfran! Minha persiana embutida travou / está pesada ou torta. Gostaria de agendar uma visita técnica.',
  },
  {
    id: 'comando-laminas',
    symptom: 'Lâminas não giram ou comando da Rolô patina ao puxar',
    category: 'Comando & Precisão',
    affectedType: 'Persiana Horizontal / Rolô / Tela Solar',
    diagnosisTitle: 'Substituição de Comando Giratório, Freio e Bastão',
    solutionDetail:
      'Trocamos o kit de comando interno, suporte de fixação ou haste de giro com peças compatíveis para todas as marcas e modelos.',
    estimatedTime: 'Substituição limpa sem sujeira no ambiente',
    savingsNote: 'Preserva o tecido ou as lâminas originais em perfeito estado.',
    whatsappMessage:
      'Olá Gilfran! O comando da minha persiana está patinando ou as lâminas não giram. Preciso de manutenção.',
  },
  {
    id: 'manchas-poeira',
    symptom: 'Cortina ou persiana encardida, com poeira ou manchas',
    category: 'Higienização & Conservação',
    affectedType: 'Cortinas Sob Medida / Persianas / Estofados',
    diagnosisTitle: 'Lavagem Técnica e Higienização Antialérgica',
    solutionDetail:
      'Retirada cuidadosa (quando aplicável), lavagem com produtos neutros específicos para tecidos blackout/voil ou lâminas, e reinstalação alinhada.',
    estimatedTime: 'Processo seguro com secagem controlada',
    savingsNote: 'Elimina ácaros, odores e prolonga a vida útil das fibras.',
    whatsappMessage:
      'Olá Gilfran! Gostaria de solicitar uma lavagem e higienização técnica para minhas cortinas/persianas.',
  },
]

export const NEIGHBORHOODS = [
  'Vila Olímpia',
  'Moema',
  'Campo Belo',
  'Pinheiros',
  'Itaim Bibi',
  'Santo Amaro',
  'Vila Guarani',
  'Bela Vista / Paulista',
  'Alphaville & Tamboré',
]

export interface PortfolioCase {
  id: string
  neighborhood: string
  clientType: string
  title: string
  details: string
  serviceTag: string
  highlightRef: string
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'vila-olimpia-corp',
    neighborhood: 'Vila Olímpia • Zona Sul SP',
    clientType: 'Corporativo • Escritório de Advocacia',
    title: 'Persianas Horizontais & Rolô Corporativas',
    details:
      'Atendimento especializado para ambientes empresariais, como escritórios na região da Vila Olímpia (ex.: Negrão Ferrari Advogados), garantindo conforto visual em telas e reuniões.',
    serviceTag: 'Venda, Instalação & Manutenção',
    highlightRef: '@gilfranserv',
  },
  {
    id: 'campo-belo-cortinas',
    neighborhood: 'Campo Belo • São Paulo',
    clientType: 'Residencial Alto Padrão',
    title: 'Cortinas Sob Medida com Caimento Perfeito',
    details:
      'Confecção e instalação personalizada em voil e tecidos sob medida, combinando leveza estética, privacidade e acabamento rente ao teto.',
    serviceTag: 'Cortinas Sob Medida',
    highlightRef: '@gilfranserv',
  },
  {
    id: 'moema-embutida',
    neighborhood: 'Moema • São Paulo',
    clientType: 'Apartamento Residencial',
    title: 'Recuperação Completa de Persiana Embutida',
    details:
      'Troca de esteira, cordão e coletor de persiana integrada à janela, restaurando a suavidade de abertura e vedação luminosa sem obras.',
    serviceTag: 'Manutenção Técnica',
    highlightRef: '@gilfranserv',
  },
  {
    id: 'alphaville-geral',
    neighborhood: 'Alphaville • Santana de Parnaíba',
    clientType: 'Residências & Varandas Gourmet',
    title: 'Persianas de Todos os Modelos e Marcas',
    details:
      'Projetos completos de controle solar em varandas panorâmicas, manutenção preventiva em residências e higienização de estofados e colchões.',
    serviceTag: 'Projeto Completo & Higienização',
    highlightRef: '@gilfranserv',
  },
]
