"use client";

import Image from "next/image";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="w-full bg-[#ffffff] pb-12 sm:pb-16" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#ecf6f1] rounded-2xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-md border border-[#dbe5e0]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Dignified Executive Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border-2 border-[#735c00]/30 bg-gradient-to-br from-[#00453d] via-[#003730] to-[#012622] text-white p-6 sm:p-8 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#fed65b]/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fed65b]/20 border border-[#fed65b]/40 rounded-full text-[#ffe088] font-label-sm text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-xs">verified</span>
                    প্রতিষ্ঠাতা ও চেয়ারম্যান
                  </span>
                  <span className="text-[10px] text-[#fed65b]/80 font-sans uppercase tracking-widest font-semibold">
                    OFFICIAL LEADERSHIP
                  </span>
                </div>

                {/* Center Monogram Emblem */}
                <div className="relative z-10 flex flex-col items-center text-center my-auto">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#005a50] to-[#003831] border-4 border-[#fed65b] flex items-center justify-center shadow-2xl mb-4 ring-4 ring-[#735c00]/30">
                    <span className="font-serif text-5xl sm:text-6xl font-bold text-[#ffe088] drop-shadow-md">
                      ফ
                    </span>
                    <div className="absolute -bottom-2 px-3 py-0.5 bg-[#735c00] text-[#ffe088] text-[10px] font-bold rounded-full uppercase tracking-wider border border-[#fed65b]/40">
                      মাওলানা
                    </div>
                  </div>
                  <h4 className="font-headline-md text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                    হাফেজ মাওলানা মোঃ ফজল রাব্বি
                  </h4>
                  <p className="font-label-sm text-xs text-[#fed65b] tracking-wider font-semibold">
                    Shoccho Travels প্রতিষ্ঠাতা ও প্রধান মোয়াল্লিম
                  </p>
                </div>

                {/* Footer Credential */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#ecf6f1]/80">
                  <span>১৪+ বছর হজ-ওমরাহ খেদমত</span>
                  <span className="flex items-center gap-1 text-[#fed65b]">
                    <span className="material-symbols-outlined text-xs">verified_user</span>
                    <span>যাচাইকৃত নেতৃত্ব</span>
                  </span>
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
