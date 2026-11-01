import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Analytics from "@/components/Analytics";
import GoogleTag from "@/components/GoogleTag";

// preload: false so these admin-only fonts are not preloaded on public pages
// (Next otherwise adds their preload links to every route's <head>).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin",
  },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <GoogleTag />
      </head>
      <body className="min-h-full bg-zinc-100 text-zinc-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
