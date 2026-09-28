import type { ProjectDetail } from '../types/project'

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    slug: 'finora',
    title: 'Finora',
    subtitle: 'Making Personal Finance Understandable',
    category: 'FINTECH · AI · PRODUCT',
    filterCategory: 'Fintech',
    shortDescription:
      'A personal finance intelligence platform designed to help students understand their spending, build better saving habits, and make more informed everyday decisions.',
    overview:
      'Finora is a personal finance intelligence platform designed around a simple idea: knowing where your money went is useful, but understanding what to do next is more useful. While conventional banking apps merely record ledger transactions and render generic charts, Finora actively translates raw transaction feeds into actionable saving strategies, recurring cost alerts, and personalized spending insights.',
    accentColor: '#FFB800',
    role: 'Product Designer & Developer',
    timeline: '8 Weeks',
    status: 'Prototype',
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: "Tracking Money Isn't The Same As Understanding It.",
      description:
        "Most personal finance tools are good at recording transactions. The problem begins after that. A student may know they spent ₹4,800 last month, but that number alone doesn't explain what changed, where the money went, or what they should do differently next month.",
      points: [
        {
          title: 'Too Much Manual Tracking',
          description: 'Recording and categorizing every transaction becomes repetitive and prone to abandonment.',
        },
        {
          title: 'Information Without Context',
          description: 'Charts can show spending patterns without explaining what caused the spike or how to adjust.',
        },
        {
          title: 'Generic Advice',
          description: "Standard budgeting advice rarely reflects an individual's actual financial habits and constraints.",
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'From Expense Tracking To Financial Intelligence.',
      description:
        'Finora combines transaction tracking, automated categorization, pattern detection, saving goals, and AI-generated insights into a single cohesive experience.',
      principles: [
        {
          title: 'Understand',
          description: 'Show users where their money is actually going without requiring tedious manual sorting.',
        },
        {
          title: 'Explain',
          description: 'Turn raw numbers into understandable insights and digestible trend narratives.',
        },
        {
          title: 'Recommend',
          description: 'Suggest realistic actions based on personal spending patterns rather than rigid generic rules.',
        },
        {
          title: 'Motivate',
          description: 'Make saving feel measurable, achievable, and visually rewarding through micro-milestones.',
        },
      ],
    },
    features: [
      {
        title: 'Smart Categorization',
        description: 'Automatically organize transactions into meaningful spending categories with high precision.',
      },
      {
        title: 'Spending Insights',
        description: 'Identify unusual spending spikes, recurring expenses, and subtle shifting habits over time.',
      },
      {
        title: 'Natural Language Search',
        description: 'Ask questions like "How much did I spend on food this month?" and get immediate calculated answers.',
      },
      {
        title: 'Saving Goals',
        description: 'Set a target amount, deadline, and track automated monthly progress toward specific purchases.',
      },
      {
        title: 'Smart Alerts',
        description: 'Receive proactive reminders when spending patterns drift away from a monthly budgeted target.',
      },
      {
        title: 'Monthly Review',
        description: 'Get a concise overview of what changed, top expenditures, and where money could be saved.',
      },
    ],
    technicalImplementation: {
      overview:
        'Finora is built with a decoupled architecture pairing a responsive React single-page application with a Node.js REST API and MongoDB database, augmented by an AI categorization and query pipeline.',
      highlights: [
        {
          category: 'Frontend Architecture',
          items: ['React 18', 'Component-driven UI', 'Dynamic Charts', 'Responsive Layout'],
          details: 'Built with modular custom CSS and accessible widgets optimized for fast interactive feedback.',
        },
        {
          category: 'Backend & APIs',
          items: ['Node.js', 'Express', 'JWT Authentication', 'Validation Layer'],
          details: 'RESTful API with token-based authentication and secure query handling for personal transaction data.',
        },
        {
          category: 'Database & Storage',
          items: ['MongoDB', 'Mongoose', 'Aggregation Pipelines'],
          details: 'Compound indexing on user IDs and transaction timestamps for sub-50ms analytics aggregation.',
        },
        {
          category: 'AI Pipeline',
          items: ['Natural Language Query Parsing', 'Anomaly Detection', 'Trend Analysis'],
          details: 'Heuristic rules combined with LLM prompting to convert raw line items into human-readable takeaways.',
        },
      ],
    },
    process: {
      eyebrow: 'PROCESS',
      heading: 'Methodology & Execution',
      steps: [
        {
          step: '01',
          name: 'Discover',
          description: 'Identify the actual financial problems students face rather than simply building another expense tracker.',
        },
        {
          step: '02',
          name: 'Define',
          description: 'Reduce the problem into a focused product experience around understanding spending and taking action.',
        },
        {
          step: '03',
          name: 'Design',
          description: 'Create a simple visual hierarchy that turns financial data into digestible information.',
        },
        {
          step: '04',
          name: 'Build',
          description: 'Develop the product experience and connect the interface to transaction and intelligence workflows.',
        },
      ],
    },
    results: {
      eyebrow: 'THE EXPERIENCE',
      heading: 'A Financial Dashboard That Talks Back.',
      description:
        'Instead of overwhelming users with charts and numbers, the experience focuses attention on the few insights that matter most.',
      metrics: [
        {
          value: '6',
          label: 'Core financial insights',
        },
        {
          value: '3',
          label: 'Primary user workflows',
        },
        {
          value: '1',
          label: 'Unified financial overview',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://finora-demo.vercel.app',
    featured: true,
  },
  {
    slug: 'salonos',
    title: 'SalonOS',
    subtitle: 'Modern Salon Website & Lightweight CMS',
    category: 'WEB APP · CMS',
    filterCategory: 'Web Apps',
    shortDescription:
      'A modern salon website and lightweight management system that lets local salons manage services, pricing, offers, and content without touching code.',
    overview:
      'SalonOS was built to give salon business owners autonomy over their digital presence. Rather than relying on technical developers for routine price adjustments or promotional banners, SalonOS delivers a tailored, high-converting customer booking website coupled with a clean, lightweight administrative panel.',
    accentColor: '#EC4899',
    role: 'Full-Stack Developer & Designer',
    timeline: '6 Weeks',
    status: 'Completed',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Local Salons Need Autonomy Over Their Web Presence.',
      description:
        'Salon owners frequently adjust service prices, introduce seasonal discounts, or add new beauty packages. Having to contact an agency for every minor update leads to friction, delays, and recurring maintenance fees.',
      points: [
        {
          title: 'Hardcoded Content Frustration',
          description: 'Pricing changes and seasonal packages take days to update on traditional codebases.',
        },
        {
          title: 'Heavy Generic CMS Complexity',
          description: 'Platforms like WordPress are often bloated, slow, and overly complex for salon staff.',
        },
        {
          title: 'Mobile Browsing Friction',
          description: 'Clients discovering salons on Instagram need instant mobile service discovery and booking clarity.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'Lightweight Content Management Tailored For Salons.',
      description:
        'A purpose-built web application combining a luxury client experience with an intuitive management dashboard designed specifically around salon service workflows.',
      principles: [
        {
          title: 'Zero-Code Updates',
          description: 'Update services, pricing tiers, and opening hours with instant live updates.',
        },
        {
          title: 'Cloudinary Asset Pipeline',
          description: 'Automated image optimization and CDN caching for styling lookbooks and salon galleries.',
        },
        {
          title: 'Mobile-First Experience',
          description: 'Fast, touch-friendly UI for clients to explore treatments and schedule appointments.',
        },
      ],
    },
    features: [
      {
        title: 'Service & Pricing Management',
        description: 'Update tiered menus, service descriptions, and package pricing without touching code.',
      },
      {
        title: 'Promotional Offers & Banners',
        description: 'Publish limited-time holiday offers and announcement banners directly to the storefront.',
      },
      {
        title: 'Cloudinary Image Pipeline',
        description: 'Upload high-resolution client transformations with automated WebP compression and CDN delivery.',
      },
      {
        title: 'Responsive Booking Inquiries',
        description: 'Direct WhatsApp and contact triggers pre-filled with the selected salon treatment.',
      },
    ],
    technicalImplementation: {
      overview:
        'Engineered as a decoupled MERN application featuring token-authenticated admin endpoints, MongoDB document storage, and Cloudinary media upload pipelines.',
      highlights: [
        {
          category: 'Frontend',
          items: ['React', 'Mobile First', 'Modular CSS', 'Touch Modals'],
          details: 'Crafted with bespoke luxury aesthetics and responsive tabbed service navigation.',
        },
        {
          category: 'Backend & Media',
          items: ['Node.js', 'Express', 'Cloudinary SDK', 'RESTful API'],
          details: 'Direct multipart file streaming to Cloudinary with secure signature validation.',
        },
        {
          category: 'Database',
          items: ['MongoDB', 'Mongoose', 'Atomic Updates'],
          details: 'Schema structure optimized for nested service categories and pricing variations.',
        },
      ],
    },
    process: {
      eyebrow: 'WORKFLOW',
      heading: 'From Discovery to Production',
      steps: [
        {
          step: '01',
          name: 'Discovery',
          description: 'Researched daily operational bottlenecks of local salon owners and staff.',
        },
        {
          step: '02',
          name: 'Design',
          description: 'Crafted an elegant luxury aesthetic with clear typography and smooth layouts.',
        },
        {
          step: '03',
          name: 'Build',
          description: 'Developed the React frontend and integrated Express backend with Cloudinary uploads.',
        },
        {
          step: '04',
          name: 'Refine',
          description: 'Streamlined the admin dashboard for one-click service edits and instant publishing.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://salonos-demo.vercel.app',
    featured: true,
  },
  {
    slug: 'depthwizard',
    title: 'DepthWizard',
    subtitle: 'Interactive Computer Vision & Depth Exploration',
    category: 'AI · COMPUTER VISION',
    filterCategory: 'AI',
    shortDescription:
      'An interactive computer-vision experience designed to make depth information easier to understand through an intuitive visual interface.',
    overview:
      'DepthWizard provides an interactive visual playground for exploring monocular depth estimation and spatial computer vision. By connecting machine learning depth models with real-time browser canvas controls, it transforms complex depth tensors into a tactile, visual experience.',
    accentColor: '#3B82F6',
    role: 'AI & Frontend Developer',
    timeline: '4 Weeks',
    status: 'Experiment',
    tags: ['Python', 'Computer Vision', 'AI', 'React'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Computer Vision Concepts Are Trapped In Complex Notebooks.',
      description:
        'Monocular depth estimation is foundational to modern spatial computing, yet demonstrations are typically confined to complex Python scripts or academic papers that lack accessible visual tools.',
      points: [
        {
          title: 'High Barrier to Entry',
          description: 'Testing depth models usually requires local CUDA setups and Python terminal environments.',
        },
        {
          title: 'Static Visual Output',
          description: 'Standard grayscale depth maps fail to convey real depth gradients and spatial separation.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'Accessible, Real-Time Depth Exploration.',
      description:
        'An end-to-end interactive web application where users can test depth estimation models and manipulate depth planes with intuitive visual controls.',
      principles: [
        {
          title: 'Real-Time Visual Feedback',
          description: 'Immediate graphical response when adjusting depth slicing thresholds.',
        },
        {
          title: 'Layer Isolation',
          description: 'Separate foreground subjects from backgrounds using interactive depth contours.',
        },
      ],
    },
    features: [
      {
        title: 'Monocular Depth Visualization',
        description: 'Generate accurate continuous depth maps from standard 2D photographs.',
      },
      {
        title: 'Interactive Thresholding Sliders',
        description: 'Isolate near, mid, and far depth planes dynamically using real-time sliders.',
      },
      {
        title: 'Custom Palette Color Ramps',
        description: 'Toggle between inferno, viridis, and custom depth gradient color maps.',
      },
      {
        title: 'Parallax Simulation',
        description: 'Subtle cursor-driven parallax tilt rendering pseudo-3D perspective.',
      },
    ],
    technicalImplementation: {
      overview:
        'Combines Python computer vision models for depth calculation with a lightweight React canvas frontend for hardware-accelerated image slicing.',
      highlights: [
        {
          category: 'Computer Vision Pipeline',
          items: ['Python', 'OpenCV', 'Pretrained Depth Models', 'NumPy'],
          details: 'Normalized tensor outputs mapped to 8-bit depth channel buffers.',
        },
        {
          category: 'Browser Rendering',
          items: ['HTML5 Canvas', 'React', 'ImageData API', 'CSS Transforms'],
          details: 'Real-time pixel thresholding performed directly in browser memory without re-fetching.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://depthwizard.vercel.app',
    featured: true,
  },
  {
    slug: 'promptvault',
    title: 'PromptVault',
    subtitle: 'Focused Workspace for AI Prompts & Templates',
    category: 'PRODUCTIVITY · AI',
    filterCategory: 'AI',
    shortDescription:
      'A focused workspace for saving, organizing, tagging, and quickly retrieving useful AI prompts.',
    overview:
      'PromptVault is a personal developer tool built to solve prompt fragmentation: best system instructions, variable recipes, and few-shot templates frequently end up lost in disparate chats and scratchpad files. PromptVault brings structured taxonomy, instant fuzzy lookup, and parameter substitution into a lightning-fast keyboard-first interface.',
    accentColor: '#F59E0B',
    role: 'Solo Creator',
    timeline: '3 Weeks',
    status: 'Active',
    tags: ['React', 'Firebase', 'AI'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Valuable Prompts Get Lost In Daily Workflows.',
      description:
        'Engineering effective prompts requires experimentation and refinement. Without a centralized hub, developers lose track of their best system instructions, variable structures, and tested personas across various chat tabs and notes.',
      points: [
        {
          title: 'Scattered Archives',
          description: 'Prompts saved across notes apps lack syntax highlighting, tagging, and searchability.',
        },
        {
          title: 'Inefficient Parameter Reuse',
          description: 'Manually editing prompt placeholders is error-prone and time-consuming.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'A Fast, Tagged Workspace Engineered For Prompts.',
      description:
        'A streamlined digital vault featuring instant fuzzy search, tag taxonomy, dynamic parameter substitution, and one-click clipboard copying.',
      principles: [
        {
          title: 'Zero Latency',
          description: 'Sub-millisecond local filtering so prompts are found in seconds.',
        },
        {
          title: 'Flexible Organization',
          description: 'Multi-tagging and model compatibility indicators.',
        },
      ],
    },
    features: [
      {
        title: 'Tag-Based Categorization',
        description: 'Group prompts by model (GPT-4, Claude, Gemini), domain, or project tag.',
      },
      {
        title: 'Instant Fuzzy Search',
        description: 'Locate any prompt in milliseconds with real-time text matching across titles and bodies.',
      },
      {
        title: 'Variable Insertion Templates',
        description: 'Define dynamic variables like {{role}} or {{code}} for quick interactive replacement.',
      },
      {
        title: 'Cloud Sync & Offline Mode',
        description: 'Real-time synchronization with resilient offline access via Firebase.',
      },
    ],
    technicalImplementation: {
      overview:
        'React application backed by Firebase Firestore for real-time syncing and fast client-side state management.',
      highlights: [
        {
          category: 'Client Architecture',
          items: ['React 18', 'Custom Hooks', 'Fuzzy Search Algorithm', 'Local Storage Cache'],
          details: 'Optimistic UI updates for immediate typing responsiveness with zero lag.',
        },
        {
          category: 'Cloud Storage',
          items: ['Firebase Firestore', 'Security Rules', 'Realtime Snapshot Listeners'],
          details: 'Sub-100ms multi-device synchronization with offline read/write queueing.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://promptvault.vercel.app',
    featured: false,
  },
  {
    slug: 'campusflow',
    title: 'CampusFlow',
    subtitle: 'Student Academic Management Platform',
    category: 'WEB APP · PRODUCTIVITY',
    filterCategory: 'Web Apps',
    shortDescription:
      'A lightweight student productivity platform for managing academic tasks, deadlines, events, and personal goals in one place.',
    overview:
      'CampusFlow is designed specifically for university students juggling overlapping course assignments, exam timetables, extracurricular events, and semester milestones without the bloat of corporate enterprise project management software.',
    accentColor: '#10B981',
    role: 'Full-Stack Developer',
    timeline: '5 Weeks',
    status: 'Prototype',
    tags: ['React', 'Node.js', 'MongoDB'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Student Schedules Are Fragmented Across Too Many Tools.',
      description:
        'Students manage deadlines on clumsy university portals, classes on separate calendar apps, and tasks on sticky notes. The lack of a unified academic overview leads to missed deadlines and unnecessary stress.',
      points: [
        {
          title: 'Context Switching',
          description: 'Jumping between college portals, messaging groups, and generic calendars causes confusion.',
        },
        {
          title: 'Too Much Setup Overhead',
          description: 'Tools like Notion or Jira require extensive manual setup before becoming helpful.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'An Academic Command Center Designed For Focus.',
      description:
        'CampusFlow brings task prioritization, deadline countdowns, and semester roadmaps into a clean, zero-clutter interface.',
      principles: [
        {
          title: 'Actionable Today View',
          description: 'Highlights what needs attention today without overwhelming with distant tasks.',
        },
        {
          title: 'Visual Deadlines',
          description: 'Color-coded urgency indicators keep priorities front and center.',
        },
      ],
    },
    features: [
      {
        title: 'Course & Assignment Tracking',
        description: 'Organize tasks by course, weightage, and submission deadline.',
      },
      {
        title: 'Prioritized Task Queue',
        description: 'Smart sorting based on urgency, difficulty, and approaching dates.',
      },
      {
        title: 'Campus Event Calendar',
        description: 'Keep club meetings, exams, and holidays synced in one calendar view.',
      },
      {
        title: 'Academic Goal Progress',
        description: 'Track semester milestones and celebrate completed assignments.',
      },
    ],
    technicalImplementation: {
      overview:
        'React single page application communicating with a Node.js Express backend and MongoDB database.',
      highlights: [
        {
          category: 'Stack Details',
          items: ['React', 'Node.js', 'Express', 'MongoDB'],
          details: 'Optimized REST endpoints with filtering by date range, course ID, and completion status.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://campusflow.vercel.app',
    featured: false,
  },
  {
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    subtitle: 'Financial Dashboard & Modular Design System',
    category: 'UI/UX · DESIGN SYSTEM',
    filterCategory: 'UI/UX',
    shortDescription:
      'A financial dashboard concept focused on turning complicated financial information into simple, actionable visual insights.',
    overview:
      'Fintech Dashboard is an interface design exploration focusing on information density, visual hierarchy, and accessible data visualization for modern financial platforms. It demonstrates how complex cash flow metrics can be structured into intuitive, scannable modules.',
    accentColor: '#8B5CF6',
    role: 'UI/UX Designer & Prototyper',
    timeline: '3 Weeks',
    status: 'Design Concept',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Financial Dashboards Are Often Cluttered and Overwhelming.',
      description:
        'Modern banking and investment dashboards often overwhelm users with high-density numerical tables, confusing micro-charts, and lack of visual focus, making everyday financial decisions stressful.',
      points: [
        {
          title: 'Cognitive Overload',
          description: 'Displaying every data point simultaneously prevents users from identifying key trends.',
        },
        {
          title: 'Poor Mobile Adaptation',
          description: 'Desktop financial tables rarely scale gracefully down to handheld screens.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'Hierarchical, Human-Centric Financial Insights.',
      description:
        'A component-based design system prioritizing clear trend indicators, modular widgets, and high-contrast accessible visual cues.',
      principles: [
        {
          title: 'Clarity First',
          description: 'Primary account health visible in less than 3 seconds.',
        },
        {
          title: 'Progressive Disclosure',
          description: 'High-level summaries upfront, with granular transaction breakdowns a tap away.',
        },
      ],
    },
    features: [
      {
        title: 'Cash Flow Visual Analytics',
        description: 'Interactive trendlines visualizing incoming vs. outgoing liquidity over time.',
      },
      {
        title: 'High-Contrast Design Tokens',
        description: 'Carefully tuned dark palette meeting WCAG AAA accessibility standards.',
      },
      {
        title: 'Modular Widget Architecture',
        description: 'Customizable tiles for portfolios, recent payments, and recurring bills.',
      },
      {
        title: 'Interactive Prototype Flows',
        description: 'High-fidelity micro-interactions for transfers, alerts, and card freezes.',
      },
    ],
    technicalImplementation: {
      overview:
        'Complete design system crafted in Figma featuring auto-layout components, variant sets, and responsive prototype interactions.',
      highlights: [
        {
          category: 'Design System Deliverables',
          items: ['Figma Auto Layout', 'Design Tokens', 'Interactive Prototype', 'Component Library'],
          details: 'Over 40 modular UI components built with Figma Auto-Layout 5.0.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://figma.com/@manul',
    featured: false,
  },
  {
    slug: 'ai-research-assistant',
    title: 'AI Research Assistant',
    subtitle: 'Document Intelligence & Grounded Knowledge Base',
    category: 'AI · RAG · EXPERIMENT',
    filterCategory: 'AI',
    shortDescription:
      'An experimental research workspace that helps users organize documents, extract useful information, and interact with their knowledge base.',
    overview:
      'An experimental research assistant leveraging Large Language Models and Retrieval-Augmented Generation (RAG) to allow researchers and students to upload multi-page documents, query their contents naturally, and verify citations against original sources.',
    accentColor: '#06B6D4',
    role: 'AI Developer',
    timeline: '4 Weeks',
    status: 'Research Prototype',
    tags: ['Python', 'LLM', 'RAG'],
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Synthesizing Multi-Page Technical Papers Is Time-Consuming.',
      description:
        'Academic papers and technical reports are dense and lengthy. Finding specific experimental results or cross-referencing findings across multiple documents often takes hours of manual skimming.',
      points: [
        {
          title: 'Information Silos',
          description: 'Crucial information hidden across 50-page PDFs without full-text semantic search.',
        },
        {
          title: 'LLM Hallucinations',
          description: 'Standard LLMs invent facts when queried without grounded document context.',
        },
      ],
    },
    solution: {
      eyebrow: 'THE SOLUTION',
      heading: 'Grounded Document Intelligence via RAG.',
      description:
        'A vector-indexed retrieval pipeline that grounds answers strictly in user-supplied documents with exact source paragraph citations.',
      principles: [
        {
          title: 'Verifiable Ground Truth',
          description: 'Every synthesized answer links directly back to the original source passage.',
        },
        {
          title: 'Semantic Understanding',
          description: 'Retrieval based on meaning rather than mere keyword coincidence.',
        },
      ],
    },
    features: [
      {
        title: 'Document Ingestion & Chunking',
        description: 'Intelligent PDF parsing and semantic text chunking for vector indexing.',
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        description: 'Hybrid dense vector search ensuring accurate context retrieval.',
      },
      {
        title: 'Conversational Research Q&A',
        description: 'Natural conversation interface supporting multi-turn analytical inquiries.',
      },
      {
        title: 'Source Citation Extraction',
        description: 'Highlights the exact document page and snippet supporting each insight.',
      },
    ],
    technicalImplementation: {
      overview:
        'Python backend utilizing vector embeddings and an LLM orchestration layer connected to a lightweight web interface.',
      highlights: [
        {
          category: 'AI & RAG Pipeline',
          items: ['Python', 'Vector Embeddings', 'Cosine Similarity Search', 'Prompt Orchestration'],
          details: 'Hybrid chunking strategy preserving section headings for enhanced contextual retrieval.',
        },
        {
          category: 'Backend Service',
          items: ['FastAPI', 'Asynchronous Streaming', 'PDF Parsing'],
          details: 'Server-sent events (SSE) for real-time streaming of answer tokens and citation references.',
        },
      ],
    },
    githubUrl: 'https://github.com/manul',
    liveUrl: 'https://ai-research-assistant.vercel.app',
    featured: false,
  },
]

export function getAllProjects(): ProjectDetail[] {
  return PROJECTS_DATA
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  if (!slug) return undefined
  const normalized = slug.trim().toLowerCase()
  return PROJECTS_DATA.find((p) => p.slug.toLowerCase() === normalized)
}

export function getAdjacentProjects(slug: string): {
  prev?: ProjectDetail
  next?: ProjectDetail
} {
  const index = PROJECTS_DATA.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase())
  if (index === -1) return {}

  const prev = index > 0 ? PROJECTS_DATA[index - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1]
  const next = index < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[index + 1] : PROJECTS_DATA[0]

  return { prev, next }
}
