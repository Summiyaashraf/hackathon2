import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Make sure this exists in the right location


const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Figma Hackathon",
  description: "Generated by Syed Munir Ullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        
        {children}
        
      </body>
    </html>
  );
}