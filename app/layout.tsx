import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SketchBrush | AI Powered frontend code generator from a sketch design",
  description: "SketchBrush: A Next.js application that transforms UI sketches on a virtual canvas into ready-to-use HTML and TailwindCSS code using GPT-4o.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
