import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Dev flow",
  description: "Functional test report platform.",
  icons: {
    icon: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider>
          <ThemeProvider>
            <h1>This is a H1 tag</h1>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
