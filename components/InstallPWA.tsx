"use client";
import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

interface InstallPromptEvent extends Event {
    prompt(): Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState<InstallPromptEvent | null>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handler = (event: Event) => {
            event.preventDefault();
            setDeferredPrompt(event as InstallPromptEvent);
            setShow(true);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const install = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShow(false);
        }
    };

    return (
        <>
            {show && (
                <div
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 md:w-auto"
                >
                    <div className="bg-white dark:bg-card border border-bg-50/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 rounded-2xl flex items-center gap-4 justify-between backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-skin/10 rounded-xl text-skin">
                                <Download size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-text-primary">Install App</p>
                                <p className="text-xs text-text-secondary">Add to Home Screen</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShow(false)}
                                className="p-2 hover:bg-bg-50 rounded-full text-text-secondary transition-colors"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </button>
                            <button
                                onClick={install}
                                className="px-4 py-2 bg-skin text-white text-sm font-bold rounded-full shadow-lg shadow-skin/20 hover:scale-105 transition-transform"
                            >
                                Install
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
