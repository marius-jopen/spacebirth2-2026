import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export const metadata: Metadata = {
  title: "Spacebirth 2",
  description:
    "After the big success of Spacebirth, THE PEOPLE° decided to produce another cult movie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen flex flex-col">
        <Intro />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
