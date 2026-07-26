// Conteúdo do site — troque os placeholders (marcados com [PLACEHOLDER])
// pelas informações reais assim que estiverem disponíveis.
//
// Contexto de negócio (não remover): este site não existe para captar cliente
// frio. O Nelson já é procurado por indicação e ele mesmo manda o link para
// quem está negociando com ele. A função do site é CONFIRMAR — para alguém a
// um passo de fechar — que a reputação dele é real. Por isso: nada de prova
// social inventada, nada de placeholder visível, nada de "compre agora".

export const COMPANY = {
  name: "T'Service Infra",
  ownerName: "Nelson Trindade",
  yearsInMarket: 30,
  teamSize: 6,
  whatsappNumber: "5500000000000", // [PLACEHOLDER] formato: 55 + DDD + número
  whatsappMessage: "Olá! Cheguei ao site da T'Service Infra e queria confirmar uns detalhes antes de fechar.",
  phoneDisplay: "(00) 00000-0000", // [PLACEHOLDER]
  email: "contato@tserviceinfra.com.br", // [PLACEHOLDER]
  city: "Sua Região", // [PLACEHOLDER]
};

export const whatsappLink = (message: string = COMPANY.whatsappMessage) =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

// "icon" referencia o nome de um ícone do pacote lucide-react
// (ver mapa ICON_MAP em cada componente que consome esses dados).
export const DIFFERENTIALS = [
  {
    icon: "Users",
    title: "Equipe própria e completa",
    description:
      `Os mesmos ${COMPANY.teamSize} profissionais em toda obra: pavimentação, elétrica, pisos e terraplenagem. Ninguém é chamado de última hora nem contratado só para aquele serviço.`,
  },
  {
    icon: "CalendarCheck",
    title: "Prazo é compromisso",
    description:
      "Cronograma combinado no início e seguido à risca — inclusive em obras de 6 meses ou mais. Quando algo muda no meio do caminho, o cliente sabe antes, não depois.",
  },
  {
    icon: "History",
    title: "30 anos de estrada",
    description:
      "Três décadas comandando equipe e resolvendo problema de canteiro, não só de planilha. A experiência que evita que um imprevisto vire atraso.",
  },
];

export const SERVICES = [
  {
    icon: "Route",
    title: "Pavimentação",
    description: "Execução e manutenção de pavimentos para vias, pátios e áreas industriais.",
    image: "/images/services/pavimentacao.jpg",
  },
  {
    icon: "Mountain",
    title: "Terraplenagem",
    description: "Preparação de terreno, nivelamento e movimentação de terra com patrola.",
    image: "/images/services/terraplenagem.jpg",
  },
  {
    icon: "Zap",
    title: "Instalações elétricas",
    description: "Infraestrutura elétrica para obras civis e industriais.",
    image: "/images/services/eletrica.jpg",
  },
  {
    icon: "Layers",
    title: "Pisos industriais e comerciais",
    description: "Aplicação e reforma de pisos com acabamento de alta durabilidade.",
    image: "/images/services/pisos.jpg",
  },
  {
    icon: "Droplets",
    title: "Drenagem e infraestrutura urbana",
    description: "Serviços de drenagem, tubulação e obras complementares de infraestrutura.",
    image: "/images/services/drenagem.jpg",
  },
  {
    icon: "Wrench",
    title: "Manutenção geral de obras",
    description: "Suporte multidisciplinar para reformas e manutenções que exigem mais de uma especialidade.",
    image: "/images/services/manutencao.jpg",
  },
];

// Equipe fixa — sem fotos ainda. Em vez de placeholder de avatar,
// a prova é feita por dado concreto (quantidade, frentes, permanência).
export const TEAM_STATS = [
  { value: `${COMPANY.teamSize}`, label: "Profissionais fixos, os mesmos em toda obra" },
  { value: "4", label: "Frentes técnicas cobertas pela mesma equipe" },
  { value: "1", label: "Comando único, do início ao fim: o Nelson" },
];

export const TEAM_SPECIALTIES = [
  { icon: "Route", label: "Pavimentação" },
  { icon: "Mountain", label: "Terraplenagem (patrola)" },
  { icon: "Zap", label: "Instalações elétricas" },
  { icon: "Layers", label: "Pisos industriais" },
];

// Substitui a antiga seção de "portfólio" (galeria de fotos que ainda não existem).
// Prova de capacidade por processo/critério concreto, não por imagem.
export const CAPACITY_PHASES = [
  {
    step: "01",
    icon: "ClipboardList",
    title: "Cronograma antes da primeira máquina entrar",
    description:
      "O prazo é definido com o cliente no início, com base no que a obra realmente exige — não no que seria mais fácil prometer.",
  },
  {
    step: "02",
    icon: "Cog",
    title: "Execução multidisciplinar sob um comando",
    description:
      "Terraplenagem, elétrica, pavimentação e pisos coordenados pela mesma equipe, sem depender de repasse entre terceiros diferentes.",
  },
  {
    step: "03",
    icon: "RefreshCw",
    title: "Ajuste combinado, não descoberto depois",
    description:
      "Se algo no terreno muda o plano, o cliente é avisado na hora — o cronograma é revisto junto, não silenciado até o fim.",
  },
];

// Substitui a antiga seção de depoimentos fictícios. Sem citação nem nome
// inventado: a prova oferecida aqui é o acesso direto a clientes reais,
// verificável na conversa — não uma frase pré-escrita.
export const REFERENCE_PROOF = {
  eyebrow: "Referências",
  title: "Fale com quem já contratou",
  body:
    "A maior parte do trabalho do Nelson vem de indicação. Se quiser confirmar com quem já contratou antes de fechar, peça o contato de uma obra anterior na conversa do WhatsApp.",
};
