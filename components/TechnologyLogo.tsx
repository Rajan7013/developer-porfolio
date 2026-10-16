"use client";

import { useState } from 'react';
import { CodeXml } from 'lucide-react';
import { getTechnologyLogo } from '@/lib/technology-logos';

export default function TechnologyLogo({ name, size = 'default' }: { name: string; size?: 'small' | 'default' | 'large' }) {
    const [failedSource, setFailedSource] = useState<string | null>(null);
    const src = getTechnologyLogo(name);
    const dimensions = { small: 'h-5 w-5 p-0.5', default: 'h-10 w-10 p-2', large: 'h-12 w-12 p-2.5' };

    return (
        <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white ${dimensions[size]}`}>
            {failedSource === src ? (
                <CodeXml className="h-full w-full text-slate-600" />
            ) : (
                // External SVGs render directly; labels beside each logo provide its accessible name.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" width={32} height={32} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailedSource(src)} className="h-full w-full object-contain" />
            )}
        </span>
    );
}
