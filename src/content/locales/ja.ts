/* Japanese dictionary. See en.ts for structure. */

import type { NavLink } from '../../components/Nav'
import type { HeroCopy } from '../hero'
import type { AboutCopy } from '../about'
import type { SkillsCopy } from '../skills'
import type { ExperienceCopy } from '../experience'
import type { ProjectsCopy } from '../projects'
import type { ContactCopy } from '../contact'

export const navLinks: NavLink[] = [
  { href: '#top', label: 'ホーム', spy: 'top' },
  { href: '#about', label: 'プロフィール', spy: 'about' },
  { href: '#skills', label: 'スキル', spy: 'skills' },
  { href: '#experience', label: '経歴', spy: 'experience' },
  { href: '#work', label: '実績', spy: 'work' },
  { href: '#contact', label: 'コンタクト', spy: 'contact' },
]

export const hero: HeroCopy = {
  eyebrow: '対応可能 · LEAD/SENIOR ロール&コンサルティング',
  title: '12年以上、つくり続ける',
  accent: '美しいウェブアプリ。',
  lede:
    '12年以上のキャリアを持つリードデベロッパー。多様な業界でソフトウェアおよびウェブアプリの構築・テスト・運用保守を手掛けてきました。',
  ctas: [
    { label: '実績を見る', href: '#work', variant: 'primary' },
    { label: 'お問い合わせ', href: '#contact', variant: 'default' },
  ],
  meta: [
    { label: '年数', value: '12+' },
    { label: '役割', value: 'リードデベロッパー' },
    { label: 'スタック', value: 'マルチ言語 · ウェブ中心' },
  ],
}

export const about: AboutCopy = {
  eyebrow: 'プロフィール',
  title: '誰にでも届く',
  titleAccent: 'ソフトウェアを。',
  lede: 'システムを最初から最後まで自分で持ちきれる。',
  paragraphs: [
    '複雑なレガシーシステムを引き継ぎ、現代の標準まで戻したうえで、その上にクリーンでテスト済みのコードを届けてきた実績があります。',
    '仕事の大半はフロントエンド、バックエンド、インフラまでフルスタックで手を動かすこと。残りはレビュー、メンタリング、アーキテクチャ判断を通じてチームを率いることです。',
    '空き時間にもプロダクトを公開しています。',
  ],
  facts: [
    { label: '拠点', value: 'イギリス' },
    { label: '役割', value: 'リードデベロッパー' },
    { label: '年数', value: '12+' },
    { label: '対応', value: 'Lead · Senior · コンサルティング' },
  ],
  coordinates: '51.5074° N · 0.1278° W',
  ui: {
    specifications: '仕様',
    signatureBrand: 'Atlas',
    signatureYear: 'MMXXVI',
  },
}

export const skills: SkillsCopy = {
  eyebrow: 'スキル',
  title: 'スタックと',
  titleAccent: 'ツール。',
  lede: '必要に迫られて多言語、経験から積み上げた持論。',
  groups: [
    {
      key: 'frontend',
      name: 'フロントエンド',
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
      name: 'バックエンド',
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
      name: 'データ',
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
      name: 'インフラ&Ops',
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
      name: 'ツール',
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
  eyebrow: '経歴',
  title: '積み重ねた',
  titleAccent: '経験。',
  lede: '推薦状つきの詳しい版が必要であればご連絡ください。',
  entries: [
    {
      role: 'リードデベロッパー',
      company: 'SentryBay Ltd',
      period: '2022 - 現在',
      sectors: ['SaaS', 'サイバーセキュリティ', '防衛', 'NDA'],
      summary:
        'コンシューマー向けプラットフォームの開発リード。アーキテクチャ判断を担い、複数チームを並行運営しつつ、レガシーサービスを標準に戻しながら新規プロダクトをリリース。',
      points: [
        '現在、ウェブプラットフォームと各種サービスの開発をリード。',
        '生産性向上のため、AI支援ワークフローの導入を主導。',
        '会社の成長を大きく支えた主力プロダクト Armored Client をリリース。',
      ],
    },
    {
      role: 'プリンシパルデベロッパー',
      company: 'Go Deploy Labs',
      period: '2020 - 2022',
      sectors: ['LMS', 'バーチャルラボ', 'EC', 'MCT'],
      summary:
        'プロダクト全体を支えるフルスタックエンジニア。MCT などの認定コース向けバーチャルラボを学習者・メンター双方が運用できるようにした。Go Deploy 各プロダクトのプリンシパル。',
      points: [
        'バーチャルラボの操作 UI を再設計し、ユーザー体験を改善。',
        'Guacamole 経由で RDP を統合し、ラボ利用とメンターサポートをシームレスに。',
        'Vue 3 への移行を推進し、フロントエンドの性能と保守性を向上。',
      ],
    },
    {
      role: 'ファウンダー',
      company: 'Versyx Digital',
      period: '2019 - 現在',
      sectors: ['エージェンシー', 'コンサルティング', '開発', 'デザイン'],
      summary:
        'コンサルティング、インフラ、フロントエンドに特化したカスタム開発スタジオ。各業界のクライアントを支援するとともに、オープンソースの開発・貢献も行なう。',
      points: [
        'クライアントのウェブアプリを近代化し、性能と拡張性を向上。',
        'ウェブアーキテクチャと開発のベストプラクティスについて戦略的にコンサルティング。',
        'コミュニティが使うツールやライブラリを改善するオープンソース貢献。',
      ],
    },
  ],
  ui: {
    exhibits: '主な実績',
    sectors: '業種',
  },
}

export const projects: ProjectsCopy = {
  eyebrow: '主な作品',
  title: 'これまでの',
  titleAccent: 'プロジェクト。',
  lede:
    '本番系の多くは NDA 下にあり、ここでは公開可能なものを掲載しています。それ以外はお問い合わせください。',
  projects: [
    {
      title: 'Vigil',
      summary:
        'サーバ向けの軽量・リアルタイム監視ダッシュボード。WebSocket でメトリクスをライブ配信--ゲージ、グラフ、サービスプローブまで--洗練された UI を Vigil Collector の前段に配置できます。',
      url: 'https://status.edcs.app',
      image: '/projects/vigil.webp',
      alt: 'Vigil ダッシュボード - CPU・メモリ・ディスク・ネットワークのグラフをライブ表示。',
      badge: 'システム監視',
      stack: ['Python', 'Tornado', 'FastAPI', 'TypeScript', 'Vue 3', 'D3', 'WebSocket'],
      links: [
        { label: '試す', href: 'https://status.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/vigil' },
      ],
    },
    {
      title: 'MKEditor',
      summary:
        'シンプル・高速・無料のオンライン Markdown エディタ。ライブプレビューつきで、HTML や PDF にすぐにエクスポートできます。Visual Studio Code を支える Monaco 上に構築。',
      url: 'https://versyxdigital.github.io/mkeditor',
      image: '/projects/mkeditor.webp',
      alt: 'プレースホルダー画像 - Vigil のハブ表示、二つ目のプロジェクトに差し替え予定。',
      stack: ['TypeScript', 'Monaco (VS Code)', 'Bootstrap', 'Electron', 'Webpack'],
      links: [
        { label: '試す', href: 'https://versyxdigital.github.io/mkeditor' },
        { label: 'GitHub', href: 'https://github.com/versyxdigital/mkeditor' },
      ],
    },
    {
      title: 'ED:CS Terminal',
      summary:
        'ゲーム『Elite Dangerous』ファン向けのプロジェクト。独自 API を備えたコンパニオンサイトで、約1億の恒星系データを光速で配信。データはコミュニティツールとゲーム内ログに由来。',
      url: 'https://edcs.app',
      image: '/projects/edcs.webp',
      alt: 'プレースホルダー画像 - Vigil の概要、三つ目のプロジェクトに差し替え予定。',
      stack: ['TypeScript', 'Next.js', 'Tailwind', 'Laravel', 'Redis', 'MySQL'],
      links: [
        { label: '試す', href: 'https://edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/edcs-api' },
      ],
    },
    {
      title: 'OMG',
      summary:
        'ゼロから作った小さなプログラミング言語--楽しみのために、そしてコンパイラがどう組み上がるかを見るために。OMG のコンパイラ自体が OMG で書かれています。Rust ランタイムでネイティブバイナリを生成し、同じツールチェーンがブラウザ用に JavaScript へとコンパイルします。',
      url: 'https://omg-playground.edcs.app',
      image: '/projects/omg-playground.webp',
      alt: 'OMG プレイグラウンド - 左にフィボナッチのソース、右に標準出力。',
      badge: 'プログラミング言語',
      stack: ['Rust', 'OMG', 'JavaScript', 'バイトコード VM'],
      links: [
        { label: '試す', href: 'https://omg-playground.edcs.app' },
        { label: 'GitHub', href: 'https://github.com/sentrychris/omglang' },
      ],
    },
  ],
  ui: {
    sheet: 'シート',
    sheetValue: 'A - プロジェクト',
    plates: 'プレート',
    scale: '縮尺',
    scaleValue: '1:1 · MMXXVI',
    plate: 'プレート',
    openPlate: '開く',
    project: 'プロジェクト',
    type: 'タイプ',
    drawn: '作成',
    drawnValue: 'MMXXVI',
    sheetOf: '/',
    annexedPlates: '別添プレート',
    plateIndex: 'プレート索引',
    currentlyFeatured: (title) => `${title} - 現在表示中`,
    feature: (title) => `${title} を表示`,
    stackOf: (title) => `${title} のスタック`,
  },
}

export const contact: ContactCopy = {
  eyebrow: 'コンタクト',
  title: 'お気軽に',
  titleAccent: 'ご連絡を。',
  lede:
    'リードエンジニア、シニア IC、コンサルティングの相談を歓迎します。返信が一番早いのはメール。他のチャネルからでも届きます。',
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
    invitationA: 'コーヒーを淹れて。',
    invitationB: '一行送ってください。',
    correspondence: '通信',
    emailLabel: 'メール',
    statusText: '案件相談歓迎 · 1日以内に返信',
    alsoReachable: '他の連絡先',
    signatureThanks: 'ありがとう、',
    signatureName: 'Chris Rowles',
    signatureLocation: 'イギリス',
    signatureYear: 'MMXXVI',
  },
}
