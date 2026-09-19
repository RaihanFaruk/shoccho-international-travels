"use client";

import Link from "next/link";
import Image from "next/image";

const discoveryCards = [
  {
    id: "card-1",
    packageId: "pkg-umrah-flagship",
    title: "প্রিমিয়াম ওমরাহ (১৪ দিন)",
    desc: "ক্লক টাওয়ার ভিউ, হারামাইন শাটল ও এক্সিকিউটিভ কেটারিং",
    price: "৳ ১,৮৫,০০০",
    tag: "জনপ্রিয় ওমরাহ",
    tagColor: "text-[#735c00]",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "card-2",
    packageId: "pkg-kashmir-paradise",
    title: "কাশ্মীর ও লাদাখ ট্যুর (৭ দিন)",
    desc: "হাউসবোট স্টে, গুলমার্গ ক্যাবল কার ও ব্যক্তিগত গাইড",
    price: "৳ ৬৫,০০০",
    tag: "পরিবার স্পেশাল",
    tagColor: "text-[#00453d]",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "card-3",
    packageId: "pkg-umrah-ramadan",
    title: "রমজান ওমরাহ প্যাকেজ (১৫ দিন)",
    desc: "সাশ্রয়ী হোটেল, নিয়মিত শাটল বাস ও দলবদ্ধ যিয়ারত",
    price: "৳ ১,১৫,০০০",
    tag: "বাজেট সেভার",
    tagColor: "text-[#6b4f00]",
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "card-4",
    packageId: "pkg-sajek-valley",
    title: "সাজেক মেঘের বাড়ি (৩ দিন)",
    desc: "৪x৪ চান্দের গাড়ি, প্রিমিয়াম কাঠের কটেজ ও বারবিকিউ",
    price: "৳ ৯,৫০০",
    tag: "উইকেন্ড এস্কেপ",
    tagColor: "text-[#00453d]",
    image: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "card-5",
    packageId: "pkg-dubai-safari",
    title: "দুবাই ও আবুধাবি রয়েল (৫ দিন)",
    desc: "মরুভূমি ডেজার্ট সাফারি, মেরিনা ক্রুজ ও ফাইভ-স্টার রিসোর্ট",
    price: "৳ ৯৫,০০০",
    tag: "লাক্সারি রয়েল",
    tagColor: "text-[#735c00]",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
  },
];

export function PersonalizedDiscovery() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* Personalized Banner */}
      <div className="p-4 sm:p-6 bg-[#ecf6f1] rounded-2xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm border border-[#dbe5e0]/60">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center text-[#735c00] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-[#735c00] uppercase font-semibold tracking-wider block">
              ব্যক্তিগত কাস্টমাইজেশন
            </span>
            <h3 className="font-title-lg text-title-lg text-[#00453d] font-serif font-bold mt-0.5">
              আপনার পছন্দের ভিত্তিতে সাজানো ভ্রমণ পরামর্শ
            </h3>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[#3f4946] font-label-sm text-label-sm shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#735c00] animate-pulse" />
          সর্বশেষ ব্রাউজিং অনুযায়ী লাইভ আপডেট
        </span>
      </div>

      {/* 5 Discovery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {discoveryCards.map((card) => (
          <Link
            key={card.id}
            href={`/packages/${card.packageId}`}
            className="bg-[#ffffff] rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer border border-[#dbe5e0]/70 active:scale-[0.99]"
          >
            <div>
              <div className="relative h-36 rounded-lg overflow-hidden mb-2.5">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-2 left-2 px-2 py-0.5 bg-[#ffffff]/90 font-label-sm text-[10px] ${card.tagColor} font-bold rounded-full shadow-sm`}>
                  {card.tag}
                </span>
              </div>

              <h4 className="font-title-lg text-[15px] sm:text-base text-[#141d1a] group-hover:text-[#00453d] transition-colors font-serif font-semibold mb-1 leading-snug">
                {card.title}
              </h4>
              <p className="font-body-sm text-[12px] text-[#3f4946] mb-3 leading-snug line-clamp-2">
                {card.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-[#e6f0eb] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-[#3f4946]">জনপ্রতি প্যাকেজ</span>
                <span className="font-title-lg text-base text-[#00453d] font-serif font-bold">
                  {card.price}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#735c00] text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
