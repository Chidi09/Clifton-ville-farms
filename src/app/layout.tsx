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

// SEO Metadata - Comprehensive for Google Ranking & Social Sharing
export const metadata: Metadata = {
  title: {
    default: "Cliftonville Farms | Premium Peppers & Palm Oil in Ogun State",
    template: "%s | Cliftonville Farms"
  },
  description: "Nigeria's premier automated greenhouse facility in Ogun State. Specializing in premium Peppers, Palm Kernel Oil, Vegetables, Garlic, and Nursery Seedlings. Farm-to-table freshness for wholesale buyers.",
  keywords: [
    "Cliftonville Farms",
    "Peppers Nigeria",
    "Palm Kernel Oil Ogun State",
    "Greenhouse farming Nigeria",
    "Agricultural produce Ogun",
    "Wholesale peppers",
    "Palm oil processing",
    "Vegetable farm Abeokuta",
    "Garlic production Nigeria",
    "Nursery seedlings",
    "Organic farming Ogun State",
    "Agricultural export Nigeria"
  ],
  authors: [{ name: "Cliftonville Farms" }],
  creator: "Cliftonville Farms",
  publisher: "Cliftonville Farms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cliftonvillefarms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://cliftonvillefarms.com",
    siteName: "Cliftonville Farms",
    title: "Cliftonville Farms | Premium Peppers & Palm Oil in Ogun State",
    description: "Nigeria's premier automated greenhouse facility. Premium Peppers, Palm Kernel Oil, Vegetables, and Garlic from Ogun State.",
    images: [
      {
        url: "/images/pepper-farm-1.jpg",
        width: 1200,
        height: 630,
        alt: "Cliftonville Farms - Premium Pepper Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliftonville Farms | Premium Peppers & Palm Oil",
    description: "Nigeria's premier automated greenhouse facility in Ogun State. Premium agricultural produce for wholesale buyers.",
    images: ["/images/pepper-farm-1.jpg"],
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
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-verification-code",
  },
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
