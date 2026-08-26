import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://threedesigner.in"),

  title: {
    default: "Three Designers | Web Design, Websites, Apps & Digital Solutions",
    template: "%s | Three Designers",
  },

  description:
    "Three Designers creates professional websites, web applications, mobile apps and social media solutions for businesses, creators and brands.",

  applicationName: "Three Designers",

  keywords: [
    "Three Designers",
    "Three Designer",
    "web designer",
    "web design",
    "website designer",
    "website development",
    "website design company",
    "web design services",
    "business website",
    "professional website design",
    "mobile app development",
    "web app development",
    "social media management",
    "digital solutions",
    "website designer India",
    "web designer India",
  ],

  authors: [{ name: "Three Designers" }],
  creator: "Three Designers",
  publisher: "Three Designers",

  alternates: {
    canonical: "https://threedesigner.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://threedesigner.in",
    siteName: "Three Designers",
    title: "Three Designers | Web Design, Websites, Apps & Digital Solutions",
    description:
      "Professional websites, web apps, mobile apps and social media solutions for businesses, creators and brands.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Three Designers | Web Design & Digital Solutions",
    description:
      "Professional websites, apps, web applications and social media solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}