'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { trackPageDuration } from '@/lib/analytics';

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const startTimeRef = useRef(Date.now());
    const pathRef = useRef(pathname);

    useEffect(() => {
        // When path changes:
        // 1. Track duration of PREVIOUS page
        const prevPath = pathRef.current;
        const duration = Math.round((Date.now() - startTimeRef.current) / 1000);

        if (duration > 0) {
            trackPageDuration(prevPath, startTimeRef.current);
        }

        // 2. Reset timer and path for NEW page
        startTimeRef.current = Date.now();
        pathRef.current = pathname;

        // Optional: Track "view" event immediately for the new page?
        // We track duration on exit, but we could also track entry.
        // For simplicity, let's just track duration which implies a view.

    }, [pathname]);

    // Handle component unmount (e.g. closing tab)
    useEffect(() => {
        return () => {
            const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
            if (duration > 0 && pathRef.current) {
                // Note: unmount fetch might be cancelled by browser in some cases.
                // Navigator.sendBeacon is better but standard fetch with keepalive: true works too.
                // Our lib uses no-cors fetch which is simple.
                trackPageDuration(pathRef.current, startTimeRef.current);
            }
        };
    }, []);

    return null;
}
