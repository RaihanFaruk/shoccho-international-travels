"use client";

import { useState } from "react";
import Image from "next/image";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

const asiaDestinations = [
  {
    id: "d1",
    tag: "বাংলাদেশ",
    title: "কক্সবাজার সমুদ্র সৈকত",
    subtitle: "বিশ্বের দীর্ঘতম প্রাকৃতিক সৈকত",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d2",
    tag: "সিলেট",
    title: "শ্রীমঙ্গল চা বাগান ও লাউয়াছড়া",
    subtitle: "সবুজের কোলে প্রশান্তির ছোঁয়া",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d3",
    tag: "মালয়েশিয়া",
    title: "কুয়ালালামপুর ও লংকাউই",
    subtitle: "আধুনিক শহর ও শান্ত দ্বীপের মিলন",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d4",
    tag: "থাইল্যান্ড",
    title: "ব্যাংকক ও পাতায়া বিচ",
    subtitle: "শপিং, কালচার ও রিফ্রেশিং ট্যুর",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  },
];

const middleEastDestinations = [
  {
    id: "d5",
    tag: "ইউএই",
    title: "দুবাই ডাউনটাউন ও ডেজার্ট",
    subtitle: "বুর্জ খলিফা, মেরিনা ক্রুজ ও সাফারি",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d6",
    tag: "তুরস্ক",
    title: "ইস্তাম্বুল ও কাপাডোকিয়া",
    subtitle: "ঐতিহাসিক অটোমান সাম্রাজ্য ও হট এয়ার বেলুন",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d7",
    tag: "মালদ্বীপ",
    title: "প্রাইভেট ওয়াটার ভিলা রিসোর্ট",
    subtitle: "স্ফটিক স্বচ্ছ নীল সমুদ্র ও প্রবাল প্রাচীর",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "d8",
    tag: "সৌদি আরব",
    title: "মক্কা ও মদিনা শরীফ যিয়ারত",
    subtitle: "পবিত্র হারামাইন শরিফাইন বরকতময় সফর",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1200&q=80",
  },
];

export function DestinationDiscovery() {
  const [activeTab, setActiveTab] = useState<"asia" | "middleEast">("asia");
  const [selectedDest, setSelectedDest] = useState<string | null>(null);

  const currentList = activeTab === "asia" ? asiaDestinations : middleEastDestinations;

  return (
    <>
      <section className="w-full bg-[#ffffff] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735c00] font-bold block">
                WORLD AT YOUR REACH
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#00453d] font-serif font-semibold mt-1">
                দেশ ও বিদেশের সেরা গন্তব্যসমূহ
              </h2>
            </div>
            
            {/* Region Filter Toggle */}
            <div className="inline-flex p-1 bg-[#ecf6f1] rounded-xl border border-[#dbe5e0]/60 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("asia")}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeTab === "asia"
                    ? "bg-[#00453d] text-white font-semibold shadow-sm"
                    : "text-[#3f4946] hover:text-[#141d1a]"
                }`}
              >
                বাংলাদেশ ও এশিয়া
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("middleEast")}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeTab === "middleEast"
                    ? "bg-[#00453d] text-white font-semibold shadow-sm"
                    : "text-[#3f4946] hover:text-[#141d1a]"
                }`}
              >
                মিডল ইস্ট ও ইউরোপ
              </button>
            </div>
          </div>

          {/* Destination Matrix Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentList.map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest.title)}
                className="relative h-72 rounded-xl overflow-hidden group shadow-sm cursor-pointer border border-[#dbe5e0]/60"
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141d1a]/90 via-[#141d1a]/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-label-sm text-label-sm text-[#ffe088] uppercase tracking-wider block mb-0.5">
                    {dest.tag}
                  </span>
                  <h4 className="font-title-lg text-lg font-serif font-bold group-hover:text-[#ffe088] transition-colors leading-snug">
                    {dest.title}
                  </h4>
                  <span className="font-body-sm text-[12px] text-[#dbe5e0] block mt-0.5">
                    {dest.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={Boolean(selectedDest)}
        onClose={() => setSelectedDest(null)}
        defaultTitle={`গন্তব্য পরামর্শ: ${selectedDest || ""}`}
        defaultCategory="ট্যুর প্যাকেজ অনুসন্ধান"
      />
    </>
  );
}
