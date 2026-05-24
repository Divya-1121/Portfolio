import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divya | AI & ML Engineer",
  description: "Portfolio of Divya - Software Engineer & AI/ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-900 min-h-screen">{children}</body>
    </html>
  );
}
