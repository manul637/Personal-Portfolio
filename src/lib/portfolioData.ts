export interface ProjectItem {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  accentColor: string
  featured?: boolean
}

export interface SkillItem {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Tools'
  description: string
  iconKey: string
  color: string
}

export interface ServiceItem {
  id: string
  title: string
  iconType: 'code' | 'design' | 'ai'
  description: string
  deliverables: string[]
  accentColor: string
}

export const HERO_DATA = {
  eyebrow: "HELLO, I'M MANUL",
  greetingPrefix: "Hi! I'm",
  name: 'Manul',
  headlineLead: 'Creative Web &',
  headlineAccent: 'Frontend Developer',
  headlineSub: 'Building Digital Experiences That Actually Matter.',
  description:
    'I design and build modern websites, web applications, and AI-powered digital products that combine thoughtful design with practical technology.',
  location: 'Based in India',
  status: 'Available for freelance & collaborations',
  primaryCtaText: 'Contact Me',
  secondaryCtaText: 'My Work',
}

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    id: 'js',
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Modern interactive web experiences and application logic.',
    iconKey: 'JS',
    color: '#F7DF1E',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Scalable component-driven interfaces and product experiences.',
    iconKey: 'React',
    color: '#61DAFB',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    description: 'Modern production-ready web applications.',
    iconKey: 'Next',
    color: '#FFFFFF',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Fast, consistent interface development and design systems.',
    iconKey: 'Tailwind',
    color: '#38BDF8',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Safer, more maintainable application development.',
    iconKey: 'TS',
    color: '#3178C6',
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    category: 'Frontend',
    description: 'The fundamentals behind every responsive interface.',
    iconKey: 'CSS',
    color: '#E34F26',
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'Server-side applications, microservices, and fast APIs.',
    iconKey: 'Node',
    color: '#339933',
  },
  {
    id: 'express',
    name: 'Express',
    category: 'Backend',
    description: 'Lightweight backend architecture and REST API development.',
    iconKey: 'Express',
    color: '#FFFFFF',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Backend',
    description: 'Flexible document storage for modern cloud applications.',
    iconKey: 'Mongo',
    color: '#47A248',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'Backend',
    description: 'Structured relational databases and production systems.',
    iconKey: 'Postgres',
    color: '#4169E1',
  },

  // AI & Data
  {
    id: 'python',
    name: 'Python',
    category: 'AI & Data',
    description: 'Automation, data workflows, and AI experimentation.',
    iconKey: 'Python',
    color: '#3776AB',
  },
  {
    id: 'ai-apis',
    name: 'AI APIs',
    category: 'AI & Data',
    description: 'Integrating intelligent LLM capabilities into products.',
    iconKey: 'AI',
    color: '#A855F7',
  },
  {
    id: 'computervision',
    name: 'Computer Vision',
    category: 'AI & Data',
    description: 'Visual understanding and interactive machine learning.',
    iconKey: 'CV',
    color: '#EC4899',
  },
  {
    id: 'llm-workflows',
    name: 'LLM Workflows',
    category: 'AI & Data',
    description: 'Practical RAG architectures and autonomous prompt pipelines.',
    iconKey: 'LLM',
    color: '#F59E0B',
  },

  // Tools
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Tools',
    description: 'Version control, branching, and team collaboration.',
    iconKey: 'Git',
    color: '#F05032',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Tools',
    description: 'Containerized environments and reproducible deployments.',
    iconKey: 'Docker',
    color: '#2496ED',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tools',
    description: 'Interface design, wireframing, and interactive prototyping.',
    iconKey: 'Figma',
    color: '#F24E1E',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Tools',
    description: 'Edge deployment, serverless functions, and CI/CD hosting.',
    iconKey: 'Vercel',
    color: '#FFFFFF',
  },
]

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'finora',
    title: 'Finora',
    category: 'FINTECH · AI · PRODUCT',
    description:
      'Personal finance intelligence platform that helps students understand spending, build saving habits, and make better everyday financial decisions.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    githubUrl: 'https://github.com/manul',
    liveUrl: '/projects/finora',
    accentColor: '#FFB800',
    featured: true,
  },
  {
    id: 'salonos',
    title: 'SalonOS',
    category: 'WEB APP · CMS',
    description:
      'A modern salon website and lightweight management system that lets local salons manage services, pricing, offers, and content without touching code.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    githubUrl: 'https://github.com/manul',
    liveUrl: '/projects/salonos',
    accentColor: '#EC4899',
    featured: true,
  },
  {
    id: 'depthwizard',
    title: 'DepthWizard',
    category: 'AI · COMPUTER VISION',
    description:
      'An interactive computer-vision experience designed to make depth information easier to understand through an intuitive visual interface.',
    tags: ['Python', 'Computer Vision', 'AI', 'React'],
    githubUrl: 'https://github.com/manul',
    liveUrl: '/projects/depthwizard',
    accentColor: '#3B82F6',
    featured: true,
  },
]

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    iconType: 'code',
    description:
      'Building responsive, fast, and scalable websites and web applications using modern technologies like React, Next.js, and TypeScript.',
    deliverables: ['Websites', 'Web Apps', 'Dashboards', 'Performance Optimization'],
    accentColor: '#FFB800',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    iconType: 'design',
    description:
      'Creating intuitive, beautiful user interfaces and visual systems focused on user experience, typography, and modern design principles.',
    deliverables: ['Wireframes', 'UI Systems', 'Prototypes', 'Interactive Mockups'],
    accentColor: '#F87171',
  },
  {
    id: 'ai-prod',
    title: 'AI Product Development',
    iconType: 'ai',
    description:
      'Developing practical AI features, LLM workflows, and intelligent automations that solve real problems instead of adding AI for the sake of it.',
    deliverables: ['AI Features', 'LLM Apps', 'Automation', 'Intelligent Workflows'],
    accentColor: '#38BDF8',
  },
]

export const CONTACT_INFO = {
  email: 'hello@manul.dev',
  availability: 'open for freelance/collaborations',
  location: 'India / remote',
  responseTime: '24–48 hours',
}

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/manul',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/manul',
    icon: 'linkedin',
  },
  {
    name: 'X',
    url: 'https://x.com/manul',
    icon: 'x',
  },
  {
    name: 'Email',
    url: 'mailto:hello@manul.dev',
    icon: 'email',
  },
]

