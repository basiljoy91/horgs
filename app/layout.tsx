import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./runtime-shims";
import "./globals.css";
import { MotionSystem } from "./motion-system";

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
  title: "Herbs Atelier",
  description:
    "A luxury herbal brand story told through editorial layouts, botanical palettes, and immersive motion.",
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
        {children}
      </body>
    </html>
  );
}
