export interface DetailedService {
  id: string
  number: string
  title: string
  iconType: 'code' | 'design' | 'ai'
  accentColor: string
  shortSummary: string
  tags: string[]
  whatItIs: string
  whatIProvide: string[]
  deliverables: string[]
  whoItIsFor: string
  technologies: string[]
}

export interface ProcessStage {
  number: string
  title: string
  subtitle: string
  description: string
  details: string
}

export interface WhyWorkItem {
  id: string
  title: string
  badge: string
  description: string
  iconType: 'target' | 'layers' | 'zap'
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    iconType: 'code',
    accentColor: '#FFB800',
    shortSummary:
      'Modern websites and web applications designed around performance, usability, responsiveness, and real business goals.',
    tags: ['Websites', 'Web Apps', 'Dashboards', 'Performance Optimization'],
    whatItIs:
      'Custom websites and web applications built around your actual business goals. I take projects from initial architecture and frontend development all the way through to deployment, ensuring lightning-fast load times, seamless accessibility, and clean, maintainable code.',
    whatIProvide: [
      'Custom responsive web development tailored for mobile, tablet, and desktop',
      'CMS & admin dashboard functionality for autonomous content updates',
      'Performance optimization and Core Web Vitals compliance',
      'Robust API integration and structured backend connectivity',
      'Production deployment, SSL configuration, and domain management',
    ],
    deliverables: [
      'Production-Ready Web Applications',
      'Responsive Marketing & Portfolio Websites',
      'Custom Admin Panels & Dashboards',
      'Clean, Documented Codebase',
      'CI/CD & Cloud Deployment Setup',
    ],
    whoItIsFor:
      'Startups, businesses, and creators who need a fast, reliable web presence or custom web application built to convert and perform without technical debt.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'HTML5 / CSS3',
      'REST APIs',
      'Vercel',
    ],
  },
  {
    id: 'ui-ux-design',
    number: '02',
    title: 'UI/UX Design',
    iconType: 'design',
    accentColor: '#F87171',
    shortSummary:
      'Clean interfaces, thoughtful interactions, and visual systems that make complex products feel simple and intuitive.',
    tags: ['Wireframes', 'UI Systems', 'Prototypes', 'Interactive Mockups'],
    whatItIs:
      'Interfaces that make complex products feel simple through clear hierarchy, intentional spacing, and thoughtful interactions. Designed with engineering reality in mind so designs translate seamlessly into code.',
    whatIProvide: [
      'Information architecture, wireframing, and user journey mapping',
      'Scalable design systems, color tokens, and reusable component libraries',
      'High-fidelity interactive prototypes for validation and stakeholder feedback',
      'Micro-interactions, motion design, and responsive layout guidelines',
      'Developer-ready Figma design handoff and asset packages',
    ],
    deliverables: [
      'Interactive Figma Prototypes',
      'Complete UI Design Systems & Component Kits',
      'Wireframes & Information Architecture Maps',
      'Responsive Mobile & Desktop Layouts',
      'Design Tokens & Exported Asset Libraries',
    ],
    whoItIsFor:
      'Founders, product teams, and startups who need to turn a complex idea or rough concept into an intuitive, polished user interface that users love.',
    technologies: [
      'Figma',
      'Design Systems',
      'Wireframing',
      'Interactive Prototyping',
      'User Flows',
      'Design Tokens',
    ],
  },
  {
    id: 'ai-product-development',
    number: '03',
    title: 'AI Product Development',
    iconType: 'ai',
    accentColor: '#38BDF8',
    shortSummary:
      'Practical AI features and intelligent workflows that solve specific problems instead of adding AI for the sake of it.',
    tags: ['AI Features', 'LLM Apps', 'Automation', 'Intelligent Workflows'],
    whatItIs:
      'Practical AI features integrated into products and workflows where intelligence can genuinely improve the user experience. Moving beyond buzzwords to solve real bottlenecks with reliable, production-tested LLM workflows.',
    whatIProvide: [
      'LLM API integration (OpenAI, Gemini, Anthropic) with structured prompting',
      'RAG (Retrieval-Augmented Generation) architectures for proprietary knowledge bases',
      'Intelligent document parsing, text summarization, and natural-language query features',
      'Computer vision and visual understanding pipeline integration',
      'Automated background data workflows and intelligent pipelines',
    ],
    deliverables: [
      'Custom AI Feature Integrations',
      'LLM-Powered Applications & Workspaces',
      'RAG Knowledge Base & Semantic Search Systems',
      'Automated Data Extraction & Classification Tools',
      'Computer Vision & Interactive Visual Interfaces',
    ],
    whoItIsFor:
      'Businesses, makers, and innovators looking to integrate intelligent capabilities into their products to eliminate repetitive tasks and create real product value.',
    technologies: [
      'Python',
      'OpenAI / AI APIs',
      'LLM Workflows',
      'RAG Pipelines',
      'Computer Vision',
      'FastAPI',
    ],
  },
]

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understand the problem',
    description:
      'Understand your goals, users, constraints, and what success actually looks like.',
    details:
      'We align on product objectives, target audience requirements, project constraints, and key success metrics before jumping into implementation.',
  },
  {
    number: '02',
    title: 'Plan',
    subtitle: 'Structure the solution',
    description:
      'Define the structure, features, content hierarchy, and visual direction before building.',
    details:
      'Map out user flows, information architecture, feature priorities, and choose the optimal technology stack for long-term scalability.',
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Design + development',
    description:
      'Turn the plan into a functional, responsive, polished product.',
    details:
      'Develop modular components, responsive layouts, API connections, and smooth micro-interactions with maintainable architecture.',
  },
  {
    number: '04',
    title: 'Refine',
    subtitle: 'Test + improve + launch',
    description:
      'Test the experience, fix rough edges, simplify where necessary, and polish the final details.',
    details:
      'Cross-device QA, performance optimization, accessibility audit, and seamless cloud deployment with post-launch support.',
  },
]

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    id: 'problem-first',
    title: 'Problem First',
    badge: 'Built Around The Problem',
    description:
      "I don't start with technology. I start with what needs to be solved. Understanding user and business challenges guarantees that every feature serves a real purpose.",
    iconType: 'target',
  },
  {
    id: 'design-development',
    title: 'Design + Development',
    badge: 'Design & Development Together',
    description:
      'The visual experience and technical implementation are considered as one product. No handoff friction or lost-in-translation designs—a unified aesthetic vision backed by robust code.',
    iconType: 'layers',
  },
  {
    id: 'fast-iteration',
    title: 'Fast Iteration',
    badge: 'Rapid Feedback Cycles',
    description:
      "Small iterations make it easier to discover what's working and what isn't. Quick prototypes and continuous feedback loops ensure we arrive at the optimal solution rapidly and avoid wasted effort.",
    iconType: 'zap',
  },
]
