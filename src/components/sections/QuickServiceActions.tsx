"use client";

import { useState } from "react";
import Link from "next/link";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

export function QuickServiceActions() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalCategory, setModalCategory] = useState("");

  const handleOpen = (title: string, category: string) => {
    setModalTitle(title);
    setModalCategory(category);
    setInquiryOpen(true);
  };

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Action 1: Phone */}
          <a
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group"
            href="tel:01312583165"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#00453d] group-hover:bg-[#00453d] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">call</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">কল করুন</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">01312-583165</span>
            </div>
          </a>

          {/* Action 2: WhatsApp */}
          <a
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group"
            href="https://wa.me/8801312583165"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#00453d] group-hover:bg-[#00453d] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">chat</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">WhatsApp</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">তাৎক্ষণিক চ্যাট</span>
            </div>
          </a>

          {/* Action 3: All Packages */}
          <Link
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group"
            href="/packages"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#735c00] group-hover:bg-[#735c00] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">inventory_2</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">সব প্যাকেজ</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">হজ, ওমরাহ ও ট্যুর</span>
            </div>
          </Link>

          {/* Action 4: Visa Guide */}
          <Link
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group"
            href="/visa"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#00453d] group-hover:bg-[#00453d] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">fact_check</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">ভিসা গাইড</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">ডকুমেন্ট রিকোয়ারমেন্ট</span>
            </div>
          </Link>

          {/* Action 5: Booking Tracker */}
          <Link
            href="/dashboard"
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group text-left w-full"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#00453d] group-hover:bg-[#00453d] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">route</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">বুকিং ট্র্যাক</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">পাসপোর্ট ও পিএনআর</span>
            </div>
          </Link>

          {/* Action 6: Concierge */}
          <button
            type="button"
            onClick={() => handleOpen("কাস্টম ভিআইপি কনসিয়ার্জ বুকিং", "ভিআইপি কনসিয়ার্জ")}
            className="flex items-center gap-3 p-3.5 bg-[#ffffff] hover:bg-[#ecf6f1] rounded-xl shadow-sm border border-[#dbe5e0]/60 transition-all group text-left w-full"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e6f0eb] flex items-center justify-center text-[#735c00] group-hover:bg-[#735c00] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-lg">support_agent</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-[#141d1a] font-semibold">কনসিয়ার্জ</span>
              <span className="font-body-sm text-body-sm text-[#3f4946] truncate">কাস্টম বুকিং</span>
            </div>
          </button>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle={modalTitle}
        defaultCategory={modalCategory}
      />
    </>
  );
}
