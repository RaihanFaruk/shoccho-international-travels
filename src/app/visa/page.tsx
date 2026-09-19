"use client";

import { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

interface VisaDetail {
  country: string;
  flag: string;
  category: string;
  time: string;
  govFee: string;
  serviceCharge: string;
  totalFee: string;
  requirements: string[];
  notes: string;
}

const visaCatalog: Record<string, VisaDetail> = {
  "সৌদি আরব": {
    country: "সৌদি আরব",
    flag: "🇸🇦",
    category: "১ বছর মাল্টিপল এন্ট্রি ট্যুরিস্ট ওমরাহ ই-ভিসা",
    time: "২৪ থেকে ৭২ ঘণ্টা",
    govFee: "৳ ১৩,০০০",
    serviceCharge: "৳ ৫,৫০০",
    totalFee: "৳ ১৮,৫০০",
    requirements: [
      "কমপক্ষে ৬ মাস মেয়াদী মূল পাসপোর্ট স্ক্যান কপি",
      "সাদা ব্যাকগ্রাউন্ডের সাম্প্রতিক ল্যাব প্রিন্ট ছবি",
      "জাতীয় পরিচয়পত্র (NID) অথবা জন্ম সনদের স্পষ্ট কপি",
      "কোভিড ও অন্যান্য স্বাস্থ্য বীমা (আমরা অন্তর্ভুক্ত করে দেই)",
    ],
    notes: "এই ভিসায় মক্কা, মদিনা, জেদ্দা, রিয়াদ সহ পুরো সৌদি আরবে ভ্রমণ ও একাধিকবার ওমরাহ পালন করা যায়।",
  },
  "সংযুক্ত আরব আমিরাত (দুবাই)": {
    country: "সংযুক্ত আরব আমিরাত (দুবাই)",
    flag: "🇦🇪",
    category: "৩০ দিন / ৬০ দিন মেয়াদী ট্যুরিস্ট ভিসা",
    time: "২৪ থেকে ৪৮ ঘণ্টা",
    govFee: "৳ ১০,০০০",
    serviceCharge: "৳ ৪,৫০০",
    totalFee: "৳ ১৪,৫০০",
    requirements: [
      "রঙিন পাসপোর্ট কপি (ন্যূনতম ৬ মাস মেয়াদ)",
      "পাসপোর্ট সাইজ ছবি",
      "কনফার্মড রিটার্ন এয়ার টিকিট কপি",
      "হোটেল বুকিং ভাউচার",
    ],
    notes: "দ্রুততম সময়ে ই-ভিসা অনুমোদন। জরুরি প্রয়োজনে ১২ ঘণ্টার এক্সপ্রেস সার্ভিস উপলব্ধ।",
  },
  "থাইল্যান্ড": {
    country: "থাইল্যান্ড",
    flag: "🇹🇭",
    category: "৬০ দিন মেয়াদী সিঙ্গেল এন্ট্রি ট্যুরিস্ট ভিসা",
    time: "৫ থেকে ৭ কার্যদিবস",
    govFee: "৳ ৪,০০০",
    serviceCharge: "৳ ২,৫০০",
    totalFee: "৳ ৬,৫০০",
    requirements: [
      "মূল পাসপোর্ট ও পূর্বের পাসপোর্ট (যদি থাকে)",
      "বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট (ন্যূনতম ৬০,০০০৳ স্থিতি)",
      "ব্যাংক সলভেন্সি সার্টিফিকেট",
      "নো অবজেকশন সার্টিফিকেট (NOC) অথবা ট্রেড লাইসেন্স কপি",
      "ভিজিটিং কার্ড ও অফিস আইডি কপি",
    ],
    notes: "রয়্যাল থাই এম্বাসি ঢাকা থেকে ভিসা স্টিকার প্রসেসিং করা হয়।",
  },
  "মালয়েশিয়া": {
    country: "মালয়েশিয়া",
    flag: "🇲🇾",
    category: "৩০ দিন মেয়াদী ই-ভিসা (e-Visa)",
    time: "৩ কার্যদিবস",
    govFee: "৳ ৩,৫০০",
    serviceCharge: "৳ ২,০০০",
    totalFee: "৳ ৫,৫০০",
    requirements: [
      "পাসপোর্ট স্ক্যান কপি ও ২ কপি ডিজিটাল ছবি",
      "রিটার্ন কনফার্মড এয়ার টিকিট বুকিং",
      "হোটেল বুকিং কনফার্মেশন",
      "ব্যাংক স্টেটমেন্ট",
    ],
    notes: "মালয়েশিয়ান ইমিগ্রেশন পোর্টাল থেকে সরাসরি অনুমোদিত ই-ভিসা।",
  },
  "শেঞ্জেন ইউরোপ ও যুক্তরাজ্য": {
    country: "শেঞ্জেন ইউরোপ ও যুক্তরাজ্য",
    flag: "🇪🇺",
    category: "শর্ট-স্টে সি-টাইপ ট্যুরিস্ট ও বিজনেস ভিসা",
    time: "১৫ কার্যদিবস (এম্বাসি অ্যাপয়েন্টমেন্ট সাপেক্ষে)",
    govFee: "৳ ১২,০০০+",
    serviceCharge: "৳ ১৩,০০০",
    totalFee: "৳ ২৫,০০০+",
    requirements: [
      "কমপক্ষে ৩ থেকে ৬ মাসের ব্যাংক স্টেটমেন্ট ও ট্যাক্স রিটার্ন ফাইল",
      "চাকরিজীবী/ব্যবসায়ী প্রমাণপত্র ও পে-স্লিপ",
      "আন্তর্জাতিক ট্রাভেল মেডিকেল ইন্স্যুরেন্স (€৩০,০০০ কাভারেজ)",
      "বিস্তারিত ডে-বাই-ডে ট্রাভেল আইটিনেরারি ও হোটেল বুকিং",
      "আবেদনকারীর সম্পদ ও সম্পত্তির বিবরণী",
    ],
    notes: "ভিএফএস গ্লোবাল অ্যাপয়েন্টমেন্ট বুকিং, ফাইল প্রিপারেশন এবং ইন্টারভিউ গাইডেন্স প্রদান করা হয়।",
  },
};

export default function VisaPage() {
  const [selectedCountry, setSelectedCountry] = useState("সৌদি আরব");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const visa = visaCatalog[selectedCountry] || visaCatalog["সৌদি আরব"];

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
              স্বচ্ছ ভিসা সার্ভিস
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight">
              স্মার্ট ভিসা কনসিয়ার্জ ও এম্বাসি প্রসেসিং
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] mt-3 leading-relaxed">
              সঠিক কাগজপত্র যাচাই, দ্রুততম সময়ে আবেদন এবং শতভাগ স্বচ্ছ ব্যয়ের নিশ্চয়তা। কোনো হিডেন চার্জ নেই।
            </p>
          </div>

          {/* Country Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {Object.keys(visaCatalog).map((countryName) => (
              <button
                key={countryName}
                onClick={() => setSelectedCountry(countryName)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  selectedCountry === countryName
                    ? "bg-[#00453d] text-white shadow-md ring-2 ring-[#00453d]/20"
                    : "bg-white text-[#3f4946] hover:bg-[#ecf6f1] border border-[#dbe5e0]"
                }`}
              >
                <span>{visaCatalog[countryName].flag}</span>
                <span>{countryName}</span>
              </button>
            ))}
          </div>

          {/* Detailed Visa Information Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#dbe5e0] p-6 sm:p-10 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#dbe5e0] gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl">{visa.flag}</span>
                <div>
                  <h2 className="font-headline-sm text-xl sm:text-2xl font-serif font-bold text-[#00453d]">
                    {visa.country} ভিসা প্রসেসিং
                  </h2>
                  <span className="text-xs text-[#735c00] font-bold block mt-0.5">
                    {visa.category}
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-label-sm text-xs text-[#3f4946] block">প্রসেসিং সময়</span>
                <span className="font-title-lg text-sm sm:text-base font-bold text-[#00453d] bg-[#f2fcf6] px-3 py-1 rounded-lg border border-[#dbe5e0] inline-block mt-1">
                  ⚡ {visa.time}
                </span>
              </div>
            </div>

            {/* Fee Transparency Box */}
            <div className="my-6 p-5 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0]">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#735c00] text-lg">payments</span>
                <h3 className="font-title-md text-sm font-bold text-[#00453d]">
                  স্বচ্ছ ফি ব্রেকডাউন পলিসি
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#dbe5e0]">
                  <span className="text-[#3f4946] block">সরকারি ও এম্বাসি ফি</span>
                  <strong className="text-sm text-[#141d1a] block mt-0.5">{visa.govFee}</strong>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#dbe5e0]">
                  <span className="text-[#3f4946] block">স্বচ্ছ প্রসেসিং সার্ভিস চার্জ</span>
                  <strong className="text-sm text-[#141d1a] block mt-0.5">{visa.serviceCharge}</strong>
                </div>
                <div className="bg-[#00453d] text-white p-3 rounded-xl">
                  <span className="text-[#a2b5af] block">সর্বমোট প্রদেয় ফি</span>
                  <strong className="text-base font-bold text-[#fed65b] block mt-0.5">{visa.totalFee}</strong>
                </div>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="space-y-4">
              <h3 className="font-title-md text-base font-bold text-[#00453d] font-serif flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00453d] text-lg">checklist</span>
                <span>প্রয়োজনীয় কাগজপত্রের তালিকা (Checklist)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {visa.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0]">
                    <span className="material-symbols-outlined text-sm text-[#00453d] shrink-0 mt-0.5">check_circle</span>
                    <span className="font-body-sm text-xs text-[#141d1a]">{req}</span>
                  </div>
                ))}
              </div>

              {visa.notes && (
                <div className="p-4 bg-[#ecf6f1] rounded-xl text-xs text-[#3f4946] border border-[#dbe5e0]">
                  <strong>গুরুত্বপূর্ণ তথ্য:</strong> {visa.notes}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-[#dbe5e0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#3f4946] block">কাগজপত্র প্রস্তুত আছে?</span>
                <span className="text-sm font-bold text-[#00453d]">আজই আপনার আবেদন ফাইল জমা দিন</span>
              </div>
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-xl shadow-md transition-all text-center"
              >
                ভিসা আবেদন কনসিয়ার্জ শুরু করুন
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle={`${selectedCountry} ভিসা আবেদন পরামর্শ`}
        defaultCategory="ভিসা সার্ভিস"
      />
    </div>
  );
}
