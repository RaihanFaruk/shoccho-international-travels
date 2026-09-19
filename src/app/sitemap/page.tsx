import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";

export const metadata: Metadata = {
  title: "সাইটম্যাপ (Sitemap) | স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস",
  description:
    "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস প্ল্যাটফর্মের সকল পেজ, প্যাকেজ, ওমরাহ কাফেলা, ভিসা তথ্য ও আইনি পেজের পূর্ণাঙ্গ তালিকা।",
};

const sitemapSections = [
  {
    title: "মূল পেজসমূহ (Core Platform)",
    links: [
      { name: "হোম পেজ (Home Portal)", href: "/" },
      { name: "আমাদের সম্পর্কে ও ভিশন-মিশন (About Us)", href: "/about" },
      { name: "প্যাকেজ সমূহ ও ফিল্টারিং (All Packages)", href: "/packages" },
      { name: "ব্যবহারকারী ড্যাশবোর্ড (User Dashboard)", href: "/dashboard" },
      { name: "এডমিন ব্যাক-অফিস ডেমো (Admin Portal)", href: "/admin" },
    ],
  },
  {
    title: "পবিত্র হজ ও ওমরাহ কাফেলা (Hajj & Umrah)",
    links: [
      { name: "হজ ও ওমরাহ পোর্টাল (Hajj & Umrah)", href: "/hajj-umrah" },
      { name: "ফ্ল্যাগশিপ এক্সক্লুসিভ ওমরাহ প্যাকেজ", href: "/packages/pkg-umrah-flagship" },
      { name: "রমজান স্পেশাল ওমরাহ কাফেলা", href: "/packages/pkg-umrah-ramadan" },
      { name: "ইকোনমি ওমরাহ কাফেলা", href: "/packages/pkg-umrah-economy" },
    ],
  },
  {
    title: "আন্তর্জাতিক ট্যুর ও ভিসা (Tours & Visa)",
    links: [
      { name: "ভিসা প্রসেসিং কনসিয়ার্জ (Visa Portal)", href: "/visa" },
      { name: "জনপ্রিয় পর্যটন গন্তব্যসমূহ (Destinations)", href: "/destinations" },
      { name: "তুর্কিয়ে ও বসফরাস ক্রুজ সফর", href: "/packages/pkg-turkey-cruise" },
      { name: "মালদ্বীপ ওয়াটার ভিলা রিসোর্ট", href: "/packages/pkg-maldives-luxury" },
      { name: "দুবাই লাক্সারি ডেজার্ট সাফারি", href: "/packages/pkg-dubai-safari" },
    ],
  },
  {
    title: "গাইডেন্স ও আইনি পাতা (Guidance & Legal)",
    links: [
      { name: "মোয়াল্লিম ডিরেক্টরি ও আলেম প্যানেল", href: "/muallims" },
      { name: "কমিউনিটি ও ভ্রমণ অভিজ্ঞতা", href: "/community" },
      { name: "গোপনীয়তা নীতি (Privacy Policy)", href: "/privacy" },
      { name: "শর্তাবলী ও নিয়মাবলী (Terms of Service)", href: "/terms" },
      { name: "অফিস লোকেশন ও গুগল ম্যাপস", href: "/#location" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between font-sans text-[#141d1a]">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#3f4946] mb-8 font-sans">
            <Link href="/" className="hover:text-[#00453d] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>হোম</span>
            </Link>
            <span className="text-[#bec9c5]">/</span>
            <span className="text-[#00453d] font-semibold">সাইটম্যাপ</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ecf6f1] text-[#00453d] text-xs font-bold rounded-full mb-4">
              <span className="material-symbols-outlined text-sm">account_tree</span>
              <span>ওয়েবসাইট স্ট্রাকচার ও নেভিগেশন</span>
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d] mb-3">
              স্বচ্ছ ট্রাভেলস সাইটম্যাপ ডিরেক্টরি
            </h1>
            <p className="text-xs sm:text-sm text-[#3f4946] font-sans">
              প্ল্যাটফর্মের সকল সার্ভিস, প্যাকেজ এবং আইনি নির্দেশিকা এক নজরে ব্রাউজ করুন।
            </p>
          </div>

          {/* Grid of Sitemap Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitemapSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dbe5e0] flex flex-col justify-between"
              >
                <div>
                  <h2 className="font-title-lg text-lg font-serif font-bold text-[#00453d] mb-4 pb-2 border-b border-[#ecf6f1] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                    <span>{sec.title}</span>
                  </h2>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {sec.links.map((item, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={item.href}
                          className="text-[#3f4946] hover:text-[#00453d] transition-colors flex items-center gap-2 group"
                        >
                          <span className="material-symbols-outlined text-xs text-[#735c00] transition-transform group-hover:translate-x-1">
                            arrow_forward
                          </span>
                          <span className="group-hover:underline">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
