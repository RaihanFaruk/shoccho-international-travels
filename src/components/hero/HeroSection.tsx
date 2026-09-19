"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

export function HeroSection() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#ffffff] pt-32 sm:pt-36 lg:pt-40 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ecf6f1] rounded-full mb-4 shadow-sm border border-[#dbe5e0]/80">
              <span
                className="material-symbols-outlined text-[#735c00] text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span className="font-label-sm text-xs sm:text-[11px] text-[#735c00] tracking-widest font-bold uppercase">
                SHOCCHO INTERNATIONAL TRAVELS &bull; স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস
              </span>
            </div>

            {/* Grand Editorial Headline */}
            <h1 className="font-display-xl text-3xl sm:text-4xl lg:text-5xl text-[#00453d] tracking-tight leading-[1.15] mb-4 font-serif font-bold">
              আপনার যাত্রায়<br />
              <span className="text-[#735c00] italic font-semibold">আস্থার সঙ্গী</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body-lg text-sm sm:text-base text-[#3f4946] max-w-xl mb-6 leading-relaxed">
              পবিত্র হজ ও ওমরাহ থেকে শুরু করে বৈশ্বিক ভিসা, প্রিমিয়াম এয়ার টিকিট এবং আন্তর্জাতিক ভ্রমণ—আপনার প্রতিটি স্বপ্নযাত্রা বাস্তবায়নে স্বচ্ছতা ও পেশাদারিত্বের বিশ্বস্ত অভিভাবক।
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
              <a
                href="#search-engine"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-sm font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00453d]"
              >
                <span>যাত্রা শুরু করুন</span>
                <span className="material-symbols-outlined text-base">east</span>
              </a>

              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ecf6f1] hover:bg-[#e0eae5] text-[#00453d] font-label-md text-sm font-semibold uppercase tracking-wider rounded-lg shadow-sm border border-[#bec9c5]/60 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00453d]"
              >
                <span className="material-symbols-outlined text-base text-[#735c00]">explore</span>
                <span>সকল প্যাকেজ দেখুন</span>
              </Link>
            </div>

            {/* Trust Assurance Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-[#3f4946] pt-1">
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-sm text-[#00453d]">verified</span>
                সৌদি হজ ও ওমরাহ মন্ত্রণালয় অনুমোদিত
              </span>
              <span className="text-[#bec9c5] hidden sm:inline">&bull;</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-sm text-[#735c00]">flight</span>
                বিমান ও সাউদিয়া অফিসিয়াল পার্টনার
              </span>
            </div>
          </div>

          {/* Right Cinematic Visual Portal */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-[#e6f0eb] border border-[#dbe5e0]/80">
              <Image
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80"
                alt="পবিত্র মক্কার মসজিদুল হারাম ও কাবা শরীফের মনোরম সূর্যাস্তকালীন দৃশ্য"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Atmospheric Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00453d]/85 via-transparent to-black/20" />

              {/* Crown Authenticity Stamp */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#ffffff]/95 backdrop-blur-md rounded-full shadow-md flex items-center gap-1.5 border border-[#dbe5e0]">
                <span
                  className="material-symbols-outlined text-[#735c00] text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="font-label-sm text-xs text-[#141d1a] font-bold tracking-wider">
                  গভর্নমেন্ট এপ্রুভড কাফেলা
                </span>
              </div>

              {/* Floating Jewelry Metric Overlays */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#ffffff]/95 backdrop-blur-md rounded-xl shadow-lg border border-[#dbe5e0]/90">
                <div className="grid grid-cols-3 divide-x divide-[#bec9c5]/40 text-center">
                  <div className="px-1">
                    <span className="block font-headline-md text-xl sm:text-2xl text-[#00453d] font-serif font-bold">
                      ৯৯.৮%
                    </span>
                    <span className="font-label-sm text-[11px] sm:text-xs text-[#3f4946] font-medium">
                      ভিসা অনুমোদন
                    </span>
                  </div>
                  <div className="px-1">
                    <span className="block font-headline-md text-xl sm:text-2xl text-[#735c00] font-serif font-bold">
                      ১২,০০০+
                    </span>
                    <span className="font-label-sm text-[11px] sm:text-xs text-[#3f4946] font-medium">
                      সন্তুষ্ট তীর্থযাত্রী
                    </span>
                  </div>
                  <div className="px-1">
                    <span className="block font-headline-md text-xl sm:text-2xl text-[#00453d] font-serif font-bold">
                      ১০০%
                    </span>
                    <span className="font-label-sm text-[11px] sm:text-xs text-[#3f4946] font-medium">
                      স্বচ্ছ মূল্য নীতি
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle="ভ্রমণ পরামর্শ ও প্যাকেজ নির্বাচন"
        defaultCategory="হজ, ওমরাহ ও আন্তর্জাতিক ভ্রমণ"
      />
    </section>
  );
}

