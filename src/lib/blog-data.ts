export interface BlogPost {
  id: string
  title: string
  slug: string
  tagline: string
  date: string
  views: number
  author: string
  category: string
  color: string
  content: string
  relatedSlugs?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '01 — Building Interfaces That Feel Useful',
    slug: 'building-interfaces-that-feel-useful',
    tagline: 'A practical note on designing web interfaces that look clean, stay readable, and actually help users move faster.',
    date: 'May 19, 2026',
    views: 50,
    author: 'Bintang',
    category: 'Interface',
    color: 'from-blue-500/20 to-cyan-900/20',
    relatedSlugs: ['turning-dashboards-into-control-rooms', 'polishing-projects-before-deploy'],
    content: `A good interface is not just a page that looks modern. It is a system that helps users understand where they are, what matters, and what they can do next.

That is the main thing I try to keep in mind when building portfolio sections, dashboards, and product screens. Visual style matters, but structure matters more. If the layout is confusing, no amount of gradient, shadow, or animation can save it.

The first layer is hierarchy. A page should clearly separate primary information from supporting details. Titles need to be obvious. Descriptions need to explain the point without becoming a wall of text. Buttons should look clickable without fighting for attention.

The second layer is consistency. Spacing, border radius, text color, hover states, and card behavior should feel like they belong to the same system. When every section uses a different visual language, the page starts to feel patched together instead of designed.

The third layer is restraint. It is easy to add more effects, more badges, more decorations, and more motion. The harder part is knowing which details make the interface better and which ones only make it louder.

For me, a useful interface should feel clean without becoming empty. It should have enough detail to feel intentional, but not so much that users need to decode it.

That is the balance I keep chasing: design that looks sharp, works clearly, and stays usable when the project grows.`,
  },
  {
    id: '2',
    title: '02 — Turning Dashboards Into Control Rooms',
    slug: 'turning-dashboards-into-control-rooms',
    tagline: 'How I think about dashboards: not as decoration, but as a control layer for tools, automation, and system visibility.',
    date: 'May 20, 2026',
    views: 41,
    author: 'Bintang',
    category: 'Dashboard',
    color: 'from-violet-500/20 to-indigo-900/20',
    relatedSlugs: ['building-interfaces-that-feel-useful', 'polishing-projects-before-deploy'],
    content: `A dashboard should not only display data. A good dashboard should reduce friction.

When I build dashboards, I think of them as control rooms. They should help users monitor status, understand what is running, and take action without digging through logs, commands, or scattered tools.

That mindset changes the design. A dashboard does not need to show everything at once. It needs to show the right information at the right level of detail. Status belongs at the top. Actions should be close to the thing they affect. Logs and secondary data should be available, but not visually louder than the main workflow.

Automation makes this even more important. If a tool runs workers, API calls, music systems, AI utilities, or background jobs, the interface needs to make the state visible. Users should know whether something is active, failed, delayed, idle, or waiting.

The visual design also has to support that purpose. Cards are useful when they group related actions. Badges are useful when they communicate state. Hover effects are useful when they make controls feel responsive. But none of those details matter if the dashboard does not answer the basic question: what is happening right now?

A control room is not about making the screen busy. It is about making the system understandable.

That is why I like dashboards: they sit between interface design and engineering logic. They are visual, but they are also operational. They need to look good, but more importantly, they need to make complex tools easier to control.`,
  },
  {
    id: '3',
    title: '03 — Polishing Projects Before Deploy',
    slug: 'polishing-projects-before-deploy',
    tagline: 'A final-pass checklist for making a project feel finished: copy, contrast, metadata, responsiveness, and small interaction details.',
    date: 'May 21, 2026',
    views: 0,
    author: 'Bintang',
    category: 'Workflow',
    color: 'from-emerald-500/20 to-teal-900/20',
    relatedSlugs: ['building-interfaces-that-feel-useful', 'turning-dashboards-into-control-rooms'],
    content: `The last ten percent of a project usually decides whether it feels finished or unfinished.

A feature can work perfectly and still feel rough if the copy is vague, the contrast is weak, the metadata is generic, or the mobile layout breaks under real content. That is why I like doing a polish pass before calling a project done.

The first thing I check is language. Titles should explain the project quickly. Descriptions should be specific enough to tell the difference between one project and another. Repeated phrases make a portfolio feel generated, so each project needs its own angle.

The second thing is contrast. Light mode and dark mode both need to be readable. Muted text should be subtle, not invisible. Buttons should look like buttons. Forms should still be clear when disabled, focused, or hovered.

The third thing is interaction. Hover states, active states, loading states, and empty states make a project feel alive. They do not need to be dramatic. They just need to confirm that the interface is responding.

The fourth thing is deployment detail. Metadata, Open Graph previews, favicon, environment variables, and production URLs are small pieces, but they shape the first impression before someone even opens the site.

Polish is not about adding more decoration. It is about removing the small frictions that make a project feel unfinished.

A project feels complete when the design, copy, behavior, and deployment all point in the same direction. That is the standard I try to reach before shipping.`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedSlugs) return []
  return post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter(Boolean) as BlogPost[]
}
