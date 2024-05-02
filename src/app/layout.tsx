import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/page';
import Footer from './components/footer/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "streaming service project",
  description: "project that will find movies based on available streaming servies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}