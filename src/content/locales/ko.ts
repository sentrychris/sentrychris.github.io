/* Korean dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: '홈', spy: 'top' },
  { href: '#about', label: '소개', spy: 'about' },
  { href: '#skills', label: '기술', spy: 'skills' },
  { href: '#experience', label: '경력', spy: 'experience' },
  { href: '#work', label: '작업', spy: 'work' },
  { href: '#contact', label: '연락', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: '제안 가능 · LEAD/SENIOR 역할 및 컨설팅',
  title: '12+년 동안 만들어온',
  accent: '아름다운 웹 앱.',
  lede:
    '12년 이상 다양한 산업에서 소프트웨어와 웹 앱을 설계·테스트·운영해온 리드 개발자입니다.',
  ctas: [
    { label: '작업 보기', href: '#work', variant: 'primary' },
    { label: '연락하기', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: '연차', value: '12+' },
    { label: '역할', value: '리드 개발자' },
    { label: '스택', value: '폴리글랏 · 웹 우선' },
  ],
}

export const about: AboutCopy = {
  eyebrow: '소개',
  title: '모두를 위한',
  titleAccent: '소프트웨어.',
  lede: '시스템을 처음부터 끝까지 책임지는 데 익숙합니다.',
  paragraphs: [
    '복잡한 레거시 시스템을 인계받아 표준 수준으로 회복시키고, 그 위에 깔끔하고 충분히 테스트된 코드를 얹어온 검증된 이력이 있습니다.',
    '대부분의 작업은 프런트엔드, 백엔드, 인프라까지 풀스택으로 직접 다루는 일이었습니다. 나머지는 코드 리뷰, 멘토링, 아키텍처 결정으로 팀을 이끄는 일이었습니다.',
    '여가 시간에도 직접 프로젝트를 출시합니다.',
  ],
  facts: [
    { label: '소재지', value: '영국' },
    { label: '역할', value: '리드 개발자' },
    { label: '연차', value: '12+' },
    { label: '오픈 포지션', value: 'Lead · Senior · 컨설팅' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: '사양',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: '기술',
  title: '스택과',
  titleAccent: '도구.',
  lede: '필요해서 다언어, 경험에서 다져진 소신.',
  groups: [
    {
      key: 'frontend',
      name: '프런트엔드',
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
      name: '백엔드',
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
      name: '데이터',
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
      name: '인프라',
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
      name: '도구',
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
  eyebrow: '경력',
  title: '쌓아온',
  titleAccent: '경력.',
  lede: '추천인이 포함된 자세한 버전이 필요하면 연락 주세요.',
  entries: [
    {
      role: '리드 개발자',
      company: 'SentryBay Ltd',
      period: '2022 - 현재',
      sectors: ['SaaS', '사이버 보안', '국방', 'NDA'],
      summary:
        '소비자 대상 플랫폼 개발 리드. 아키텍처 결정을 책임지고, 여러 팀을 병렬로 운영하며, 신규 제품을 출시하면서 레거시 서비스를 표준 수준으로 끌어올립니다.',
      points: [
        '현재 웹 플랫폼 및 서비스 개발을 총괄하고 있습니다.',
        '생산성 향상을 위해 AI 보조 워크플로 도입을 주도했습니다.',
        '회사 성장의 큰 축을 담당한 핵심 제품 Armored Client를 출시했습니다.',
      ],
    },
    {
      role: '프린시펄 디벨로퍼',
      company: 'Go Deploy Labs',
      period: '2020 - 2022',
      sectors: ['LMS', '가상 랩', '이커머스', 'MCT'],
      summary:
        '제품 전반의 풀스택 엔지니어. 학습자와 멘토가 MCT 등 인증 과정을 위한 가상 랩을 운영할 수 있도록 지원했습니다. Go Deploy 제품군의 프린시펄 디벨로퍼.',
      points: [
        '가상 랩의 안내 인터페이스를 새로 설계해 사용자 경험을 개선했습니다.',
        'Guacamole를 통해 RDP를 통합하여 랩 접근과 멘토 지원을 매끄럽게 만들었습니다.',
        'Vue 3로의 전환을 주도하여 프런트엔드 성능과 유지보수성을 개선했습니다.',
      ],
    },
    {
      role: '창업자',
      company: 'Versyx Digital',
      period: '2019 - 현재',
      sectors: ['에이전시', '컨설팅', '개발', '디자인'],
      summary:
        '컨설팅, 인프라, 프런트엔드에 집중하는 맞춤형 개발 스튜디오. 다양한 산업의 클라이언트를 지원하며 오픈소스 프로젝트를 만들고 기여합니다.',
      points: [
        '클라이언트의 웹 애플리케이션 현대화를 도와 성능과 확장성을 개선했습니다.',
        '웹 아키텍처와 개발 모범 사례에 대한 전략적 컨설팅을 제공했습니다.',
        '커뮤니티가 사용하는 도구와 라이브러리를 개선하는 오픈소스 기여를 이어왔습니다.',
      ],
    },
  ],
  ui: {
    exhibits: '주요 사례',
    sectors: '산업',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: '선택 작업물',
  title: '제가 만든',
  titleAccent: '프로젝트.',
  lede:
    '실서비스 작업의 대부분은 NDA 하에 있으며, 공개 가능한 프로젝트는 아래에 있습니다. 그 외는 직접 문의해 주세요.',
  projects: [
    {
      title: 'Vigil',
      summary:
        '서버용 가벼운 실시간 모니터링 대시보드. WebSocket으로 라이브 메트릭을 전송 - 게이지, 차트, 서비스 프로브까지 - Vigil Collector 앞단에 그대로 얹을 수 있는 깔끔한 UI입니다.',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Vigil 대시보드 - CPU, 메모리, 디스크, 네트워크 그래프 라이브 표시.',
      badge: '시스템 모니터링',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: '체험', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        '간결하고 빠르며 무료인 온라인 마크다운 에디터. 라이브 프리뷰와 함께 HTML 또는 PDF로 즉시 내보낼 수 있습니다. Visual Studio Code를 구동하는 Monaco 위에 구축했습니다.',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: '플레이스홀더 스크린샷 - Vigil 허브 화면, 두 번째 프로젝트로 교체 예정.',
      badge: '문서 편집',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: '체험', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        '게임 Elite Dangerous 팬을 위한 프로젝트 - 자체 API로 동작하는 컴패니언 사이트입니다. 커뮤니티 도구와 인게임 로그에서 가져온 약 1억 개 항성계 데이터를 광속으로 제공합니다.',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: '플레이스홀더 스크린샷 - Vigil 전반, 세 번째 프로젝트로 교체 예정.',
      badge: '컴패니언 앱',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: '체험', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        '처음부터 끝까지 직접 만든 작은 프로그래밍 언어 - 재미로, 그리고 컴파일러가 어떻게 맞물리는지 보기 위해. OMG의 컴파일러 자체가 OMG로 작성되어 있습니다. Rust 런타임으로 네이티브 바이너리를 만들고, 같은 툴체인이 브라우저 플레이그라운드를 위해 JavaScript로 컴파일합니다.',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'OMG 플레이그라운드 - 왼쪽에 피보나치 소스, 오른쪽에 stdout.',
      badge: '프로그래밍 언어',
      stack: ['Rust', 'OMG', 'JavaScript', '바이트코드 VM'],
      links: [
        { label: '체험', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: '시트',
    sheetValue: 'A - 프로젝트',
    plates: '플레이트',
    scale: '축척',
    scaleValue: '1:1 · MMXXVI',
    plate: '플레이트',
    openPlate: '열기',
    project: '프로젝트',
    type: '유형',
    drawn: '작성',
    drawnValue: 'MMXXVI',
    sheetOf: '/',
    annexedPlates: '부속 플레이트',
    plateIndex: '플레이트 색인',
    currentlyFeatured: (title) => `${title} - 현재 표시 중`,
    feature: (title) => `${title} 표시`,
    stackOf: (title) => `${title} 스택`,
  },
}

export const contact: ContactCopy = {
  eyebrow: '연락',
  title: '편하게',
  titleAccent: '연락 주세요.',
  lede:
    '리드 엔지니어링, 시니어 IC, 컨설팅 모두 환영합니다. 가장 빠른 답장은 이메일이며, 다른 채널로도 잘 닿습니다.',
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
    invitationA: '커피 한 잔 따르세요.',
    invitationB: '한 줄 보내주세요.',
    correspondence: '서신',
    emailLabel: '이메일',
    statusText: '제안 환영 · 하루 안에 회신',
    alsoReachable: '다른 채널',
    signatureThanks: '감사합니다,',
    signatureName: 'Chris Rowles',
    signatureLocation: '영국',
    signatureYear: 'MMXXVI',
  },
}
