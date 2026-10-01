-- ==============================================================================
-- Supabase Seed Migration: 7 Projects from projectsData.ts
-- Fully validated PostgreSQL script for Supabase SQL Editor
-- ==============================================================================

-- 1. Ensure table has unique constraint on slug for ON CONFLICT resolution
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_attribute a ON a.attrelid = c.conrelid AND a.attnum = ANY(c.conkey)
    WHERE c.conrelid = 'public.projects'::regclass
      AND c.contype IN ('p', 'u')
      AND a.attname = 'slug'
  ) THEN
    ALTER TABLE public.projects ADD CONSTRAINT projects_slug_key UNIQUE (slug);
  END IF;
END $$;

-- 2. Ensure RLS is enabled and anonymous / public visitors have SELECT access
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access on projects" ON public.projects;
CREATE POLICY "Allow public read access on projects"
  ON public.projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- 3. Insert / Upsert the 7 Projects
-- [1/7] Finora (finora)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'finora',
  'Finora',
  'FINTECH · AI · PRODUCT',
  'A personal finance intelligence platform designed to help students understand their spending, build better saving habits, and make more informed everyday decisions.',
  'Finora is a personal finance intelligence platform designed around a simple idea: knowing where your money went is useful, but understanding what to do next is more useful. While conventional banking apps merely record ledger transactions and render generic charts, Finora actively translates raw transaction feeds into actionable saving strategies, recurring cost alerts, and personalized spending insights.',
  ARRAY['React', 'Node.js', 'MongoDB', 'AI']::text[],
  'https://github.com/manul',
  'https://finora-demo.vercel.app',
  true,
  1,
  $json${"subtitle":"Making Personal Finance Understandable","filterCategory":"Fintech","accentColor":"#FFB800","role":"Product Designer & Developer","timeline":"8 Weeks","status":"Prototype","problem":{"eyebrow":"THE PROBLEM","heading":"Tracking Money Isn't The Same As Understanding It.","description":"Most personal finance tools are good at recording transactions. The problem begins after that. A student may know they spent ₹4,800 last month, but that number alone doesn't explain what changed, where the money went, or what they should do differently next month.","points":[{"title":"Too Much Manual Tracking","description":"Recording and categorizing every transaction becomes repetitive and prone to abandonment."},{"title":"Information Without Context","description":"Charts can show spending patterns without explaining what caused the spike or how to adjust."},{"title":"Generic Advice","description":"Standard budgeting advice rarely reflects an individual's actual financial habits and constraints."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"From Expense Tracking To Financial Intelligence.","description":"Finora combines transaction tracking, automated categorization, pattern detection, saving goals, and AI-generated insights into a single cohesive experience.","principles":[{"title":"Understand","description":"Show users where their money is actually going without requiring tedious manual sorting."},{"title":"Explain","description":"Turn raw numbers into understandable insights and digestible trend narratives."},{"title":"Recommend","description":"Suggest realistic actions based on personal spending patterns rather than rigid generic rules."},{"title":"Motivate","description":"Make saving feel measurable, achievable, and visually rewarding through micro-milestones."}]},"features":[{"title":"Smart Categorization","description":"Automatically organize transactions into meaningful spending categories with high precision."},{"title":"Spending Insights","description":"Identify unusual spending spikes, recurring expenses, and subtle shifting habits over time."},{"title":"Natural Language Search","description":"Ask questions like \"How much did I spend on food this month?\" and get immediate calculated answers."},{"title":"Saving Goals","description":"Set a target amount, deadline, and track automated monthly progress toward specific purchases."},{"title":"Smart Alerts","description":"Receive proactive reminders when spending patterns drift away from a monthly budgeted target."},{"title":"Monthly Review","description":"Get a concise overview of what changed, top expenditures, and where money could be saved."}],"technicalImplementation":{"overview":"Finora is built with a decoupled architecture pairing a responsive React single-page application with a Node.js REST API and MongoDB database, augmented by an AI categorization and query pipeline.","highlights":[{"category":"Frontend Architecture","items":["React 18","Component-driven UI","Dynamic Charts","Responsive Layout"],"details":"Built with modular custom CSS and accessible widgets optimized for fast interactive feedback."},{"category":"Backend & APIs","items":["Node.js","Express","JWT Authentication","Validation Layer"],"details":"RESTful API with token-based authentication and secure query handling for personal transaction data."},{"category":"Database & Storage","items":["MongoDB","Mongoose","Aggregation Pipelines"],"details":"Compound indexing on user IDs and transaction timestamps for sub-50ms analytics aggregation."},{"category":"AI Pipeline","items":["Natural Language Query Parsing","Anomaly Detection","Trend Analysis"],"details":"Heuristic rules combined with LLM prompting to convert raw line items into human-readable takeaways."}]},"process":{"eyebrow":"PROCESS","heading":"Methodology & Execution","steps":[{"step":"01","name":"Discover","description":"Identify the actual financial problems students face rather than simply building another expense tracker."},{"step":"02","name":"Define","description":"Reduce the problem into a focused product experience around understanding spending and taking action."},{"step":"03","name":"Design","description":"Create a simple visual hierarchy that turns financial data into digestible information."},{"step":"04","name":"Build","description":"Develop the product experience and connect the interface to transaction and intelligence workflows."}]},"results":{"eyebrow":"THE EXPERIENCE","heading":"A Financial Dashboard That Talks Back.","description":"Instead of overwhelming users with charts and numbers, the experience focuses attention on the few insights that matter most.","metrics":[{"value":"6","label":"Core financial insights"},{"value":"3","label":"Primary user workflows"},{"value":"1","label":"Unified financial overview"}]}}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [2/7] SalonOS (salonos)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'salonos',
  'SalonOS',
  'WEB APP · CMS',
  'A modern salon website and lightweight management system that lets local salons manage services, pricing, offers, and content without touching code.',
  'SalonOS was built to give salon business owners autonomy over their digital presence. Rather than relying on technical developers for routine price adjustments or promotional banners, SalonOS delivers a tailored, high-converting customer booking website coupled with a clean, lightweight administrative panel.',
  ARRAY['React', 'Node.js', 'MongoDB', 'Cloudinary']::text[],
  'https://github.com/manul',
  'https://salonos-demo.vercel.app',
  true,
  2,
  $json${"subtitle":"Modern Salon Website & Lightweight CMS","filterCategory":"Web Apps","accentColor":"#EC4899","role":"Full-Stack Developer & Designer","timeline":"6 Weeks","status":"Completed","problem":{"eyebrow":"THE PROBLEM","heading":"Local Salons Need Autonomy Over Their Web Presence.","description":"Salon owners frequently adjust service prices, introduce seasonal discounts, or add new beauty packages. Having to contact an agency for every minor update leads to friction, delays, and recurring maintenance fees.","points":[{"title":"Hardcoded Content Frustration","description":"Pricing changes and seasonal packages take days to update on traditional codebases."},{"title":"Heavy Generic CMS Complexity","description":"Platforms like WordPress are often bloated, slow, and overly complex for salon staff."},{"title":"Mobile Browsing Friction","description":"Clients discovering salons on Instagram need instant mobile service discovery and booking clarity."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"Lightweight Content Management Tailored For Salons.","description":"A purpose-built web application combining a luxury client experience with an intuitive management dashboard designed specifically around salon service workflows.","principles":[{"title":"Zero-Code Updates","description":"Update services, pricing tiers, and opening hours with instant live updates."},{"title":"Cloudinary Asset Pipeline","description":"Automated image optimization and CDN caching for styling lookbooks and salon galleries."},{"title":"Mobile-First Experience","description":"Fast, touch-friendly UI for clients to explore treatments and schedule appointments."}]},"features":[{"title":"Service & Pricing Management","description":"Update tiered menus, service descriptions, and package pricing without touching code."},{"title":"Promotional Offers & Banners","description":"Publish limited-time holiday offers and announcement banners directly to the storefront."},{"title":"Cloudinary Image Pipeline","description":"Upload high-resolution client transformations with automated WebP compression and CDN delivery."},{"title":"Responsive Booking Inquiries","description":"Direct WhatsApp and contact triggers pre-filled with the selected salon treatment."}],"technicalImplementation":{"overview":"Engineered as a decoupled MERN application featuring token-authenticated admin endpoints, MongoDB document storage, and Cloudinary media upload pipelines.","highlights":[{"category":"Frontend","items":["React","Mobile First","Modular CSS","Touch Modals"],"details":"Crafted with bespoke luxury aesthetics and responsive tabbed service navigation."},{"category":"Backend & Media","items":["Node.js","Express","Cloudinary SDK","RESTful API"],"details":"Direct multipart file streaming to Cloudinary with secure signature validation."},{"category":"Database","items":["MongoDB","Mongoose","Atomic Updates"],"details":"Schema structure optimized for nested service categories and pricing variations."}]},"process":{"eyebrow":"WORKFLOW","heading":"From Discovery to Production","steps":[{"step":"01","name":"Discovery","description":"Researched daily operational bottlenecks of local salon owners and staff."},{"step":"02","name":"Design","description":"Crafted an elegant luxury aesthetic with clear typography and smooth layouts."},{"step":"03","name":"Build","description":"Developed the React frontend and integrated Express backend with Cloudinary uploads."},{"step":"04","name":"Refine","description":"Streamlined the admin dashboard for one-click service edits and instant publishing."}]},"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [3/7] DepthWizard (depthwizard)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'depthwizard',
  'DepthWizard',
  'AI · COMPUTER VISION',
  'An interactive computer-vision experience designed to make depth information easier to understand through an intuitive visual interface.',
  'DepthWizard provides an interactive visual playground for exploring monocular depth estimation and spatial computer vision. By connecting machine learning depth models with real-time browser canvas controls, it transforms complex depth tensors into a tactile, visual experience.',
  ARRAY['Python', 'Computer Vision', 'AI', 'React']::text[],
  'https://github.com/manul',
  'https://depthwizard.vercel.app',
  true,
  3,
  $json${"subtitle":"Interactive Computer Vision & Depth Exploration","filterCategory":"AI","accentColor":"#3B82F6","role":"AI & Frontend Developer","timeline":"4 Weeks","status":"Experiment","problem":{"eyebrow":"THE PROBLEM","heading":"Computer Vision Concepts Are Trapped In Complex Notebooks.","description":"Monocular depth estimation is foundational to modern spatial computing, yet demonstrations are typically confined to complex Python scripts or academic papers that lack accessible visual tools.","points":[{"title":"High Barrier to Entry","description":"Testing depth models usually requires local CUDA setups and Python terminal environments."},{"title":"Static Visual Output","description":"Standard grayscale depth maps fail to convey real depth gradients and spatial separation."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"Accessible, Real-Time Depth Exploration.","description":"An end-to-end interactive web application where users can test depth estimation models and manipulate depth planes with intuitive visual controls.","principles":[{"title":"Real-Time Visual Feedback","description":"Immediate graphical response when adjusting depth slicing thresholds."},{"title":"Layer Isolation","description":"Separate foreground subjects from backgrounds using interactive depth contours."}]},"features":[{"title":"Monocular Depth Visualization","description":"Generate accurate continuous depth maps from standard 2D photographs."},{"title":"Interactive Thresholding Sliders","description":"Isolate near, mid, and far depth planes dynamically using real-time sliders."},{"title":"Custom Palette Color Ramps","description":"Toggle between inferno, viridis, and custom depth gradient color maps."},{"title":"Parallax Simulation","description":"Subtle cursor-driven parallax tilt rendering pseudo-3D perspective."}],"technicalImplementation":{"overview":"Combines Python computer vision models for depth calculation with a lightweight React canvas frontend for hardware-accelerated image slicing.","highlights":[{"category":"Computer Vision Pipeline","items":["Python","OpenCV","Pretrained Depth Models","NumPy"],"details":"Normalized tensor outputs mapped to 8-bit depth channel buffers."},{"category":"Browser Rendering","items":["HTML5 Canvas","React","ImageData API","CSS Transforms"],"details":"Real-time pixel thresholding performed directly in browser memory without re-fetching."}]},"process":null,"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [4/7] PromptVault (promptvault)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'promptvault',
  'PromptVault',
  'PRODUCTIVITY · AI',
  'A focused workspace for saving, organizing, tagging, and quickly retrieving useful AI prompts.',
  'PromptVault is a personal developer tool built to solve prompt fragmentation: best system instructions, variable recipes, and few-shot templates frequently end up lost in disparate chats and scratchpad files. PromptVault brings structured taxonomy, instant fuzzy lookup, and parameter substitution into a lightning-fast keyboard-first interface.',
  ARRAY['React', 'Firebase', 'AI']::text[],
  'https://github.com/manul',
  'https://promptvault.vercel.app',
  false,
  4,
  $json${"subtitle":"Focused Workspace for AI Prompts & Templates","filterCategory":"AI","accentColor":"#F59E0B","role":"Solo Creator","timeline":"3 Weeks","status":"Active","problem":{"eyebrow":"THE PROBLEM","heading":"Valuable Prompts Get Lost In Daily Workflows.","description":"Engineering effective prompts requires experimentation and refinement. Without a centralized hub, developers lose track of their best system instructions, variable structures, and tested personas across various chat tabs and notes.","points":[{"title":"Scattered Archives","description":"Prompts saved across notes apps lack syntax highlighting, tagging, and searchability."},{"title":"Inefficient Parameter Reuse","description":"Manually editing prompt placeholders is error-prone and time-consuming."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"A Fast, Tagged Workspace Engineered For Prompts.","description":"A streamlined digital vault featuring instant fuzzy search, tag taxonomy, dynamic parameter substitution, and one-click clipboard copying.","principles":[{"title":"Zero Latency","description":"Sub-millisecond local filtering so prompts are found in seconds."},{"title":"Flexible Organization","description":"Multi-tagging and model compatibility indicators."}]},"features":[{"title":"Tag-Based Categorization","description":"Group prompts by model (GPT-4, Claude, Gemini), domain, or project tag."},{"title":"Instant Fuzzy Search","description":"Locate any prompt in milliseconds with real-time text matching across titles and bodies."},{"title":"Variable Insertion Templates","description":"Define dynamic variables like {{role}} or {{code}} for quick interactive replacement."},{"title":"Cloud Sync & Offline Mode","description":"Real-time synchronization with resilient offline access via Firebase."}],"technicalImplementation":{"overview":"React application backed by Firebase Firestore for real-time syncing and fast client-side state management.","highlights":[{"category":"Client Architecture","items":["React 18","Custom Hooks","Fuzzy Search Algorithm","Local Storage Cache"],"details":"Optimistic UI updates for immediate typing responsiveness with zero lag."},{"category":"Cloud Storage","items":["Firebase Firestore","Security Rules","Realtime Snapshot Listeners"],"details":"Sub-100ms multi-device synchronization with offline read/write queueing."}]},"process":null,"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [5/7] CampusFlow (campusflow)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'campusflow',
  'CampusFlow',
  'WEB APP · PRODUCTIVITY',
  'A lightweight student productivity platform for managing academic tasks, deadlines, events, and personal goals in one place.',
  'CampusFlow is designed specifically for university students juggling overlapping course assignments, exam timetables, extracurricular events, and semester milestones without the bloat of corporate enterprise project management software.',
  ARRAY['React', 'Node.js', 'MongoDB']::text[],
  'https://github.com/manul',
  'https://campusflow.vercel.app',
  false,
  5,
  $json${"subtitle":"Student Academic Management Platform","filterCategory":"Web Apps","accentColor":"#10B981","role":"Full-Stack Developer","timeline":"5 Weeks","status":"Prototype","problem":{"eyebrow":"THE PROBLEM","heading":"Student Schedules Are Fragmented Across Too Many Tools.","description":"Students manage deadlines on clumsy university portals, classes on separate calendar apps, and tasks on sticky notes. The lack of a unified academic overview leads to missed deadlines and unnecessary stress.","points":[{"title":"Context Switching","description":"Jumping between college portals, messaging groups, and generic calendars causes confusion."},{"title":"Too Much Setup Overhead","description":"Tools like Notion or Jira require extensive manual setup before becoming helpful."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"An Academic Command Center Designed For Focus.","description":"CampusFlow brings task prioritization, deadline countdowns, and semester roadmaps into a clean, zero-clutter interface.","principles":[{"title":"Actionable Today View","description":"Highlights what needs attention today without overwhelming with distant tasks."},{"title":"Visual Deadlines","description":"Color-coded urgency indicators keep priorities front and center."}]},"features":[{"title":"Course & Assignment Tracking","description":"Organize tasks by course, weightage, and submission deadline."},{"title":"Prioritized Task Queue","description":"Smart sorting based on urgency, difficulty, and approaching dates."},{"title":"Campus Event Calendar","description":"Keep club meetings, exams, and holidays synced in one calendar view."},{"title":"Academic Goal Progress","description":"Track semester milestones and celebrate completed assignments."}],"technicalImplementation":{"overview":"React single page application communicating with a Node.js Express backend and MongoDB database.","highlights":[{"category":"Stack Details","items":["React","Node.js","Express","MongoDB"],"details":"Optimized REST endpoints with filtering by date range, course ID, and completion status."}]},"process":null,"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [6/7] Fintech Dashboard (fintech-dashboard)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'fintech-dashboard',
  'Fintech Dashboard',
  'UI/UX · DESIGN SYSTEM',
  'A financial dashboard concept focused on turning complicated financial information into simple, actionable visual insights.',
  'Fintech Dashboard is an interface design exploration focusing on information density, visual hierarchy, and accessible data visualization for modern financial platforms. It demonstrates how complex cash flow metrics can be structured into intuitive, scannable modules.',
  ARRAY['Figma', 'UI/UX', 'Prototyping']::text[],
  'https://github.com/manul',
  'https://figma.com/@manul',
  false,
  6,
  $json${"subtitle":"Financial Dashboard & Modular Design System","filterCategory":"UI/UX","accentColor":"#8B5CF6","role":"UI/UX Designer & Prototyper","timeline":"3 Weeks","status":"Design Concept","problem":{"eyebrow":"THE PROBLEM","heading":"Financial Dashboards Are Often Cluttered and Overwhelming.","description":"Modern banking and investment dashboards often overwhelm users with high-density numerical tables, confusing micro-charts, and lack of visual focus, making everyday financial decisions stressful.","points":[{"title":"Cognitive Overload","description":"Displaying every data point simultaneously prevents users from identifying key trends."},{"title":"Poor Mobile Adaptation","description":"Desktop financial tables rarely scale gracefully down to handheld screens."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"Hierarchical, Human-Centric Financial Insights.","description":"A component-based design system prioritizing clear trend indicators, modular widgets, and high-contrast accessible visual cues.","principles":[{"title":"Clarity First","description":"Primary account health visible in less than 3 seconds."},{"title":"Progressive Disclosure","description":"High-level summaries upfront, with granular transaction breakdowns a tap away."}]},"features":[{"title":"Cash Flow Visual Analytics","description":"Interactive trendlines visualizing incoming vs. outgoing liquidity over time."},{"title":"High-Contrast Design Tokens","description":"Carefully tuned dark palette meeting WCAG AAA accessibility standards."},{"title":"Modular Widget Architecture","description":"Customizable tiles for portfolios, recent payments, and recurring bills."},{"title":"Interactive Prototype Flows","description":"High-fidelity micro-interactions for transfers, alerts, and card freezes."}],"technicalImplementation":{"overview":"Complete design system crafted in Figma featuring auto-layout components, variant sets, and responsive prototype interactions.","highlights":[{"category":"Design System Deliverables","items":["Figma Auto Layout","Design Tokens","Interactive Prototype","Component Library"],"details":"Over 40 modular UI components built with Figma Auto-Layout 5.0."}]},"process":null,"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- [7/7] AI Research Assistant (ai-research-assistant)
INSERT INTO public.projects (
  slug,
  title,
  category,
  short_description,
  description,
  technologies,
  github_url,
  demo_url,
  featured,
  sort_order,
  content
) VALUES (
  'ai-research-assistant',
  'AI Research Assistant',
  'AI · RAG · EXPERIMENT',
  'An experimental research workspace that helps users organize documents, extract useful information, and interact with their knowledge base.',
  'An experimental research assistant leveraging Large Language Models and Retrieval-Augmented Generation (RAG) to allow researchers and students to upload multi-page documents, query their contents naturally, and verify citations against original sources.',
  ARRAY['Python', 'LLM', 'RAG']::text[],
  'https://github.com/manul',
  'https://ai-research-assistant.vercel.app',
  false,
  7,
  $json${"subtitle":"Document Intelligence & Grounded Knowledge Base","filterCategory":"AI","accentColor":"#06B6D4","role":"AI Developer","timeline":"4 Weeks","status":"Research Prototype","problem":{"eyebrow":"THE PROBLEM","heading":"Synthesizing Multi-Page Technical Papers Is Time-Consuming.","description":"Academic papers and technical reports are dense and lengthy. Finding specific experimental results or cross-referencing findings across multiple documents often takes hours of manual skimming.","points":[{"title":"Information Silos","description":"Crucial information hidden across 50-page PDFs without full-text semantic search."},{"title":"LLM Hallucinations","description":"Standard LLMs invent facts when queried without grounded document context."}]},"solution":{"eyebrow":"THE SOLUTION","heading":"Grounded Document Intelligence via RAG.","description":"A vector-indexed retrieval pipeline that grounds answers strictly in user-supplied documents with exact source paragraph citations.","principles":[{"title":"Verifiable Ground Truth","description":"Every synthesized answer links directly back to the original source passage."},{"title":"Semantic Understanding","description":"Retrieval based on meaning rather than mere keyword coincidence."}]},"features":[{"title":"Document Ingestion & Chunking","description":"Intelligent PDF parsing and semantic text chunking for vector indexing."},{"title":"Retrieval-Augmented Generation (RAG)","description":"Hybrid dense vector search ensuring accurate context retrieval."},{"title":"Conversational Research Q&A","description":"Natural conversation interface supporting multi-turn analytical inquiries."},{"title":"Source Citation Extraction","description":"Highlights the exact document page and snippet supporting each insight."}],"technicalImplementation":{"overview":"Python backend utilizing vector embeddings and an LLM orchestration layer connected to a lightweight web interface.","highlights":[{"category":"AI & RAG Pipeline","items":["Python","Vector Embeddings","Cosine Similarity Search","Prompt Orchestration"],"details":"Hybrid chunking strategy preserving section headings for enhanced contextual retrieval."},{"category":"Backend Service","items":["FastAPI","Asynchronous Streaming","PDF Parsing"],"details":"Server-sent events (SSE) for real-time streaming of answer tokens and citation references."}]},"process":null,"results":null}$json$::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  short_description = EXCLUDED.short_description,
  description = EXCLUDED.description,
  technologies = EXCLUDED.technologies,
  github_url = EXCLUDED.github_url,
  demo_url = EXCLUDED.demo_url,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order,
  content = EXCLUDED.content,
  updated_at = now();

-- 4. Final verification query to display the migrated projects in the SQL Editor
SELECT slug, title, category, featured, sort_order,
       jsonb_typeof(content) as content_type,
       (content->>'subtitle') as subtitle,
       (content->'features') is not null as has_features
FROM public.projects
ORDER BY sort_order ASC;
