import { pageMetadata } from '@/lib/seo';
import type { ReactNode } from 'react';

export const metadata = pageMetadata("About Rajan Prasaila Yadav | Full Stack AI Developer", "Meet Rajan Prasaila Yadav, a full stack AI developer and system designer building web applications, management software, and automation.", "/about");

export default function PageLayout({ children }: { children: ReactNode }) { return children; }
