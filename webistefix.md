TenserLabs Website Redesign — UI/UX Direction Prompt

Brand Identity & Tone
TenserLabs is a modern engineering consultancy. The website should feel: premium but approachable, technically credible without being cold, and visually distinctive — not another generic dark SaaS template. Think "studio meets lab" — creative precision.
Design System Foundations
Typography: Use a modern geometric sans-serif for headings (Inter, Satoshi, or General Sans) paired with a clean body font. Headings should be bold and large — let whitespace do the talking. Body text at 16–18px minimum for readability.
Color Palette: Start from a light/white base with one strong accent color (electric blue, deep violet, or warm coral — pick one, commit). Use neutrals (slate grays) for text. Dark mode should be a true inversion, not just a black background. Avoid gradients unless they're subtle and purposeful.
Spacing & Layout: Generous padding everywhere. Sections should breathe. Use a consistent 8px grid system. Max content width around 1200–1280px. Asymmetric layouts where appropriate — not every section needs to be centered.
Motion & Micro-interactions: Scroll-triggered fade-ins (staggered, not all at once). Smooth hover states on cards and buttons with subtle scale or shadow shifts. Page transitions if using Next.js (framer-motion). Parallax only if tasteful — one or two sections max. Cursor effects optional but impactful if done right.

Page-by-Page UI Direction
1. Home
Hero: Full-viewport height. Large headline (2–3 words max per line), a one-line subheadline, and a single CTA button. Background can be a subtle animated gradient, a minimal 3D element (Three.js or Spline embed), or a clean abstract illustration — no stock photos. Consider a text-reveal animation on load.
Stats Bar: Horizontal strip below the hero. Animated count-up numbers on scroll. Use icons or minimal illustrations next to each stat. Keep it to 4 stats max.
Client Marquee: Infinite horizontal scroll of grayscale client logos that colorize on hover. Subtle, not distracting. Sits between sections as a trust signal.
Services Snapshot: Grid of 4–5 cards. Each card has an icon/illustration, service name, one-line description, and a subtle arrow link. Cards should have hover elevation or border glow. Don't overcrowd — link to the full Services page.
Featured Projects: 2–3 project cards in a bento grid or staggered layout. Each card shows a project thumbnail/mockup, project name, tags (React, Flutter, etc.), and a "View Case Study" link. Hover effect reveals a brief description overlay.
Testimonials: Carousel or stacked cards. Show client photo (or company logo), quote, name, and title. Keep quotes short. Auto-advance with manual navigation.
CTA Banner: Full-width section with a bold headline ("Let's build something remarkable"), a subline, and a CTA button. Can have a subtle background pattern or gradient.
2. About
Split layout — story text on one side, a team photo or abstract visual on the other. Timeline or milestone section showing company journey. Values section with icon + short description cards. Keep it human and concise.
3. Services
Each service gets a detailed card or expandable section. Use tabs or a vertical accordion if listing many services. Each service block should have: icon/illustration, headline, 3–4 bullet capabilities, a relevant mini case study or metric, and a CTA. Consider a comparison table or "how we work" process flow at the bottom.
4. Projects / Case Studies
Filterable grid (by industry, tech stack, or service type). Each project card: thumbnail, title, tags, one-line result. Clicking opens a full case study page with: challenge, approach, solution, results (with metrics), and tech stack used. Use real screenshots and mockups — no placeholders.
5. Team
Grid of team member cards. Photo, name, role, one fun fact or one-liner. Hover reveals LinkedIn link or short bio. Keep it warm and personality-driven. Optional: a group photo or behind-the-scenes section.
6. Clients
Logo grid with hover tooltips showing company name and what you built for them. Optional: short testimonial snippets tied to each client. Categorize by industry if the list is large.
7. Blog
Clean card-based layout. Each post card: featured image, category tag, title, date, reading time, and a 1-line excerpt. Sidebar or top filter by category. Individual blog post pages should have excellent typography — proper line height, max-width for readability (650–700px), code block styling if technical posts.
8. Careers
Bold headline ("Build with us"). Culture section with photos or short video. Open roles listed as expandable cards with: role title, location/remote tag, experience level, and an "Apply" CTA. Each role page has: responsibilities, requirements, benefits, and application form.
9. Contact
Split layout — contact form on one side, contact details and map on the other. Form fields: name, email, company, budget range (dropdown), project description. Add a "response time" note (e.g., "We respond within 24 hours"). Optional: Calendly embed for direct booking.

Global Elements
Navbar: Sticky, transparent on hero then solid on scroll. Logo left, nav links center or right, CTA button (filled) on the far right. Mobile: hamburger menu with full-screen overlay navigation and staggered link animations.
Footer: 4-column layout — company info + socials, quick links, services links, newsletter signup. Copyright bar at the very bottom. Keep it clean.
Floating CTA: Fixed bottom-right button. Subtle pulse or glow animation. Opens a quick contact form or scrolls to the contact section. Should not obstruct content — semi-transparent or collapsible.

Technical Preferences
Build with Next.js (App Router) + Tailwind CSS + Framer Motion. Use Spline or Three.js for one hero 3D element if performance allows. Lighthouse score targets: 90+ across all categories. Fully responsive — design mobile-first. SEO-ready with proper meta tags, OG images, and structured data. Use a headless CMS (Sanity, Contentful, or Strapi) for blog and projects.

What to Avoid
No stock photos of people shaking hands or pointing at screens. No walls of text — every section should be scannable. No more than 2 fonts. No autoplay video with sound. No cookie-cutter SaaS templates — this should feel custom. No rainbow gradient overuse. No tiny gray text on white backgrounds.

