import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Load fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ['400', '700'] 
});

// SEO Metadata - Crucial for Google Ranking
export const metadata: Metadata = {
  title: "Cliftonville Farms | Premium Pepper, Vegetable & Palm Kernel",
  description: "Nigeria's leading integrated farm specializing in Peppers, sustainable vegetable farming, and Palm Kernel processing.",
  keywords: "Peppers Nigeria, Palm Kernel, Vegetable Farm, Cliftonville, Agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-surface-light text-primary-dark antialiased`}>
        {/* Smooth Scroll Wrapper */}
        <SmoothScroll>
          {/* Film Grain Overlay */}
          <div className="bg-noise"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
