// Online SVGs served by jsDelivr; aliases keep branding consistent across pages.
// Concepts without a brand use a representative Lucide symbol.
const iconIds: Record<string, string> = {
    'rest api': 'lucide/network', 'dynamic rbac': 'lucide/users-round', 'security': 'lucide/shield-check',
    'angular': 'logos/angular-icon', 'svelte': 'logos/svelte-icon',
    'auth0': 'logos/auth0-icon', 'fastapi': 'logos/fastapi-icon', 'django': 'logos/django-icon',
    'langgraph': 'simple-icons/langgraph', 'crewai': 'logos/crewai', 'llamaindex': 'lucide/network',
    'scipy': 'simple-icons/scipy', 'numpy': 'logos/numpy', 'redis': 'logos/redis',
    'elasticsearch': 'logos/elasticsearch', 'neo4j': 'logos/neo4j',
    'vector / rag database': 'lucide/database', 'git': 'logos/git-icon',
    'railway': 'logos/railway', 'render': 'simple-icons/render', 'netlify': 'logos/netlify-icon',
    'fly.io': 'logos/fly-icon', 'digitalocean': 'logos/digital-ocean-icon',
    'google cloud': 'logos/google-cloud', 'microsoft azure': 'devicon/azure',
    'hostinger': 'simple-icons/hostinger', 'namecheap': 'logos/namecheap', 'godaddy': 'simple-icons/godaddy',
    'custom authentication': 'lucide/key-round', 'email & password': 'lucide/mail',
    'role-based access control': 'lucide/users-round', 'https / tls': 'lucide/lock-keyhole',
    'pagespeed insights': 'lucide/gauge', 'core web vitals': 'lucide/activity',
    'google search console': 'logos/google-search-console', 'bing webmaster tools': 'logos/bing',
    'structured data': 'lucide/braces', 'sitemaps & robots.txt': 'lucide/workflow',
    'react': 'logos/react', 'next.js': 'logos/nextjs-icon', 'vue.js': 'logos/vue',
    'vite': 'logos/vite-icon', 'typescript': 'logos/typescript-icon',
    'javascript': 'logos/javascript', 'zustand': 'devicon/zustand',
    'recharts': 'lucide/chart-no-axes-combined', 'tailwind css': 'logos/tailwindcss-icon',
    'node.js': 'logos/nodejs-icon', 'python': 'logos/python',
    'django rest framework': 'logos/django-icon', 'resend': 'logos/resend-icon',
    'firebase': 'logos/firebase-icon', 'java': 'logos/java', 'go': 'logos/go',
    'express': 'logos/express', 'mongodb': 'logos/mongodb-icon',
    'postgresql': 'logos/postgresql', 'supabase': 'logos/supabase-icon',
    'neon': 'logos/neon-icon', 'prisma': 'logos/prisma', 'drizzle orm': 'logos/drizzle-orm-icon',
    'mysql': 'logos/mysql-icon', 'upstash redis': 'logos/upstash-icon',
    'aws s3': 'logos/aws-s3', 'cloudflare r2': 'logos/cloudflare-icon',
    'nextauth': 'lucide/shield-check', 'email/pass': 'lucide/mail',
    'google': 'logos/google-icon', 'apple id': 'logos/apple',
    'facebook': 'logos/facebook', 'github': 'logos/github-icon',
    'instagram': 'logos/instagram-icon', 'tiktok': 'logos/tiktok-icon',
    'super admin': 'lucide/crown', 'sub-super': 'lucide/user-cog',
    'admin': 'lucide/shield-check', 'sub-admin': 'lucide/shield',
    'client/user': 'lucide/user', 'public': 'lucide/globe',
    'gemini': 'logos/google-gemini-icon', 'openai': 'logos/openai-icon',
    'claude': 'logos/claude-icon', 'deepseek': 'logos/deepseek-icon',
    'groq': 'logos/groq', 'copilot': 'logos/github-copilot', 'blackbox': 'lucide/bot',
    'aws': 'logos/aws', 'docker': 'logos/docker-icon', 'kubernetes': 'logos/kubernetes',
    'github actions': 'logos/github-actions', 'cloudflare': 'logos/cloudflare-icon',
    'vercel': 'logos/vercel-icon', 'jest': 'logos/jest', 'cypress': 'logos/cypress-icon',
    'playwright': 'logos/playwright', 'rtl': 'logos/testing-library',
    'figma': 'logos/figma', 'adobe xd': 'logos/adobe-xd', 'canva': 'devicon/canva',
    'photoshop': 'logos/adobe-photoshop', 'framer motion': 'logos/framer',
    'lucide icons': 'simple-icons/lucide', 'jwt authentication': 'logos/jwt-icon',
    'zod': 'logos/zod', 'oauth & jwt': 'logos/oauth',
    'middleware guards': 'lucide/shield-check', 'audit trails': 'lucide/clipboard-list',
    'pwa': 'logos/pwa', 'lighthouse': 'logos/lighthouse', 'sentry': 'logos/sentry-icon',
    'google analytics': 'logos/google-analytics', 'css variables': 'logos/css',
    'localstorage': 'lucide/database', 'react hook form': 'simple-icons/reacthookform',
    'genkit ai': 'logos/firebase-icon', 'shadcn ui': 'simple-icons/shadcnui',
    'clerk auth': 'logos/clerk-icon', 'generative ai': 'logos/google-gemini-icon',
};

const aliases: Record<string, string> = {
    'google login': 'google',
    'fastapi (python)': 'fastapi', 'neo4j (graph)': 'neo4j', 'next.js api routes': 'next.js',
    'anthropic / claude ai': 'claude',
    'react.js': 'react', 'react native': 'react', 'react (vite)': 'react', 'react & vite': 'react',
    'next.js (app router)': 'next.js', 'next.js api routes / express': 'next.js',
    'tailwind': 'tailwind css', 'supabase postgresql': 'supabase', 'supabase vector': 'supabase',
    'supabase & neon': 'supabase', 'neon postgresql': 'neon', 'r2 storage': 'cloudflare r2',
    'google gemini': 'gemini', 'gemini ai': 'gemini', 'openai / chatgpt': 'openai',
    'claude ai': 'claude', 'zod validation': 'zod', 'pwa & service workers': 'pwa',
};

export function getTechnologyLogo(name: string): string {
    const normalized = name.toLowerCase().replace(/\s+\d+(?:\.\d+)*$/, '').trim();
    const key = aliases[normalized] || normalized;
    if (key === 'llamaindex') return 'https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/llamaindex-color.svg';
    if (key === 'nextauth') return 'https://authjs.dev/img/logo-sm.png';
    const [collection, icon] = (iconIds[key] || 'lucide/code-xml').split('/');
    if (collection === 'logos') return `https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/${icon}.svg`;
    if (collection === 'devicon') return `https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/${icon}/${icon}-original.svg`;
    if (collection === 'simple-icons') return `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${icon}.svg`;
    return `https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/${icon}.svg`;
}
