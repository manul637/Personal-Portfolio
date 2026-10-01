# Personal Portfolio

A modern, high-performance personal portfolio website built with React, TypeScript, and Vite. The application showcases developer projects, in-depth technical case studies, skills, services, and an interactive inquiry form backed by Supabase.

Designed with clean typography, dynamic database-driven content, smooth micro-interactions, and a responsive mobile experience.

---

## ✨ Features

- **Responsive Portfolio UI** — Crafted with bespoke CSS, fluid typography, dark-mode inspired glassmorphism, and smooth transitions.
- **Dynamic Profile Data** — Profile headline, profession, contact details, and social links are managed via Supabase and cached globally via React Context.
- **Dynamic Projects & Case Studies** — Detailed project showcase with custom slugs (`/work/:slug`), dynamic problem/solution breakdowns, technical implementation details, and conditional process/results sections.
- **Dynamic Skills Grid** — Technical proficiencies categorized across Frontend, Backend, AI & Data, and Tools, rendered dynamically from the database.
- **Supabase Storage Profile Image** — High-resolution WebP hero portrait served directly from a dedicated Supabase Storage bucket with local fallback protection.
- **Contact Form Integration** — Interactive contact form with real-time validation and asynchronous submission handling directly to the database.
- **WhatsApp Contact Integration** — Direct WhatsApp chat CTA formatted dynamically with personalized pre-filled messages.
- **Responsive Mobile Navigation** — Mobile drawer navigation with smooth toggle controls, backdrop blur, and body scroll lock.
- **Social Links Integration** — External links for GitHub and LinkedIn with automated protocol normalization.
- **RLS-Secured Public Data Access** — Strict PostgreSQL Row Level Security (RLS) policies protecting table reads and writes.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component hierarchy and state management |
| **TypeScript** | End-to-end type safety across components, services, and data models |
| **Vite** | Fast local development server and optimized production bundler |
| **React Router 7** | Client-side routing, route parameters, and URL navigation |
| **Supabase** | PostgreSQL database, Storage bucket, and client SDK |
| **Vanilla CSS** | Custom design system using CSS variables, flexbox, and CSS grid |
| **ESLint** | Static code analysis and code quality enforcement |
| **Vercel** | Production hosting and continuous deployment target |

---

## 📂 Project Structure

```text
personal-portfolio/
├── public/                 # Static public assets and fallback images
├── src/
│   ├── components/         # Reusable UI elements and page sections
│   │   ├── common/         # Buttons, section headings, and shared cards
│   │   ├── home/           # Hero, featured projects, skills, services, and contact sections
│   │   ├── Navbar.tsx      # Top navigation bar and mobile drawer menu
│   │   └── Footer.tsx      # Global footer with dynamic profile and social links
│   ├── config/             # Site configuration, navigation links, and constants
│   ├── context/            # React Context providers (ProfileContext for global profile state)
│   ├── data/               # Baseline/fallback project, skill, and service datasets
│   ├── layouts/            # Page layouts (MainLayout wrapping header, outlet, and footer)
│   ├── lib/                # Third-party client initializations (Supabase client instance)
│   ├── pages/              # Top-level route pages (Home, About, Work, Services, Contact, ProjectDetail)
│   ├── services/           # Supabase data access layer (projects, skills, profile, contact)
│   ├── styles/             # Modular CSS stylesheets (variables, typography, layout, animations)
│   ├── types/              # TypeScript interface definitions (Project, Skill, Service, Profile)
│   ├── App.tsx             # Root router configuration and route hierarchy
│   └── main.tsx            # Application entry point
├── supabase/               # SQL schema definitions, migrations, and seed scripts
│   ├── create_profile.sql  # Profile table DDL and RLS security configuration
│   └── seed_projects.sql   # Projects table seed script with structured case-study content
├── .env.example            # Template for environment variables (safe placeholders only)
├── .gitignore              # Git ignore rules for node_modules, build output, and local secrets
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🗄️ Supabase

The portfolio uses [Supabase](https://supabase.com/) as its serverless backend for database persistence and asset delivery.

### Database Tables

- **`profile`** — Stores the single portfolio owner record (`name`, `profession`, `headline`, `email`, `location`, `whatsapp_number`, social URLs, `profile_image_url`).
- **`projects`** — Stores portfolio project metadata and structured JSONB case-study content (`features`, `problem`, `solution`, `technicalImplementation`, `process`, `results`).
- **`skills`** — Stores technical skills grouped by category (`Frontend`, `Backend`, `AI & Data`, `Tools`) with proficiency scores and display sort ordering.
- **`contact_submissions`** — Stores messages submitted through the website contact form (`name`, `email`, `project_type`, `message`).

### Supabase Storage

- Profile portrait images are hosted in a public Supabase Storage bucket (`profile-images/hero_portrait.webp`) and delivered over CDN directly to the Hero section.

---

## 🔐 Security

The application strictly follows Supabase security best practices:

- **Client-Side Exposure:** The frontend client uses only public Supabase credentials (`VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`).
- **Zero Secret Leaks:** No database passwords, secret keys, or `SUPABASE_SERVICE_ROLE_KEY` are exposed to the client or tracked in source control.
- **Row Level Security (RLS):**
  - **`projects`**, **`skills`**, and **`profile`** tables have `SELECT` policies enabled for anonymous and authenticated visitors. Public mutation (`INSERT`, `UPDATE`, `DELETE`) is completely disabled.
  - **`contact_submissions`** allows anonymous visitors to `INSERT` inquiries, but disallows public `SELECT`, `UPDATE`, and `DELETE` access to prevent exposure of user inquiries.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- [npm](https://www.npmjs.com/)
- A [Supabase](https://supabase.com/) account and project

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Supabase project credentials to `.env`:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

> [!IMPORTANT]
> The `.env` file contains your local environment variables and is excluded by `.gitignore`. Never commit or push `.env` files to GitHub.

### Run Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Compile TypeScript and build the production bundle:

```bash
npm run build
```

The output bundle will be generated in the `dist/` directory.

### Lint

Run ESLint to check for code quality and style issues:

```bash
npm run lint
```

---

## 🌐 Deployment

The project is configured for seamless deployment on [Vercel](https://vercel.com/):

1. Import the GitHub repository into your Vercel dashboard.
2. Ensure the Framework Preset is set to **Vite**.
3. Under **Project Settings > Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. Deploy. Vercel automatically runs `npm run build` and serves the static output from `dist/`.

---

## 📄 Routes

The application utilizes React Router with client-side navigation:

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero introduction, featured projects, skills preview, services, and contact form |
| `/about` | **About** | Professional background, development philosophy, and career journey |
| `/skills` | **Skills Redirect** | Automatically redirects to `/#skills` and smoothly scrolls to the skills grid |
| `/work` | **Work / Projects** | Complete portfolio project directory with category filter tags |
| `/work/:slug` | **Case Study** | In-depth project case-study details (e.g. `/work/finora`, `/work/salonos`) |
| `/services` | **Services** | Core service offerings and technical capabilities |
| `/contact` | **Contact** | Inquiry form, response time expectation, location, and social links |
| `*` | **404 Not Found** | Friendly fallback page with a return to homepage action |

---

## 🧩 Database Overview

| Table | Purpose | Public Access (RLS) |
| :--- | :--- | :--- |
| **`profile`** | Single row containing personal info, titles, bio, and social links | `SELECT` only |
| **`projects`** | Project catalog and structured JSONB case-study details | `SELECT` only |
| **`skills`** | Technical skills and proficiency metrics grouped by discipline | `SELECT` only |
| **`contact_submissions`** | Inbound contact inquiries and visitor messages | `INSERT` only |

---

## 📱 Responsive Design

The portfolio is built mobile-first and fully responsive across all device viewports:

- **Mobile (< 768px):** Hamburger menu drawer with blur overlay, single-column stacked grids, and touch-friendly buttons.
- **Tablet (768px – 1024px):** Adaptive two-column layouts and fluid scaling typography.
- **Desktop (> 1024px):** Multi-column project showcases, side-by-side case-study analysis, and desktop navigation bar.

---

## 👤 Author

**Manul**  
*Creative Web & Frontend Developer*

- GitHub: [@manul637](https://github.com/manul637)
- LinkedIn: [manulgupta10](https://www.linkedin.com/in/manulgupta10)

---

## 📜 License

No license has currently been specified for this project. All rights are reserved by the author.
