export interface Project {
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    stack: string[];
    client: string;
    year: string;
    problem: string;
    approach: string;
    architecture: string[];
    results: string[];
    images: string[];
}

export const portfolioData: Project[] = [
    {
        slug: 'edunexus-ecosystem',
        title: 'EduNexus Ecosystem',
        description: 'A comprehensive educational platform integrating student data, learning management, and AI-powered personalized path generation.',
        thumbnail: '🎓',
        stack: ['Next.js', 'Python', 'PostgreSQL', 'AI/ML'],
        client: 'EduTech Corp',
        year: '2024',
        problem: 'The client needed a scalable solution to manage over 100,000 active students while providing personalized learning experiences that adapt to individual progress.',
        approach: 'We architected a microservices-based platform using Next.js for the frontend and Python for the AI engine. The system analyzes student performance in real-time to adjust curriculum difficulty.',
        architecture: [
            'Frontend: Next.js 14 (App Router)',
            'Backend: FastAPI (Python) & Node.js',
            'Database: PostgreSQL (User Data) & Vector DB (Content)',
            'AI Engine: Custom Fine-tuned LLM Models',
        ],
        results: [
            '300% increase in student engagement',
            '40% reduction in dropout rates',
            'Seamless scaling to 500k concurrent users',
        ],
        images: ['/dashboard.png', '/analytics.png', '/mobile-view.png'],
    },
    {
        slug: 'health-assistant-ai',
        title: 'Health Assistant AI',
        description: 'An intelligent remote patient monitoring system that uses wearables data to predict potential health issues before they become critical.',
        thumbnail: '🏥',
        stack: ['React Native', 'TensorFlow', 'Node.js', 'MongoDB'],
        client: 'HealthCare Plus',
        year: '2023',
        problem: 'Healthcare providers lacked real-time visibility into patient vitals post-discharge, leading to high readmission rates and delayed interventions.',
        approach: 'We developed a cross-platform mobile app that syncs with standard medical wearables. A secure cloud backend processes vital signs using anomaly detection algorithms.',
        architecture: [
            'Mobile: React Native (iOS & Android)',
            'Cloud: AWS Serverless (Lambda)',
            'ML Pipeline: TensorFlow Serving',
            'Security: HIPAA Compliant Architecture',
        ],
        results: [
            '25% reduction in hospital readmissions',
            'Real-time alerts for critical anomalies',
            '98% patient adherence rate',
        ],
        images: ['/app-home.png', '/vitals-chart.png'],
    },
    {
        slug: 'rag-knowledge-system',
        title: 'RAG Knowledge System',
        description: 'Enterprise-grade knowledge management system allowing employees to chat naturally with internal documentation and processes.',
        thumbnail: '🧠',
        stack: ['LangChain', 'Vector DB', 'FastAPI', 'React'],
        client: 'Global Logistics Inc',
        year: '2024',
        problem: 'Employees wasted thousands of hours searching through fragmented PDF manuals, wikis, and email threads to find policy and procedure information.',
        approach: 'We implemented a Retrieval-Augmented Generation (RAG) pipeline that ingests all internal docs into a vector database, allowing a chat interface to retrieve and summarize answers.',
        architecture: [
            'Frontend: React + Tailwind',
            'Vector DB: Pinecone',
            'Orchestration: LangChain',
            'LLM: GPT-4o via Azure OpenAI',
        ],
        results: [
            '60% reduction in support ticket volume',
            'Instant answers to complex policy questions',
            'Automated onboarding for new hires',
        ],
        images: ['/chat-interface.png', '/admin-panel.png'],
    },
];
