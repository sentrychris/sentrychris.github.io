/* Portuguese (Brazilian) dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'Início', spy: 'top' },
  { href: '#about', label: 'Sobre', spy: 'about' },
  { href: '#skills', label: 'Habilidades', spy: 'skills' },
  { href: '#experience', label: 'Experiência', spy: 'experience' },
  { href: '#work', label: 'Projetos', spy: 'work' },
  { href: '#contact', label: 'Contato', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: 'DISPONÍVEL · CARGOS LEAD/SENIOR & CONSULTORIA',
  title: '12+ anos construindo',
  accent: 'aplicações web bonitas.',
  lede:
    'Lead Developer altamente qualificado, com mais de 12 anos de experiência construindo, testando e mantendo softwares e aplicações web em diversos setores.',
  ctas: [
    { label: 'Ver projetos', href: '#work', variant: 'primary' },
    { label: 'Entrar em contato', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: 'Anos', value: '12+' },
    { label: 'Cargo', value: 'Lead Developer' },
    { label: 'Stack', value: 'Poliglota · web-first' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'Sobre',
  title: 'Software para',
  titleAccent: 'todo mundo.',
  lede: 'À vontade para conduzir sistemas de ponta a ponta.',
  paragraphs: [
    'Histórico comprovado herdando sistemas legados complexos, trazendo-os de volta ao padrão e entregando código limpo e bem testado em cima.',
    'A maior parte do trabalho foi hands-on por todo o stack: frontend, backend e infraestrutura. O restante, liderando times via revisões, mentoria e decisões arquiteturais.',
    'Também solto projetos no tempo livre.',
  ],
  facts: [
    { label: 'Localização', value: 'Reino Unido' },
    { label: 'Cargo', value: 'Lead Developer' },
    { label: 'Anos', value: '12+' },
    { label: 'Aberto a', value: 'Lead · Senior · Consultoria' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: 'Especificações',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'Habilidades',
  title: 'Stack e',
  titleAccent: 'ferramentas.',
  lede: 'Poliglota por necessidade, opinativo por experiência.',
  groups: [
    {
      key: 'frontend',
      name: 'Frontend',
      items: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue 3',
        'Vite',
        'Sass',
        'Tailwind',
        'Bootstrap',
        'D3',
      ],
    },
    {
      key: 'backend',
      name: 'Backend',
      items: [
        'Node.js',
        'Python',
        'PHP',
        'Laravel',
        'REST',
        'WebSockets',
        'Tornado',
        'Express',
        'FastAPI',
      ],
    },
    {
      key: 'data',
      name: 'Dados',
      items: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'SQLite',
        'MongoDB',
        'Elasticsearch',
      ],
    },
    {
      key: 'infra',
      name: 'Infra & Ops',
      items: [
        'Docker',
        'AWS',
        'Cloudflare',
        'Linux',
        'Nginx',
        'CI/CD',
        'GitHub Actions',
        'Terraform',
      ],
    },
    {
      key: 'tooling',
      name: 'Ferramentas',
      items: [
        'Git',
        'Jest',
        'Vitest',
        'Playwright',
        'ESLint',
        'Prettier',
        'pnpm',
      ],
    },
  ],
}

export const experience: ExperienceCopy = {
  eyebrow: 'Experiência',
  title: 'Anos de',
  titleAccent: 'experiência.',
  lede: 'Me chama se quiser a versão longa, com referências.',
  entries: [
    {
      role: 'Lead Developer',
      company: 'SentryBay Ltd',
      period: '2022 — atual',
      sectors: ['SaaS', 'Cibersegurança', 'Defesa', 'NDA'],
      summary:
        'Lead de desenvolvimento em plataformas de consumidor. Responsável por decisões de arquitetura, conduzo equipes em paralelo e trago serviços legados de volta ao padrão enquanto entrego novos produtos.',
      points: [
        'Atualmente lidero o desenvolvimento de plataformas web e serviços.',
        'Conduzi a adoção de fluxos assistidos por IA para aumentar a produtividade.',
        'Entreguei o Armored Client, uma superfície de produto que impulsionou parte significativa do crescimento da empresa.',
      ],
    },
    {
      role: 'Principal Developer',
      company: 'Go Deploy Labs',
      period: '2020 — 2022',
      sectors: ['LMS', 'Laboratórios virtuais', 'E-commerce', 'MCT'],
      summary:
        'Engenheiro full-stack em todo o produto. Habilitei alunos e mentores a rodar laboratórios virtuais para MCT e outros cursos certificados. Principal Developer das ofertas da Go Deploy.',
      points: [
        'Redesenhei a interface de instruções dos laboratórios virtuais para melhorar a experiência do usuário.',
        'Unifiquei RDP via Guacamole, garantindo acesso fluido aos laboratórios e suporte a mentores.',
        'Conduzi a migração para Vue 3, melhorando performance e manutenibilidade do frontend.',
      ],
    },
    {
      role: 'Fundador',
      company: 'Versyx Digital',
      period: '2019 — atual',
      sectors: ['Agência', 'Consultoria', 'Desenvolvimento', 'Design'],
      summary:
        'Estúdio de desenvolvimento sob medida focado em consultoria, infraestrutura e frontend para clientes de diversos setores. Também construímos e contribuímos com projetos open source.',
      points: [
        'Apoiei clientes na modernização de aplicações web, melhorando performance e escalabilidade.',
        'Forneci consultoria estratégica sobre arquitetura web e boas práticas de desenvolvimento.',
        'Contribuí com projetos open source, aprimorando ferramentas e bibliotecas usadas pela comunidade.',
      ],
    },
  ],
  ui: {
    exhibits: 'Destaques',
    sectors: 'Setores',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: 'Trabalhos selecionados',
  title: 'Alguns dos meus',
  titleAccent: 'projetos.',
  lede:
    'A maior parte do trabalho em produção está sob NDA — os projetos abertos estão abaixo. Me chama para ver o resto.',
  projects: [
    {
      title: 'Vigil',
      summary:
        'Um painel de monitoramento de servidores leve e em tempo real. Métricas ao vivo via WebSocket — medidores, gráficos, sondas de serviço — tudo numa UI elegante que roda na frente do Vigil Collector.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Painel Vigil — gráficos de CPU, memória, disco e rede em tempo real.',
      badge: 'Monitoramento de sistemas',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: 'Testar', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'Um editor de markdown online simples, rápido e gratuito, com pré-visualização ao vivo. Escreva, formate e exporte seus documentos para HTML ou PDF instantaneamente. Construído sobre o Monaco — o motor que roda no Visual Studio Code.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'Captura de tela placeholder — visão Vigil, substituir pelo segundo projeto.',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: 'Testar', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'Um projeto dedicado aos fãs do jogo Elite Dangerous — site companheiro com API própria. Dados de ~100 milhões de sistemas estelares servidos na velocidade da luz, vindos de ferramentas da comunidade e logs do próprio jogo.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'Captura de tela placeholder — visão geral do Vigil, substituir pelo terceiro projeto.',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: 'Testar', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        'Uma pequena linguagem de programação construída de ponta a ponta — por diversão e para ver como um compilador se encaixa. O próprio compilador do OMG é escrito em OMG. Binários nativos através de um runtime em Rust; a mesma toolchain compila para JavaScript no playground do navegador.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'Playground OMG — código Fibonacci à esquerda, stdout à direita.',
      badge: 'Linguagem de programação',
      stack: ['Rust', 'OMG', 'JavaScript', 'VM de bytecode'],
      links: [
        { label: 'Testar', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'Folha',
    sheetValue: 'A — Projetos',
    plates: 'Pranchas',
    scale: 'Escala',
    scaleValue: '1:1 · MMXXVI',
    plate: 'Prancha',
    openPlate: 'Abrir',
    project: 'Projeto',
    type: 'Tipo',
    drawn: 'Desenhado',
    drawnValue: 'MMXXVI',
    sheetOf: 'de',
    annexedPlates: 'Pranchas anexas',
    plateIndex: 'Índice de pranchas',
    currentlyFeatured: (title) => `${title} — em destaque agora`,
    feature: (title) => `Destacar ${title}`,
    stackOf: (title) => `Stack de ${title}`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'Contato',
  title: 'Vamos',
  titleAccent: 'conversar.',
  lede:
    'Aberto a cargos de lead engineering, senior IC e consultoria. A resposta mais rápida é por e-mail; os outros canais também chegam aqui.',
  email: { user: 'christopher.rowles', domain: 'outlook.com' },
  methods: [
    {
      label: 'GitHub',
      display: 'github.com/sentrychris',
      href: 'https://github.com/sentrychris',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/chris-rowles',
      href: 'https://linkedin.com/in/chris-rowles',
    },
  ],
  ui: {
    invitationA: 'Pega um café.',
    invitationB: 'Manda uma mensagem.',
    correspondence: 'Correspondência',
    emailLabel: 'E-mail',
    statusText: 'Aberto a oportunidades · Respondo em até um dia',
    alsoReachable: 'Também me encontre em',
    signatureThanks: 'Obrigado,',
    signatureName: 'Chris Rowles',
    signatureLocation: 'Reino Unido',
    signatureYear: 'MMXXVI',
  },
}
