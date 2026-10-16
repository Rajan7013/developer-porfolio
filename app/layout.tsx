import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import InstallPWA from "@/components/InstallPWA";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Only the five brand letters are needed from this display font.
const clickerScript = localFont({
  src: "./fonts/brand.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-clicker",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajan-portfolio-iota.vercel.app"),
  title: "Rajan | Full Stack AI Developer & System Designer",
  description:
    "Rajan is a Full Stack AI Developer and System Designer building real-world, production-ready web, AI and SaaS systems.",
  twitter: { card: 'summary_large_image', title: 'Rajan | Full Stack AI Developer & System Designer', description: 'Web applications, management software, AI automation, and system architecture.', images: ['/og-image.png'] },
  keywords: [
    "Rajan Full Stack Developer",
    "Rajan AI Developer",
    "Rajan System Designer",
    "Full Stack AI Engineer India",
    "Rajan Portfolio",
    "AI Web Developer Rajan",
  ],
  authors: [{ name: "Rajan Prasaila Yadav" }],
  openGraph: {
    title: "Rajan | Full Stack AI Developer",
    description:
      "Building real-world systems across AI, finance and education.",
    url: "https://rajan-portfolio-iota.vercel.app",
    siteName: "Rajan Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajan Portfolio - Full Stack AI Developer",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Rajan",
    startupImage: [
      "/icons/apple-touch-icon.png",
    ]
  },
  alternates: {
    canonical: "https://rajan-portfolio-iota.vercel.app",
  },
  verification: {
    google: "39Uk7SyWWSHflx02-6UUBub3JFHJ7SmIEgwLeuVpiOY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Rajan Prasaila Yadav",
                  "url": "https://rajan-portfolio-iota.vercel.app",
                  "sameAs": [
                    "https://www.linkedin.com/in/rajan-prasaila-yadav-969a5b32b/",
                    "https://github.com/Rajan7013"
                  ],
                  "jobTitle": "Full Stack AI Developer & System Designer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Independent"
                  },
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Full Stack Development",
                    "System Design",
                    "Next.js",
                    "Firebase",
                    "Google Gemini",
                    "DevOps"
                  ],
                  "description": "Rajan is a Full Stack AI Developer and System Designer building real-world, production-ready systems across AI, education, and finance."
                },
                {
                  "@type": "WebSite",
                  "name": "Rajan Portfolio - Full Stack AI Developer",
                  "url": "https://rajan-portfolio-iota.vercel.app"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} ${clickerScript.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <AnalyticsTracker />
        <Navbar />
        <InstallPWA />
        {children}
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
