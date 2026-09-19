"use client";

import { useState } from "react";
import Link from "next/link";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

export function MobileStickyBar() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/98 backdrop-blur-xl border-t border-[#dbe5e0] shadow-[0_-4px_20px_rgba(0,69,61,0.08)] px-3 py-2"
      >
        <div className="max-w-md mx-auto grid grid-cols-5 items-center text-center gap-1">
          {/* Action 1: Call */}
          <a
            href="tel:01312583165"
            className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[#3f4946] hover:text-[#00453d] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-[#00453d]">call</span>
            <span className="text-[10px] font-semibold mt-0.5">কল করুন</span>
          </a>

          {/* Action 2: WhatsApp */}
          <a
            href="https://wa.me/8801312583165"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[#3f4946] hover:text-[#00453d] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-[#075e54]">chat</span>
            <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
          </a>

          {/* Action 3: Search / Packages */}
          <Link
            href="/packages"
            className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[#3f4946] hover:text-[#00453d] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-[#735c00]">search</span>
            <span className="text-[10px] font-semibold mt-0.5">প্যাকেজ</span>
          </Link>

          {/* Action 4: Hajj & Umrah */}
          <Link
            href="/hajj-umrah"
            className="flex flex-col items-center justify-center p-1.5 rounded-lg text-[#3f4946] hover:text-[#00453d] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-[#00453d]">mosque</span>
            <span className="text-[10px] font-semibold mt-0.5">ওমরাহ-হজ</span>
          </Link>

          {/* Action 5: VIP Concierge Button */}
          <button
            type="button"
            onClick={() => setInquiryOpen(true)}
            className="flex flex-col items-center justify-center p-1.5 rounded-lg bg-[#00453d] text-white shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl text-[#ffe088]">flight_takeoff</span>
            <span className="text-[10px] font-bold mt-0.5">বুকিং</span>
          </button>
        </div>
      </nav>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle="মোবাইল কুইক বুকিং পরামর্শ"
        defaultCategory="মোবাইল কনসিয়ার্জ"
      />
    </>
  );
}
