"use client";

import Image from "next/image";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="w-full bg-[#ffffff] pb-12 sm:pb-16" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#ecf6f1] rounded-2xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-md border border-[#dbe5e0]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-lg border border-[#dbe5e0]">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="হাফেজ মাওলানা মোঃ ফজল রাব্বি - প্রতিষ্ঠাতা ও চেয়ারম্যান"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00453d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#ffe088] font-bold block mb-1">
                    প্রতিষ্ঠাতা ও চেয়ারম্যান
                  </span>
                  <h4 className="font-headline-md text-xl sm:text-2xl font-serif font-bold">
                    হাফেজ মাওলানা মোঃ ফজল রাব্বি
                  </h4>
                </div>
              </div>
            </div>

            {/* Right: Founder's Quote & Story */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-6">
                <span
                  className="material-symbols-outlined text-[#735c00] text-4xl mb-2"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <blockquote className="font-headline-md text-lg sm:text-2xl text-[#00453d] font-serif font-medium leading-relaxed italic mb-4">
                  &ldquo;ভ্রমণ কেবল স্থান পরিবর্তন নয়; এটি আত্মিক প্রশান্তি ও জীবনের অনন্য অভিজ্ঞতা। আমরা প্রতিটি সম্মানিত যাত্রীকে পরিবারের সদস্যের মতো শ্রদ্ধা, যত্ন ও শতভাগ স্বচ্ছতার সাথে সেবা দিতে দায়বদ্ধ।&rdquo;
                </blockquote>
                <p className="font-body-md text-sm sm:text-base text-[#3f4946] leading-relaxed mb-4">
                  স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস প্রতিষ্ঠিত হয়েছে এমন এক প্রত্যয় নিয়ে—যেখানে হজ ও ওমরাহ যাত্রীরা কোনো ধরনের প্রতারণা বা লুকোচুরির শিকার হবেন না। আমরা প্রতিশ্রুতির চেয়ে বেশি সেবা প্রদানের মাধ্যমে দেশের লক্ষাধিক ধর্মপ্রাণ মানুষের হৃদয়ে বিশ্বাস অর্জন করেছি।
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00453d] hover:text-[#735c00] transition-colors group"
                  >
                    <span>আমাদের সূচনা গল্প, ভিশন ও পূর্ণাঙ্গ মিশন পড়ুন</span>
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[#bec9c5]/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#e6f0eb] flex items-center justify-center text-[#00453d] font-serif font-bold text-lg shadow-sm border border-[#bec9c5]/60">
                    স্ব
                  </div>
                  <div>
                    <span className="font-title-lg text-base text-[#141d1a] font-semibold block leading-tight">
                      স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস
                    </span>
                    <span className="font-label-sm text-[10px] text-[#735c00] font-bold uppercase tracking-wider">
                      Shoccho International Travels
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#3f4946] font-medium bg-[#ffffff] px-3 py-1.5 rounded-full border border-[#dbe5e0]">
                  <span className="material-symbols-outlined text-[#735c00] text-sm">verified</span>
                  <span>সরকার স্বীকৃত হজ ও ওমরাহ এজেন্সি</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
