"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { usePlatform, BookingStatus } from "@/context/PlatformContext";
import { packagesData } from "@/data/packages";
import { muallimsData } from "@/data/muallims";

export default function AdminPage() {
  const { bookings, updateBookingStatus } = usePlatform();
  const [activeTab, setActiveTab] = useState<"bookings" | "inventory" | "muallims" | "moderation">("bookings");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredBookings = bookings.filter((b) =>
    statusFilter === "all" ? true : b.status === statusFilter
  );

  const totalRevenue = bookings.reduce((sum, b) => sum + b.totalAmount, 0);
  const totalCollected = bookings.reduce((sum, b) => sum + b.paidAmount, 0);

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header Banner */}
          <div className="bg-[#00453d] text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-[#fed65b]/40 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fed65b] text-xl">admin_panel_settings</span>
                <span className="px-2.5 py-0.5 bg-[#fed65b] text-[#745c00] text-[10px] font-bold rounded-full uppercase">
                  ডেমো এডমিন ব্যাক-অফিস
                </span>
              </div>
              <h1 className="font-headline-md text-2xl sm:text-3xl font-serif font-bold mt-1">
                স্বচ্ছ ট্রাভেলস অপারেশনাল ম্যানেজমেন্ট
              </h1>
              <p className="font-body-sm text-xs text-[#a2b5af] mt-1">
                বুকিং লাইফসাইকেল, যাত্রী ম্যানিফেস্ট, কাফেলা ক্যাপাসিটি ও মোয়াল্লিম ভেরিফিকেশন কনসোল।
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-label-md text-xs font-semibold rounded-lg border border-white/20 transition-all"
              >
                কাস্টমার ভিউতে ফিরে যান
              </Link>
            </div>
          </div>

          {/* Metric KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="p-5 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm">
              <span className="text-[11px] text-[#3f4946] font-bold uppercase tracking-wider block">
                মোট সক্রিয় বুকিং
              </span>
              <span className="font-headline-md text-2xl text-[#00453d] font-serif font-bold mt-1 block">
                {bookings.length} টি
              </span>
              <span className="text-[10px] text-[#735c00] font-semibold">সদ্য দাখিলকৃত আবেদন সহ</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm">
              <span className="text-[11px] text-[#3f4946] font-bold uppercase tracking-wider block">
                মোট প্রাক্কলিত ভলিউম
              </span>
              <span className="font-headline-md text-2xl text-[#00453d] font-serif font-bold mt-1 block">
                ৳ {totalRevenue.toLocaleString("bn-BD")}
              </span>
              <span className="text-[10px] text-[#00453d] font-semibold">
                আদায়কৃত: ৳ {totalCollected.toLocaleString("bn-BD")}
              </span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm">
              <span className="text-[11px] text-[#3f4946] font-bold uppercase tracking-wider block">
                কাফেলা ও প্যাকেজ সংখ্যা
              </span>
              <span className="font-headline-md text-2xl text-[#00453d] font-serif font-bold mt-1 block">
                {packagesData.length} টি
              </span>
              <span className="text-[10px] text-[#735c00] font-semibold">রমজান ও হজের আসন সহ</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm">
              <span className="text-[11px] text-[#3f4946] font-bold uppercase tracking-wider block">
                ভেরিফাইড মোয়াল্লিম
              </span>
              <span className="font-headline-md text-2xl text-[#00453d] font-serif font-bold mt-1 block">
                {muallimsData.length} জন
              </span>
              <span className="text-[10px] text-[#00453d] font-semibold">১০০% ব্যাকগ্রাউন্ড ভেরিফাইড</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#dbe5e0] mb-6 overflow-x-auto pb-1">
            {[
              { id: "bookings", label: `📦 বুকিং পাইপলাইন ও স্ট্যাটাস (${bookings.length})` },
              { id: "inventory", label: "🏨 কাফেলা ইনভেন্টরি ও আসন" },
              { id: "muallims", label: "🕌 মোয়াল্লিম ভেরিফিকেশন কিউ" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "bookings" | "inventory" | "muallims")}
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

          {/* TAB 1: BOOKING PIPELINE */}
          {activeTab === "bookings" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] space-y-6">
              {/* Filter */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#dbe5e0]">
                <div>
                  <h3 className="font-title-lg text-base font-bold text-[#00453d]">
                    বুকিং লাইফসাইকেল অপারেশন কনসোল
                  </h3>
                  <span className="text-xs text-[#3f4946]">
                    স্ট্যাটাস ড্রপডাউন থেকে পরিবর্তন করলে সাথে সাথে কাস্টমার ড্যাশবোর্ডে আপডেট হবে।
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#3f4946] font-semibold">ফিল্টার:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="p-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-xl text-xs"
                  >
                    <option value="all">সকল বুকিং</option>
                    <option value="inquiry">ইনকোয়ারি (Inquiry)</option>
                    <option value="pending">পর্যালোচনায় (Pending)</option>
                    <option value="confirmed">নিশ্চিতকৃত (Confirmed)</option>
                    <option value="paid">পরিশোধিত (Paid)</option>
                    <option value="processing">প্রসেসিং (Processing)</option>
                    <option value="completed">সম্পন্ন (Completed)</option>
                    <option value="cancelled">বাতিল (Cancelled)</option>
                  </select>
                </div>
              </div>

              {/* Bookings Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#dbe5e0] text-[#3f4946] uppercase font-bold bg-[#f2fcf6]">
                      <th className="py-3 px-3">রেফারেন্স</th>
                      <th className="py-3 px-3">গ্রাহকের নাম ও ফোন</th>
                      <th className="py-3 px-3">প্যাকেজ ও তারিখ</th>
                      <th className="py-3 px-3">যাত্রী</th>
                      <th className="py-3 px-3">মূল্য ও পেমেন্ট</th>
                      <th className="py-3 px-3 text-right">স্ট্যাটাস পরিবর্তন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dbe5e0]">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-[#f2fcf6]/60 transition-colors">
                        <td className="py-3 px-3 font-mono font-bold text-[#735c00]">
                          {b.referenceCode}
                        </td>
                        <td className="py-3 px-3">
                          <strong className="text-[#141d1a] block">{b.contactName}</strong>
                          <span className="text-[11px] text-[#3f4946]">{b.contactPhone}</span>
                        </td>
                        <td className="py-3 px-3">
                          <strong className="text-[#00453d] block">{b.packageTitle}</strong>
                          <span className="text-[11px] text-[#3f4946]">{b.departureDate}</span>
                        </td>
                        <td className="py-3 px-3 font-semibold">
                          {b.passengers.length} জন ({b.roomType})
                        </td>
                        <td className="py-3 px-3">
                          <span className="font-bold text-[#141d1a] block">৳ {b.totalAmount.toLocaleString("bn-BD")}</span>
                          <span className="text-[10px] text-[#00453d]">জমা: ৳ {b.paidAmount.toLocaleString("bn-BD")}</span>
                        </td>
                        <td className="py-3 px-3 text-right">
                          <select
                            value={b.status}
                            onChange={(e) => updateBookingStatus(b.id, e.target.value as BookingStatus)}
                            className="p-1.5 bg-white border border-[#00453d] rounded-lg text-xs font-semibold text-[#00453d] focus:outline-none"
                          >
                            <option value="inquiry">ইনকোয়ারি</option>
                            <option value="pending">পর্যালোচনায়</option>
                            <option value="confirmed">নিশ্চিতকৃত</option>
                            <option value="paid">পরিশোধিত</option>
                            <option value="processing">প্রসেসিং</option>
                            <option value="completed">সম্পন্ন</option>
                            <option value="cancelled">বাতিল</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: INVENTORY */}
          {activeTab === "inventory" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] space-y-4">
              <h3 className="font-title-lg text-base font-bold text-[#00453d]">
                কাফেলা ইনভেন্টরি ও কোটা নিয়ন্ত্রণ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {packagesData.map((pkg) => (
                  <div key={pkg.id} className="p-4 bg-[#f2fcf6] rounded-2xl border border-[#dbe5e0] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00453d] line-clamp-1">{pkg.titleBn || pkg.title}</span>
                      <span className="px-2 py-0.5 bg-white text-[#735c00] rounded text-[10px] font-bold">
                        {pkg.category}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#3f4946]">
                      <span>মূল্য: {pkg.priceBn}</span>
                      <span>সময়কাল: {pkg.durationDays} দিন</span>
                    </div>
                    <div className="pt-2 border-t border-[#dbe5e0] flex items-center justify-between">
                      <span className="text-[11px] text-[#00453d] font-semibold">স্ট্যাটাস: বুকিং ওপেন</span>
                      <button className="px-2.5 py-1 bg-white border border-[#dbe5e0] rounded text-[11px] hover:bg-[#ecf6f1]">
                        সম্পাদনা
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MUALLIMS */}
          {activeTab === "muallims" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#dbe5e0] space-y-4">
              <h3 className="font-title-lg text-base font-bold text-[#00453d]">
                তালিকাভুক্ত ধর্মীয় গবেষক ও মোয়াল্লিম ডিরেক্টরি
              </h3>
              <div className="divide-y divide-[#dbe5e0]">
                {muallimsData.map((m) => (
                  <div key={m.id} className="py-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#00453d] text-white flex items-center justify-center font-bold text-sm">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <strong className="text-sm text-[#00453d] block">{m.name}</strong>
                        <span className="text-[#3f4946]">{m.title} • {m.experienceYears}+ বছর অভিজ্ঞতা</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-[#ecf6f1] text-[#00453d] font-bold rounded-full">
                        ✓ {m.verificationLevel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
