// ------------------------------------------------------------------
// CONFIGURATION: Set NEXT_PUBLIC_GOOGLE_SCRIPT_URL in your .env file
// ------------------------------------------------------------------
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export interface AnalyticsData {
    action: 'analytics';
    type: 'view' | 'click';
    page: string;
    duration?: number;
    country?: string; // Will be determined by IP in backend if possible, or we can use a free IP API here
    device?: string;
}

export const trackEvent = async (data: Omit<AnalyticsData, 'action'>) => {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE') {
        console.warn('Analytics: Google Script URL not set');
        return;
    }

    try {
        // Basic device detection
        const device = /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'analytics',
                ...data,
                device,
                referrer: document.referrer,
            }),
        });
    } catch (error) {
        console.error('Analytics Error:', error);
    }
};

export const trackPageDuration = (path: string, startTime: number) => {
    const duration = Math.round((Date.now() - startTime) / 1000);
    if (duration > 0) {
        trackEvent({
            type: 'view',
            page: path,
            duration,
        });
    }
};
