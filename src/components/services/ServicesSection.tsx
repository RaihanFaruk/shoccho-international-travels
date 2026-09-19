"use client";

import { useState } from "react";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

const visaData: Record<string, { time: string; fee: string; reqs: string[] }> = {
  "সৌদি আরব": {
    time: "৭২ ঘণ্টায় সম্পন্ন",
    fee: "৳ ১৮,৫০০",
    reqs: [
      "কমপক্ষে ৬ মাস মেয়াদী পাসপোর্ট",
      "সাদা ব্যাকগ্রাউন্ডের ডিজিটাল ছবি",
      "এনআইডি বা জন্মসনদের স্ক্যান কপি",
      "ব্যাংক স্টেটমেন্ট ও সলভেন্সি পেপার",
    ],
  },
  "সংযুক্ত আরব আমিরাত (দুবাই)": {
    time: "২৪ থেকে ৪৮ ঘণ্টায় সম্পন্ন",
    fee: "৳ ১৪,৫০০",
    reqs: [
      "রঙিন পাসপোর্ট স্ক্যান কপি",
      "পাসপোর্ট সাইজ ছবি",
      "আগমনের এয়ার টিকিট বুকিং কপি",
      "হোটেল রিজার্ভেশন ভাউচার",
    ],
  },
  "থাইল্যান্ড": {
    time: "৫ কার্যদিবসে সম্পন্ন",
    fee: "৳ ৬,৫০০",
    reqs: [
      "মূল পাসপোর্ট ও পূর্ববর্তী পাসপোর্ট",
      "বিগত ৬ মাসের ব্যাংক স্টেটমেন্ট (ন্যূনতম ৬০,০০০৳ স্থিতি)",
      "ব্যাংক সলভেন্সি সার্টিফিকেট",
      "অফিসিয়াল নো অবজেকশন লেটার (NOC) বা ট্রেড লাইসেন্স",
    ],
  },
  "মালয়েশিয়া": {
    time: "৩ কার্যদিবসে সম্পন্ন",
    fee: "৳ ৫,৫০০",
    reqs: [
      "পাসপোর্ট স্ক্যান কপি ও ২ কপি ছবি",
      "রিটার্ন কনফার্মড এয়ার টিকিট",
      "হোটেল বুকিং কনফার্মেশন",
      "ব্যাংক স্টেটমেন্ট",
    ],
  },
  "শেঞ্জেন ইউরোপ / যুক্তরাজ্য": {
    time: "১৫ কার্যদিবস (এম্বাসি অ্যাপয়েন্টমেন্ট সাপেক্ষে)",
    fee: "৳ ২৫,০০০+",
    reqs: [
      "৬ মাসের ব্যাংক হিসাব ও ট্যাক্স রিটার্ন পেপার্স",
      "চাকরিজীবী/ব্যবসায়ী প্রমাণপত্র ও পে-স্লিপ",
      "আন্তর্জাতিক ট্রাভেল মেডিকেল ইন্স্যুরেন্স",
      "বিস্তারিত ডে-বাই-ডে ট্রাভেল আইটিনেরারি",
    ],
  },
};

export function ServicesSection() {
  const [selectedCountry, setSelectedCountry] = useState("সৌদি আরব");
  const [selectedType, setSelectedType] = useState("১ বছর মেয়াদী মাল্টিপল এন্ট্রি ই-ভিসা");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const currentVisa = visaData[selectedCountry] || visaData["সৌদি আরব"];

  return (
    <>
      <section className="w-full bg-[#f2fcf6] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="visa-engine">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left: Country Visa Engine (7 Cols) */}
            <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dbe5e0]/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#735c00] text-3xl">verified</span>
                  <div>
                    <h3 className="font-headline-md text-xl sm:text-2xl text-[#00453d] font-serif font-bold">
                      স্মার্ট ভিসা কনসিয়ার্জ চেকার
                    </h3>
                    <span className="font-label-sm text-label-sm text-[#3f4946]">
                      রিয়েল-টাইম এম্বাসি রিকোয়ারমেন্ট ও প্রসেসিং সময়
                    </span>
                  </div>
                </div>

                {/* Country & Type Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-[#3f4946] uppercase mb-1 font-semibold">
                      গন্তব্য দেশ নির্বাচন
                    </label>
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="p-3 bg-[#ecf6f1] border border-[#dbe5e0] rounded-lg text-[#141d1a] font-body-md text-sm focus:outline-none focus:ring-1 focus:ring-[#00453d]"
                    >
                      <option value="সৌদি আরব">সৌদি আরব (Saudi Tourist / Umrah eVisa)</option>
                      <option value="সংযুক্ত আরব আমিরাত (দুবাই)">সংযুক্ত আরব আমিরাত (Dubai Tourist Visa)</option>
                      <option value="থাইল্যান্ড">থাইল্যান্ড (Royal Thai Embassy Tourist Visa)</option>
                      <option value="মালয়েশিয়া">মালয়েশিয়া (eNTRI / e-Visa)</option>
                      <option value="শেঞ্জেন ইউরোপ / যুক্তরাজ্য">শেঞ্জেন ইউরোপ ও যুক্তরাজ্য (Visitor / Business)</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm text-[#3f4946] uppercase mb-1 font-semibold">
                      ভিসার ধরন
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="p-3 bg-[#ecf6f1] border border-[#dbe5e0] rounded-lg text-[#141d1a] font-body-md text-sm focus:outline-none focus:ring-1 focus:ring-[#00453d]"
                    >
                      <option>১ বছর মেয়াদী মাল্টিপল এন্ট্রি ই-ভিসা</option>
                      <option>৩০ দিন মেয়াদী সিঙ্গেল এন্ট্রি</option>
                      <option>৬০ দিন মেয়াদী ট্যুরিস্ট ভিসা</option>
                      <option>৯০ দিন মেয়াদী এক্সটেন্ডেবল</option>
                    </select>
                  </div>
                </div>

                {/* Dynamic Preview Card */}
                <div className="p-4 sm:p-5 bg-[#ecf6f1] rounded-xl border border-[#dbe5e0]/60">
                  <div className="flex items-center justify-between pb-3 border-b border-[#bec9c5]/40 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735c00] text-lg">verified_user</span>
                      <span className="font-label-md text-sm font-bold text-[#141d1a]">
                        {selectedCountry} ভিসা রিকোয়ারমেন্ট
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 bg-[#00453d] text-white font-label-sm text-xs rounded-full">
                      {currentVisa.time}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-body-sm text-xs text-[#3f4946] py-1">
                    {currentVisa.reqs.map((req, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-xs text-[#00453d] shrink-0 mt-0.5">check_circle</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#bec9c5]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-label-sm text-[11px] text-[#3f4946] block">স্বচ্ছ নির্ধারিত সরকারি ও প্রসেসিং ফি</span>
                      <span className="font-title-lg text-lg sm:text-xl text-[#00453d] font-serif font-bold">
                        {currentVisa.fee}{" "}
                        <span className="text-xs text-[#3f4946] font-normal font-sans">(সব চার্জ অন্তর্ভুক্ত)</span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setInquiryOpen(true)}
                      className="px-5 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all text-center"
                    >
                      ভিসা আবেদন করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Flight Ticket Concierge (5 Cols) */}
            <div className="lg:col-span-5 bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dbe5e0]/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#00453d] text-3xl">flight</span>
                  <div>
                    <h3 className="font-headline-md text-xl sm:text-2xl text-[#00453d] font-serif font-bold">
                      আন্তর্জাতিক এয়ার টিকিট ডেস্ক
                    </h3>
                    <span className="font-label-sm text-label-sm text-[#3f4946]">
                      সর্বনিম্ন ফেয়ার ও স্পেশাল লাগেজ সুবিধা
                    </span>
                  </div>
                </div>

                {/* Airline Partners Strip */}
                <div className="p-4 bg-[#ecf6f1] rounded-xl mb-4 border border-[#dbe5e0]/60">
                  <span className="font-label-sm text-[11px] text-[#3f4946] uppercase block mb-2 font-semibold">
                    অফিসিয়াল টিকেটিং পার্টনার
                  </span>
                  <div className="flex flex-wrap items-center gap-2 font-label-md text-xs text-[#141d1a] font-semibold">
                    <span className="px-2.5 py-1 bg-white rounded-md shadow-sm border border-[#dbe5e0]/60">Biman Bangladesh</span>
                    <span className="px-2.5 py-1 bg-white rounded-md shadow-sm border border-[#dbe5e0]/60">Saudia Airlines</span>
                    <span className="px-2.5 py-1 bg-white rounded-md shadow-sm border border-[#dbe5e0]/60">Emirates</span>
                    <span className="px-2.5 py-1 bg-white rounded-md shadow-sm border border-[#dbe5e0]/60">Qatar Airways</span>
                  </div>
                </div>

                {/* Flight Matrix Item */}
                <div className="p-4 bg-[#ecf6f1] rounded-xl space-y-2 border border-[#dbe5e0]/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#735c00] text-sm">flight_takeoff</span>
                      <span className="font-title-lg text-base text-[#00453d] font-bold">DAC &#10140; JED</span>
                    </div>
                    <span className="font-label-sm text-[10px] px-2 py-0.5 bg-[#ffffff] text-[#141d1a] rounded font-semibold border border-[#dbe5e0]">
                      ডাইরেক্ট ফ্লাইট
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-[#3f4946]">
                    ঢাকা - জেদ্দা রুটে সাউদিয়া এবং বিমানের নিয়মিত স্পেশাল ওমরাহ ফেয়ার স্লট এভেইলেবল।
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#dbe5e0]/60">
                    <span className="font-label-sm text-xs text-[#735c00] font-bold">৪৬ কেজি ব্যাগেজ অনুমোদিত</span>
                    <span className="font-title-lg text-base text-[#00453d] font-serif font-bold">৳ ৬২,৫০০+</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
                  href="tel:01312583165"
                >
                  <span className="material-symbols-outlined text-base">support_agent</span>
                  <span>টিকেটিং অফিসারের সাথে কথা বলুন</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle={`${selectedCountry} ভিসা আবেদন পরামর্শ`}
        defaultCategory="ভিসা সার্ভিস"
      />
    </>
  );
}
