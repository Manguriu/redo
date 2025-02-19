import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <body className="">
      <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
