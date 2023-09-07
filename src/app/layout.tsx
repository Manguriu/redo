import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Manguriu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000]/80 ">
        <Header />
        {children}
      </body>
    </html>
  );
}
