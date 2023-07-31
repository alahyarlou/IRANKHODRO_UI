import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body>
        <Header />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
