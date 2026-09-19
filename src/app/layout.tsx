import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস | Shoccho International Travels",
  description:
    "পবিত্র হজ, ওমরাহ কাফেলা, আধুনিক ফ্লাইট বুকিং ও বিশ্বস্ত এম্বাসি ভিসা প্রসেসিং - স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস, জয়তুন প্লাজা, নবীনগর, সাভার, ঢাকা।",
  keywords: [
    "Shoccho International Travels",
    "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস",
    "Hajj",
    "Umrah",
    "Visa Processing",
    "Air Ticket",
    "Savar Dhaka",
  ],
};

import { PlatformProvider } from "@/context/PlatformContext";
import { BookingFlowModal } from "@/components/booking/BookingFlowModal";
import { PackageCompareDrawer } from "@/components/comparison/PackageCompareDrawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface font-body text-on-surface antialiased overflow-x-hidden">
        <PlatformProvider>
          {children}
          <BookingFlowModal />
          <PackageCompareDrawer />
        </PlatformProvider>
      </body>
    </html>
  );
}

