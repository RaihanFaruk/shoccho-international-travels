"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { packagesData } from "@/data/packages";
import { usePlatform } from "@/context/PlatformContext";

export default function HajjUmrahPage() {
  const { openBookingModal } = usePlatform();

  const pilgrimagePackages = packagesData.filter(
    (p) => p.category === "umrah" || p.category === "hajj"
  );

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-[#00453d] text-white p-8 sm:p-12 lg:p-16 mb-12 shadow-xl border border-[#fed65b]/30">
            <div className="relative z-10 max-w-2xl">
              <span className="px-3.5 py-1 bg-[#ffffff]/10 backdrop-blur-md text-[#fed65b] font-label-sm text-xs rounded-full font-bold uppercase tracking-widest inline-block mb-3 border border-[#fed65b]/40">
                পবিত্র হজ ও ওমরাহ পোর্টাল
              </span>
              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                লাব্বাইক আল্লাহুম্মা লাব্বাইক
              </h1>
              <p className="font-body-md text-sm sm:text-base text-[#dbe5e0] mt-4 leading-relaxed">
                পবিত্র কাবা শরীফ ও মসজিদে নববীর পবিত্র সান্নিধ্যে নির্বিঘ্ন ইবাদতের নিশ্চয়তা। বাংলাদেশ ধর্ম মন্ত্রণালয়ের অনুমোদিত স্বচ্ছ এজেন্সির সাথে আপনার পবিত্র সফর হোক নিরাপদ ও বরকতময়।
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="#packages"
                  className="px-6 py-3 bg-[#fed65b] hover:bg-[#ffe088] text-[#745c00] font-label-md text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  কাফেলা সমূহ দেখুন
                </a>
                <Link
                  href="/muallims"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-white/20"
                >
                  অভিজ্ঞ মোয়াল্লিমবৃন্দ
                </Link>
              </div>
            </div>

            {/* Background Decorative Pattern */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-15 hidden md:block">
              <span className="material-symbols-outlined text-[300px] text-white select-none">
                mosque
              </span>
            </div>
          </div>

          {/* Quick Pillars of Hajj/Umrah Trust */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              { icon: "verified_user", title: "সরকারি অনুমোদন", desc: "ধর্ম মন্ত্রণালয় ও সৌদি হজ এজেন্সির তালিকাভুক্ত বৈধ কাফেলা।" },
              { icon: "hotel", title: "জিরো ডিস্টেন্স হোটেল", desc: "মক্কা ক্লক টাওয়ার ও মদিনা মারকাজিয়া এলাকায় লাক্সারি ৫-স্টার আবাসন।" },
              { icon: "menu_book", title: "সার্বক্ষণিক মোয়াল্লিম", desc: "বিশিষ্ট আলেম ও ফিকহ গবেষকদের সান্নিধ্যে মাসায়েল শিক্ষা।" },
              { icon: "restaurant", title: "উন্নত দেশীয় খাবার", desc: "অভিজ্ঞ শেফ দ্বারা প্রস্তুতকৃত খাঁটি ৩ বেলা হালাল বুফে খাবার।" },
            ].map((pillar, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm">
                <span className="material-symbols-outlined text-2xl text-[#735c00] mb-2">
                  {pillar.icon}
                </span>
                <h3 className="font-title-md text-sm font-bold text-[#00453d]">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-xs text-[#3f4946] mt-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Packages Listing Section */}
          <div id="packages" className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#735c00] font-bold block">
                  UPCOMING KAFELAS
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#00453d] font-serif font-bold mt-1">
                  আসন্ন হজ ও ওমরাহ কাফেলা সমূহ
                </h2>
              </div>
              <span className="text-xs text-[#3f4946]">
                স্বচ্ছ হিসাব ও নিশ্চিত ফ্লাইট বুকিং সহ
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pilgrimagePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dbe5e0] flex flex-col justify-between group hover:shadow-md transition-all"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={pkg.imageUrl}
                        alt={pkg.titleBn || pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="px-2.5 py-0.5 bg-[#00453d] text-white font-label-sm text-[11px] font-bold rounded-full">
                          {pkg.durationDays} দিন
                        </span>
                        {pkg.badge && (
                          <span className="px-2.5 py-0.5 bg-[#fed65b] text-[#745c00] font-label-sm text-[11px] font-bold rounded-full">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                        {pkg.hotelMakkah || "৫-স্টার হোটেল"}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-title-lg text-base font-bold text-[#00453d] font-serif line-clamp-2">
                        {pkg.titleBn || pkg.title}
                      </h3>
                      <p className="font-body-sm text-xs text-[#3f4946] mt-2 line-clamp-2">
                        {pkg.overview}
                      </p>

                      <div className="mt-3 pt-3 border-t border-[#dbe5e0] flex items-center justify-between text-xs">
                        <span className="text-[#3f4946]">হারাম দূরত্ব:</span>
                        <strong className="text-[#735c00]">{pkg.distanceToHaramMakkah || "৫০ মিটার"}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="py-2 flex items-center justify-between border-t border-[#dbe5e0] mb-3">
                      <span className="font-headline-md text-xl text-[#00453d] font-serif font-bold">
                        {pkg.priceBn}
                      </span>
                      <span className="text-[11px] text-[#735c00]">সব ট্যাক্স সহ</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="py-2.5 text-center text-xs font-semibold border border-[#00453d] text-[#00453d] rounded-lg hover:bg-[#ecf6f1] transition-colors"
                      >
                        বিস্তারিত
                      </Link>
                      <button
                        type="button"
                        onClick={() => openBookingModal(pkg)}
                        className="py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        বুকিং করুন
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Pilgrim Preparation Checklist */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-[#dbe5e0] mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#735c00] text-3xl">fact_check</span>
              <div>
                <h3 className="font-title-lg text-lg sm:text-xl text-[#00453d] font-serif font-bold">
                  হজ ও ওমরাহর ডিজিটাল প্রস্তুতি গাইড
                </h3>
                <span className="font-label-sm text-xs text-[#3f4946]">
                  সফরে রওয়ানা হওয়ার পূর্বে প্রয়োজনীয় চেকলিস্ট
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "৬ মাস মেয়াদী পাসপোর্ট", desc: "পাসপোর্টের মেয়াদ সফরের তারিখ থেকে অন্তত ৬ মাস থাকা আবশ্যক।" },
                { title: "নুসূক (Nusuk) অ্যাপ সেটআপ", desc: "রওজা শরীফ জিয়ারতের স্লট আগে থেকেই অ্যাপে বুক করে রাখা জরুরি।" },
                { title: "টিকা ও স্বাস্থ্য সনদ", desc: "মেনিনজাইটিস ও ইনফ্লুয়েঞ্জা ভ্যাকসিনেশন কার্ড সাথে রাখুন।" },
                { title: "ইহরামের কাপড় ও বেল্ট", desc: "পুরুষদের জন্য ২টি সুতি ইহরাম কাপড় এবং সেলাইবিহীন প্রয়োজনীয় সামগ্রী।" },
                { title: "হালকা ওষুধ ও ফার্স্ট এইড", desc: "প্রয়োজনীয় প্রেসক্রিপশন ওষুধ পর্যাপ্ত পরিমাণে সাথে বহন করুন।" },
                { title: "স্বচ্ছ ট্রাভেলস ইমার্জেন্সি কার্ড", desc: "মক্কা ও মদিনা সেন্টারে আমাদের প্রতিনিধির সার্বক্ষণিক হটলাইন নম্বর।" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] flex items-start gap-2.5">
                  <span className="text-[#00453d] font-bold text-sm">✓</span>
                  <div>
                    <h4 className="font-title-sm text-xs font-bold text-[#141d1a]">{item.title}</h4>
                    <p className="font-body-sm text-[11px] text-[#3f4946] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
