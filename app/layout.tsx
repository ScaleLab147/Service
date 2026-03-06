import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nailart AI",
  description: "AI-Powered YouTube Thumbnail Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${indieFlower.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
