import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Three Designers | Digital Solutions",
  description:
    "Three Designers creates modern websites, mobile applications and social media solutions.",
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