# Hymn Portfolio

Personal portfolio website for Muhammad Bintang Kurniawan. Built to showcase projects, writing, experience, skills, and contact links in a clean modern interface.

## Live Site

https://hymndavinci.my.id

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma
- Framer Motion
- Vercel

## Features

- Responsive portfolio layout
- Light and dark theme
- Project detail pages
- Blog/journal pages
- Discord presence integration
- GitHub stats section
- Smooth section reveal animations
- Clean footer tech marquee

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Environment

Create a `.env` file if the database or Prisma setup is needed.

```env
DATABASE_URL="your-database-url"
```

## Database

PostgreSQL via Prisma. The schema is synced with `prisma db push` — this
project has **no migration history** (`prisma/migrations` does not exist).

> Do not run `prisma migrate deploy` or `prisma migrate dev`: without a
> baseline migration they fail (P3005) and break the build. The build
> script already runs `prisma generate && prisma db push && next build`.

## Project Structure

```txt
src/app                  App routes
src/components/portfolio Portfolio UI components
src/hooks                Client hooks
src/lib                  Data and utilities
prisma                   Prisma schema
public                   Static assets
```

## Author

Muhammad Bintang Kurniawan  
Portfolio: https://hymndavinci.my.id
