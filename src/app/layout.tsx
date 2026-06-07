import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QuoteProvider } from "@/components/quote/quote-context";
import { QuoteModal } from "@/components/quote/quote-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turing Solutions",
  description: "Building Intelligent Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuoteProvider>
          <AnimatedBackground />
          <Navbar />
          <WhatsAppFloat />
          <QuoteModal />
          {children}
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
