export interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveLink?: string;
    githubLink?: string;
    category: string;
    icon: 'business' | 'health' | 'ai' | 'school' | 'education' | 'finance' | 'tasks';
    status?: string;
    highlights?: string[];
}

const newProjects: Project[] = [
    {
        title: 'PeopleOS — Corporate Management',
        description: 'A company management web app bringing people, payroll, operations, and platform administration into one workspace, with organization-admin and super-admin dashboards.',
        techStack: ['Next.js', 'Go', 'Git', 'GitHub', 'PostgreSQL', 'REST API', 'Dynamic RBAC', 'Google Login', 'Railway', 'Security'],
        liveLink: 'https://peopleos-stag.cbtspv.com/',
        category: 'Business Management', icon: 'business', status: 'Public website · Staging',
        highlights: ['Employee directory, hiring, onboarding, benefits, departments, and hierarchy', 'Schedules, attendance, timesheets, leave, payroll, tax, and appraisals', 'Tasks, assets, inventory, procurement, approvals, and announcements', 'Organization plans, billing, analytics, audit logs, roles, and permissions'],
    },
    {
        title: 'FinanceOS — Expense Tracker',
        description: 'A personal finance app for tracking income, expenses, budgets, and account transfers, with spending analytics, downloadable reports, and an installable PWA.',
        techStack: ['React', 'TypeScript', 'Vite', 'Django REST Framework', 'Supabase PostgreSQL', 'Prisma', 'Recharts', 'PWA'],
        liveLink: 'https://expensive-tracker-chi-three.vercel.app/',
        githubLink: 'https://github.com/Rajan-Prasaila-Yadav/expensive-tracker',
        category: 'Finance', icon: 'finance', status: 'Live app',
        highlights: ['Category budgets and multi-account transaction tracking', 'Cash-flow charts, report exports, and security audit trails'],
    },
    {
        title: 'ExamPrep Pro',
        description: 'An exam preparation and learning platform for managing batches, subjects, video lessons, notes, and practice tests with configurable marking and student performance analytics.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Zustand', 'Neon PostgreSQL', 'Drizzle ORM', 'Upstash Redis', 'Cloudflare R2', 'Resend'],
        liveLink: 'https://exm-prep.vercel.app/',
        githubLink: 'https://github.com/Rajan-Prasaila-Yadav/exm-prep',
        category: 'Education', icon: 'education', status: 'Live app',
        highlights: ['Batch-based learning, content access controls, and mock exams', 'Google OAuth, role permissions, email verification, and audit logs'],
    },
    {
        title: 'EduCore — School Management',
        description: 'A school ERP prototype with student and staff records, academic planning, attendance, exams, and fee workflows. Demo records are stored locally in the browser.',
        techStack: ['Next.js', 'React', 'JavaScript', 'CSS Variables', 'LocalStorage'],
        liveLink: 'https://scl-sooty.vercel.app/',
        githubLink: 'https://github.com/Rajan-Prasaila-Yadav/scl',
        category: 'Education', icon: 'school', status: 'UI prototype',
        highlights: ['Class schedules, student fees, receipts, and printable reports', 'Theme customization and role previews; backend integration is future work'],
    },
    {
        title: 'WorkLog Pro — Company Task Management',
        description: 'An in-development project for organizing company tasks, employee directories, department workflows, and audit reporting. Explore the source and project documentation on GitHub.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Prisma', 'PostgreSQL'],
        githubLink: 'https://github.com/Rajan-Prasaila-Yadav/company-task-management',
        category: 'Task Management', icon: 'tasks', status: 'In development · Not deployed',
    },
];

const existingProjects: Project[] = [
    {
        title: 'Consultancy Platform',
        description: 'A full-stack consultancy platform with user management, secure authentication, and seamless data flow between frontend and backend.',
        techStack: ['Next.js 16', 'Supabase', 'Drizzle ORM', 'Tailwind CSS', 'Framer Motion', 'Zod', 'React Hook Form'],
        liveLink: 'https://www.pinnaclenepal.org/',
        category: 'Full Stack',
        icon: 'business',
    },
    {
        title: 'Health Assistant AI',
        description: 'An AI-powered health assistant that provides intelligent responses and basic symptom guidance using generative AI.',
        techStack: ['Next.js 15', 'Genkit AI', 'Firebase', 'Tailwind CSS', 'ShadCN UI'],
        liveLink: 'https://health-assistant-ai-ashen.vercel.app/',
        category: 'AI Application',
        icon: 'health',
    },
    {
        title: 'DocMind AI / QA System',
        description: 'An enterprise-grade RAG platform with Voice Input, Multi-language support, and document-grounded answers from uploaded documents.',
        techStack: ['React (Vite)', 'Tailwind CSS', 'Clerk Auth', 'Supabase Vector', 'Gemini AI', 'Python'],
        liveLink: 'https://rajan-docai.vercel.app/',
        category: 'AI / RAG',
        icon: 'ai',
    },
    {
        title: 'School Demo Platform',
        description: 'A demo school management website showcasing information pages, structure, and basic administrative features.',
        techStack: ['Next.js 16', 'Tailwind CSS', 'Framer Motion'],
        liveLink: 'https://bfps-ruddy.vercel.app/',
        category: 'Educational',
        icon: 'school',
    },
    {
        title: 'College Portal with AI',
        description: 'A modern education portal with generative AI integration, authentication, and cloud file storage.',
        techStack: ['Next.js 16', 'Firebase', 'Clerk Auth', 'Generative AI', 'AWS S3'],
        liveLink: 'https://edu-svcet.vercel.app/',
        category: 'Educational / AI',
        icon: 'education',
    },
];

export const portfolioData: Project[] = [...newProjects, ...existingProjects];
