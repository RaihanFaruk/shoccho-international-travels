"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

export function FeaturedPackages() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("পবিত্র ওমরাহ ও হজ ফ্ল্যাগশিপ কাফেলা");
  const [selectedCategory, setSelectedCategory] = useState("পবিত্র সফর");

  const handleBook = (title: string, category: string) => {
    setSelectedTitle(title);
    setSelectedCategory(category);
    setInquiryOpen(true);
  };

  return (
    <>
      <section className="w-full bg-[#ffffff] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="featured-journeys">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block">
                EXQUISITE EXPERIENCES
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#00453d] font-serif font-bold mt-1">
                পবিত্র সফর ও অবিস্মরণীয় অভিজ্ঞতা
              </h2>
            </div>
            <p className="font-body-md text-sm text-[#3f4946] max-w-md leading-relaxed">
              আমাদের প্রতিটি ভ্রমণ প্যাকেজ সাজানো হয়েছে গভীর গবেষণা, নির্ভরযোগ্য আরাম এবং স্বচ্ছতার সর্বোচ্চ নীতি মেনে।
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large Magazine Hero Tile (7 Cols) */}
            <div className="lg:col-span-7 bg-[#ecf6f1] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group border border-[#dbe5e0]/80">
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80"
                  alt="পবিত্র কাবা প্রাঙ্গণে ওমরাহ ও হজ কাফেলার প্রার্থনার দৃশ্য"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141d1a]/95 via-[#141d1a]/40 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-[#ffffff] text-[#735c00] font-label-sm text-xs rounded-full font-bold shadow-md">
                    ফ্ল্যাগশিপ কাফেলা
                  </span>
                  <span className="px-3 py-1 bg-[#00453d] text-white font-label-sm text-xs rounded-full font-semibold shadow-md">
                    রমজান স্পেশাল
                  </span>
                  <span className="px-3 py-1 bg-[#fed65b] text-[#745c00] font-label-sm text-xs rounded-full font-bold shadow-md">
                    সীমিত সিট বাকি
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-label-sm text-xs text-[#ffe088] uppercase tracking-widest font-semibold block mb-1">
                    HAJJ &amp; UMRAH MASTERPIECE
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-serif font-bold leading-tight">
                    পবিত্র ওমরাহ ও হজের পূর্ণাঙ্গ মানসিক ও প্রশাসনিক প্রস্তুতি
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
                <p className="font-body-md text-sm text-[#3f4946] mb-6 leading-relaxed">
                  স্বচ্ছ ট্রাভেলস দিচ্ছে সরাসরি নন-স্টপ এয়ার টিকিট, ক্লক টাওয়ারের বিলাসবহুল ফাইভ-স্টার আবাসন, সাফার-মারওয়া সংলগ্ন প্রাইভেট যাতায়াত এবং অভিজ্ঞ মোয়াল্লিমের নিবিড় দ্বীনি সান্নিধ্য। প্রতিটি হাজীর সন্তুষ্টি ও ইবাদতের প্রশান্তিতে কোনো আপোষ নেই।
                </p>

                {/* Inclusions Feature Pills */}
                <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-[#e6f0eb] rounded-xl mb-6 text-center border border-[#dbe5e0]/60">
                  <div>
                    <span className="font-label-sm text-[11px] text-[#3f4946] block">মেয়াদকাল</span>
                    <span className="font-title-lg text-sm sm:text-base text-[#00453d] font-bold">১৪ দিন / ১৩ রাত</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] text-[#3f4946] block">আবাসন</span>
                    <span className="font-title-lg text-sm sm:text-base text-[#00453d] font-bold">৫-স্টার হারামাইন</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-[11px] text-[#3f4946] block">সার্ভিস স্ট্যাটাস</span>
                    <span className="font-title-lg text-sm sm:text-base text-[#735c00] font-bold">ভিআইপি মোয়াল্লিম</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div>
                    <span className="font-label-sm text-xs text-[#3f4946] block">সর্বমোট শুরু (সব ট্যাক্স অন্তর্ভুক্ত)</span>
                    <span className="font-headline-md text-2xl text-[#00453d] font-serif font-bold">
                      ৳ ১,৭৫,০০০ <span className="font-body-sm text-xs font-normal text-[#3f4946]">/জন</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/packages/pkg-umrah-flagship"
                      className="px-5 py-3 border border-[#00453d] hover:bg-[#00453d] hover:text-white text-[#00453d] font-label-md text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-lg transition-all"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleBook("পবিত্র ওমরাহ ও হজ পূর্ণাঙ্গ প্যাকেজ", "পবিত্র সফর")}
                      className="px-5 py-3 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs sm:text-sm uppercase tracking-wider font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00453d]"
                    >
                      <span>বুকিং ও পরামর্শ</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Asymmetric Companions (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Sub Card 1: Turkey */}
              <Link
                href="/packages/pkg-turkey-cruise"
                className="bg-[#ecf6f1] rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-all group border border-[#dbe5e0]/60 active:scale-[0.99]"
              >
                <div className="relative w-32 sm:w-36 h-28 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80"
                    alt="তুরস্কের ইস্তাম্বুল ব্লু মস্ক ও রাজকীয় স্থাপত্য"
                    fill
                    sizes="(max-width: 640px) 120px, 150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold rounded">
                    ৮ দিন
                  </span>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] text-[#735c00] font-bold block">ঐতিহাসিক অটোমান হেরিটেজ</span>
                      <span className="text-[10px] text-[#00453d] font-semibold bg-white px-1.5 py-0.5 rounded border border-[#dbe5e0]">বুকিং ওপেন</span>
                    </div>
                    <h4 className="font-title-lg text-sm sm:text-base text-[#141d1a] group-hover:text-[#00453d] transition-colors font-serif font-bold mt-0.5">
                      তুরস্ক ও ইস্তাম্বুল রাজকীয় সফর
                    </h4>
                    <p className="font-body-sm text-[11px] text-[#3f4946] line-clamp-1 mt-0.5">
                      ফ্লাইট + ৪-স্টার হোটেল + বসফরাস ক্রুজ + ব্রেকফাস্ট
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#dbe5e0]/60">
                    <span className="font-title-lg text-sm sm:text-base text-[#00453d] font-serif font-bold">৳ ১,৩৫,০০০</span>
                    <span className="material-symbols-outlined text-[#735c00] text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </div>
                </div>
              </Link>

              {/* Sub Card 2: Maldives */}
              <Link
                href="/packages/pkg-maldives-luxury"
                className="bg-[#ecf6f1] rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-all group border border-[#dbe5e0]/60 active:scale-[0.99]"
              >
                <div className="relative w-32 sm:w-36 h-28 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
                    alt="মালদ্বীপের ওভারওয়াটার ভিলা ও নীলাভ সমুদ্র"
                    fill
                    sizes="(max-width: 640px) 120px, 150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold rounded">
                    ৪ দিন
                  </span>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] text-[#00453d] font-bold block">আইল্যান্ড প্যারাডাইস</span>
                      <span className="text-[10px] text-[#735c00] font-semibold bg-white px-1.5 py-0.5 rounded border border-[#dbe5e0]">হনিমুুন স্পেশাল</span>
                    </div>
                    <h4 className="font-title-lg text-sm sm:text-base text-[#141d1a] group-hover:text-[#00453d] transition-colors font-serif font-bold mt-0.5">
                      মালদ্বীপ প্রাইভেট ওয়াটার ভিলা
                    </h4>
                    <p className="font-body-sm text-[11px] text-[#3f4946] line-clamp-1 mt-0.5">
                      সি-প্লেন ট্রান্সফার + অল-ইনক্লুসিভ ৫-স্টার রিসোর্ট
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#dbe5e0]/60">
                    <span className="font-title-lg text-sm sm:text-base text-[#00453d] font-serif font-bold">৳ ১,১০,০০০</span>
                    <span className="material-symbols-outlined text-[#735c00] text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </div>
                </div>
              </Link>

              {/* Sub Card 3: Dubai */}
              <Link
                href="/packages/pkg-dubai-safari"
                className="bg-[#ecf6f1] rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-all group border border-[#dbe5e0]/60 active:scale-[0.99]"
              >
                <div className="relative w-32 sm:w-36 h-28 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                    alt="দুবাই শহরের অনন্য স্কাইলাইন ও ঐতিহ্যবাহী ডেজার্ট সাফারি"
                    fill
                    sizes="(max-width: 640px) 120px, 150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold rounded">
                    ৫ দিন
                  </span>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-[11px] text-[#735c00] font-bold block">মিডল ইস্ট হাইলাইটস</span>
                      <span className="text-[10px] text-[#00453d] font-semibold bg-white px-1.5 py-0.5 rounded border border-[#dbe5e0]">ফ্যামিলি ফ্রেন্ডলি</span>
                    </div>
                    <h4 className="font-title-lg text-sm sm:text-base text-[#141d1a] group-hover:text-[#00453d] transition-colors font-serif font-bold mt-0.5">
                      দুবাই ডেজার্ট সাফারি ও এক্সপো
                    </h4>
                    <p className="font-body-sm text-[11px] text-[#3f4946] line-clamp-1 mt-0.5">
                      বুর্জ খলিফা ভিউ + ৪x৪ সাফারি + ভিআইপি বারবিকিউ ক্যাম্প
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#dbe5e0]/60">
                    <span className="font-title-lg text-sm sm:text-base text-[#00453d] font-serif font-bold">৳ ৭৮,৫০০</span>
                    <span className="material-symbols-outlined text-[#735c00] text-sm group-hover:translate-x-1 transition-transform">east</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="mt-10 pt-6 border-t border-[#dbe5e0]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#3f4946]">
              <span className="material-symbols-outlined text-[#00453d] text-base">verified</span>
              <span>প্রতিটি প্যাকেজে রয়েছে স্পষ্ট ডেট শিডিউল, লাইভ হোটেল দূরত্ব ও সম্পূর্ণ স্বচ্ছ বাজেট।</span>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#ecf6f1] hover:bg-[#dbe5e0] text-[#00453d] font-semibold text-xs sm:text-sm rounded-lg border border-[#bec9c5]/60 transition-colors"
            >
              <span>সকল প্যাকেজ ক্যাটালগ দেখুন</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle={selectedTitle}
        defaultCategory={selectedCategory}
      />
    </>
  );
}

