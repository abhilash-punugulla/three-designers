import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Three Designers | Web Design & Website Development",

  description:
    "Three Designers creates professional websites, web applications, mobile apps and digital solutions for businesses, creators and brands.",

  applicationName: "Three Designers",

  authors: [
    {
      name: "Three Designers",
    },
  ],

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
    },
  },

  openGraph: {
    title: "Three Designers | Web Design & Website Development",

    description:
      "Professional web design, website development, web applications, mobile apps and digital solutions by Three Designers.",

    url: "https://threedesigner.in",

    siteName: "Three Designers",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Three Designers | Web Design & Website Development",

    description:
      "Professional web design, website development, web applications and digital solutions by Three Designers.",
  },

  metadataBase: new URL("https://threedesigner.in"),
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