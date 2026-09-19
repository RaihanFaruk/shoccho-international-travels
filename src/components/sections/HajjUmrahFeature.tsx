"use client";

import { useState } from "react";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

const steps = [
  {
    num: "০১",
    title: "পরামর্শ ও প্যাকেজ",
    desc: "বাজেট ও সুবিধার ভিত্তিতে কাস্টমাইজড হারামাইন প্যাকেজ নির্বাচন।",
    badge: "ফ্রি কনসালটেশন",
    isPrimary: true,
  },
  {
    num: "০২",
    title: "ভিসা ও বায়োমেট্রিক",
    desc: "সৌদি হজ ও ওমরাহ মন্ত্রণালয়ের নিয়মে দ্রুত ই-ভিসা প্রসেসিং।",
    badge: "দ্রুত এপ্রুভাল",
    isPrimary: false,
  },
  {
    num: "০৩",
    title: "মোয়াল্লিমের তত্ত্ববধান",
    desc: "দেশ ত্যাগের পূর্বে তাওয়াফ ও সাঈ সম্পর্কিত প্র্যাকটিক্যাল ব্রিফিং।",
    badge: "হজ প্রশিক্ষণ কর্মশালা",
    isPrimary: true,
  },
  {
    num: "০৪",
    title: "গ্রাউন্ড সাপোর্ট",
    desc: "জেদ্দা/মদিনা বিমানবন্দরে নিজস্ব টিম দ্বারা রিসিভ ও হোটেল চেক-ইন।",
    badge: "২৪ ঘণ্টা উপস্থিতি",
    isPrimary: false,
  },
  {
    num: "০৫",
    title: "দেশে প্রত্যাবর্তন",
    desc: "জমজম পানি নিশ্চিতকরণ ও ঢাকায় আপনজনদের কাছে নিরাপদ ফেরা।",
    badge: "হজ মাবরুর দোয়া",
    isPrimary: true,
  },
];

const highlightTrio = [
  {
    icon: "interpreter_mode",
    title: "অন-সাইট অভিজ্ঞ মোয়াল্লিম",
    desc: "প্রখ্যাত আলেম ও মুফতিগণের দিকনির্দেশনায় নিখুঁত সুন্নাহ অনুযায়ী প্রতিটি ইবাদত পরিচালনা।",
    iconColor: "text-[#735c00]",
  },
  {
    icon: "female",
    title: "মহিলাদের জন্য বিশেষ গাইড",
    desc: "নারী তীর্থযাত্রীদের স্বাচ্ছন্দ্য নিশ্চিত করতে অভিজ্ঞ নারী কো-অর্ডিনেটরের সার্বক্ষণিক উপস্থিতি।",
    iconColor: "text-[#00453d]",
  },
  {
    icon: "restaurant",
    title: "হালাল দেশিয় সুস্বাদু খাবার",
    desc: "অভিজ্ঞ বাংলাদেশি বাবুর্চি দ্বারা প্রস্তুত পুষ্টিকর তিন বেলার বুফে ক্যাটারিং সেবা।",
    iconColor: "text-[#735c00]",
  },
];

export function HajjUmrahFeature() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#f2fcf6] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="umrah">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ecf6f1] rounded-full mb-3 border border-[#dbe5e0]/60">
              <span className="material-symbols-outlined text-[#735c00] text-sm">mosque</span>
              <span className="font-label-sm text-label-sm text-[#735c00] uppercase font-bold tracking-widest">
                HAJJ &amp; UMRAH ROADMAP
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#00453d] font-serif font-bold mb-3">
              পবিত্র যাত্রা, পরিকল্পনায় স্বস্তি
            </h2>
            <p className="font-body-md text-body-md text-[#3f4946]">
              স্বচ্ছ ট্রাভেলস-এর ৫-ধাপের নিবিড় ভ্রমণ পরিকল্পনা আপনার পবিত্র ইবাদতের প্রতিটি মুহূর্তকে করবে দুশ্চিন্তামুক্ত ও বরকতময়।
            </p>
          </div>

          {/* 5-Step Visual Timeline Guide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#ffffff] p-5 rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all border border-[#dbe5e0]/70"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-title-lg mb-3 transition-colors ${
                      step.isPrimary
                        ? "bg-[#ecf6f1] text-[#00453d] group-hover:bg-[#00453d] group-hover:text-white"
                        : "bg-[#ecf6f1] text-[#735c00] group-hover:bg-[#735c00] group-hover:text-white"
                    }`}
                  >
                    {step.num}
                  </div>
                  <h3 className="font-title-lg text-base text-[#141d1a] font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-[12px] text-[#3f4946] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <span className="mt-4 pt-2 font-label-sm text-[11px] text-[#735c00] font-semibold flex items-center gap-1 border-t border-[#ecf6f1]">
                  <span className="material-symbols-outlined text-xs">check</span>
                  {step.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Feature Highlight Trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {highlightTrio.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 bg-[#ffffff] rounded-2xl shadow-sm flex items-start gap-4 border border-[#dbe5e0]/70"
              >
                <div className={`w-12 h-12 rounded-xl bg-[#e6f0eb] ${item.iconColor} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-title-lg text-base text-[#00453d] font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-xs sm:text-[13px] text-[#3f4946] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle="হজ ও ওমরাহ কাফেলা কনসালটেশন"
        defaultCategory="পবিত্র সফর"
      />
    </>
  );
}
