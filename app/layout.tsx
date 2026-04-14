import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./runtime-shims";
import "./globals.css";
import { MotionSystem } from "./motion-system";
import { MagneticCursor } from "./magnetic-cursor";
import { ScrollProgress } from "./scroll-progress";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Herbs Atelier — Luxury Herbal Brand Story",
  description:
    "A luxury herbal brand story told through editorial layouts, botanical palettes, and immersive motion. Discover herbal rituals shaped like quiet cinema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <MotionSystem />
        <MagneticCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
