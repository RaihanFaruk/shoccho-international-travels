"use client";

import Image from "next/image";

const articles = [
  {
    category: "ওমরাহ নির্দেশিকা",
    categoryColor: "text-[#735c00]",
    title: "ওমরাহ যাওয়ার আগে ১০টি জরুরি প্রস্তুতি যা জানা আবশ্যক",
    desc: "ইহরামের নিয়মাবলী, লাগেজ প্যাকিং চেকলিস্ট এবং প্রয়োজনীয় ঔষধ সংক্রান্ত গুরুত্বপূর্ণ দিকনির্দেশনা।",
    readTime: "৫ মিনিট পাঠ্য • স্বচ্ছ রিসার্চ টিম",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcJXzZRpb5dHzQfsSHlcQRNUk9pTNVM_JqYA14mclFmy-b6KlR-YJJ4UVdvxfZ9l3xhD0BTiPFOGzBOMjR_wXQDf2zKSDArlHGII30ls8T7mNZQ7PgFqHPi6FeBC9ehEpBXXU3ACwbd7lvdRGrpcboPjqmgk2FAOhojgAUdJmRzLOP8bj0-Bv7Y9SnYWS82x1g6cLTnqCPeJynY2dFouNCaic8DcEVy9xK45TnTe70aBHQ07-PENq6",
  },
  {
    category: "ভিসা সহায়ক",
    categoryColor: "text-[#00453d]",
    title: "ভিসা আবেদনের সঠিক নিয়মাবলী ও ডকুমেন্ট চেকলিস্ট",
    desc: "ব্যাংক স্টেটমেন্ট, ট্যাক্স রিটার্ন ও নো অবজেকশন সার্টিফিকেট নির্ভুলভাবে জমা দেওয়ার পদ্ধতি।",
    readTime: "৭ মিনিট পাঠ্য • কনস্যুলার ডেস্ক",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMwL_DENruWOJBbYeE6DUHW_vaZ3Y6MRgHB-2pF2NyeiBvH9jQXdG3YYdMBF6wn5SJ3eTrXjAZ8LTc3mPxQHx4JFbs3-jFsHzdXt3-hBeBzqFxoILIS91v_xddOpjL-2OOgIJwhzvPFJ70kdkGlzAdkn5KNR6DNAYzTx_XE33SK0wPHHl4SJ5ONXYwtVfBfyDkXmUOWeOrLm58b7mxp5b2AHDOarCEE3_-e1ygBBn331_F9xKbaqyX",
  },
  {
    category: "বাংলাদেশ ট্রাভেল",
    categoryColor: "text-[#735c00]",
    title: "বাংলাদেশের ৫টি শান্ত ও অনন্য ইকো-রিসোর্ট",
    desc: "ছুটির দিনে কোলাহলমুক্ত পরিবার সময় কাটাতে পাহাড় ও বনাঞ্চলের নির্ভরযোগ্য রিসোর্ট তালিকা।",
    readTime: "৪ মিনিট পাঠ্য • ট্যুর স্পেশালিস্ট",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWjjXmkCOq8gMCZxHFYr8jfqYYoavhq6ZJxpH2ARwdH0-beGQkDrsRaQQNG286-NeIpvxhmfh2azO0bWMwZAj8JvH8WbGM0sNgIU7iwFhAuhS2gbro7vgEo5NemWsz3Un-BFOsnDDPAAYvk6aZv6tsZEg1iwPdS1YINsECMw4T0Ezo-NaqNCZqNmG8Pl6gGuIc093qMJVn0g5f31cILfJkbcE7ygU1sa6MbwvNsRacy4gRl7tj_ynK",
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
