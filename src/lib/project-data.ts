export interface ProjectDetail {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  badge: string
  status: 'Live' | 'Private' | 'Experimental'
  tags: string[]
  href: string | null
  github: string | null
  overview: string
  problem: string
  solution: string
  features: string[]
  role: string
}

export const projects: ProjectDetail[] = [
  {
    id: 'kasir-pintar',
    slug: 'kasir-pintar-ai',
    title: 'KasirPintar AI',
    tagline: 'Privacy-first finance management app for small businesses.',
    description: 'Aplikasi manajemen keuangan untuk UMKM yang ditenagai Google Gemini AI. Catat transaksi, scan struk, dan dapatkan analisa bisnis secara instan. Semua data tersimpan di perangkat — 100% privacy-first.',
    badge: 'AI · Finance',
    status: 'Live',
    tags: ['Next.js', 'TypeScript', 'Google Gemini AI', 'PWA', 'localStorage'],
    href: 'https://kasirpintarai.vercel.app',
    github: 'https://github.com/hymndavinci/Kasir-Pintar',
    overview: 'KasirPintar AI is a privacy-first finance management app for small businesses. It helps users record transactions, scan receipts, and generate simple business insights using Google Gemini AI.',
    problem: 'Small business owners often track sales and expenses manually, which makes financial records messy and hard to review.',
    solution: 'The app provides a lightweight cashier and finance workflow where users can manage transactions, analyze spending, and keep data stored locally on their device.',
    features: [
      'Transaction recording',
      'Receipt scanning',
      'AI-powered business analysis',
      'Local data storage',
      'PWA support',
      'Responsive dashboard',
    ],
    role: 'I designed and built the frontend, implemented the app flow, connected AI features, and handled local-first data behavior.',
  },
  {
    id: 'hymn-plus',
    slug: 'hymn-plus',
    title: 'Hymn+',
    tagline: 'Personal Discord workflow dashboard for tools, automation, and system visibility.',
    description: 'Dashboard personal untuk mengelola workflow Discord, status akun, music system, AI chat, screenshot utility, dan worker tools dalam satu panel yang ringan dan terstruktur.',
    badge: 'Dashboard · Automation',
    status: 'Private',
    tags: ['Node.js', 'Express', 'EJS', 'Lavalink', 'NVIDIA NIM'],
    href: null,
    github: null,
    overview: 'Hymn+ is a personal Discord workflow dashboard built to manage account status, music systems, AI chat, screenshot tools, and worker utilities in one structured panel.',
    problem: 'Managing multiple Discord-related tools from commands and server logs can get messy, especially when music, AI, screenshot generation, and worker services run separately.',
    solution: 'Hymn+ brings those tools into a centralized dashboard with cleaner visibility, easier control, and a more organized workflow.',
    features: [
      'Discord account status monitoring',
      'Music system integration',
      'AI chat integration',
      'Screenshot utility',
      'Worker tools',
      'Runtime and system stats',
      'Web dashboard interface',
    ],
    role: 'I built the backend structure, dashboard interface, command integrations, worker flow, and custom UI system.',
  },
  {
    id: 'bintang-movies',
    slug: 'bintang-movies',
    title: 'BintangMovies',
    tagline: 'Streaming-style movie discovery web app with a clean dark interface.',
    description: 'Netflix-style streaming web app untuk browsing dan nonton film & serial TV dengan subtitle Indonesia. Didukung TMDB API, multi video player, dan fitur Film Sub Indo via IdlixAPI.',
    badge: 'Streaming · Entertainment',
    status: 'Live',
    tags: ['React', 'TypeScript', 'Vite', 'TMDB API', 'React Router'],
    href: 'https://hymndavinci.web.id',
    github: null,
    overview: 'BintangMovies is a streaming-style web app for browsing movies and TV shows with a clean Netflix-inspired interface.',
    problem: 'Movie discovery websites can feel cluttered, slow, or visually inconsistent, especially when browsing across categories and detail pages.',
    solution: 'BintangMovies provides a dark, focused interface for discovering movies, checking details, and accessing watch pages with Indonesian subtitle support.',
    features: [
      'Movie and TV browsing',
      'TMDB-powered content data',
      'Dynamic detail pages',
      'Multi video player support',
      'Indonesian subtitle source support',
      'Responsive streaming-style layout',
    ],
    role: 'I built the frontend interface, routing structure, movie data integration, detail pages, and responsive layout.',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
