import { pageMetadata } from '@/lib/seo';
import type { ReactNode } from 'react';

export const metadata = pageMetadata("Web Development, AI & DevOps Services | Rajan", "Web development, management software, AI agents, WhatsApp chatbots, email automation, DevOps, system architecture, and technical SEO services.", "/services");

export default function PageLayout({ children }: { children: ReactNode }) { return children; }
