/* Chinese (Simplified) dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: '首页', spy: 'top' },
  { href: '#about', label: '关于', spy: 'about' },
  { href: '#skills', label: '技能', spy: 'skills' },
  { href: '#experience', label: '经历', spy: 'experience' },
  { href: '#work', label: '项目', spy: 'work' },
  { href: '#contact', label: '联系', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: '可接洽 · LEAD/SENIOR 职位与咨询',
  title: '12+ 年构建',
  accent: '精致的 Web 应用。',
  lede:
    '高级首席开发工程师,拥有 12 年以上的经验,在多个行业中构建、测试并维护各类软件与 Web 应用。',
  ctas: [
    { label: '查看作品', href: '#work', variant: 'primary' },
    { label: '联系我', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: '年限', value: '12+' },
    { label: '职位', value: '首席开发工程师' },
    { label: '技术栈', value: '多语言 · Web 优先' },
  ],
}

export const about: AboutCopy = {
  eyebrow: '关于',
  title: '为每个人',
  titleAccent: '打造软件。',
  lede: '从端到端独立掌控系统,游刃有余。',
  paragraphs: [
    '具备扎实的实战经验:接手复杂的遗留系统,将其重新带回标准,并在其上交付干净、经过良好测试的代码。',
    '大部分工作覆盖整个技术栈:前端、后端与基础设施。其余则通过代码评审、辅导和架构决策来带领团队。',
    '业余时间也持续输出项目。',
  ],
  facts: [
    { label: '所在地', value: '英国' },
    { label: '职位', value: '首席开发工程师' },
    { label: '年限', value: '12+' },
    { label: '可接受', value: 'Lead · Senior · 咨询' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: '规格',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: '技能',
  title: '技术栈与',
  titleAccent: '工具。',
  lede: '出于必要而通才,源于经验而有自己的看法。',
  groups: [
    {
      key: 'frontend',
      name: '前端',
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
      name: '后端',
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
      name: '数据',
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
      name: '基础设施',
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
      name: '工具',
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
  eyebrow: '经历',
  title: '多年',
  titleAccent: '经验。',
  lede: '想看完整版及推荐人,请直接联系。',
  entries: [
    {
      role: '首席开发工程师',
      company: 'SentryBay Ltd',
      period: '2022 - 至今',
      sectors: ['SaaS', '网络安全', '国防', 'NDA'],
      summary:
        '面向消费者平台的研发负责人。把控架构决策,带领多支并行团队,在交付新产品的同时把遗留服务带回标准。',
      points: [
        '目前主导 Web 平台与服务的研发工作。',
        '主导 AI 辅助工作流的落地,显著提升了团队效率。',
        '交付了 Armored Client--支撑公司大幅增长的关键产品面。',
      ],
    },
    {
      role: '首席开发',
      company: 'Go Deploy Labs',
      period: '2020 - 2022',
      sectors: ['LMS', '虚拟实验室', '电商', 'MCT'],
      summary:
        '全栈工程师,覆盖整个产品。让学员与导师能够运行 MCT 等认证课程的虚拟实验室。Go Deploy 各产品线的 Principal Developer。',
      points: [
        '重新设计虚拟实验室的指引界面,提升用户体验。',
        '通过 Guacamole 统一 RDP,实现实验室访问与导师支持的无缝衔接。',
        '推动迁移至 Vue 3,提升前端性能与可维护性。',
      ],
    },
    {
      role: '创始人',
      company: 'Versyx Digital',
      period: '2019 - 至今',
      sectors: ['代理机构', '咨询', '研发', '设计'],
      summary:
        '专注于咨询、基础设施与前端的精品研发工作室,服务多个行业的客户。我们也参与并贡献开源项目。',
      points: [
        '协助客户对其 Web 应用进行现代化改造,提升性能与可扩展性。',
        '提供 Web 架构与研发最佳实践方面的战略咨询。',
        '参与开源贡献,改善社区使用的工具与库。',
      ],
    },
  ],
  ui: {
    exhibits: '亮点',
    sectors: '行业',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: '精选作品',
  title: '我的部分',
  titleAccent: '项目。',
  lede:
    '大部分生产工作受 NDA 限制--开放项目见下方,其他项目可联系了解。',
  projects: [
    {
      title: 'Vigil',
      summary:
        '一个轻量级的实时服务器监控仪表盘。通过 WebSocket 推送实时指标--仪表、图表、服务探针--一应俱全,套在 Vigil Collector 之上。',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Vigil 仪表盘--实时显示 CPU、内存、磁盘和网络的图表。',
      badge: '系统监控',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: '试用', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        '一个简单、快速、免费的在线 Markdown 编辑器,支持实时预览。即时撰写、排版并将文档导出为 HTML 或 PDF。基于 Visual Studio Code 同款的 Monaco 引擎构建。',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: '占位截图--Vigil 主页视图,后续替换为第二个项目。',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: '试用', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        '专为 Elite Dangerous(精英:危险)粉丝打造的项目--由独立 API 驱动的伴侣站点。涵盖约 1 亿个恒星系统的数据,以光速送达,数据来源于社区工具和游戏内日志。',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: '占位截图--Vigil 概览,后续替换为第三个项目。',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: '试用', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        '一门从头到尾自己写的迷你编程语言--既为了好玩,也为了亲手看看编译器是怎么搭起来的。OMG 的编译器本身就是用 OMG 写的。Rust 运行时产出原生二进制,同一套工具链编译成 JavaScript 供浏览器 Playground 使用。',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'OMG Playground--左侧 Fibonacci 源码,右侧 stdout。',
      badge: '编程语言',
      stack: ['Rust', 'OMG', 'JavaScript', '字节码虚拟机'],
      links: [
        { label: '试用', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: '图纸',
    sheetValue: 'A - 项目',
    plates: '图版',
    scale: '比例',
    scaleValue: '1:1 · MMXXVI',
    plate: '图版',
    openPlate: '展开',
    project: '项目',
    type: '类型',
    drawn: '绘制',
    drawnValue: 'MMXXVI',
    sheetOf: '/',
    annexedPlates: '附录图版',
    plateIndex: '图版索引',
    currentlyFeatured: (title) => `${title} - 当前主推`,
    feature: (title) => `主推 ${title}`,
    stackOf: (title) => `${title} 技术栈`,
  },
}

export const contact: ContactCopy = {
  eyebrow: '联系',
  title: '保持',
  titleAccent: '联系。',
  lede:
    '欢迎洽谈 lead engineering、senior IC 以及咨询机会。最快的方式是邮件;其他渠道也都能找到我。',
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
    invitationA: '倒杯咖啡。',
    invitationB: '写几行字。',
    correspondence: '通信',
    emailLabel: '邮件',
    statusText: '欢迎洽谈 · 一日内回复',
    alsoReachable: '也可通过',
    signatureThanks: '谢谢,',
    signatureName: 'Chris Rowles',
    signatureLocation: '英国',
    signatureYear: 'MMXXVI',
  },
}
