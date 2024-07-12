import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
config.autoAddCss = false;

import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
