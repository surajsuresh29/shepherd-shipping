import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shepherd International Logistics | Dubai Freight Forwarder Since 2004",
  description:
    "Shepherd International Logistics is a leading Dubai freight forwarding company, offering complete freight solutions with trusted Dubai freight forwarders across the UAE and worldwide since 2004.",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} antialiased scroll-pt-32`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
