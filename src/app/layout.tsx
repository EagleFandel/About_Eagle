import type { Metadata } from "next";
import { Syne, Noto_Sans_SC, IBM_Plex_Mono } from "next/font/google";
import { SiteProvider } from "@/components/providers/site-context";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"]
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"]
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Xuancan Zhao | Future Craft",
  description: "Future Craft personal website for AI/XR/full-stack builder Xuancan Zhao."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${syne.variable} ${noto.variable} ${plex.variable}`}>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
