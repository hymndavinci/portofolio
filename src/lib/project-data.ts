export type ProjectLocale = 'en' | 'id'

export interface ProjectCopy {
  tagline: string
  description: string
  overview: string
  problem: string
  solution: string
  features: string[]
  role: string
}

export interface ProjectDetail extends ProjectCopy {
  id: string
  slug: string
  title: string
  badge: string
  status: 'Live' | 'Private' | 'Experimental'
  tags: string[]
  href: string | null
  github: string | null
  translations: Record<ProjectLocale, ProjectCopy>
}

export const projects: ProjectDetail[] = [
  {
    id: 'kasir-pintar',
    slug: 'kasir-pintar-ai',
    title: 'KasirPintar AI',
    badge: 'AI · Finance',
    status: 'Live',
    tags: ['Next.js', 'TypeScript', 'Google Gemini AI', 'PWA', 'localStorage'],
    href: 'https://kasirpintarai.vercel.app',
    github: 'https://github.com/hymndavinci/Kasir-Pintar',
    tagline: 'Privacy-first finance management app for small businesses.',
    description: 'A finance management app for small businesses powered by Google Gemini AI. Track transactions, scan receipts, and generate instant business insights with local-first data storage.',
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
    role: 'I handled this as a full-stack project: designing the interface, implementing the app flow, connecting AI features, and managing local-first data behavior.',
    translations: {
      en: {
        tagline: 'Privacy-first finance management app for small businesses.',
        description: 'A finance management app for small businesses powered by Google Gemini AI. Track transactions, scan receipts, and generate instant business insights with local-first data storage.',
        overview: 'KasirPintar AI is a privacy-first finance management app for small businesses. It helps users record transactions, scan receipts, and generate simple business insights using Google Gemini AI.',
        problem: 'Small business owners often track sales and expenses manually, which makes financial records messy and hard to review.',
        solution: 'The app provides a lightweight cashier and finance workflow where users can manage transactions, analyze spending, and keep data stored locally on their device.',
        features: ['Transaction recording', 'Receipt scanning', 'AI-powered business analysis', 'Local data storage', 'PWA support', 'Responsive dashboard'],
        role: 'I handled this as a full-stack project: designing the interface, implementing the app flow, connecting AI features, and managing local-first data behavior.',
      },
      id: {
        tagline: 'Aplikasi manajemen keuangan privacy-first untuk UMKM.',
        description: 'Aplikasi manajemen keuangan untuk UMKM yang ditenagai Google Gemini AI. Catat transaksi, scan struk, dan dapatkan analisa bisnis instan dengan penyimpanan data lokal.',
        overview: 'KasirPintar AI adalah aplikasi manajemen keuangan privacy-first untuk UMKM. Aplikasi ini membantu pengguna mencatat transaksi, memindai struk, dan membuat insight bisnis sederhana dengan Google Gemini AI.',
        problem: 'Pemilik usaha kecil sering mencatat penjualan dan pengeluaran secara manual, sehingga data keuangan mudah berantakan dan sulit ditinjau ulang.',
        solution: 'Aplikasi ini menyediakan alur kasir dan keuangan yang ringan untuk mengelola transaksi, menganalisis pengeluaran, dan menyimpan data secara lokal di perangkat pengguna.',
        features: ['Pencatatan transaksi', 'Pemindaian struk', 'Analisa bisnis berbasis AI', 'Penyimpanan data lokal', 'Dukungan PWA', 'Dashboard responsif'],
        role: 'Saya mengerjakan ini sebagai project full-stack: merancang interface, membangun alur aplikasi, menghubungkan fitur AI, dan mengatur perilaku data local-first.',
      },
    },
  },
  {
    id: 'hymn-plus',
    slug: 'hymn-plus',
    title: 'Hymn+',
    badge: 'Dashboard · Automation',
    status: 'Private',
    tags: ['Node.js', 'Express', 'EJS', 'Lavalink', 'NVIDIA NIM'],
    href: null,
    github: null,
    tagline: 'Personal Discord workflow dashboard for tools, automation, and system visibility.',
    description: 'A personal dashboard for managing Discord workflows, account status, music systems, AI chat, screenshot utilities, and worker tools in one lightweight panel.',
    overview: 'Hymn+ is a personal Discord workflow dashboard built to manage account status, music systems, AI chat, screenshot tools, and worker utilities in one structured panel.',
    problem: 'Managing multiple Discord-related tools from commands and server logs can get messy, especially when music, AI, screenshot generation, and worker services run separately.',
    solution: 'Hymn+ brings those tools into a centralized dashboard with cleaner visibility, easier control, and a more organized workflow.',
    features: ['Discord account status monitoring', 'Music system integration', 'AI chat integration', 'Screenshot utility', 'Worker tools', 'Runtime and system stats', 'Web dashboard interface'],
    role: 'I handled this as a full-stack project: building the backend structure, dashboard interface, command integrations, worker flow, and custom UI system.',
    translations: {
      en: {
        tagline: 'Personal Discord workflow dashboard for tools, automation, and system visibility.',
        description: 'A personal dashboard for managing Discord workflows, account status, music systems, AI chat, screenshot utilities, and worker tools in one lightweight panel.',
        overview: 'Hymn+ is a personal Discord workflow dashboard built to manage account status, music systems, AI chat, screenshot tools, and worker utilities in one structured panel.',
        problem: 'Managing multiple Discord-related tools from commands and server logs can get messy, especially when music, AI, screenshot generation, and worker services run separately.',
        solution: 'Hymn+ brings those tools into a centralized dashboard with cleaner visibility, easier control, and a more organized workflow.',
        features: ['Discord account status monitoring', 'Music system integration', 'AI chat integration', 'Screenshot utility', 'Worker tools', 'Runtime and system stats', 'Web dashboard interface'],
        role: 'I handled this as a full-stack project: building the backend structure, dashboard interface, command integrations, worker flow, and custom UI system.',
      },
      id: {
        tagline: 'Dashboard workflow Discord personal untuk tools, automasi, dan visibilitas sistem.',
        description: 'Dashboard personal untuk mengelola workflow Discord, status akun, music system, AI chat, screenshot utility, dan worker tools dalam satu panel ringan.',
        overview: 'Hymn+ adalah dashboard workflow Discord personal untuk mengelola status akun, music system, AI chat, screenshot tools, dan worker utilities dalam satu panel terstruktur.',
        problem: 'Mengelola banyak tools Discord dari command dan log server bisa berantakan, terutama saat music, AI, screenshot generator, dan worker service berjalan terpisah.',
        solution: 'Hymn+ menyatukan tools tersebut ke dashboard pusat dengan visibilitas lebih bersih, kontrol lebih mudah, dan workflow yang lebih rapi.',
        features: ['Monitoring status akun Discord', 'Integrasi music system', 'Integrasi AI chat', 'Screenshot utility', 'Worker tools', 'Statistik runtime dan sistem', 'Interface dashboard web'],
        role: 'Saya mengerjakan ini sebagai project full-stack: membangun struktur backend, interface dashboard, integrasi command, alur worker, dan sistem UI custom.',
      },
    },
  },
  {
    id: 'bintang-movies',
    slug: 'bintang-movies',
    title: 'BintangMovies',
    badge: 'Streaming · Entertainment',
    status: 'Live',
    tags: ['React', 'TypeScript', 'Vite', 'TMDB API', 'React Router'],
    href: 'https://hymndavinci.web.id',
    github: null,
    tagline: 'Streaming-style movie discovery web app with a clean dark interface.',
    description: 'A streaming-style movie discovery app for browsing films and TV shows with TMDB-powered data, dynamic detail pages, and Indonesian subtitle source support.',
    overview: 'BintangMovies is a streaming-style web app for browsing movies and TV shows with a clean Netflix-inspired interface.',
    problem: 'Movie discovery websites can feel cluttered, slow, or visually inconsistent, especially when browsing across categories and detail pages.',
    solution: 'BintangMovies provides a dark, focused interface for discovering movies, checking details, and accessing watch pages with Indonesian subtitle support.',
    features: ['Movie and TV browsing', 'TMDB-powered content data', 'Dynamic detail pages', 'Multi video player support', 'Indonesian subtitle source support', 'Responsive streaming-style layout'],
    role: 'I handled this as a full-stack project: building the interface, routing structure, movie data integration, detail pages, and responsive watch flow.',
    translations: {
      en: {
        tagline: 'Streaming-style movie discovery web app with a clean dark interface.',
        description: 'A streaming-style movie discovery app for browsing films and TV shows with TMDB-powered data, dynamic detail pages, and Indonesian subtitle source support.',
        overview: 'BintangMovies is a streaming-style web app for browsing movies and TV shows with a clean Netflix-inspired interface.',
        problem: 'Movie discovery websites can feel cluttered, slow, or visually inconsistent, especially when browsing across categories and detail pages.',
        solution: 'BintangMovies provides a dark, focused interface for discovering movies, checking details, and accessing watch pages with Indonesian subtitle support.',
        features: ['Movie and TV browsing', 'TMDB-powered content data', 'Dynamic detail pages', 'Multi video player support', 'Indonesian subtitle source support', 'Responsive streaming-style layout'],
        role: 'I handled this as a full-stack project: building the interface, routing structure, movie data integration, detail pages, and responsive watch flow.',
      },
      id: {
        tagline: 'Web app discovery film bergaya streaming dengan interface dark yang clean.',
        description: 'Aplikasi discovery film bergaya streaming untuk browsing film dan serial TV dengan data dari TMDB, halaman detail dinamis, dan dukungan sumber subtitle Indonesia.',
        overview: 'BintangMovies adalah web app bergaya streaming untuk browsing film dan serial TV dengan interface clean yang terinspirasi dari platform streaming modern.',
        problem: 'Website discovery film sering terasa ramai, lambat, atau tidak konsisten secara visual, terutama saat berpindah kategori dan halaman detail.',
        solution: 'BintangMovies menyediakan interface dark yang fokus untuk menemukan film, melihat detail, dan mengakses halaman watch dengan dukungan subtitle Indonesia.',
        features: ['Browsing film dan serial TV', 'Data konten dari TMDB', 'Halaman detail dinamis', 'Dukungan multi video player', 'Dukungan sumber subtitle Indonesia', 'Layout streaming responsif'],
        role: 'Saya mengerjakan ini sebagai project full-stack: membangun interface, struktur routing, integrasi data film, halaman detail, dan alur watch yang responsif.',
      },
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectCopy(project: ProjectDetail, locale: ProjectLocale = 'en') {
  return project.translations[locale] || project.translations.en
}
