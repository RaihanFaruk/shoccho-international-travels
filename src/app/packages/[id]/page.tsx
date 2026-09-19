"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { packagesData } from "@/data/packages";
import { muallimsData } from "@/data/muallims";
import { usePlatform } from "@/context/PlatformContext";
import { useNavbarState } from "@/context/NavbarStateContext";

export default function PackageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { openBookingModal } = usePlatform();
  const { wishlist, toggleWishlist } = useNavbarState();
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "hotels" | "inclusions" | "reviews">("overview");

  const pkg = packagesData.find((p) => p.id === resolvedParams.id) || packagesData[0];
  const assignedMuallim = muallimsData.find((m) => m.id === pkg.assignedMuallimId);
  const isWishlisted = wishlist.includes(pkg.id);

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#3f4946] mb-6 font-medium">
            <Link href="/" className="hover:text-[#00453d]">হোম</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-[#00453d]">প্যাকেজ সমূহ</Link>
            <span>/</span>
            <span className="text-[#00453d] font-bold truncate max-w-xs">{pkg.titleBn || pkg.title}</span>
          </nav>

          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10">
            {/* Main Visual Photo (8 Cols) */}
            <div className="lg:col-span-8 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#dbe5e0]">
              <Image
                src={pkg.imageUrl}
                alt={pkg.titleBn || pkg.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {pkg.badge && (
                  <span className="px-3 py-1 bg-white text-[#735c00] font-label-sm text-xs font-bold rounded-full shadow">
                    {pkg.badge}
                  </span>
                )}
                <span className="px-3 py-1 bg-[#00453d] text-white font-label-sm text-xs font-semibold rounded-full shadow">
                  {pkg.durationDays} দিন / {pkg.durationNights} রাত
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(pkg.id)}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isWishlisted
                    ? "bg-red-50 text-red-600 shadow-md"
                    : "bg-white/80 hover:bg-white text-[#3f4946] shadow"
                }`}
                title={isWishlisted ? "সংরক্ষণ থেকে সরান" : "সংরক্ষণ করুন"}
              >
                <span className="material-symbols-outlined text-lg">
                  {isWishlisted ? "favorite" : "favorite_border"}
                </span>
              </button>

              {/* Title on Hero */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#fed65b] font-bold block mb-1">
                  {pkg.destinationBn || pkg.destination}
                </span>
                <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                  {pkg.titleBn || pkg.title}
                </h1>
              </div>
            </div>

            {/* Sticky Pricing & Booking Card (4 Cols) */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-[#dbe5e0] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dbe5e0]">
                  <div>
                    <span className="text-xs text-[#3f4946] block">জনপ্রতি প্যাকেজ মূল্য</span>
                    <span className="font-headline-lg text-2xl sm:text-3xl text-[#00453d] font-serif font-bold">
                      {pkg.priceBn || `৳ ${pkg.price.toLocaleString("bn-BD")}`}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#ecf6f1] text-[#00453d] font-label-sm text-xs font-bold rounded-full">
                    সব ট্যাক্স সহ
                  </span>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-2.5 text-xs text-[#141d1a]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">flight</span>
                    <span><strong>এয়ারলাইন্স:</strong> সাউদিয়া / বাংলাদেশ বিমান (ডাইরেক্ট)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">hotel</span>
                    <span><strong>মক্কা হোটেল:</strong> {pkg.distanceToHaramMakkah || "হারামের সন্নিকটে"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">verified</span>
                    <span><strong>ভিসা:</strong> ১ বছর মাল্টিপল এন্ট্রি ওমরাহ ই-ভিসা</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#735c00]">star</span>
                    <span><strong>গ্রাহক রেটিং:</strong> {pkg.rating || 4.98} ({pkg.reviewCount || 120}+ রিভিউ)</span>
                  </div>
                </div>

                {/* Upcoming Departure Hint */}
                {pkg.departures && pkg.departures[0] && (
                  <div className="p-3 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] text-xs">
                    <span className="text-[#3f4946] block">আসন্ন যাত্রার তারিখ:</span>
                    <strong className="text-[#00453d]">{pkg.departures[0].date}</strong>
                    <span className="text-[#735c00] font-semibold block mt-0.5">
                      ({pkg.departures[0].seatsLeft} টি আসন অবশিষ্ট)
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={() => openBookingModal(pkg)}
                  className="w-full py-3.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs uppercase tracking-wider rounded-xl shadow-md transition-all font-bold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base text-[#fed65b]">flight_takeoff</span>
                  <span>আসন বুকিং শুরু করুন</span>
                </button>
                <a
                  href="tel:01312583165"
                  className="w-full py-2.5 border border-[#dbe5e0] hover:bg-[#f2fcf6] text-[#00453d] font-label-md text-xs uppercase tracking-wider rounded-xl transition-all font-bold flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm text-[#735c00]">call</span>
                  <span>কনসিয়ার্জ কল করুন: 01312-583165</span>
                </a>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-[#dbe5e0] mb-8 overflow-x-auto pb-1">
            {(
              [
                { id: "overview", label: "সংক্ষিপ্ত বিবরণ ও বৈশিষ্ট্য" },
                { id: "itinerary", label: "দিনভিত্তিক ভ্রমণ সূচি" },
                { id: "hotels", label: "হোটেল ও আবাসন" },
                { id: "inclusions", label: "অন্তর্ভুক্ত সুবিধা ও শর্তাবলী" },
                { id: "reviews", label: "যাত্রীদের রিভিউ" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white text-[#00453d] border-t-2 border-x border-[#00453d] font-bold shadow-sm"
                    : "text-[#3f4946] hover:text-[#141d1a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#dbe5e0] space-y-8">
            {/* 1. OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif mb-2">
                    প্যাকেজের সারসংক্ষেপ
                  </h3>
                  <p className="font-body-md text-sm text-[#3f4946] leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                <div>
                  <h4 className="font-title-md text-base font-bold text-[#00453d] font-serif mb-3">
                    প্রধান সুবিধাসমূহ
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0]">
                        <span className="material-symbols-outlined text-sm text-[#00453d] shrink-0 mt-0.5">check_circle</span>
                        <span className="font-body-sm text-xs text-[#141d1a]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assigned Muallim Box */}
                {assignedMuallim && (
                  <div className="p-5 bg-[#ecf6f1] rounded-2xl border border-[#dbe5e0] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#fed65b] shrink-0">
                        <Image
                          src={assignedMuallim.photoUrl}
                          alt={assignedMuallim.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="font-label-sm text-[11px] text-[#735c00] font-bold uppercase tracking-wider block">
                          কাফেলার প্রধান মোয়াল্লিম
                        </span>
                        <h4 className="font-title-md text-base font-bold text-[#00453d]">
                          {assignedMuallim.name}
                        </h4>
                        <span className="font-body-sm text-xs text-[#3f4946]">
                          {assignedMuallim.title} • {assignedMuallim.experienceYears}+ বছর অভিজ্ঞতা
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/muallims"
                      className="px-4 py-2 bg-white text-[#00453d] hover:bg-[#00453d] hover:text-white border border-[#dbe5e0] text-xs font-semibold rounded-lg transition-all"
                    >
                      মোয়াল্লিম প্রোফাইল দেখুন
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* 2. ITINERARY */}
            {activeTab === "itinerary" && (
              <div className="space-y-4">
                <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif mb-4">
                  দিনভিত্তিক বিস্তারিত পরিকল্পনা
                </h3>
                {pkg.itinerary && pkg.itinerary.length > 0 ? (
                  <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#dbe5e0]">
                    {pkg.itinerary.map((it) => (
                      <div key={it.day} className="relative pl-8">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#00453d] text-white text-xs font-bold flex items-center justify-center">
                          {it.day}
                        </div>
                        <div className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0]">
                          <h4 className="font-title-sm text-sm font-bold text-[#00453d]">
                            দিন {it.day}: {it.title}
                          </h4>
                          <p className="font-body-sm text-xs text-[#3f4946] mt-1">
                            {it.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-[#f2fcf6] rounded-xl text-xs text-[#3f4946]">
                    বিস্তারিত ভ্রমণসূচির জন্য আমাদের কনসিয়ার্জ ডেস্কে যোগাযোগ করুন।
                  </div>
                )}
              </div>
            )}

            {/* 3. HOTELS */}
            {activeTab === "hotels" && (
              <div className="space-y-6">
                <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif">
                  নির্বাচিত ৫-স্টার ও প্রিমিয়াম হোটেল
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] space-y-2">
                    <span className="font-label-sm text-xs uppercase tracking-wider text-[#735c00] font-bold block">
                      পবিত্র মক্কা শরীফ
                    </span>
                    <h4 className="font-title-md text-base font-bold text-[#00453d]">
                      {pkg.hotelMakkah || "মক্কা ক্লক রয়্যাল টাওয়ার (ফেয়ারমন্ট)"}
                    </h4>
                    <p className="text-xs text-[#3f4946]">
                      হারাম শরীফের চত্বর থেকে মাত্র {pkg.distanceToHaramMakkah || "৫০ মিটার"} দূরত্বে অবস্থিত। লিফট দিয়ে নামলেই সরাসরি মাতাফের প্রাঙ্গণ।
                    </p>
                    <div className="flex items-center gap-1 text-[#735c00] text-xs font-bold pt-2">
                      ★★★★★ ৫-স্টার লাক্সারি ক্যাটাগরি
                    </div>
                  </div>

                  <div className="p-5 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] space-y-2">
                    <span className="font-label-sm text-xs uppercase tracking-wider text-[#735c00] font-bold block">
                      মদিনা মুনাওয়ারা
                    </span>
                    <h4 className="font-title-md text-base font-bold text-[#00453d]">
                      {pkg.hotelMadinah || "দার আল তাকওয়া হোটেল মদিনা"}
                    </h4>
                    <p className="text-xs text-[#3f4946]">
                      মসজিদে নববীর সেন্ট্রাল মারকাজিয়া গেটের ঠিক মুখোমুখি, হাঁটার দূরত্ব মাত্র {pkg.distanceToHaramMadinah || "১০০ মিটার"}।
                    </p>
                    <div className="flex items-center gap-1 text-[#735c00] text-xs font-bold pt-2">
                      ★★★★★ ৫-স্টার সেন্ট্রাল মারকাজিয়া
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. INCLUSIONS & EXCLUSIONS */}
            {activeTab === "inclusions" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-title-md text-base font-bold text-[#00453d] font-serif mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#00453d]">check_circle</span>
                    <span>প্যাকেজে যা যা অন্তর্ভুক্ত:</span>
                  </h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#141d1a]">
                        <span className="text-[#00453d] font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-title-md text-base font-bold text-[#b3261e] font-serif mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#b3261e]">cancel</span>
                    <span>প্যাকেজে যা অন্তর্ভুক্ত নয়:</span>
                  </h4>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#3f4946]">
                        <span className="text-[#b3261e] font-bold">✗</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 5. REVIEWS */}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#dbe5e0]">
                  <div>
                    <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif">
                      যাত্রীদের মতামত ও মূল্যায়ন
                    </h3>
                    <span className="text-xs text-[#735c00] font-semibold">
                      (প্রাথমিক ডেমো প্রিভিউ • ভেরিফাইড রিভিউ)
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-[#f2fcf6] text-[#00453d] text-xs font-bold rounded-lg border border-[#dbe5e0]">
                    গড় রেটিং: {pkg.rating || 4.9} / ৫.০
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0]">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-xs text-[#141d1a]">হাজী শফিকুর রহমান</strong>
                      <span className="text-xs text-[#735c00]">★★★★★</span>
                    </div>
                    <p className="text-xs text-[#3f4946]">
                      আলহামদুলিল্লাহ, স্বচ্ছের সেবা পেয়ে আমরা অত্যন্ত তৃপ্ত। মক্কার হোটেলটি হারামের এতো কাছাকাছি ছিল যে আমার বৃদ্ধ মা প্রতিদিন ৫ ওয়াক্ত নামাজ জামাতে আদায় করতে পেরেছেন।
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
