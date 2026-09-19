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

  const handleBookConsultation = (m: Muallim) => {
    setSelectedMuallim(m);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
              ধর্মীয় পথপ্রদর্শক ও মেন্টর
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight">
              স্বচ্ছ ভেরিফাইড মোয়াল্লিম ডিরেক্টরি
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] mt-3 leading-relaxed">
              সঠিকভাবে হজ ও ওমরাহ পালনে যোগ্য, অভিজ্ঞ ও অমায়িক আলেমদের তত্ত্বাবধান অপরিহার্য। আমাদের প্রতিটি কাফেলা পরিচালিত হয় বিজ্ঞ মোয়াল্লিমদের প্রত্যক্ষ নির্দেশনায়।
            </p>
          </div>

          {/* Muallim Cards Grid */}
          <div className="space-y-8 max-w-5xl mx-auto mb-16">
            {muallimsData.map((muallim) => (
              <div
                key={muallim.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] flex flex-col md:flex-row items-start gap-6 sm:gap-8"
              >
                {/* Scholar Avatar & Badge */}
                <div className="flex flex-col items-center text-center shrink-0 w-full md:w-56">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#fed65b] shadow-md mb-3">
                    <Image
                      src={muallim.photoUrl}
                      alt={muallim.name}
                      fill
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
                    <p className="font-body-sm text-xs text-[#3f4946] mt-2 leading-relaxed">
                      {muallim.bio}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] text-xs">
                    <div>
                      <span className="text-[#3f4946] block">শিক্ষাগত ব্যাকগ্রাউন্ড:</span>
                      <strong className="text-[#141d1a]">{muallim.education}</strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block">ভাষা দক্ষতা:</span>
                      <strong className="text-[#141d1a]">{muallim.languages.join(", ")}</strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block">হজ ও ওমরাহ নেতৃত্ব:</span>
                      <strong className="text-[#141d1a]">
                        হজ: {muallim.hajjCount} বার | ওমরাহ: {muallim.umrahCount}+ বার
                      </strong>
                    </div>
                    <div>
                      <span className="text-[#3f4946] block">বিশেষত্ব:</span>
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
