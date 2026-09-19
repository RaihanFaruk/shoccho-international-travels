"use client";

import Image from "next/image";

const articles = [
  {
    category: "ওমরাহ নির্দেশিকা",
    categoryColor: "text-[#735c00]",
    title: "ওমরাহ যাওয়ার আগে ১০টি জরুরি প্রস্তুতি যা জানা আবশ্যক",
    desc: "ইহরামের নিয়মাবলী, লাগেজ প্যাকিং চেকলিস্ট এবং প্রয়োজনীয় ঔষধ সংক্রান্ত গুরুত্বপূর্ণ দিকনির্দেশনা।",
    readTime: "৫ মিনিট পাঠ্য • স্বচ্ছ রিসার্চ টিম",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "ভিসা সহায়ক",
    categoryColor: "text-[#00453d]",
    title: "ভিসা আবেদনের সঠিক নিয়মাবলী ও ডকুমেন্ট চেকলিস্ট",
    desc: "ব্যাংক স্টেটমেন্ট, ট্যাক্স রিটার্ন ও নো অবজেকশন সার্টিফিকেট নির্ভুলভাবে জমা দেওয়ার পদ্ধতি।",
    readTime: "৭ মিনিট পাঠ্য • কনস্যুলার ডেস্ক",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "বাংলাদেশ ট্রাভেল",
    categoryColor: "text-[#735c00]",
    title: "বাংলাদেশের ৫টি শান্ত ও অনন্য ইকো-রিসোর্ট",
    desc: "ছুটির দিনে কোলাহলমুক্ত পরিবার সময় কাটাতে পাহাড় ও বনাঞ্চলের নির্ভরযোগ্য রিসোর্ট তালিকা।",
    readTime: "৪ মিনিট পাঠ্য • ট্যুর স্পেশালিস্ট",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
];

export function TravelStories() {
  return (
    <section className="w-full bg-[#ffffff] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735c00] font-bold block">
              TRAVEL JOURNAL &amp; ADVICE
            </span>
            <h2 className="font-headline-md text-headline-md text-[#00453d] font-serif font-semibold mt-1">
              ভ্রমণ জার্নাল ও নির্দেশিকা
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1.5 text-[#00453d] font-label-md text-sm font-semibold hover:text-[#075e54] transition-colors"
            href="#stories"
          >
            <span>সব প্রবন্ধ পড়ুন</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#f2fcf6] rounded-xl overflow-hidden shadow-sm group border border-[#dbe5e0]/70 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className={`font-label-sm text-[11px] ${item.categoryColor} font-semibold uppercase tracking-wider block`}>
                    {item.category}
                  </span>
                  <h3 className="font-title-lg text-base sm:text-lg text-[#141d1a] group-hover:text-[#00453d] transition-colors font-serif font-bold mt-1 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-[13px] text-[#3f4946] line-clamp-2 mb-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="font-label-sm text-[11px] text-[#3f4946] font-medium block border-t border-[#dbe5e0]/60 pt-2.5">
                  {item.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
