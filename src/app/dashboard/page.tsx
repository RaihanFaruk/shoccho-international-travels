"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { usePlatform, DemoBooking } from "@/context/PlatformContext";
import { useNavbarState } from "@/context/NavbarStateContext";
import { packagesData } from "@/data/packages";

export default function DashboardPage() {
  const { bookings, openBookingModal } = usePlatform();
  const { wishlist, toggleWishlist } = useNavbarState();
  const [activeTab, setActiveTab] = useState<"bookings" | "wishlist" | "passengers" | "rewards">("bookings");

  const wishlistedPackages = packagesData.filter((p) => wishlist.includes(p.id));

  const getStatusBadge = (status: DemoBooking["status"]) => {
    switch (status) {
      case "confirmed":
        return <span className="px-3 py-1 bg-[#ecf6f1] text-[#00453d] border border-[#00453d]/30 text-xs font-bold rounded-full">✓ নিশ্চিতকৃত</span>;
      case "pending":
        return <span className="px-3 py-1 bg-[#fff8e1] text-[#745c00] border border-[#fed65b] text-xs font-bold rounded-full">⏳ পর্যালোচনায়</span>;
      case "paid":
        return <span className="px-3 py-1 bg-[#00453d] text-white text-xs font-bold rounded-full">💰 পরিশোধিত</span>;
      case "processing":
        return <span className="px-3 py-1 bg-[#e1f5fe] text-[#0277bd] text-xs font-bold rounded-full">✈️ ভিসা ও টিকিট প্রসেসিং</span>;
      case "completed":
        return <span className="px-3 py-1 bg-[#f1f8e9] text-[#33691e] text-xs font-bold rounded-full">🎉 সফলভাবে সম্পন্ন</span>;
      case "cancelled":
        return <span className="px-3 py-1 bg-[#ffebee] text-[#c62828] text-xs font-bold rounded-full">✕ বাতিলকৃত</span>;
      default:
        return <span className="px-3 py-1 bg-[#f2fcf6] text-[#3f4946] text-xs font-bold rounded-full">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* User Profile Summary Header */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#dbe5e0] mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-20 h-20 rounded-full bg-[#00453d] text-[#ffe088] font-serif font-bold text-3xl flex items-center justify-center ring-4 ring-[#fed65b] shadow-md shrink-0">
                  তা
                </div>
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h1 className="font-headline-sm text-2xl font-serif font-bold text-[#00453d]">
                      তানভীর আহমেদ
                    </h1>
                    <span className="px-2.5 py-0.5 bg-[#fed65b] text-[#745c00] text-[10px] font-bold rounded-full uppercase">
                      গোল্ড মেম্বার
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#3f4946] mt-1">
                    <span>📞 01711-223344</span>
                    <span>•</span>
                    <span>✉️ tanvir.shoccho@example.com</span>
                    <span>•</span>
                    <span>আইডি: SH-MEM-4091</span>
                  </div>
                </div>
              </div>

              {/* Stats pill */}
              <div className="flex items-center gap-4 bg-[#f2fcf6] p-4 rounded-2xl border border-[#dbe5e0] text-center">
                <div>
                  <span className="text-[10px] text-[#3f4946] block uppercase tracking-wider">সক্রিয় বুকিং</span>
                  <strong className="text-lg text-[#00453d] font-serif">{bookings.length} টি</strong>
                </div>
                <div className="w-px h-8 bg-[#dbe5e0]" />
                <div>
                  <span className="text-[10px] text-[#3f4946] block uppercase tracking-wider">উইশলিস্ট</span>
                  <strong className="text-lg text-[#735c00] font-serif">{wishlist.length} টি</strong>
                </div>
                <div className="w-px h-8 bg-[#dbe5e0]" />
                <div>
                  <span className="text-[10px] text-[#3f4946] block uppercase tracking-wider">রিওয়ার্ড পয়েন্ট</span>
                  <strong className="text-lg text-[#00453d] font-serif">২,৪৫০</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#dbe5e0] mb-8 overflow-x-auto pb-1">
            {[
              { id: "bookings", label: "📋 আমার বুকিং ও ভ্রমণ স্টেটাস" },
              { id: "wishlist", label: `❤️ সংরক্ষিত প্যাকেজ (${wishlist.length})` },
              { id: "passengers", label: "🛂 পাসপোর্ট ও প্যাসেঞ্জার ভল্ট" },
              { id: "rewards", label: "👑 মেম্বারশিপ ও অফার" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "bookings" | "wishlist" | "passengers" | "rewards")}
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

          {/* Tab Content */}
          <div className="space-y-6">
            {/* 1. BOOKINGS */}
            {activeTab === "bookings" && (
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="bg-white p-12 rounded-3xl text-center border border-[#dbe5e0] space-y-3">
                    <span className="material-symbols-outlined text-4xl text-[#bec9c5]">flight</span>
                    <h3 className="text-base font-bold text-[#141d1a]">কোনো সক্রিয় বুকিং পাওয়া যায়নি</h3>
                    <p className="text-xs text-[#3f4946]">আমাদের প্যাকেজসমূহ ঘুরে দেখুন এবং সহজে বুকিং আবেদন করুন।</p>
                    <Link
                      href="/packages"
                      className="inline-block px-5 py-2.5 bg-[#00453d] text-white text-xs font-semibold rounded-xl"
                    >
                      প্যাকেজ ব্রাউজ করুন ➔
                    </Link>
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] space-y-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#dbe5e0] gap-3">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono font-bold text-[#735c00] bg-[#f2fcf6] px-2.5 py-1 rounded-lg border border-[#dbe5e0]">
                              {booking.referenceCode}
                            </span>
                            <span className="text-xs text-[#3f4946]">
                              তারিখ: {new Date(booking.createdAt).toLocaleDateString("bn-BD")}
                            </span>
                          </div>
                          <h2 className="font-headline-sm text-lg sm:text-xl font-serif font-bold text-[#00453d] mt-1">
                            {booking.packageTitle}
                          </h2>
                          <span className="text-xs text-[#3f4946]">
                            গন্তব্য: {booking.destination} • সফরের তারিখ: <strong>{booking.departureDate}</strong>
                          </span>
                        </div>
                        <div>{getStatusBadge(booking.status)}</div>
                      </div>

                      {/* Lifecycle Progress Bar */}
                      <div className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0]">
                        <span className="text-[11px] font-bold text-[#3f4946] block uppercase tracking-wider mb-3">
                          বুকিং লাইফসাইকেল ট্র্যাকার
                        </span>
                        <div className="grid grid-cols-5 text-center text-[10px] sm:text-xs font-semibold text-[#3f4946] gap-1">
                          <div className="flex flex-col items-center">
                            <span className="w-6 h-6 rounded-full bg-[#00453d] text-white flex items-center justify-center text-xs mb-1">✓</span>
                            <span>আবেদন গৃহীত</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="w-6 h-6 rounded-full bg-[#00453d] text-white flex items-center justify-center text-xs mb-1">✓</span>
                            <span>আসন সংরক্ষিত</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1 ${booking.paidAmount > 0 ? "bg-[#00453d] text-white" : "bg-[#dbe5e0] text-[#707975]"}`}>
                              {booking.paidAmount > 0 ? "✓" : "৩"}
                            </span>
                            <span>পেমেন্ট নিষ্পত্তি</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="w-6 h-6 rounded-full bg-[#dbe5e0] text-[#707975] flex items-center justify-center text-xs mb-1">৪</span>
                            <span>ভিসা ও টিকিট</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="w-6 h-6 rounded-full bg-[#dbe5e0] text-[#707975] flex items-center justify-center text-xs mb-1">৫</span>
                            <span>যাত্রা সম্পন্ন</span>
                          </div>
                        </div>
                      </div>

                      {/* Manifest & Financials */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 bg-white rounded-xl border border-[#dbe5e0] space-y-2">
                          <span className="font-bold text-[#00453d] block">যাত্রী তালিকা ({booking.passengers.length} জন):</span>
                          {booking.passengers.map((p, i) => (
                            <div key={i} className="flex items-center justify-between py-1 border-b border-[#ecf6f1]">
                              <span>{i + 1}. {p.fullName}</span>
                              <span className="text-[#735c00] font-mono">পাসপোর্ট: {p.passportNumber}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-[#dbe5e0] space-y-2">
                          <span className="font-bold text-[#00453d] block">আর্থিক হিসাব:</span>
                          <div className="flex items-center justify-between">
                            <span className="text-[#3f4946]">মোট প্যাকেজ মূল্য:</span>
                            <strong className="text-[#141d1a]">৳ {booking.totalAmount.toLocaleString("bn-BD")}</strong>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#3f4946]">পরিশোধিত অর্থ:</span>
                            <strong className="text-[#00453d]">৳ {booking.paidAmount.toLocaleString("bn-BD")}</strong>
                          </div>
                          <div className="flex items-center justify-between pt-1 border-t border-[#dbe5e0]">
                            <span className="text-[#3f4946]">বকেয়া পরিশোধযোগ্য:</span>
                            <strong className="text-[#735c00]">
                              ৳ {(booking.totalAmount - booking.paidAmount).toLocaleString("bn-BD")}
                            </strong>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="text-[#735c00] font-semibold">
                          ⓘ সাভার অফিসে নগদ জমা অথবা ব্যাংকের মাধ্যমে পেমেন্ট সম্পন্ন করা যাবে।
                        </span>
                        <a
                          href="tel:01312583165"
                          className="px-4 py-2 bg-[#ecf6f1] text-[#00453d] font-semibold rounded-lg hover:bg-[#dbe5e0] transition-colors"
                        >
                          কনসিয়ার্জ সাপোর্ট কল
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* 2. WISHLIST */}
            {activeTab === "wishlist" && (
              <div>
                {wishlistedPackages.length === 0 ? (
                  <div className="bg-white p-12 rounded-3xl text-center border border-[#dbe5e0] space-y-3">
                    <span className="material-symbols-outlined text-4xl text-[#bec9c5]">favorite_border</span>
                    <h3 className="text-base font-bold text-[#141d1a]">উইশলিস্টে কোনো প্যাকেজ সংরক্ষিত নেই</h3>
                    <p className="text-xs text-[#3f4946]">যেকোনো প্যাকেজের পাশে থাকা হার্ট আইকনে ক্লিক করে সংরক্ষণ করুন।</p>
                    <Link
                      href="/packages"
                      className="inline-block px-5 py-2.5 bg-[#00453d] text-white text-xs font-semibold rounded-xl"
                    >
                      প্যাকেজ ব্রাউজ করুন ➔
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistedPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dbe5e0] flex flex-col justify-between"
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={pkg.imageUrl}
                            alt={pkg.titleBn || pkg.title}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => toggleWishlist(pkg.id)}
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-red-600 shadow flex items-center justify-center"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="p-4 space-y-2">
                          <h4 className="font-title-md text-sm font-bold text-[#00453d]">
                            {pkg.titleBn || pkg.title}
                          </h4>
                          <span className="font-headline-md text-base text-[#735c00] font-bold font-serif block">
                            {pkg.priceBn}
                          </span>
                          <button
                            onClick={() => openBookingModal(pkg)}
                            className="w-full py-2 bg-[#00453d] text-white text-xs font-semibold rounded-lg mt-2"
                          >
                            বুকিং করুন
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. PASSENGER VAULT */}
            {activeTab === "passengers" && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#dbe5e0] space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#dbe5e0]">
                  <div>
                    <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif">
                      সংরক্ষিত পারিবারিক যাত্রী তথ্য ভল্ট
                    </h3>
                    <span className="text-xs text-[#3f4946]">পরবর্তী বুকিংয়ে ১-ক্লিকে স্বয়ংক্রিয়ভাবে তথ্য যুক্ত করতে পারবেন।</span>
                  </div>
                  <button className="px-3.5 py-1.5 bg-[#ecf6f1] text-[#00453d] text-xs font-bold rounded-lg border border-[#dbe5e0]">
                    + নতুন যাত্রী যোগ করুন
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "তানভীর আহমেদ", relation: "নিজ", pass: "A04892154", exp: "২০৩০-০৮-২০" },
                    { name: "নুসরাত জাহান", relation: "স্ত্রী", pass: "A07612349", exp: "২০২৯-০৪-১২" },
                    { name: "হাজী মোঃ মোশাররফ হোসেন", relation: "বাবা", pass: "B09124410", exp: "২০২৮-১১-০৫" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0] space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs text-[#141d1a]">{item.name}</strong>
                        <span className="px-2 py-0.5 bg-white text-[#735c00] text-[10px] font-bold rounded border border-[#dbe5e0]">
                          {item.relation}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#3f4946] flex items-center justify-between pt-1">
                        <span>পাসপোর্ট: {item.pass}</span>
                        <span>মেয়াদ: {item.exp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. REWARDS */}
            {activeTab === "rewards" && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#dbe5e0] space-y-4">
                <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif">
                  স্বচ্ছ গোল্ড মেম্বারশিপ সুবিধাসমূহ
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0]">
                    <span className="material-symbols-outlined text-xl text-[#735c00]">luggage</span>
                    <h4 className="font-bold text-xs text-[#00453d] mt-1">ফ্রি স্পেশাল লাগেজ সুবিধা</h4>
                    <p className="text-[11px] text-[#3f4946] mt-0.5">জেদ্দা ও মদিনা রুটে অতিরিক্ত লাগেজ অগ্রাধিকার।</p>
                  </div>
                  <div className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0]">
                    <span className="material-symbols-outlined text-xl text-[#735c00]">room_service</span>
                    <h4 className="font-bold text-xs text-[#00453d] mt-1">হোটেল রুম আপগ্রেড অগ্রাধিকার</h4>
                    <p className="text-[11px] text-[#3f4946] mt-0.5">মক্কার ক্লক টাওয়ারে কাবার ভিউ রুম অগ্রাধিকার ভিত্তিতে বরাদ্দ।</p>
                  </div>
                  <div className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0]">
                    <span className="material-symbols-outlined text-xl text-[#735c00]">water_bottle</span>
                    <h4 className="font-bold text-xs text-[#00453d] mt-1">কমপ্লিমেন্টারি জমজম কুপন</h4>
                    <p className="text-[11px] text-[#3f4946] mt-0.5">প্রতিটি কাফেলা সফরে ৫ লিটার খাঁটি জমজম পানি কুপন উপহার।</p>
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
