"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, Heart, Menu, Phone, UserCircle, X } from "lucide-react";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";
import { useNavbarState } from "@/context/NavbarStateContext";
import { NotificationDropdown } from "@/components/navigation/NotificationDropdown";

const primaryLinks = [
  ["হোম", "/"],
  ["প্যাকেজ", "/packages"],
  ["হজ-ওমরাহ", "/hajj-umrah"],
  ["ভিসা", "/visa"],
  ["গন্তব্য", "/destinations"],
  ["মোয়াল্লিম", "/muallims"],
] as const;

export function Navbar() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { wishlist } = useNavbarState();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#dbe5e0]/80 bg-white/90 shadow-[0_8px_30px_rgba(0,69,61,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-8">
          <Link className="flex shrink-0 items-center gap-2" href="/" aria-label="Shoccho International Travels home">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11">
              <Image src="/images/logo.svg" alt="Shoccho International Travels" fill priority className="object-contain" />
            </div>
            <span className="hidden font-serif text-lg font-bold tracking-wide text-[#00453d] sm:block">স্বচ্ছ ট্রাভেলস</span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex" aria-label="Primary navigation">
            {primaryLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-semibold text-[#3f4946] transition hover:bg-[#ecf6f1] hover:text-[#00453d]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <a href="tel:01312583165" className="hidden h-11 items-center gap-2 rounded-full px-2 text-sm font-semibold text-[#00453d] transition hover:bg-[#ecf6f1] lg:inline-flex" aria-label="Call Shoccho Travels">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ecf6f1] shadow-sm"><Phone aria-hidden="true" className="h-4 w-4" /></span>
              <span>01312-583165</span>
            </a>
            <Link href="/dashboard#wishlist" className="relative inline-flex h-11 w-11 items-center justify-center rounded-full text-[#3f4946] transition hover:bg-[#ecf6f1] hover:text-[#00453d]" aria-label="সংরক্ষিত প্যাকেজ">
              <Heart aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
              {wishlist.length > 0 && <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#735c00] text-[10px] font-bold text-white">{wishlist.length}</span>}
            </Link>
            <NotificationDropdown />
            <div className="relative hidden sm:block">
              <button type="button" onClick={() => setAccountOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#00453d] transition hover:bg-[#ecf6f1]" aria-label="অ্যাকাউন্ট মেনু" aria-expanded={accountOpen}>
                <UserCircle aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-14 w-48 rounded-xl border border-[#dbe5e0] bg-white p-2 shadow-xl">
                  <Link href="/dashboard" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#3f4946] hover:bg-[#ecf6f1]">ড্যাশবোর্ড <ChevronDown className="h-4 w-4 -rotate-90" /></Link>
                  <Link href="/community" className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-[#3f4946] hover:bg-[#ecf6f1]">কমিউনিটি <ChevronDown className="h-4 w-4 -rotate-90" /></Link>
                </div>
              )}
            </div>
            <button type="button" onClick={() => setInquiryOpen(true)} className="hidden h-11 items-center gap-2 rounded-lg bg-[#00453d] px-4 text-sm font-bold text-white shadow-[0_8px_18px_rgba(0,69,61,0.18)] transition hover:-translate-y-0.5 hover:bg-[#075e54] md:inline-flex">
              <Bell aria-hidden="true" className="h-4 w-4" />
              কনসিয়ার্জ
            </button>
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#141d1a] transition hover:bg-[#ecf6f1] xl:hidden" aria-label="Toggle Navigation">
              {mobileMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#dbe5e0] bg-white px-5 py-5 shadow-xl xl:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {primaryLinks.map(([label, href]) => (
                <Link key={href} onClick={() => setMobileMenuOpen(false)} href={href} className="rounded-lg border-b border-[#ecf6f1] px-2 py-3 text-sm font-semibold text-[#3f4946] hover:text-[#00453d]">{label}</Link>
              ))}
              <Link onClick={() => setMobileMenuOpen(false)} href="/community" className="rounded-lg border-b border-[#ecf6f1] px-2 py-3 text-sm font-semibold text-[#3f4946]">কমিউনিটি ও ভ্রমণ কাহিনি</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/dashboard" className="rounded-lg border-b border-[#ecf6f1] px-2 py-3 text-sm font-semibold text-[#735c00]">আমার ড্যাশবোর্ড</Link>
            </nav>
            <div className="mt-4 flex items-center justify-between border-t border-[#dbe5e0] pt-4">
              <a href="tel:01312583165" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00453d]"><Phone className="h-4 w-4" />01312-583165</a>
              <button type="button" onClick={() => { setMobileMenuOpen(false); setInquiryOpen(true); }} className="rounded-lg bg-[#00453d] px-4 py-2 text-sm font-bold text-white">কনসিয়ার্জ</button>
            </div>
          </div>
        )}
      </header>
      <QuickInquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} defaultTitle="বুকিং কনসিয়ার্জ পরামর্শ" defaultCategory="কাস্টম কনসিয়ার্জ" />
    </>
  );
}
