"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { muallimsData, Muallim } from "@/data/muallims";
import { ConsultationBookingModal } from "@/components/muallim/ConsultationBookingModal";

export default function MuallimsPage() {
  const [selectedMuallim, setSelectedMuallim] = useState<Muallim | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Scholar Onboarding Form State
  const [scholarName, setScholarName] = useState("");
  const [scholarPhone, setScholarPhone] = useState("");
  const [scholarInstitution, setScholarInstitution] = useState("");
  const [scholarExperience, setScholarExperience] = useState("৫+ বছর");
  const [onboardingSubmitted, setOnboardingSubmitted] = useState(false);

  const handleBookConsultation = (m: Muallim) => {
    setSelectedMuallim(m);
    setModalOpen(true);
  };

  const handleScholarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scholarName || !scholarPhone) return;
    setOnboardingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between font-sans text-[#141d1a]">
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
            <span className="text-[#00453d] font-semibold">মোয়াল্লিম ডিরেক্টরি ও আলেম প্যানেল</span>
          </nav>

          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#735c00]" />
              <span>VERIFIED SCHOLAR DIRECTORY &bull; ফেজ-১ ডিরেক্টরি প্রিভিউ</span>
            </div>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight mb-4">
              স্বচ্ছ ভেরিফাইড মোয়াল্লিম ও আলেম প্যানেল
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] leading-relaxed">
              সঠিক সুন্নাহ মোতাবেক হজ ও ওমরাহ পালনে অভিজ্ঞ, অমায়িক ও প্রাজ্ঞ আলেমদের প্রত্যক্ষ তদারকি অপরিহার্য। প্রতিটি কাফেলায় যাত্রীদের সহীহ তালিম ও আন্তরিক খিদমত নিশ্চিতে আমাদের আলেম পরিষদ দায়বদ্ধ।
            </p>
          </div>

          {/* 3-Stage Interaction Journey Infographic */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#dbe5e0] mb-16">
            <div className="max-w-2xl mb-8">
              <span className="font-label-sm text-xs text-[#735c00] uppercase tracking-widest font-bold block mb-1">
                PILGRIM-SCHOLAR ENGAGEMENT
              </span>
              <h2 className="font-headline-md text-xl sm:text-2xl font-serif font-bold text-[#00453d]">
                যাত্রীদের সাথে মোয়াল্লিমদের ৩-ধাপের নিবিড় সংযোগ
              </h2>
              <p className="text-xs sm:text-sm text-[#3f4946] mt-1">
                কাফেলা শুরুর আগেই আমাদের আলেমদের সাথে যুক্ত হতে পারেন সম্মানিত যাত্রীরা।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-[#f8faf9] border border-[#dbe5e0]/80 relative flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ecf6f1] text-[#00453d] flex items-center justify-center font-bold text-base mb-4 font-serif">
                    ১
                  </div>
                  <h3 className="font-title-lg text-base font-serif font-bold text-[#00453d] mb-2">
                    যাত্রা-পূর্ব কর্মশালা ও মেন্টরশিপ
                  </h3>
                  <p className="text-xs text-[#3f4946] leading-relaxed">
                    ফ্লাইটের পূর্বে ঢাকায় সেমিনার ও ভার্চুয়াল ক্লাসের মাধ্যমে ইহরামের নিয়ম, তাওয়াফ ও সাঈর দোয়া এবং মক্কা-মদিনার শিষ্টাচার হাতে-কলমে শেখানো হয়।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#dbe5e0] flex items-center gap-1.5 text-[11px] text-[#735c00] font-semibold">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>ফ্লাইটের ৭-১০ দিন পূর্বে</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-[#ecf6f1] border border-[#bec9c5]/60 relative flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00453d] text-[#fed65b] flex items-center justify-center font-bold text-base mb-4 font-serif shadow-sm">
                    ২
                  </div>
                  <h3 className="font-title-lg text-base font-serif font-bold text-[#00453d] mb-2">
                    হারামাইনে লাইভ তাওয়াফ গাইডেন্স
                  </h3>
                  <p className="text-xs text-[#3f4946] leading-relaxed">
                    কাবা প্রাঙ্গণ ও সাফা-মারওয়াতে মোয়াল্লিম সাহেব সরাসরি কাফেলার সামনে থেকে নেতৃত্ব দেন, যেন ভিড়ের মধ্যেও কোনো হাজী দিকভ্রান্ত না হন।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#bec9c5]/40 flex items-center gap-1.5 text-[11px] text-[#00453d] font-semibold">
                  <span className="material-symbols-outlined text-sm">mosque</span>
                  <span>মক্কা ও মদিনা প্রাঙ্গণে সরাসরি</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-[#f8faf9] border border-[#dbe5e0]/80 relative flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ecf6f1] text-[#00453d] flex items-center justify-center font-bold text-base mb-4 font-serif">
                    ৩
                  </div>
                  <h3 className="font-title-lg text-base font-serif font-bold text-[#00453d] mb-2">
                    সার্বক্ষণিক মাসয়ালা ও পরামর্শ সেল
                  </h3>
                  <p className="text-xs text-[#3f4946] leading-relaxed">
                    সফর চলাকালীন মহিলারা ও বয়োবৃদ্ধরা যেকোনো জরুরি ধর্মীয় জটিলতা বা ফিদয়া সংক্রান্ত প্রশ্নে সরাসরি মোয়াল্লিম সাহেবের সাথে পরামর্শ করতে পারেন।
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#dbe5e0] flex items-center gap-1.5 text-[11px] text-[#735c00] font-semibold">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  <span>২৪/৭ ডেডিকেটেড সাপোর্ট</span>
                </div>
              </div>
            </div>
          </div>

          {/* Muallim Cards Grid */}
          <div className="space-y-8 max-w-5xl mx-auto mb-16">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-2xl font-serif font-bold text-[#00453d]">
                সম্মানিত মোয়াল্লিমবৃন্দ
              </h2>
              <span className="text-xs text-[#735c00] font-semibold bg-[#ffffff] px-3 py-1 rounded-full border border-[#dbe5e0]">
                {muallimsData.length} জন যাচাইকৃত স্কলার প্রদর্শিত
              </span>
            </div>

            {muallimsData.map((muallim) => (
              <div
                key={muallim.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] flex flex-col md:flex-row items-start gap-6 sm:gap-8 hover:shadow-md transition-shadow"
              >
                {/* Scholar Avatar & Badge */}
                <div className="flex flex-col items-center text-center shrink-0 w-full md:w-56">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#fed65b] shadow-md mb-3">
                    <Image
                      src={muallim.photoUrl}
                      alt={muallim.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <span className="px-3 py-1 bg-[#00453d] text-[#fed65b] font-label-sm text-[11px] font-bold rounded-full shadow-sm mb-1">
                    ★ {muallim.verificationLevel}
                  </span>
                  <div className="flex items-center gap-1 text-[#735c00] text-xs font-bold mt-1">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span>{muallim.rating}</span>
                    <span className="text-[#3f4946] font-normal">({muallim.reviewCount} টি রিভিউ)</span>
                  </div>
                </div>

                {/* Info & Credentials */}
                <div className="flex-1 space-y-4 text-[#141d1a]">
                  <div>
                    <h3 className="font-headline-md text-xl sm:text-2xl font-serif font-bold text-[#00453d]">
                      {muallim.name}
                    </h3>
                    <span className="font-label-md text-xs text-[#735c00] font-semibold block mt-0.5">
                      {muallim.title} • {muallim.experienceYears}+ বছর অভিজ্ঞতা
                    </span>
                    <p className="font-body-sm text-xs sm:text-sm text-[#3f4946] mt-2 leading-relaxed">
                      {muallim.bio}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] text-xs">
                    <div>
                      <span className="text-[#3f4946] block font-medium">শিক্ষাগত ব্যাকগ্রাউন্ড:</span>
                      <strong className="text-[#141d1a]">{muallim.education}</strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block font-medium">ভাষা দক্ষতা:</span>
                      <strong className="text-[#141d1a]">{muallim.languages.join(", ")}</strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block font-medium">হজ ও ওমরাহ নেতৃত্ব:</span>
                      <strong className="text-[#141d1a]">
                        হজ: {muallim.hajjCount} বার | ওমরাহ: {muallim.umrahCount}+ বার
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block font-medium">বিশেষত্ব:</span>
                      <strong className="text-[#00453d]">{muallim.specialties.join(" • ")}</strong>
                    </div>
                  </div>

                  {/* Upcoming Batches */}
                  <div>
                    <span className="font-label-sm text-xs font-bold text-[#3f4946] block mb-1.5 uppercase tracking-wider">
                      আসন্ন কাফেলাসমূহ:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {muallim.upcomingBatches.map((batch, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 bg-[#ecf6f1] text-[#00453d] text-xs font-semibold rounded-lg border border-[#dbe5e0] flex items-center gap-1.5"
                        >
                          <span className="material-symbols-outlined text-xs text-[#735c00]">event</span>
                          <span>{batch.batchName} ({batch.departureDate})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#dbe5e0] flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleBookConsultation(muallim)}
                      className="px-5 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm text-[#fed65b]">calendar_month</span>
                      <span>১-অন-১ পরামর্শ বুক করুন</span>
                    </button>
                    <Link
                      href="/hajj-umrah"
                      className="px-4 py-2.5 border border-[#dbe5e0] hover:bg-[#f2fcf6] text-[#00453d] font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                    >
                      হুজুরের কাফেলা দেখুন
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scholar Onboarding / Waitlist Network Panel */}
          <div className="bg-gradient-to-br from-[#00453d] via-[#003b34] to-[#012622] rounded-3xl p-8 sm:p-12 text-white shadow-lg border border-[#00453d] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#fed65b]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fed65b]/20 border border-[#fed65b]/40 mb-4">
                  <span className="material-symbols-outlined text-xs text-[#ffe088]">workspace_premium</span>
                  <span className="font-label-sm text-xs text-[#ffe088] font-bold uppercase tracking-wider">
                    আলেম ও মুয়াল্লিম পার্টনারশিপ
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                  আপনি কি একজন দক্ষ আলেম বা মুয়াল্লিম?
                </h2>
                <p className="font-body-md text-sm text-[#ecf6f1]/90 leading-relaxed mb-4">
                  স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস-এর আলেম প্যানেলে যুক্ত হয়ে হাজীদের সরাসরি সেবা প্রদান করুন। আমরা নিশ্চিত করি উপযুক্ত সম্মাননা, স্বচ্ছ সফর ব্যবস্থাপনা এবং পূর্ণ ধর্মীয় স্বাধীনতা।
                </p>
                <div className="space-y-2 text-xs text-[#ecf6f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                    <span>হাতে-কলমে হজ-ওমরাহ পরিচালনার পূর্ব অভিজ্ঞতা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                    <span>কওমি বা আলিয়া মাদ্রাসা থেকে দাওরায়ে হাদিস বা উচ্চতর সনদ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                    <span>যাত্রীদের সাথে ধৈর্যশীল, মার্জিত ও আন্তরিক আচরণ</span>
                  </div>
                </div>
              </div>

              {/* Interactive Waitlist Application Form */}
              <div className="lg:col-span-5 bg-white text-[#141d1a] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#dbe5e0]">
                {onboardingSubmitted ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-[#ecf6f1] text-[#00453d] flex items-center justify-center mx-auto mb-3">
                      <span className="material-symbols-outlined text-3xl">verified</span>
                    </div>
                    <h3 className="font-headline-md text-lg font-serif font-bold text-[#00453d] mb-1">
                      আবেদন গৃহীত হয়েছে!
                    </h3>
                    <p className="text-xs text-[#3f4946] mb-4 leading-relaxed">
                      শ্রদ্ধেয় {scholarName}, স্বচ্ছ ট্রাভেলস আলেম প্যানেল পর্যালোচনা টিম আপনার সাথে ২ কার্যদিবসের মধ্যে যোগাযোগ করবে।
                    </p>
                    <button
                      onClick={() => {
                        setOnboardingSubmitted(false);
                        setScholarName("");
                        setScholarPhone("");
                        setScholarInstitution("");
                      }}
                      className="px-4 py-2 bg-[#ecf6f1] hover:bg-[#dbe5e0] text-[#00453d] text-xs font-semibold rounded-lg transition-colors"
                    >
                      আরেকটি আবেদন করুন
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleScholarSubmit} className="space-y-3.5">
                    <h3 className="font-title-lg text-base font-serif font-bold text-[#00453d] border-b border-[#ecf6f1] pb-2">
                      মোয়াল্লিম প্যানেলে যুক্ত হতে আবেদন
                    </h3>
                    <div>
                      <label className="block text-xs font-medium text-[#3f4946] mb-1">
                        আপনার নাম *
                      </label>
                      <input
                        type="text"
                        required
                        value={scholarName}
                        onChange={(e) => setScholarName(e.target.value)}
                        placeholder="যেমন: মাওলানা মোঃ আব্দুল্লাহ"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#bec9c5] focus:outline-none focus:border-[#00453d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#3f4946] mb-1">
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        value={scholarPhone}
                        onChange={(e) => setScholarPhone(e.target.value)}
                        placeholder="017XXXXXXXX"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#bec9c5] focus:outline-none focus:border-[#00453d]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-[#3f4946] mb-1">
                          শিক্ষা প্রতিষ্ঠান
                        </label>
                        <input
                          type="text"
                          value={scholarInstitution}
                          onChange={(e) => setScholarInstitution(e.target.value)}
                          placeholder="মাদ্রাসা/বিশ্ববিদ্যালয়"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#bec9c5] focus:outline-none focus:border-[#00453d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#3f4946] mb-1">
                          অভিজ্ঞতা
                        </label>
                        <select
                          value={scholarExperience}
                          onChange={(e) => setScholarExperience(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#bec9c5] focus:outline-none focus:border-[#00453d] bg-white"
                        >
                          <option value="২-৪ বছর">২-৪ বছর</option>
                          <option value="৫+ বছর">৫+ বছর</option>
                          <option value="১০+ বছর">১০+ বছর</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-2 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm text-[#fed65b]">send</span>
                      <span>আবেদন জমা দিন (ওয়েটলিস্ট)</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />

      <ConsultationBookingModal
        muallim={selectedMuallim}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
