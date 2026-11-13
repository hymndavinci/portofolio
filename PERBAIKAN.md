# Perbaikan Portfolio — Catatan Perubahan

Semua perbaikan di bawah ini dibuat berdasarkan review source code
`portofolio-main.zip`. Yang berhubungan dengan env sengaja TIDAK diubah
atas permintaan pemilik (source code tidak akan disebar).

## Keamanan

- `src/app/page.tsx` — Menghapus `https.request` dengan
  `rejectUnauthorized: false` (mematikan verifikasi TLS). Fetch avatar
  Discord sekarang memakai `fetch()` + cache 1 jam (`revalidate: 3600`).
  `export const dynamic = 'force-dynamic'` juga dicopot, jadi homepage
  bisa static (ISR) lagi.
- `src/app/api/portfolio-rating/route.ts` — Endpoint GET tidak lagi
  mengembalikan `email` user ke publik. Pencocokan rating milik sendiri
  sekarang memakai user ID, bukan email.

## Build & database

- `package.json` — Nama package diubah dari `nextjs_tailwind_shadcn_ts`
  menjadi `hymn-portfolio`. Script `build` tetap memakai
  `prisma db push`: proyek ini belum punya folder `prisma/migrations`,
  jadi `prisma migrate deploy` gagal dengan P3005 di Vercel (database
  sudah berisi tabel tapi tidak ada riwayat migrasi). Kalau mau pindah ke
  migrations, baseline dulu dari schema yang ada, baru ganti build
  script ke `migrate deploy`.
- `prisma/schema.prisma` — Model `Post` yang tidak dipakai dihapus.
  Wajib jalankan migrasi setelah update (lihat "Langkah setelah ekstrak").

## TypeScript & ESLint (diaktifkan lagi)

- `next.config.ts` — `typescript.ignoreBuildErrors` dihapus,
  `reactStrictMode` diubah ke `true`.
- `eslint.config.mjs` — Rule penting dinyalakan lagi: `no-explicit-any`,
  `no-unused-vars`, `ban-ts-comment`, `prefer-as-const`, `prefer-const`,
  `no-debugger`, `no-unreachable`, dll. `exhaustive-deps`,
  `set-state-in-effect`, dan `no-non-null-assertion` disetel `warn`
  (terlihat, tapi tidak memblokir lint). Override ditambahkan untuk
  `fetch-icons.js` (script Node CommonJS, `require()` disengaja).

## Bug yang ketemu saat typecheck dinyalakan lagi

- `src/components/portfolio/skills.tsx` — Prop `kicker="Skills"` tidak
  ada di `SectionHeading` (prop yang benar adalah `tag`). Akibatnya label
  "Skills" tidak pernah tampil. Sudah diperbaiki ke `tag="Skills"`.
- `src/hooks/use-toast.ts` — Konstanta `actionTypes` hanya dipakai sebagai
  type. Diganti union type literal langsung (perubahan type-only, tanpa
  efek runtime).
- `src/app/api/views/route.ts` — Variabel `error` di `catch` tidak
  dipakai, diubah ke `catch {`.
- `src/components/portfolio/discord-presence.tsx` — `let afterHash`
  diubah ke `const`, dan 2 komentar `eslint-disable` yang sudah tidak
  berguna dihapus.

## Bersih-bersih

- `package.json` — 15 dependency yang tidak diimpor di mana pun dihapus:
  `@dnd-kit/*` (3), `@hookform/resolvers`, `@mdxeditor/editor`,
  `@reactuses/core`, `@tanstack/react-query`, `@tanstack/react-table`,
  `next-intl`, `react-markdown`, `react-syntax-highlighter`, `uuid`,
  `z-ai-web-dev-sdk`, `zod`, `zustand`. `package-lock.json` ikut
  diperbarui. Sengaja dipertahankan: `date-fns` + `react-day-picker`
  (peer dep komponen calendar), `sharp` (dipakai Next.js untuk optimasi
  gambar), `react-hook-form` (dipakai komponen form).
- Dihapus: `src/components/blog/blog-actions.tsx` (duplikat yang tidak
  pernah diimpor) dan `src/app/api/route.ts` (endpoint "Hello, world!"
  sisa template).

## Yang TIDAK diubah (sesuai permintaan)

- Discord user ID yang di-hardcode di `src/app/page.tsx`.
- Fallback email admin di `src/app/api/portfolio-rating/route.ts`.
- Screenshot proyek Hymn+ dan BintangMovies (butuh aset dari pemilik).

## Langkah setelah ekstrak

```bash
npm install
npm run lint
npm run build
```

Tidak ada langkah migrasi: `db push` di dalam build script sudah
menyelaraskan database dengan schema, termasuk menghapus tabel `Post`
yang tidak terpakai.

## Catatan verifikasi

- `npm run lint`: lolos, 0 error, 6 warning yang disengaja
  (4 set-state-in-effect + 2 non-null assertion).
- `npx tsc --noEmit`: bersih, kecuali 1 error di `src/lib/db.ts`
  (`PrismaClient` tidak ditemukan) karena `prisma generate` tidak bisa
  berjalan di environment pengecekan ini — download binary Prisma engine
  selalu gagal (ECONNRESET). Error ini akan hilang sendiri setelah
  `npm install` di mesin sendiri, karena postinstall Prisma menjalankan
  `generate` secara otomatis.
