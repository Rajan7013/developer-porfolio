import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-black-900)",
                card: "var(--bg-black-100)",
                accent: "var(--skin-color)",
                skin: "var(--skin-color)",
                "text-primary": "var(--text-black-900)",
                "text-secondary": "var(--text-black-700)",
                "bg-50": "var(--bg-black-50)",
            },
            borderRadius: {
                DEFAULT: "12px",
            },
            spacing: {
                "section-desktop": "60px",
                "section-mobile": "40px",
            },
            maxWidth: {
                content: "1200px",
            },
            fontFamily: {
                sans: ["var(--font-poppins)", "sans-serif"],
                script: ["var(--font-clicker)", "cursive"],
            },
        },
    },
    plugins: [],
};

export default config;
