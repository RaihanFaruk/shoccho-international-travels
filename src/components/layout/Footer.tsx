"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-xl pb-margin shadow-[0_-4px_24px_rgba(7,94,84,0.03)] border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-gutter-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Shoccho International Travels Brand Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary tracking-tight font-serif">
                  স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস
                </span>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold tracking-widest">
                  Shoccho International Travels
                </span>
              </div>
            </div>
            <p className="text-on-surface-variant font-body-sm text-body-sm max-w-md leading-relaxed">
              পবিত্র হজ, ওমরাহ কাফেলা, আধুনিক ট্রান্স-আটলান্টিক ফ্লাইট বুকিং ও বিশ্বস্ত এম্বাসি ভিসা প্রসেসিঙে বিশ্বস্ততার শীর্ষ প্রতিষ্ঠান। নিবেদিত কনসিয়ার্জ সার্ভিসে আপনার প্রতিটি সফর হোক প্রশান্তিময়।
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-low text-secondary font-label-sm text-label-sm rounded-full font-semibold">
                <span className="material-symbols-outlined text-xs">verified</span>
                হজ ও ওমরাহ লাইসেন্সপ্রাপ্ত এজেন্সি
              </span>
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-low text-primary font-label-sm text-label-sm rounded-full font-semibold">
                <span className="material-symbols-outlined text-xs">stars</span>
                IATA অ্যাফিলিয়েট পার্টনার
              </span>
            </div>
          </div>

          {/* Column 2: আমাদের সেবাসমূহ */}
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold mb-space-md">
              আমাদের সেবাসমূহ
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5 text-primary font-medium"
                  href="/about"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  আমাদের সূচনা ও ভিশন-মিশন
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/hajj-umrah"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  এক্সক্লুসিভ ভিআইপি ওমরাহ
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/hajj-umrah"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  মর্যাদাপূর্ণ হজ প্যাকেজ
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/packages"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  ঘরোয়া ও আন্তর্জাতিক এয়ার টিকিট
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/visa"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  ইউরোপ, ইউএসএ ও এশিয়ান ভিসা
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/packages"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  ফাইভ-স্টার হারামাইন হোটেলস
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: প্যাকেজ ও কাফেলা */}
          <div>
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold mb-space-md">
              প্যাকেজ ও কাফেলা
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/packages/pkg-umrah-ramadan"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  রমজান স্পেশাল ওমরাহ কাফেলা
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/packages/pkg-dubai-safari"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  দুবাই লাক্সারি ভ্যাকেশন
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/packages/pkg-turkey-cruise"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  তুর্কিয়ে ঐতিহাসিক সফর
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/destinations"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  জনপ্রিয় পর্যটন গন্তব্য
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors flex items-center gap-1.5"
                  href="/muallims"
                >
                  <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  মোয়াল্লিম ডিরেক্টরি ও পরামর্শ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: প্রধান কার্যালয় ও যোগাযোগ */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold mb-space-xs">
              প্রধান কার্যালয় ও যোগাযোগ
            </h4>
            <div className="font-body-sm text-body-sm text-on-surface-variant space-y-space-xs">
              <p className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">apartment</span>
                <span>জয়তুন প্লাজা, কুড়গাঁও, নবীনগর, আশুলিয়া, সাভার, ঢাকা-১৩৪১</span>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-sm">phone_in_talk</span>
                <a className="text-primary font-semibold hover:underline" href="tel:01312583165">
                  01312-583165 / 01911-583165
                </a>
              </p>
              <p className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-sm">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:shoccho0191@gmail.com">
                  shoccho0191@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-space-xs pt-1 text-on-surface-variant/90">
                <span className="material-symbols-outlined text-secondary text-sm">person</span>
                <span>প্রতিষ্ঠাতা: হাফেজ মাওলানা মোঃ ফজল রাব্বি</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/30">
          <p className="text-center md:text-left">
            © ২০২৫ স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস (Shoccho International Travels). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
            <Link className="hover:text-primary transition-colors" href="/privacy-policy">
              গোপনীয়তা নীতি
            </Link>
            <Link className="hover:text-primary transition-colors" href="/terms-of-service">
              শর্তাবলী ও নিয়মাবলী
            </Link>
            <Link className="hover:text-primary transition-colors" href="/sitemap.xml">
              সাইটম্যাপ (XML)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

