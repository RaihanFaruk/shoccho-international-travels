"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";
import { usePlatform } from "@/context/PlatformContext";
import { NotificationDropdown } from "@/components/navigation/NotificationDropdown";

export function Navbar() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wishlist } = usePlatform();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(7,94,84,0.06)] border-b border-[#dbe5e0]/60">
        {/* Top Utility Bar */}
        <div className="bg-[#ecf6f1] px-4 sm:px-8 border-b border-[#dbe5e0]/50">
          <div className="max-w-7xl mx-auto h-10 flex items-center justify-between text-[#3f4946] font-label-sm text-label-sm">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#735c00]">support_agent</span>
                <span className="tracking-wider hidden xs:inline">২৪/৭ হেল্পলাইন:</span>
                <a className="text-[#00453d] font-semibold hover:text-[#075e54] transition-colors" href="tel:01312583165">
                  01312-583165
                </a>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#00453d]">chat</span>
                <a className="hover:text-[#00453d] transition-colors" href="https://wa.me/8801312583165" target="_blank" rel="noopener noreferrer">
                  হোয়াটসঅ্যাপ সহায়তা
                </a>
              </div>
              <div className="hidden lg:flex items-center gap-1.5 text-[#3f4946]/80">
                <span className="material-symbols-outlined text-sm text-[#735c00]">location_on</span>
                <span>অফিস: জয়তুন প্লাজা, নবীনগর, সাভার</span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-1 bg-[#ffffff] px-2.5 py-0.5 rounded-full shadow-[0_0_0_1px_rgba(219,229,224,0.6)]">
                <span className="material-symbols-outlined text-xs text-[#735c00]">verified_user</span>
                <span className="text-[#735c00] font-semibold text-[10px] sm:text-[11px]">Govt. Approved Partner</span>
              </div>
              <div className="flex items-center gap-1.5 pl-2">
                <button className="text-[#3f4946] hover:text-[#00453d] font-medium transition-colors" type="button">
                  BDT (৳)
                </button>
                <span className="text-[#bec9c5]">|</span>
                <button className="text-[#00453d] font-semibold" type="button">
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link className="flex items-center gap-3 group" href="/">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Shoccho International Travels Brand Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl text-[#00453d] font-bold tracking-tight group-hover:text-[#075e54] transition-colors leading-none">
                স্বচ্ছ ট্রাভেলস
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#735c00] uppercase tracking-wider font-semibold mt-0.5">
                Shoccho Travels &bull; আপনার আস্থার সফর
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#ecf6f1] rounded-xl">
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/">
              হোম
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/packages">
              প্যাকেজ সমূহ
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/hajj-umrah">
              পবিত্র হজ ও ওমরাহ
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/visa">
              ভিসা কনসিয়ার্জ
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/destinations">
              গন্তব্য
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/muallims">
              মোয়াল্লিম ডিরেক্টরি
            </Link>
            <Link className="px-3 py-2 rounded-lg font-label-md text-label-md text-[#3f4946] hover:text-[#00453d] hover:bg-[#e0eae5] transition-all" href="/community">
              কমিউনিটি
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Wishlist Link with Live Badge */}
            <Link
              href="/dashboard#wishlist"
              className="relative p-2 rounded-full hover:bg-black/5 text-[#3f4946] hover:text-[#00453d] transition-colors flex items-center justify-center"
              title="সংরক্ষিত প্যাকেজ (উইশলিস্ট)"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#735c00] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Notification Bell Dropdown */}
            <NotificationDropdown />

            {/* Profile Chip linking to Dashboard */}
            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-2 pl-1 py-1 pr-3 rounded-full bg-[#ecf6f1] hover:bg-[#dbe5e0] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#dbe5e0]/60 transition-all group"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#fed65b]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC36FAxz0c7n63fedAedAR9r1icEeVBTt4EZdIESBR6A8E_rjYbMknd8RLrt7hFegTvoknq4U4jKx5X2Ipz-GWIu-Klr4V5aAqX-K7WtbJIuT1w9g63pqbdo2QNPcUnoP6MlPqqMTdQfNxbqGNIgdK0Qz2w1cLMnsWUvDXvcKEXt2GyNGtWkqeheH3hYB72xh2K3wCNooPMpmnqLh33LbZAF_tJWLwG2zJSwdflbraaSynn-49icDtW"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-label-md text-[11px] text-[#141d1a] font-semibold leading-tight group-hover:text-[#00453d]">
                  তানভীর আহমেদ
                </span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[11px] text-[#735c00]">workspace_premium</span>
                  <span className="font-label-sm text-[9px] text-[#735c00] font-bold tracking-wider">ড্যাশবোর্ড</span>
                </div>
              </div>
            </Link>

            {/* Booking Concierge Button */}
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-sm">flight_takeoff</span>
              <span className="hidden md:inline">কনসিয়ার্জ</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#141d1a] hover:bg-[#ecf6f1]"
              aria-label="Toggle Navigation"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/98 border-t border-[#dbe5e0] px-6 py-5 space-y-3 animate-in slide-in-from-top-2 duration-200 text-[#141d1a]">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/"
              className="block py-2 text-sm font-semibold text-[#00453d] border-b border-[#ecf6f1]"
            >
              হোম পেজ
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/packages"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              প্যাকেজ সমূহ
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/hajj-umrah"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              পবিত্র হজ ও ওমরাহ
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/visa"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              ভিসা কনসিয়ার্জ
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/destinations"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              জনপ্রিয় গন্তব্য
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/muallims"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              মোয়াল্লিম ডিরেক্টরি
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/community"
              className="block py-2 text-sm font-medium text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1]"
            >
              কমিউনিটি ও ভ্রমণ কাহিনি
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/dashboard"
              className="block py-2 text-sm font-semibold text-[#735c00] border-b border-[#ecf6f1] flex items-center justify-between"
            >
              <span>আমার ড্যাশবোর্ড</span>
              <span className="material-symbols-outlined text-sm">account_circle</span>
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/admin"
              className="block py-2 text-xs font-semibold text-[#3f4946] hover:text-[#00453d] border-b border-[#ecf6f1] flex items-center justify-between"
            >
              <span>এডমিন ব্যাক-অফিস (ডেমো)</span>
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
            </Link>

            <div className="pt-3 border-t border-[#dbe5e0] flex items-center justify-between">
              <a
                href="tel:01312583165"
                className="flex items-center gap-1 text-xs font-semibold text-[#00453d]"
              >
                <span className="material-symbols-outlined text-sm text-[#735c00]">call</span>
                <span>01312-583165</span>
              </a>
              <a
                href="https://wa.me/8801312583165"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#ecf6f1] text-[#00453d] font-semibold text-xs rounded-lg border border-[#bec9c5]/60"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <QuickInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultTitle="বুকিং কনসিয়ার্জ পরামর্শ"
        defaultCategory="কাস্টম কনসিয়ার্জ"
      />
    </>
  );
}
