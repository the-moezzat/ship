import type {Viewport} from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import {getSEOTags} from "@/lib/seo";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const fontSans = Titillium_Web({ subsets: ["latin"], weight: ["400", "600", "700"] });

const keywords = [
  "ShipVentures",
  "ShipVentures.io",
  "Software solutions for entrepreneurs",
  "Application development for startups",
  "Enterprise software development",
  "Digital transformation solutions",
  "ShipVentures software consultancy",
  "Custom app development agency",
  "Transformative software engineering",
  "ShipVentures app developers",
  "Business application development",
  "Innovative technology solutions",
  "ShipVentures UX/UI design",
  "Digital innovation services",
  "ShipVentures tech consultancy",
  "Agile development for enterprises",
  "ShipVentures mobile apps",
  "ShipVentures web apps",
  "Scalable software for businesses",
  "ShipVentures software experts",
    "Software consulting",
    "Software development",
    "Custom software solutions",
    "Web application development",
    "Mobile app development",
    "UI/UX design services",
    "Startup app development",
    "Enterprise digital transformation",
    "Expert software engineers",
    "Software consultancy services",
    "Innovative software solutions",
    "Technology consulting",
    "Digital product development",
    "Agile software development",
    "Scalable software solutions",
    "Software architecture design",
    "Full-stack development services",
    "Cross-platform app development",
    "App prototyping",
    "MVP development"
];

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  width: "device-width",
  maximumScale: 1,
  initialScale: 1,
};

export const metadata = getSEOTags({keywords: keywords.join(', ')});

// export const metadata: Metadata = {
//   title: "Ship ventures - Turn your ideas into reality",
//   description: "Crafting High-Performance Websites with Stunning Design & Speed",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
      <Analytics />
      <SpeedInsights/>
    </html>
  );
}
