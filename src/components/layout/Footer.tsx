"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Globe2, Mail, MapPin, PhoneCall, Play, ShieldCheck, Star, UserRound } from "lucide-react";

const serviceLinks = [
  ["আমাদের সূচনা ও ভিশন-মিশন", "/about"],
  ["এক্সক্লুসিভ ভিআইপি ওমরাহ", "/hajj-umrah"],
  ["মর্যাদাপূর্ণ হজ প্যাকেজ", "/hajj-umrah"],
  ["ঘরোয়া ও আন্তর্জাতিক এয়ার টিকিট", "/packages"],
  ["ইউরোপ, ইউএসএ ও এশিয়ান ভিসা", "/visa"],
  ["ফাইভ-স্টার হারামাইন হোটেলস", "/packages"],
] as const;

const packageLinks = [
  ["রমজান স্পেশাল ওমরাহ কাফেলা", "/packages/pkg-umrah-ramadan"],
  ["দুবাই লাক্সারি ভ্যাকেশন", "/packages/pkg-dubai-safari"],
  ["তুর্কিয়ে ঐতিহাসিক সফর", "/packages/pkg-turkey-cruise"],
  ["জনপ্রিয় পর্যটন গন্তব্য", "/destinations"],
  ["মোয়াল্লিম ডিরেক্টরি ও পরামর্শ", "/muallims"],
] as const;

function LinkColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#ffe088]">
        <span className="block h-0.5 w-8 bg-[#fed65b] mb-3" />
        {title}
      </h3>
      <ul className="space-y-3.5">
        {links.map(([label, href]) => (
          <li key={href + label}>
            <Link href={href} className="group inline-flex items-start gap-2 text-sm leading-6 text-[#b8d0c9] transition hover:text-white hover:underline hover:underline-offset-4">
              <ArrowUpRight aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#fed65b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#062f2b] text-[#e8f4ef] shadow-[0_-18px_50px_rgba(0,35,31,0.16)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-5 border-b border-[#416e65] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fed65b]">TRUSTED FOR THE JOURNEY</span>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#b8d0c9]">আপনার পবিত্র সফর ও আন্তর্জাতিক ভ্রমণের প্রতিটি ধাপে নিবন্ধিত, স্বচ্ছ ও যত্নশীল সঙ্গী।</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#b58a25] bg-[#173f37] px-4 py-3 text-sm font-semibold text-[#ffe088] shadow-[0_8px_22px_rgba(0,0,0,0.14)]">
              <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              হজ ও ওমরাহ লাইসেন্সপ্রাপ্ত এজেন্সি
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-[#b58a25] bg-[#173f37] px-4 py-3 text-sm font-semibold text-[#ffe088] shadow-[0_8px_22px_rgba(0,0,0,0.14)]">
              <Star aria-hidden="true" className="h-5 w-5" />
              IATA অ্যাফিলিয়েট পার্টনার
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-b border-[#416e65] py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 rounded-xl bg-white p-1.5"><Image src="/images/logo.svg" alt="Shoccho International Travels" fill className="object-contain p-1" /></div>
              <div>
                <h2 className="font-serif text-xl font-bold tracking-wide text-white">স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস</h2>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fed65b]">SHOCCHO INTERNATIONAL TRAVELS</span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#b8d0c9]">পবিত্র হজ, ওমরাহ কাফেলা, ফ্লাইট বুকিং ও বিশ্বস্ত ভিসা প্রসেসিংয়ে আপনার প্রতিটি সফর হোক প্রশান্তিময়।</p>
            <div className="mt-7 flex items-center gap-2">
              <a href="#facebook" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#416e65] text-[#b8d0c9] transition hover:border-[#fed65b] hover:bg-[#173f37] hover:text-[#ffe088]"><Globe2 className="h-4 w-4" /></a>
              <a href="#instagram" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#416e65] text-[#b8d0c9] transition hover:border-[#fed65b] hover:bg-[#173f37] hover:text-[#ffe088]"><Camera className="h-4 w-4" /></a>
              <a href="#youtube" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#416e65] text-[#b8d0c9] transition hover:border-[#fed65b] hover:bg-[#173f37] hover:text-[#ffe088]"><Play className="h-4 w-4" /></a>
            </div>
          </div>

          <LinkColumn title="আমাদের সেবাসমূহ" links={serviceLinks} />
          <LinkColumn title="প্যাকেজ ও কাফেলা" links={packageLinks} />

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#ffe088]"><span className="block h-0.5 w-8 bg-[#fed65b] mb-3" />প্রধান কার্যালয় ও যোগাযোগ</h3>
            <div className="space-y-4 text-sm leading-6 text-[#b8d0c9]">
              <p className="flex items-start gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#fed65b]" /><span>জয়তুন প্লাজা, কুড়গাঁও, নবীনগর, আশুলিয়া, সাভার, ঢাকা-১৩৪১</span></p>
              <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 shrink-0 text-[#fed65b]" /><a className="transition hover:text-white hover:underline" href="tel:01312583165">01312-583165 / 01911-583165</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-[#fed65b]" /><a className="transition hover:text-white hover:underline" href="mailto:shoccho0191@gmail.com">shoccho0191@gmail.com</a></p>
              <p className="flex items-start gap-2"><UserRound className="mt-1 h-4 w-4 shrink-0 text-[#fed65b]" /><span>প্রতিষ্ঠাতা: হাফেজ মাওলানা মোঃ ফজল রাব্বি</span></p>
            </div>
            <div className="mt-7 flex gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-[#416e65] px-3 py-2 text-left"><span className="text-[9px] uppercase tracking-wider text-[#b8d0c9]">GET IT ON</span><strong className="block text-xs text-white">Google Play</strong></div>
              <div className="flex items-center gap-2 rounded-lg border border-[#416e65] px-3 py-2 text-left"><span className="text-[9px] uppercase tracking-wider text-[#b8d0c9]">DOWNLOAD ON</span><strong className="block text-xs text-white">App Store</strong></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs text-[#8fb1a7] md:flex-row">
          <p className="text-center md:text-left">© ২০২৫ স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex flex-wrap justify-center gap-5"><Link className="transition hover:text-white hover:underline" href="/privacy-policy">গোপনীয়তা নীতি</Link><Link className="transition hover:text-white hover:underline" href="/terms-of-service">শর্তাবলী ও নিয়মাবলী</Link><Link className="transition hover:text-white hover:underline" href="/sitemap.xml">সাইটম্যাপ (XML)</Link></div>
        </div>
      </div>
    </footer>
  );
}
