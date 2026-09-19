"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";

interface RichDestination {
  id: string;
  nameBn: string;
  nameEn: string;
  countryBn: string;
  region: "middle_east" | "asia" | "europe" | "domestic";
  description: string;
  imageUrl: string;
  popularFor: string[];
  startingPriceBn: string;
  featured: boolean;
  packageLink?: string;
}

const destinations: RichDestination[] = [
  {
    id: "dest-makkah",
    nameBn: "পবিত্র মক্কা ও মদিনা",
    nameEn: "Makkah & Madinah",
    countryBn: "সৌদি আরব",
    region: "middle_east",
    description: "বিশ্ব মুসলিমের প্রাণের স্পন্দন। কাবা প্রাঙ্গণে তাওয়াফ, মসজিদে নববীতে রওজা শরিফ জেয়ারত ও ঐতিহাসিক বদর-ওহুদের প্রান্তর দর্শন।",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIq9eSujUJd82ffTYoElFBw0zOYRJogMo09ClqHngcpBl-S645omjyJEWNgiDTVmzr-suJrx8hcvSKutW7w0DgvB1uabi3WAmDlaQnvVGXW58MilHMrpwV-ZyI2RfVTZbt1RMxnxLTHiy35PEwc67op8luh4F0EAKQY6RxAdXIEhG-4cqCgpXmrDYpIeVRjGmO7fIyZA9QGl6txdNLgFmT-AwsHHiV3GZiO52DMFxAgkikQbnD7SIp",
    popularFor: ["পবিত্র ওমরাহ", "হজ কাফেলা", "রওজা শরিফ জেয়ারত", "জাবালে নূর"],
    startingPriceBn: "৳ ১,১৫,০০০+",
    featured: true,
    packageLink: "/packages/pkg-umrah-flagship",
  },
  {
    id: "dest-dubai",
    nameBn: "দুবাই ও আবুধাবি",
    nameEn: "Dubai & Abu Dhabi",
    countryBn: "সংযুক্ত আরব আমিরাত",
    region: "middle_east",
    description: "আধুনিক স্থাপত্যের বিস্ময়, মরু সাফারি, বুর্জ খলিফা ও শেখ জায়েদ গ্র্যান্ড মসজিদের রাজকীয় সৌন্দর্য।",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    popularFor: ["বুর্জ খলিফা", "মরু সাফারি", "মেরিনা ক্রুজ", "মিরাকল গার্ডেন"],
    startingPriceBn: "৳ ৭৮,৫০০+",
    featured: true,
    packageLink: "/packages/pkg-dubai-safari",
  },
  {
    id: "dest-turkey",
    nameBn: "ইস্তাম্বুল ও ক্যাপাডোসিয়া",
    nameEn: "Istanbul & Cappadocia",
    countryBn: "তুরস্ক",
    region: "europe",
    description: "উসমানীয় সাম্রাজ্যের ঐতিহ্যবাহী স্থাপনা, বসফরাস প্রণালীর ক্রুজ ও ক্যাপাডোসিয়ার হট এয়ার বেলুন।",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    popularFor: ["হট এয়ার বেলুন", "হায়া সোফিয়া", "বসফরাস ক্রুজ", "গ্র্যান্ড বাজার"],
    startingPriceBn: "৳ ১,৩৫,০০০+",
    featured: true,
    packageLink: "/packages/pkg-turkey-cruise",
  },
  {
    id: "dest-thailand",
    nameBn: "ব্যাংকক ও ফুকেট",
    nameEn: "Bangkok & Phuket",
    countryBn: "থাইল্যান্ড",
    region: "asia",
    description: "ফিরোজা রঙের সমুদ্র সৈকত, জেমস বন্ড আইল্যান্ড, ভাসমান বাজার ও বিশ্বখ্যাত শপিং মল।",
    imageUrl: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80",
    popularFor: ["ফি ফি আইল্যান্ড", "স্পিডবোট রাইড", "ভাসমান বাজার", "নাইট মার্কেট"],
    startingPriceBn: "৳ ৫৮,৫০০+",
    featured: true,
    packageLink: "/packages?category=international",
  },
  {
    id: "dest-malaysia",
    nameBn: "কুয়ালালামপুর ও লংকাউই",
    nameEn: "Kuala Lumpur & Langkawi",
    countryBn: "মালয়েশিয়া",
    region: "asia",
    description: "পেট্রোনাস টুইন টাওয়ার, বাতু গুহা ও লংকাউই দ্বীপের কেবল কার এবং স্কাই ব্রিজ।",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    popularFor: ["টুইন টাওয়ার", "লংকাউই স্কাইক্যাব", "বাতু কেভস", "আইল্যান্ড হপিং"],
    startingPriceBn: "৳ ৫৪,০০০+",
    featured: false,
    packageLink: "/packages?category=international",
  },
  {
    id: "dest-kashmir",
    nameBn: "কাশ্মীর ও গুলমার্গ",
    nameEn: "Kashmir & Gulmarg",
    countryBn: "ভারত",
    region: "asia",
    description: "ডাল লেকের হাউসবোট, গুলমার্গের বরফঢাকা চূড়ায় গন্ডোলা কেবল কার ও টিউলিপ গার্ডেন।",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    popularFor: ["শিকারা রাইড", "গুলমার্গ গন্ডোলা", "বেতাব ভ্যালি", "পাহেলগাম"],
    startingPriceBn: "৳ ৬৫,০০০+",
    featured: true,
    packageLink: "/packages/pkg-kashmir-paradise",
  },
  {
    id: "dest-sajek",
    nameBn: "সাজেক ভ্যালি ও খাগড়াছড়ি",
    nameEn: "Sajek Valley",
    countryBn: "বাংলাদেশ",
    region: "domestic",
    description: "পাহাড়ের বুকে সাদা মেঘের মায়াবী খেলা, কংলাক পাহাড়ের সূর্যাস্ত ও রিছাং ঝর্ণা।",
    imageUrl: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80",
    popularFor: ["মেঘের রাজ্য", "কংলাক পাহাড়", "চান্দের গাড়ি", "আলুটিলা গুহা"],
    startingPriceBn: "৳ ৯,৫০০+",
    featured: false,
    packageLink: "/packages/pkg-sajek-valley",
  },
  {
    id: "dest-coxsbazar",
    nameBn: "কক্সবাজার সমুদ্র সৈকত",
    nameEn: "Cox's Bazar",
    countryBn: "বাংলাদেশ",
    region: "domestic",
    description: "বিশ্বের দীর্ঘতম অবিচ্ছিন্ন বালুকাময় সমুদ্র সৈকত ও হিমছড়ির পাহাড়ি পথ।",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    popularFor: ["সূর্যাস্ত", "ইনানী বিচ", "মেরিন ড্রাইভ", "৫-স্টার রিসোর্ট"],
    startingPriceBn: "৳ ১৪,৫০০+",
    featured: false,
    packageLink: "/packages?category=domestic",
  },
];

export default function DestinationsPage() {
  const [regionFilter, setRegionFilter] = useState<"all" | "middle_east" | "asia" | "europe" | "domestic">("all");

  const filtered = destinations.filter((d) =>
    regionFilter === "all" ? true : d.region === regionFilter
  );

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
              গন্তব্য এক্সপ্লোরার
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight">
              বিশ্বজুড়ে আপনার স্বপ্নের গন্তব্য
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] mt-3 leading-relaxed">
              পবিত্র তীর্থস্থান থেকে শুরু করে অপূর্ব প্রাকৃতিক সৈকত ও রাজকীয় নগরী—আপনার পছন্দের গন্তব্য খুঁজে নিন।
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: "all", label: "সকল গন্তব্য" },
              { id: "middle_east", label: "মিডল ইস্ট (সৌদি ও আমিরাত)" },
              { id: "asia", label: "সাউথইস্ট এশিয়া ও ভারত" },
              { id: "europe", label: "তুরস্ক ও ইউরোপ" },
              { id: "domestic", label: "বাংলাদেশ স্পেশাল" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRegionFilter(tab.id as "all" | "middle_east" | "asia" | "europe" | "domestic")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  regionFilter === tab.id
                    ? "bg-[#00453d] text-white shadow-md"
                    : "bg-white text-[#3f4946] hover:bg-[#ecf6f1] border border-[#dbe5e0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dbe5e0] flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={dest.imageUrl}
                      alt={dest.nameBn}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#00453d] font-label-sm text-[11px] font-bold rounded-full shadow">
                      {dest.countryBn}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="font-headline-sm text-xl font-bold font-serif">
                        {dest.nameBn}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="font-body-sm text-xs text-[#3f4946] line-clamp-3">
                      {dest.description}
                    </p>

                    <div>
                      <span className="text-[11px] text-[#735c00] font-bold block mb-1">
                        জনপ্রিয় আকর্ষণ:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dest.popularFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#f2fcf6] text-[#00453d] text-[10px] font-semibold rounded border border-[#dbe5e0]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#dbe5e0] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#3f4946] block">প্যাকেজ শুরু</span>
                      <span className="font-headline-md text-lg text-[#00453d] font-bold font-serif">
                        {dest.startingPriceBn}
                      </span>
                    </div>
                    <Link
                      href={dest.packageLink || "/packages"}
                      className="px-4 py-2 bg-[#00453d] hover:bg-[#075e54] text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      প্যাকেজ দেখুন ➔
                    </Link>
                  </div>
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
