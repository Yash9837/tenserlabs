# TenserLabs — Dev Agency & Consulting Website

A comprehensive prompt and site blueprint for TenserLabs, a software development agency & IT consulting company. The site will have a developer-centric UI aesthetic (dark theme) and cover all essential pages and components to attract clients and showcase expertise.

---

## Company Identity

- **Name:** TenserLabs
- **Tagline:** *"Engineering Tomorrow's Code, Today."*
- **Short Description:** TenserLabs is a premium software development agency and consulting firm that transforms ambitious ideas into scalable, production-grade digital products. From startups to enterprises, we architect, build, and ship — fast, clean, and future-proof.

---

## Site Pages & Components

### 1. Homepage (`/`)

- **Hero Section:** Full-width dark hero with animated code-rain or subtle matrix/grid background. Tagline front and center, CTA buttons: "Explore Our Work" / "Let's Talk".
- **Quick Stats Bar:** Animated counters — Projects Delivered, Happy Clients, Engineers, Years in Business.
- **Services Snapshot:** Icon cards (API Development, Cloud & DevOps, AI/ML Solutions, Web & Mobile Apps, Consulting & Audits).
- **Featured Projects Carousel:** 3–4 flagship case studies with tech-stack badges.
- **Client Logo Marquee:** Scrolling logos of notable clients.
- **Testimonials Slider:** Client quotes with photos and company names.
- **CTA Banner:** "Have a project in mind? Let's build it together."

### 2. About (`/about`)

- **Our Story:** Origin, mission, and vision — written in a concise, authentic tone.
- **Core Values:** Innovation, Transparency, Quality, Speed, Partnership.
- **How We Work:** Visual process timeline (Discovery → Design → Develop → Test → Deploy → Support).
- **Tech Philosophy:** Short paragraph on clean code, open-source contributions, and engineering culture.

### 3. Services (`/services`)

- **Service Detail Cards** (expandable or linked to sub-pages):
  - Custom Software Development
  - Web Application Development (React, Next.js, Angular)
  - Mobile App Development (React Native, Flutter)
  - Cloud Architecture & DevOps (AWS, GCP, Azure)
  - AI / ML Solutions & Data Engineering
  - UI/UX Design & Prototyping
  - Technical Consulting & Code Audits
  - Staff Augmentation / Dedicated Teams
- Each card: brief description, key tech-stack icons, and a "Learn More" link.

### 4. Projects / Portfolio (`/projects`)

- **Filter by:** Industry (FinTech, HealthTech, SaaS, E-Commerce, EdTech) and Tech Stack.
- **Project Cards:** Screenshot/mockup, title, short summary, tech-stack badges, link to detailed case study.
- **Case Study Page (per project):**
  - Challenge → Approach → Solution → Results
  - Screenshots / demo video
  - Client testimonial

### 5. Our Team (`/team`)

- **Leadership Section:** Founder/CEO, CTO, Head of Design — photo, name, title, short bio, social links (GitHub, LinkedIn).
- **Developers Grid:** Card per developer — photo, name, role (Full-Stack, Backend, ML Engineer, DevOps, etc.), top 3 tech-stack icons, GitHub link.
- **Culture Snippet:** A short section or photo collage about team culture, hackathons, open-source.

### 6. Clients (`/clients`)

- **Client Logos Grid** with industry labels.
- **Highlighted Partnerships:** 2–3 in-depth client stories.
- **Industries We Serve:** FinTech, HealthTech, SaaS, Logistics, E-Commerce, EdTech, etc.

### 7. Blog / Insights (`/blog`)

- Card grid of articles — thumbnail, title, date, tags (Engineering, DevOps, AI, Culture).
- Individual blog post page with author info, reading time, related posts.

### 8. Careers (`/careers`)

- Open positions list with filters (role, location, remote/hybrid).
- "Life at TenserLabs" section — perks, culture, growth.
- Application form or link to job board.

### 9. Contact (`/contact`)

- Contact form (Name, Email, Company, Budget Range dropdown, Project Description).
- Office location with embedded map.
- Direct email & phone.
- Social links (GitHub, LinkedIn, Twitter/X).

### 10. Global Components

- **Navbar:** Logo, page links, dark/light mode toggle (default dark), "Get a Quote" CTA button.
- **Footer:** Logo, tagline, quick links, social icons, newsletter signup, copyright.
- **Floating CTA:** Sticky "Book a Call" button or chat widget.

---

## UI / Design Direction

| Aspect | Direction |
|---|---|
| **Theme** | Dark-first (deep navy / charcoal), with vibrant accent (electric blue, neon green, or purple) |
| **Typography** | Monospace for headings/code snippets (e.g., JetBrains Mono, Fira Code); clean sans-serif for body (Inter, Satoshi) |
| **Motifs** | Terminal prompts, code brackets `{ }`, grid/dot backgrounds, subtle syntax-highlighting colors |
| **Animations** | Typing cursor effects on hero text, scroll-triggered fade-ins, hover glow on cards |
| **Tech-stack Badges** | Small pill-shaped icons (React, Node, Python, AWS, Docker, etc.) used across projects and team cards |
Mood : Shibuya Night meets Silicon Valley. Quiet confidence. No flashy gradients. No "rocket ships." Just precision.
---
## Techstack to use : nextjs 14, tailwindcss, node js , vercel for deployment 

## Sample Clients & Projects (Placeholder Content)

Projects(real project made by us)  : https://thriveup-web.vercel.app/(event management applicartion) , https://www.tenzijeans.com/ (web for fashion wholesale), https://lead-flow-mauve.vercel.app/landing ( real estate business intelligent CRM.), https://camrx.vercel.app/ (rental application)

| Client | Industry | Project | Tech Stack |
|---|---|---|---|
| NovaPay | FinTech | Real-time payment gateway | Node.js, Kafka, PostgreSQL, AWS |
| MedSync | HealthTech | Patient management platform | React, Python, FastAPI, GCP |
| ShipTrack | Logistics | Fleet tracking dashboard | Next.js, Go, Redis, Mapbox |
| LearnUp | EdTech | AI-powered tutoring app | React Native, OpenAI API, Firebase |
| CartFlow | E-Commerce | Headless commerce platform | Next.js, Stripe, Sanity CMS |

---

## Further Considerations

1. **Tech Stack for the site itself:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion is the recommended modern stack — want me to plan for that, or a different framework?
2. **Content source:** Should project/team data come from a headless CMS (e.g., Sanity, Contentful) for easy updates, or be hardcoded initially?
3. **Deployment target:** Vercel (natural for Next.js), or do you have a preferred host?

