import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSphere - Full-Stack Development Agency",
  description: "Web & Mobile Apps, AI Integration, and Blockchain Solutions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import Navbar from "@/components/Navbar";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";
import { Poppins, Clicker_Script } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${clickerScript.variable}`}>
        <AnalyticsTracker />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
