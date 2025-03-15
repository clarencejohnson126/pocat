import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pocat - Hochwertige Bindungen zum kleinen Preis | Heidelberg",
  description: "Pocat bietet hochwertige Bindungen zum kleinen Preis in Heidelberg. Konfigurieren Sie Ihre Covers und wählen Sie aus verschiedenen Bindungsarten.",
  keywords: "Pocat, Bindungen, Heidelberg, Schreibwaren, Drucken, Covers, Bachelorarbeit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
