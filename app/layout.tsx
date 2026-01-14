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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
