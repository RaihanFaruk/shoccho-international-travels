"use client";

import { useState } from "react";
import Image from "next/image";
import { Muallim } from "@/data/muallims";

interface Props {
  muallim: Muallim | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationBookingModal({ muallim, isOpen, onClose }: Props) {
  const [date, setDate] = useState("2026-02-25");
  const [timeSlot, setTimeSlot] = useState("রাত ০৮:০০ (ভার্চুয়াল)");
  const [consultationType, setConsultationType] = useState<"virtual" | "office">("virtual");
  const [name, setName] = useState("তানভীর আহমেদ");
  const [phone, setPhone] = useState("01711223344");
  const [topics, setTopics] = useState("হজের প্রাথমিক প্রস্তুতি ও মহিলাদের মাসায়েল");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !muallim) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141d1a]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#ffffff] rounded-2xl shadow-2xl border border-[#dbe5e0] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#00453d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fed65b] text-2xl">
              school
            </span>
            <div>
              <h3 className="font-title-lg text-lg font-bold font-serif">
                ১-অন-১ মোয়াল্লিম কনসালটেশন
              </h3>
              <span className="font-label-sm text-xs text-[#a2b5af]">
                হজের প্রস্তুতি ও ধর্মীয় পরামর্শ
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 text-[#141d1a]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Scholar Preview */}
              <div className="p-3 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#fed65b] shrink-0">
                  <Image
                    src={muallim.photoUrl}
                    alt={muallim.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-title-md text-sm font-bold text-[#00453d]">
                    {muallim.name}
                  </h4>
                  <span className="font-label-sm text-xs text-[#735c00] font-semibold block">
                    {muallim.title} • {muallim.verificationLevel}
                  </span>
                </div>
              </div>

              {/* Consultation Type */}
              <div>
                <label className="font-label-sm text-xs uppercase tracking-wider text-[#3f4946] font-bold block mb-1.5">
                  পরামর্শের ধরন
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConsultationType("virtual")}
                    className={`p-3 rounded-lg border text-center text-xs font-bold transition-all ${
                      consultationType === "virtual"
                        ? "border-[#00453d] bg-[#00453d] text-white"
                        : "border-[#dbe5e0] hover:bg-[#f2fcf6] text-[#141d1a]"
                    }`}
                  >
                    🎥 অনলাইন গুগল মিট কল
                  </button>
                  <button
                    type="button"
                    onClick={() => setConsultationType("office")}
                    className={`p-3 rounded-lg border text-center text-xs font-bold transition-all ${
                      consultationType === "office"
                        ? "border-[#00453d] bg-[#00453d] text-white"
                        : "border-[#dbe5e0] hover:bg-[#f2fcf6] text-[#141d1a]"
                    }`}
                  >
                    🏢 সাভার অফিস (ইন-পার্সন)
                  </button>
                </div>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                    তারিখ নির্বাচন
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                    সময় স্লট
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                  >
                    <option>সকাল ১১:০০</option>
                    <option>বিকাল ০৪:৩০</option>
                    <option>রাত ০৮:০০ (ভার্চুয়াল)</option>
                    <option>রাত ০৯:৩০ (ভার্চুয়াল)</option>
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                    আপনার নাম
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                    মোবাইল নম্বর (হোয়াটসঅ্যাপ)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                  আপনার আলোচনার বিষয় বা প্রশ্নসমূহ
                </label>
                <textarea
                  rows={2}
                  value={topics}
                  onChange={(e) => setTopics(e.target.value)}
                  placeholder="যেমন: হজের মিকাত, তাওয়াফ, শারীরিক অসুস্থতায় করণীয়..."
                  className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all text-center"
                >
                  কনসালটেশন বুকিং নিশ্চিত করুন
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#00453d] text-[#fed65b] rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">
                ✓
              </div>
              <h4 className="font-headline-sm text-xl text-[#00453d] font-serif font-bold">
                কনসালটেশন অ্যাপয়েন্টমেন্ট নিশ্চিত হয়েছে!
              </h4>
              <p className="font-body-sm text-xs text-[#3f4946] max-w-sm mx-auto">
                {muallim.name} এর সাথে আপনার {consultationType === "virtual" ? "অনলাইন ভিডিও মিটিং" : "সাভার অফিসে সাক্ষাৎ"} শিডিউল করা হয়েছে।
              </p>
              <div className="p-3 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] text-xs font-semibold text-[#00453d]">
                তারিখ: {date} | সময়: {timeSlot}
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold rounded-lg transition-all"
              >
                ঠিক আছে
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
