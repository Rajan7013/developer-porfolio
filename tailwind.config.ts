import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B0F1A",
                card: "#111827",
                accent: "#3B82F6",
                "text-primary": "#FFFFFF",
                "text-secondary": "#9CA3AF",
            },
            borderRadius: {
                DEFAULT: "12px",
            },
            spacing: {
                "section-desktop": "96px",
                "section-mobile": "64px",
            },
            maxWidth: {
                content: "1200px",
            },
            screens: {
                mobile: "375px",
                tablet: "768px",
                desktop: "1440px",
            },
            gridTemplateColumns: {
                "12": "repeat(12, minmax(0, 1fr))",
            },
            gap: {
                gutter: "24px",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
