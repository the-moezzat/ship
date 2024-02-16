import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fontSans = Titillium_Web({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Ship ventures - Turn your ideas into reality",
  description: "Crafting High-Performance Websites with Stunning Design & Speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
