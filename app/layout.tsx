import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "فروش اینترنتی محصولات ایران خودرو",
  description:
    "وب سایت و سیستم فروش اینترنتی جدید فروش محصولات ایرانخودرو - پیش فروش ، فروش نقدی ، شرایط فروش.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-50">
        <Header />
        <main className="container mx-auto min-h-screen">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
