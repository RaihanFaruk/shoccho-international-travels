import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে ও ভিশন-মিশন | স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস",
  description:
    "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস-এর সূচনা পটভূমি, ভিশন, মিশন, মূলনীতি এবং নেতৃত্ব। শতভাগ স্বচ্ছতা, লুকানো খরচমুক্ত ওমরাহ ও আন্তর্জাতিক ভ্রমণ কনসিয়ার্জ।",
};

const coreValues = [
  {
    icon: "verified_user",
    titleBn: "শতভাগ স্বচ্ছতা (Radical Transparency)",
    titleEn: "Zero Hidden Costs",
    descBn:
      "আমরা প্রতিটি খরচের পরিষ্কার ব্রেকডাউন প্রদান করি। হোটেল ক্যাটাগরি, হারামাইন শরিফাইন থেকে প্রকৃত দূরত্ব, পরিবহন ব্যবস্থা ও ভিসা ফি চুক্তিনামায় লিখিতভাবে উল্লেখ থাকে।",
  },
  {
    icon: "mosque",
    titleBn: "আমানতদারিতা ও ধর্মীয় মর্যাদা",
    titleEn: "Spiritual Integrity & Amanah",
    descBn:
      "হজ ও ওমরাহ একটি পবিত্র ইবাদত। এই মহান সফরের পবিত্রতা বজায় রাখতে আমরা অভিজ্ঞ আলেম ও মুয়াল্লিমদের প্রত্যক্ষ নির্দেশনায় প্রতিটি কাফেলা পরিচালনা করি।",
  },
  {
    icon: "hotel",
    titleBn: "মর্যাদাপূর্ণ আতিথেয়তা",
    titleEn: "Premium Hospitality",
    descBn:
      "আমাদের সকল হোটেল মানসম্মত, রুচিসম্মত ও পরিচ্ছন্ন। বয়োবৃদ্ধ ও পরিবারের সদস্যদের জন্য আমরা নির্বাচন করি হারামাইনের নিকটবর্তী স্বাচ্ছন্দ্যময় আবাসন।",
  },
  {
    icon: "support_agent",
    titleBn: "সার্বক্ষণিক গ্রাউন্ড সাপোর্ট",
    titleEn: "24/7 Dedicated Ground Concierge",
    descBn:
      "ঢাকা বিমানবন্দর থেকে শুরু করে জেদ্দা, মক্কা ও মদিনায় আমাদের নিজস্ব প্রতিনিধিরা সম্মানিত হাজীদের সার্বিক সহায়তা ও সেবায় সদা প্রস্তুত থাকেন।",
  },
];

const missionPillars = [
  {
    metric: "১০০%",
    label: "স্বচ্ছ চুক্তি ও লিখিত প্রতিশ্রুতি",
    detail: "কোনো অস্পষ্টতা ছাড়া বুকিংয়ের আগেই প্রতিটি সেবার সম্পূর্ণ বিবরণ গ্রাহকের হাতে তুলে দেওয়া হয়।",
  },
  {
    metric: "৪০:১",
    label: "মুয়াল্লিম ও যাত্রী অনুপাত",
    detail: "প্রতিটি কাফেলায় সর্বোচ্চ ৪০ জন যাত্রীর জন্য একজন ডেডিকেটেড অভিজ্ঞ আলেম মুয়াল্লিম সার্বক্ষণিক দায়িত্বে থাকেন।",
  },
  {
    metric: "৭২ ঘণ্টা",
    label: "দ্রুততম ভিসা ও ডকুমেন্টেশন ট্র্যাকিং",
    detail: "আবেদন জমার ৩ কার্যদিবসের মধ্যে স্বচ্ছ বায়োমেট্রিক ও ই-ভিসা অনুমোদন আপডেট প্রদান।",
  },
  {
    metric: "২৪/৭",
    label: "জরুরি সেবা ও কনসিয়ার্জ হেল্পলাইন",
    detail: "সফরকালীন যেকোনো প্রয়োজনে ঢাকা ও সৌদি আরবে নিবেদিত কল সেন্টার ও ফিল্ড সাপোর্ট টিম।",
  },
];

const accreditations = [
  {
    icon: "fact_check",
    title: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত",
    sub: "ধর্ম বিষয়ক মন্ত্রণালয় ও হজ অনুবিভাগ লাইসেন্সপ্রাপ্ত ট্রাভেল এজেন্সি",
  },
  {
    icon: "flight_takeoff",
    title: "ATAB ও বেসামরিক বিমান চলাচল কর্তৃপক্ষ নিবন্ধিত",
    sub: "এসোসিয়েশন অব ট্রাভেল এজেন্টস অব বাংলাদেশ (ATAB) সক্রিয় সদস্য",
  },
  {
    icon: "workspace_premium",
    title: "IATA আন্তর্জাতিক স্বীকৃতি পার্টনার",
    sub: "বিশ্বের শীর্ষস্থানীয় এয়ারলাইন্সের সরাসরি টিকিটিং ও কনসিয়ার্জ সুবিধা",
  },
  {
    icon: "apartment",
    title: "কর্পোরেট প্রধান কার্যালয়",
    sub: "জয়তুন প্লাজা, কুড়গাঁও, নবীনগর বাসস্ট্যান্ড সংলগ্ন, আশুলিয়া, সাভার, ঢাকা",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col font-sans text-[#141d1a]">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#3f4946] mb-8 font-sans">
            <Link href="/" className="hover:text-[#00453d] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>হোম</span>
            </Link>
            <span className="text-[#bec9c5]">/</span>
            <span className="text-[#00453d] font-semibold">আমাদের সম্পর্কে ও ভিশন-মিশন</span>
          </nav>

          {/* Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#00453d] via-[#003b34] to-[#012622] text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl border border-[#00453d]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fed65b]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fed65b]/20 border border-[#fed65b]/40 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#fed65b] animate-pulse" />
                <span className="font-label-sm text-xs text-[#ffe088] font-bold tracking-wider uppercase font-sans">
                  ESTABLISHED ON INTEGRITY • স্বচ্ছতার অঙ্গীকার
                </span>
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#ffffff] leading-tight mb-6">
                পবিত্র সফর ও বৈশ্বিক ভ্রমণে পরিপূর্ণ স্বচ্ছতার নিশ্চয়তা
              </h1>
              <p className="font-body-lg text-base sm:text-lg text-[#ecf6f1]/90 leading-relaxed font-sans mb-8">
                স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস গড়ে উঠেছে একটি স্পষ্ট মূলনীতির ওপর—যাত্রীদের কোনো লুকানো খরচ বা বিভ্রান্তির শিকার হতে হবে না। প্রতিটি কাফেলায় সততা, ধর্মীয় সম্মান ও আধুনিক ডিজিটাল ব্যবস্থাপনার মেলবন্ধন ঘটিয়ে আমরা সেবা প্রদানে দায়বদ্ধ।
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/hajj-umrah"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#fed65b] hover:bg-[#ffe088] text-[#00453d] font-semibold text-sm rounded-xl shadow-md transition-all font-sans"
                >
                  <span>আমাদের কাফেলাসমূহ দেখুন</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <a
                  href="tel:01312583165"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl backdrop-blur-sm border border-white/20 transition-all font-sans"
                >
                  <span className="material-symbols-outlined text-base">phone_in_talk</span>
                  <span>সরাসরি কথা বলুন: 01312-583165</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 1: The Origin Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block mb-2 font-sans">
                আমাদের সূচনা ও পটভূমি • THE ORIGIN STORY
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d] mb-6 leading-snug">
                কেন &lsquo;স্বচ্ছ&rsquo; নাম এবং কেন এই বিশেষ উদ্যোগ?
              </h2>
              <div className="space-y-4 text-[#3f4946] text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  বাংলাদেশে হজ ও ওমরাহ পালন করতে গিয়ে প্রতি বছর হাজার হাজার ধর্মপ্রাণ মুসলিম অনাকাঙ্ক্ষিত বিড়ম্বনার মুখোমুখি হন। কম খরচের প্রলোভন দেখিয়ে পরে বাড়তি হিডেন চার্জ দাবি করা, দূরবর্তী হোটেলে আবাসন দেওয়া এবং অনভিজ্ঞ গাইডের কারণে তাওয়াফ-সাঈতে ভুলত্রুটির ঘটনা ছিল নৈমিত্তিক।
                </p>
                <p>
                  এই প্রেক্ষাপটে <strong className="text-[#00453d]">হাফেজ মাওলানা মোঃ ফজল রাব্বি</strong> এমন একটি প্ল্যাটফর্ম প্রতিষ্ঠার স্বপ্ন দেখেন, যা হবে শতভাগ স্বচ্ছ ও জবাবদিহিতামূলক। নাম রাখা হয় <strong className="text-[#00453d]">&lsquo;স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস&rsquo;</strong>—যেখানে কোনো অস্পষ্টতা নেই, কোনো লুকানো শর্তাবলি নেই।
                </p>
                <p>
                  সাভারের প্রধান কার্যালয় থেকে যাত্রা শুরু করে আজ আমরা দেশের হাজারো সম্মানিত হাজী, ওমরাহযাত্রী এবং আন্তর্জাতিক পর্যটকদের নির্ভরতার প্রতীক। প্রতিটি টিকিটের ফেয়ার ব্রেকডাউন, প্রতিটি হোটেলের সঠিক অবস্থান এবং প্রতিটি ভিসার সরকারি ফি আমরা উন্মুক্তভাবে উপস্থাপন করি।
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#ecf6f1] text-[#00453d] flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow-sm">
                  স্ব
                </div>
                <blockquote className="font-serif text-lg text-[#00453d] italic leading-relaxed mb-4">
                  &ldquo;আমরা সেবা বিক্রি করি না; আমরা সম্মানিত আল্লাহর মেহমানদের খিদমত করার সুযোগ গ্রহণ করি। প্রতিটি পয়সার আমানত রক্ষা করাই আমাদের ঈমানী দায়িত্ব।&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-[#dbe5e0] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#00453d] text-[#ffe088] font-serif font-bold text-base flex items-center justify-center ring-2 ring-[#fed65b] shrink-0">
                    ফ
                  </div>
                  <div>
                    <h4 className="font-title-md text-sm font-semibold text-[#141d1a]">
                      হাফেজ মাওলানা মোঃ ফজল রাব্বি
                    </h4>
                    <p className="font-label-sm text-xs text-[#735c00] font-medium">
                      প্রতিষ্ঠাতা ও চেয়ারম্যান, স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Vision & Measurable Mission */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block mb-2 font-sans">
                লক্ষ্য ও ভবিষ্যৎ দর্শন • VISION & MISSION
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d]">
                আমাদের সুস্পষ্ট ভিশন ও পরিমাপযোগ্য মিশন
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Vision Box */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-[#00453d]/20 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecf6f1] rounded-bl-full -z-0" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ecf6f1] rounded-full mb-4 text-[#00453d] font-bold text-xs uppercase tracking-wider font-sans">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>আমাদের ভিশন (Strategic Vision)</span>
                  </div>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-serif font-bold text-[#00453d] mb-4">
                    দক্ষিণ এশিয়ার সর্বাধিক বিশ্বাসযোগ্য ও নৈতিক ট্রাভেল প্ল্যাটফর্ম
                  </h3>
                  <p className="font-body-md text-sm sm:text-base text-[#3f4946] leading-relaxed font-sans">
                    আগামী ৫ বছরের মধ্যে দক্ষিণ এশিয়ার সর্বাপেক্ষা নির্ভরযোগ্য ও প্রযুক্তি-বান্ধব ইসলামিক ও আন্তর্জাতিক ট্রাভেল ইকোসিস্টেম হিসেবে প্রতিষ্ঠিত হওয়া—যেখানে প্রতিটি হজ-ওমরাহ পালনকারী এবং গ্লোবাল পর্যটক পরম শান্তি, আত্মবিশ্বাস ও মর্যাদার সাথে তাদের জীবনস্মরণীয় সফর সম্পন্ন করতে পারবেন।
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#dbe5e0] relative z-10 flex items-center gap-2 text-xs text-[#735c00] font-semibold">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>নৈতিকতা • স্বচ্ছতা • প্রযুক্তি • শ্রেষ্ঠত্ব</span>
                </div>
              </div>

              {/* Mission Box */}
              <div className="bg-[#ecf6f1] p-8 rounded-2xl shadow-sm border-2 border-[#bec9c5]/40 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full mb-4 text-[#735c00] font-bold text-xs uppercase tracking-wider font-sans shadow-sm">
                    <span className="material-symbols-outlined text-sm">flag</span>
                    <span>আমাদের মিশন (Measurable Mission)</span>
                  </div>
                  <h3 className="font-headline-md text-xl sm:text-2xl font-serif font-bold text-[#00453d] mb-4">
                    নিখুঁত স্বচ্ছতা ও আন্তরিক সেবায় প্রতিটি পদক্ষেপে উৎকর্ষ
                  </h3>
                  <p className="font-body-md text-sm sm:text-base text-[#3f4946] leading-relaxed font-sans">
                    হিডেন চার্জমুক্ত চুক্তিনামা, সুপ্রতিষ্ঠিত আলেমদের প্রত্যক্ষ তদারকি, রিয়েল-টাইম বায়োমেট্রিক ও ভিসা ট্র্যাকিং এবং সার্বক্ষণিক গ্রাউন্ড কনসিয়ার্জ সার্ভিসের মাধ্যমে প্রতিটি যাত্রীকে পরিবারসুলভ আতিথেয়তা প্রদান করা।
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#bec9c5]/60 relative z-10 flex items-center gap-2 text-xs text-[#00453d] font-semibold">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>৪টি পরিমাপযোগ্য মানদণ্ড দ্বারা পরিচালিত</span>
                </div>
              </div>
            </div>

            {/* Measurable Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-[#dbe5e0] flex flex-col justify-between hover:border-[#00453d] transition-all"
                >
                  <div>
                    <span className="font-headline-lg text-3xl sm:text-4xl font-serif font-bold text-[#735c00] block mb-2">
                      {p.metric}
                    </span>
                    <h4 className="font-title-md text-base font-serif font-semibold text-[#00453d] mb-2">
                      {p.label}
                    </h4>
                    <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed font-sans">
                      {p.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Core Values */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block mb-2 font-sans">
                আমাদের মূলস্তম্ভ • CORE VALUES
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d]">
                স্বচ্ছতার চার মূলস্তম্ভ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#dbe5e0] hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ecf6f1] text-[#00453d] flex items-center justify-center mb-4 group-hover:bg-[#00453d] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                  </div>
                  <h3 className="font-title-lg text-base font-serif font-bold text-[#00453d] mb-1">
                    {v.titleBn}
                  </h3>
                  <span className="font-label-sm text-[11px] text-[#735c00] font-semibold block mb-3 uppercase tracking-wider font-sans">
                    {v.titleEn}
                  </span>
                  <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed font-sans">
                    {v.descBn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Accreditations & Approvals */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] mb-16 sm:mb-20">
            <div className="max-w-3xl mb-8">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block mb-2 font-sans">
                বৈধ অনুমোদন ও স্বীকৃতি • ACCREDITATIONS
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-serif font-bold text-[#00453d]">
                সরকারি লাইসেন্স ও প্রাতিষ্ঠানিক স্বীকৃতি
              </h2>
              <p className="text-sm text-[#3f4946] mt-2 font-sans">
                স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস বাংলাদেশ সরকার ও আন্তর্জাতিক বিমান চলাচল কর্তৃপক্ষের সকল বিধিবিধান ও সনদ প্রাপ্ত।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {accreditations.map((a, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#f8faf9] border border-[#dbe5e0]/70"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ecf6f1] text-[#00453d] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">{a.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-sm font-semibold text-[#141d1a] mb-0.5">
                      {a.title}
                    </h4>
                    <p className="text-xs text-[#3f4946] font-sans leading-relaxed">
                      {a.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="rounded-3xl bg-[#00453d] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                স্বচ্ছতার সাথে আপনার বরকতময় সফরের সূচনা হোক
              </h2>
              <p className="font-body-md text-sm sm:text-base text-[#ecf6f1]/90 mb-8 font-sans">
                আমাদের অভিজ্ঞ কনসালট্যান্টদের সাথে কথা বলুন অথবা অফিসে সরাসরি আমন্ত্রণ গ্রহণ করুন। আপনার পরিবার ও প্রিয়জনদের জন্য সর্বোত্তম সফরের পরিকল্পনা তৈরি করতে আমরা প্রস্তুত।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/packages"
                  className="px-6 py-3.5 bg-[#fed65b] hover:bg-[#ffe088] text-[#00453d] font-semibold text-sm rounded-xl shadow transition-all font-sans"
                >
                  সকল প্যাকেজ দেখুন
                </Link>
                <Link
                  href="/#location"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all font-sans"
                >
                  অফিস লোকেশন দেখুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
