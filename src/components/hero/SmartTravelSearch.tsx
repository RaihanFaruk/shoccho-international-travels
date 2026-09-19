"use client";

import { useState } from "react";
import Link from "next/link";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

type TabId = "umrah" | "hajj" | "tours" | "visa" | "flights" | "hotels";

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: "umrah", label: "ওমরাহ", icon: "mosque" },
  { id: "hajj", label: "পবিত্র হজ", icon: "temple_hindu" },
  { id: "tours", label: "ট্যুর প্যাকেজ", icon: "luggage" },
  { id: "visa", label: "ভিসা সেবা", icon: "fact_check" },
  { id: "flights", label: "এয়ার টিকিট", icon: "flight" },
  { id: "hotels", label: "হোটেল", icon: "hotel" },
];

export function SmartTravelSearch() {
  const [activeTab, setActiveTab] = useState<TabId>("umrah");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "ডাইরেক্ট ফ্লাইট",
    "৫-স্টার ক্লক টাওয়ার ভিউ",
  ]);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const currentTabLabel = tabs.find((t) => t.id === activeTab)?.label || "প্যাকেজ";
    setSearchFeedback(`আপনার নির্বাচিত অনুসন্ধান (${currentTabLabel}): সিট ও স্পেশাল কোটা এভেইলেবল রয়েছে।`);
  };

  // Helper for dynamic tile content based on category
  const getFieldData = () => {
    switch (activeTab) {
      case "visa":
        return [
          {
            label: "আপনার দেশ",
            icon: "public",
            primary: "বাংলাদেশ (BGD)",
            secondary: "পাসপোর্ট ও জাতীয় পরিচয়পত্র",
          },
          {
            label: "ভিসার গন্তব্য",
            icon: "location_on",
            primary: "সৌদি আরব / ইউএই / থাইল্যান্ড",
            secondary: "ট্যুরিস্ট ও ওমরাহ ই-ভিসা",
          },
          {
            label: "ভিসা ক্যাটাগরি",
            icon: "badge",
            primary: "১ বছর মেয়াদী মাল্টিপল এন্ট্রি",
            secondary: "দ্রুত প্রসেসিং ও বায়োমেট্রিক সাপোর্ট",
          },
          {
            label: "প্রসেসিং সময়",
            icon: "schedule",
            primary: "৭২ ঘণ্টার মধ্যে সম্পন্ন",
            secondary: "স্বচ্ছ নির্ধারিত সরকারি ফি",
          },
        ];
      case "flights":
        return [
          {
            label: "প্রস্থান বিমানবন্দর",
            icon: "flight_takeoff",
            primary: "ঢাকা (DAC)",
            secondary: "হযরত শাহজালাল আন্তর্জাতিক",
          },
          {
            label: "গন্তব্য বিমানবন্দর",
            icon: "flight_land",
            primary: "জেদ্দা / মদিনা (JED / MED)",
            secondary: "কিং আব্দুল আজিজ আন্তর্জাতিক",
          },
          {
            label: "যাত্রার তারিখ",
            icon: "calendar_month",
            primary: "ফ্লেক্সিবল তারিখ",
            secondary: "নন-স্টপ ডাইরেক্ট ফ্লাইট",
          },
          {
            label: "যাত্রী ও ব্যাগেজ",
            icon: "group",
            primary: "১ জন যাত্রী (ইকোনমি)",
            secondary: "৪৬ কেজি ফ্রি ব্যাগেজ সুবিধা",
          },
        ];
      case "hotels":
        return [
          {
            label: "শহর / এলাকা",
            icon: "location_city",
            primary: "মক্কা ক্লক টাওয়ার",
            secondary: "হারামাইন শরীফ সংলগ্ন সুইট",
          },
          {
            label: "চেক-ইন / চেক-আউট",
            icon: "calendar_month",
            primary: "পবিত্র রমজান / ছুটির দিন",
            secondary: "২৪ ঘণ্টা ফ্লেক্সিবল চেক-ইন",
          },
          {
            label: "রুমের ধরন",
            icon: "hotel",
            primary: "২ জন, ১ প্রিমিয়াম রুম",
            secondary: "হারাম ভিউ ও বুফে ব্রেকফাস্ট",
          },
          {
            label: "রেটিং ও সার্ভিস",
            icon: "star",
            primary: "৫-স্টার লাক্সারি",
            secondary: "ফ্রি শাটল বাস ও কনসিয়ার্জ",
          },
        ];
      case "tours":
        return [
          {
            label: "যাত্রার প্রস্থান",
            icon: "flight_takeoff",
            primary: "ঢাকা (DAC)",
            secondary: "গ্রুপ বা ব্যক্তিগত ট্যুর",
          },
          {
            label: "গন্তব্য নির্বাচন",
            icon: "explore",
            primary: "দুবাই / তুরস্ক / মালদ্বীপ / কাশ্মীর",
            secondary: "আন্তর্জাতিক প্রিমিয়ার ভ্যাকেশন",
          },
          {
            label: "ট্যুর মেয়াদকাল",
            icon: "calendar_month",
            primary: "৫ দিন থেকে ৮ দিন",
            secondary: "সব আকর্ষণীয় সাইটসিয়িং অন্তর্ভুক্ত",
          },
          {
            label: "ভ্রমণসঙ্গী",
            icon: "group",
            primary: "পরিবার বা যুগল (২ জন)",
            secondary: "লাক্সারি রিসোর্ট ও প্রাইভেট কার",
          },
        ];
      default: // umrah and hajj
        return [
          {
            label: "যাত্রার প্রস্থান",
            icon: "flight_takeoff",
            primary: "ঢাকা (DAC)",
            secondary: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর",
          },
          {
            label: "পবিত্র গন্তব্য",
            icon: "mosque",
            primary: "মক্কা ও মদিনা শরীফ",
            secondary: "হারামাইন প্রিমিয়ার কাফেলা",
          },
          {
            label: "যাত্রার মাস ও মেয়াদ",
            icon: "calendar_month",
            primary: "রমজান স্পেশাল ২০২৬",
            secondary: "১৪ দিন / ২৮ দিন ফ্লেক্সিবল ডেট",
          },
          {
            label: "যাত্রী ও আবাসন",
            icon: "group",
            primary: "২ জন যাত্রী, ১ রুম",
            secondary: "৫-স্টার হারামাইন সুইট",
          },
        ];
    }
  };

  const currentFields = getFieldData();

  return (
    <>
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-8 w-full" id="search-engine">
        <div className="bg-[#ffffff] p-5 sm:p-8 rounded-2xl shadow-xl border border-[#dbe5e0]/90">
          {/* Top Bar: Title & Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block">
                SMART TRAVEL DISCOVERY
              </span>
              <h2 className="font-headline-md text-xl sm:text-2xl text-[#00453d] font-serif font-semibold mt-0.5">
                আপনি কোথায় যেতে চান?
              </h2>
            </div>

            {/* Category Tab Switcher with Asian Travel Simplicity */}
            <div className="inline-flex flex-wrap items-center gap-1 bg-[#ecf6f1] p-1.5 rounded-xl border border-[#dbe5e0]/70">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchFeedback(null);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-label-md text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00453d] flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? "bg-[#00453d] text-white font-semibold shadow-sm"
                      : "text-[#3f4946] hover:text-[#141d1a] hover:bg-[#e0eae5]"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Progressive Input Matrix */}
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {currentFields.map((field, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)}
                  className="p-4 bg-[#ecf6f1] rounded-xl flex flex-col justify-between hover:bg-[#e0eae5] transition-all cursor-pointer group border border-[#dbe5e0]/60 active:scale-[0.99]"
                >
                  <span className="font-label-sm text-xs uppercase text-[#3f4946] tracking-wider flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">{field.icon}</span>
                    {field.label}
                  </span>
                  <div className="pt-2">
                    <span className="font-title-lg text-sm sm:text-base text-[#141d1a] font-semibold block group-hover:text-[#00453d] transition-colors leading-snug">
                      {field.primary}
                    </span>
                    <span className="font-body-sm text-[11px] sm:text-xs text-[#3f4946] mt-0.5 block truncate">
                      {field.secondary}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Filter Pill Row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <span className="font-label-sm text-xs text-[#3f4946] font-medium mr-1">
                  প্রয়োজনীয় ফিল্টার:
                </span>
                {[
                  "ডাইরেক্ট ফ্লাইট",
                  "৫-স্টার ক্লক টাওয়ার ভিউ",
                  "বাংলাভাষী অভিজ্ঞ মোয়াল্লিম",
                  "০% ইএমআই কিস্তি সুবিধা",
                ].map((pill) => {
                  const active = selectedFilters.includes(pill);
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => toggleFilter(pill)}
                      className={`px-3 py-1.5 rounded-full font-label-sm text-xs flex items-center gap-1.5 transition-all border ${
                        active
                          ? "bg-[#e6f0eb] text-[#00453d] border-[#075e54] font-semibold shadow-xs"
                          : "bg-[#f2fcf6] text-[#141d1a] border-[#bec9c5]/60 hover:bg-[#e0eae5]"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-xs ${
                          active ? "text-[#00453d]" : "text-[#735c00]"
                        }`}
                      >
                        check_circle
                      </span>
                      <span>{pill}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="submit"
                className="w-full lg:w-auto px-8 py-3.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-sm uppercase tracking-wider font-semibold rounded-lg shadow-md flex items-center justify-center gap-2 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00453d]"
              >
                <span className="material-symbols-outlined text-base">search</span>
                <span>অনুসন্ধান করুন (Search)</span>
              </button>
            </div>

            {/* Live Search Interactive Confirmation */}
            {searchFeedback && (
              <div className="mt-4 p-4 rounded-xl bg-[#ecf6f1] border border-[#075e54]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00453d]">
                  <span className="material-symbols-outlined text-[#735c00] text-base">verified</span>
                  <span className="font-medium">{searchFeedback}</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    href={activeTab === "visa" ? "/visa" : activeTab === "hajj" || activeTab === "umrah" ? "/hajj-umrah" : "/packages"}
                    className="px-4 py-2 rounded-lg bg-[#ecf6f1] border border-[#00453d] text-[#00453d] hover:bg-[#dbe5e0] text-xs font-semibold uppercase tracking-wider text-center flex-1 sm:flex-initial transition-colors"
                  >
                    প্যাকেজ দেখুন
                  </Link>
                  <button
                    type="button"
                    onClick={() => setInquiryOpen(true)}
                    className="px-4 py-2 rounded-lg bg-[#00453d] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#075e54] text-center flex-1 sm:flex-initial transition-colors"
                  >
                    বুকিং অনুসন্ধান
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle={`${tabs.find((t) => t.id === activeTab)?.label || "ভ্রমণ"} অনুসন্ধান ও পরামর্শ`}
        defaultCategory="স্মার্ট ট্রাভেল ডিসকভারি"
      />
    </>
  );
}

