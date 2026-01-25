import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import InstallPWA from "@/components/InstallPWA";
import { Poppins, Clicker_Script } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const clickerScript = Clicker_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-clicker",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajan-portfolio-iota.vercel.app"),
  title: "Rajan | Full Stack AI Developer & System Designer",
  description:
    "Rajan is a Full Stack AI Developer and System Designer building real-world, production-ready web, AI and SaaS systems.",
  keywords: [
    "Rajan Full Stack Developer",
    "Rajan AI Developer",
    "Rajan System Designer",
    "Full Stack AI Engineer India",
    "Rajan Portfolio",
    "AI Web Developer Rajan",
    "One Man Army Developer",
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
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },
  manifest: "/manifest.json",
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
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
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
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
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
                  "@type": "WebPage",
                  "name": "Rajan Portfolio - Full Stack AI Developer",
                  "url": "https://rajan-portfolio-iota.vercel.app",
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["main", "article", "h1", "h2", "p"]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} ${clickerScript.variable}`}>
        <AnalyticsTracker />
        <Navbar />
        <InstallPWA />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
