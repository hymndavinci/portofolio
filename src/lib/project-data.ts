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
    id: 'hymn-router',
    slug: 'hymn-router',
    title: 'Hymn Router',
    badge: 'AI · API Gateway',
    status: 'Live',
    tags: ['Next.js', 'TypeScript', 'Vercel', 'Neon Postgres', 'OpenAI API'],
    href: 'https://hymnrouter.my.id',
    github: 'https://github.com/hymndavinci/hymn-router',
    tagline: 'Free AI gateway — one OpenAI-compatible endpoint for 9 free LLM providers.',
    description: 'A free AI gateway that unifies 9 free LLM providers behind a single OpenAI-compatible endpoint, with automatic fallback, SSE streaming, per-user API keys, usage analytics, and a free daily quota.',
    overview: 'Hymn Router is a free AI gateway that routes requests across 9 free LLM providers — Groq, NVIDIA, Gemini, OpenRouter, Mistral, Kilo, LLM7, Pollinations, and OVH — through one OpenAI-compatible API with automatic fallback when a provider fails or runs out of quota.',
    problem: 'Free LLM tiers are scattered across providers with different endpoints, keys, and limits, so using them means juggling multiple integrations and handling failures by hand.',
    solution: 'Hymn Router puts one endpoint in front of all of them: sign in, create an API key, and call any model with automatic fallback, streaming, and usage tracking built in.',
    features: ['9 free LLM providers, one endpoint', 'Automatic fallback chain', 'OpenAI-compatible API + SSE streaming', 'Per-user API keys', 'Usage analytics dashboard', 'Free daily quota', 'Google, GitHub & email login', 'EN/ID interface'],
    role: 'I designed and built the gateway end to end — provider routing with fallback, the OpenAI-compatible API, auth (Google, GitHub, email), dashboard analytics, and the quota system.',
    translations: {
      en: {
        tagline: 'Free AI gateway — one OpenAI-compatible endpoint for 9 free LLM providers.',
        description: 'A free AI gateway that unifies 9 free LLM providers behind a single OpenAI-compatible endpoint, with automatic fallback, SSE streaming, per-user API keys, usage analytics, and a free daily quota.',
        overview: 'Hymn Router is a free AI gateway that routes requests across 9 free LLM providers — Groq, NVIDIA, Gemini, OpenRouter, Mistral, Kilo, LLM7, Pollinations, and OVH — through one OpenAI-compatible API with automatic fallback when a provider fails or runs out of quota.',
        problem: 'Free LLM tiers are scattered across providers with different endpoints, keys, and limits, so using them means juggling multiple integrations and handling failures by hand.',
        solution: 'Hymn Router puts one endpoint in front of all of them: sign in, create an API key, and call any model with automatic fallback, streaming, and usage tracking built in.',
        features: ['9 free LLM providers, one endpoint', 'Automatic fallback chain', 'OpenAI-compatible API + SSE streaming', 'Per-user API keys', 'Usage analytics dashboard', 'Free daily quota', 'Google, GitHub & email login', 'EN/ID interface'],
        role: 'I designed and built the gateway end to end — provider routing with fallback, the OpenAI-compatible API, auth (Google, GitHub, email), dashboard analytics, and the quota system.',
      },
      id: {
        tagline: 'AI gateway gratis — satu endpoint OpenAI-compatible untuk 9 provider LLM gratis.',
        description: 'AI gateway gratis yang menyatukan 9 provider LLM gratis di balik satu endpoint OpenAI-compatible, dengan fallback otomatis, SSE streaming, API key per pengguna, analitik pemakaian, dan kuota harian gratis.',
        overview: 'Hymn Router adalah AI gateway gratis yang me-routing request ke 9 provider LLM gratis — Groq, NVIDIA, Gemini, OpenRouter, Mistral, Kilo, LLM7, Pollinations, dan OVH — melalui satu API OpenAI-compatible dengan fallback otomatis saat provider gagal atau kuotanya habis.',
        problem: 'Tier LLM gratis tersebar di banyak provider dengan endpoint, key, dan limit yang berbeda-beda, sehingga memakainya berarti mengelola banyak integrasi sekaligus menangani kegagalan secara manual.',
        solution: 'Hymn Router menaruh satu endpoint di depan semuanya: masuk, buat API key, dan panggil model apa pun dengan fallback otomatis, streaming, dan pelacakan pemakaian bawaan.',
        features: ['9 provider LLM gratis, satu endpoint', 'Fallback chain otomatis', 'API OpenAI-compatible + SSE streaming', 'API key per pengguna', 'Dashboard analitik pemakaian', 'Kuota harian gratis', 'Login Google, GitHub & email', 'Interface EN/ID'],
        role: 'Saya merancang dan membangun gateway ini end to end — routing provider dengan fallback, API OpenAI-compatible, auth (Google, GitHub, email), analitik dashboard, dan sistem kuota.',
      },
    },
  },
  {
    id: 'kasir-pintar',
    slug: 'kasir-pintar-ai',
    title: 'KasirPintar AI',
    badge: 'AI · Finance',
    status: 'Live',
    tags: ['Next.js', 'TypeScript', 'Google Gemini AI', 'PWA', 'localStorage'],
    href: 'https://kasirpintarai.vercel.app',
    github: 'https://github.com/hymndavinci/Kasir-Pintar',
    tagline: 'Local-first finance management app for small businesses.',
    description: 'A local-first finance management app powered by Google Gemini AI. It helps small businesses track transactions, scan receipts, and generate practical insights without relying on external data storage.',
    overview: 'KasirPintar AI is a local-first finance management app designed for small businesses. It combines transaction tracking, receipt scanning, and AI-generated business insights in a lightweight workflow.',
    problem: 'Small business owners often rely on manual records, scattered notes, or spreadsheets, which makes financial tracking harder to maintain and review.',
    solution: 'KasirPintar AI keeps the workflow simple: record transactions, scan receipts, review spending patterns, and keep business data stored locally on the user device.',
    features: ['Transaction recording', 'Receipt scanning', 'AI-powered business insights', 'Local-first data storage', 'PWA support', 'Responsive dashboard'],
    role: 'I designed the interface, built the transaction flow, integrated Gemini-powered analysis, and structured the app around local-first data storage.',
    translations: {
      en: {
        tagline: 'Local-first finance management app for small businesses.',
        description: 'A local-first finance management app powered by Google Gemini AI. It helps small businesses track transactions, scan receipts, and generate practical insights without relying on external data storage.',
        overview: 'KasirPintar AI is a local-first finance management app designed for small businesses. It combines transaction tracking, receipt scanning, and AI-generated business insights in a lightweight workflow.',
        problem: 'Small business owners often rely on manual records, scattered notes, or spreadsheets, which makes financial tracking harder to maintain and review.',
        solution: 'KasirPintar AI keeps the workflow simple: record transactions, scan receipts, review spending patterns, and keep business data stored locally on the user device.',
        features: ['Transaction recording', 'Receipt scanning', 'AI-powered business insights', 'Local-first data storage', 'PWA support', 'Responsive dashboard'],
        role: 'I designed the interface, built the transaction flow, integrated Gemini-powered analysis, and structured the app around local-first data storage.',
      },
      id: {
        tagline: 'Aplikasi manajemen keuangan local-first untuk UMKM.',
        description: 'Aplikasi manajemen keuangan local-first yang ditenagai Google Gemini AI. Dibuat untuk membantu UMKM mencatat transaksi, scan struk, dan menghasilkan insight bisnis tanpa bergantung pada penyimpanan data eksternal.',
        overview: 'KasirPintar AI adalah aplikasi manajemen keuangan local-first untuk UMKM. Aplikasi ini menggabungkan pencatatan transaksi, scan struk, dan insight bisnis berbasis AI dalam workflow yang ringan.',
        problem: 'Pemilik usaha kecil sering bergantung pada catatan manual, nota terpisah, atau spreadsheet, sehingga data keuangan sulit dirawat dan ditinjau ulang.',
        solution: 'KasirPintar AI menjaga alurnya tetap sederhana: catat transaksi, scan struk, lihat pola pengeluaran, dan simpan data bisnis secara lokal di perangkat pengguna.',
        features: ['Pencatatan transaksi', 'Scan struk', 'Insight bisnis berbasis AI', 'Penyimpanan data local-first', 'Dukungan PWA', 'Dashboard responsif'],
        role: 'Saya merancang interface, membangun alur transaksi, mengintegrasikan analisis berbasis Gemini, dan menyusun aplikasi dengan pendekatan data local-first.',
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
    tagline: 'Private Discord operations dashboard for automation and system visibility.',
    description: 'A private Discord operations dashboard for account visibility, automation tools, music workflows, AI utilities, screenshot generation, and runtime monitoring in one structured panel.',
    overview: 'Hymn+ is a private Discord operations dashboard built to centralize tools that would otherwise live across commands, logs, and separate worker services.',
    problem: 'Discord-related workflows can become difficult to manage when music, AI tools, screenshots, account status, and worker processes run in different places.',
    solution: 'Hymn+ brings those workflows into one dashboard with cleaner visibility, easier control, and a more predictable operational layer.',
    features: ['Discord account status monitoring', 'Music workflow integration', 'AI utility integration', 'Screenshot utility', 'Worker tools', 'Runtime and system stats', 'Web dashboard interface'],
    role: 'I built the backend workflow, dashboard UI, command integrations, worker system, and monitoring layer for a private Discord tooling setup.',
    translations: {
      en: {
        tagline: 'Private Discord operations dashboard for automation and system visibility.',
        description: 'A private Discord operations dashboard for account visibility, automation tools, music workflows, AI utilities, screenshot generation, and runtime monitoring in one structured panel.',
        overview: 'Hymn+ is a private Discord operations dashboard built to centralize tools that would otherwise live across commands, logs, and separate worker services.',
        problem: 'Discord-related workflows can become difficult to manage when music, AI tools, screenshots, account status, and worker processes run in different places.',
        solution: 'Hymn+ brings those workflows into one dashboard with cleaner visibility, easier control, and a more predictable operational layer.',
        features: ['Discord account status monitoring', 'Music workflow integration', 'AI utility integration', 'Screenshot utility', 'Worker tools', 'Runtime and system stats', 'Web dashboard interface'],
        role: 'I built the backend workflow, dashboard UI, command integrations, worker system, and monitoring layer for a private Discord tooling setup.',
      },
      id: {
        tagline: 'Dashboard operasi Discord private untuk automasi dan visibilitas sistem.',
        description: 'Dashboard operasi Discord private untuk memantau akun, menjalankan tools automasi, music workflow, utility AI, screenshot generator, dan runtime monitoring dalam satu panel terstruktur.',
        overview: 'Hymn+ adalah dashboard operasi Discord private yang dibuat untuk menyatukan tools yang biasanya tersebar di command, log, dan worker service terpisah.',
        problem: 'Workflow Discord bisa sulit dikelola saat music, AI tools, screenshot, status akun, dan worker process berjalan di tempat yang berbeda-beda.',
        solution: 'Hymn+ menyatukan workflow tersebut ke satu dashboard dengan visibilitas lebih bersih, kontrol lebih mudah, dan layer operasional yang lebih rapi.',
        features: ['Monitoring status akun Discord', 'Integrasi music workflow', 'Integrasi utility AI', 'Screenshot utility', 'Worker tools', 'Statistik runtime dan sistem', 'Interface dashboard web'],
        role: 'Saya membangun workflow backend, UI dashboard, integrasi command, sistem worker, dan layer monitoring untuk setup tooling Discord private.',
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
    tagline: 'Streaming-style movie discovery app with a focused dark interface.',
    description: 'A streaming-style movie discovery app built with TMDB-powered content, dynamic detail pages, responsive browsing, and Indonesian subtitle source support.',
    overview: 'BintangMovies is a streaming-style movie discovery app focused on browsing films and TV shows through a clean, dark, and familiar interface.',
    problem: 'Movie discovery experiences often feel cluttered or inconsistent when users move between categories, detail pages, and watch flows.',
    solution: 'BintangMovies keeps the experience focused with clear browsing sections, dynamic detail pages, and a responsive layout built around fast discovery.',
    features: ['Movie and TV browsing', 'TMDB-powered content data', 'Dynamic detail pages', 'Multi video player support', 'Indonesian subtitle source support', 'Responsive streaming-style layout'],
    role: 'I built the browsing experience, routing structure, TMDB integration, detail pages, and responsive watch flow.',
    translations: {
      en: {
        tagline: 'Streaming-style movie discovery app with a focused dark interface.',
        description: 'A streaming-style movie discovery app built with TMDB-powered content, dynamic detail pages, responsive browsing, and Indonesian subtitle source support.',
        overview: 'BintangMovies is a streaming-style movie discovery app focused on browsing films and TV shows through a clean, dark, and familiar interface.',
        problem: 'Movie discovery experiences often feel cluttered or inconsistent when users move between categories, detail pages, and watch flows.',
        solution: 'BintangMovies keeps the experience focused with clear browsing sections, dynamic detail pages, and a responsive layout built around fast discovery.',
        features: ['Movie and TV browsing', 'TMDB-powered content data', 'Dynamic detail pages', 'Multi video player support', 'Indonesian subtitle source support', 'Responsive streaming-style layout'],
        role: 'I built the browsing experience, routing structure, TMDB integration, detail pages, and responsive watch flow.',
      },
      id: {
        tagline: 'Aplikasi discovery film bergaya streaming dengan interface dark yang fokus.',
        description: 'Aplikasi discovery film bergaya streaming yang dibangun dengan data TMDB, halaman detail dinamis, browsing responsif, dan dukungan sumber subtitle Indonesia.',
        overview: 'BintangMovies adalah aplikasi discovery film bergaya streaming yang fokus pada pengalaman browsing film dan serial TV melalui interface dark yang clean dan familiar.',
        problem: 'Pengalaman discovery film sering terasa ramai atau tidak konsisten saat pengguna berpindah dari kategori, halaman detail, sampai alur menonton.',
        solution: 'BintangMovies menjaga pengalaman tetap fokus melalui section browsing yang jelas, halaman detail dinamis, dan layout responsif yang dibuat untuk discovery cepat.',
        features: ['Browsing film dan serial TV', 'Data konten dari TMDB', 'Halaman detail dinamis', 'Dukungan multi video player', 'Dukungan sumber subtitle Indonesia', 'Layout streaming responsif'],
        role: 'Saya membangun pengalaman browsing, struktur routing, integrasi TMDB, halaman detail, dan alur watch yang responsif.',
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
