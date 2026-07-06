import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#090B10" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.owner} — ${siteConfig.name}`,
    template: `%s | ${siteConfig.owner}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [{ name: siteConfig.owner, url: siteConfig.url }],

  creator: siteConfig.owner,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.owner} — ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.openGraphImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.owner} — ${siteConfig.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.owner} — ${siteConfig.name}`,
    description: siteConfig.description,
    images: [siteConfig.openGraphImage],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}