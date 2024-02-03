import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./NextAuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homepage",
  description: "Home of 411095",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}><NextAuthProvider>{children}</NextAuthProvider></body>
    </html>
  );
}
