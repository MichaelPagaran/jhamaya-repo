import type { Metadata } from "next";
import { SITE_META } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_META.name,
  description: SITE_META.description,
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
