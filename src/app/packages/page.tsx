"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { packagesData } from "@/data/packages";
import { usePlatform } from "@/context/PlatformContext";

type CategoryFilter = "all" | "umrah" | "hajj" | "international" | "domestic";

export default function PackagesPage() {
  const { wishlist, toggleWishlist, compareList, toggleCompare, openBookingModal } = usePlatform();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<"featured" | "price_low" | "price_high" | "duration">("featured");

  const filteredPackages = useMemo(() => {
    return packagesData
      .filter((pkg) => {
        const matchesCategory =
          selectedCategory === "all" ? true : pkg.category === selectedCategory;
        const matchesSearch =
          (pkg.titleBn || pkg.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
          (pkg.destinationBn || pkg.destination).toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price_low") return a.price - b.price;
        if (sortBy === "price_high") return b.price - a.price;
        if (sortBy === "duration") return a.durationDays - b.durationDays;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
              প্যাকেজ ডিরেক্টরি
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight">
              পবিত্র হজ, ওমরাহ ও আন্তর্জাতিক ভ্রমণ প্যাকেজ
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] mt-3 leading-relaxed">
              সততা, স্বচ্ছ হিসাব ও ৫-স্টার স্বাচ্ছন্দ্যের নিশ্চয়তা নিয়ে প্রস্তুতকৃত আমাদের সকল নিয়মিত ও ভিআইপি প্যাকেজসমূহ।
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#dbe5e0] mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full md:w-80">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#3f4946] text-lg">
                  search
                </span>
                <input
                  type="text"
                  placeholder="প্যাকেজ বা গন্তব্য খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-xl text-xs text-[#141d1a] placeholder:text-[#707975] focus:outline-none focus:ring-1 focus:ring-[#00453d]"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {(
                  [
                    { id: "all", label: "সব প্যাকেজ" },
                    { id: "umrah", label: "পবিত্র ওমরাহ" },
                    { id: "hajj", label: "পবিত্র হজ" },
                    { id: "international", label: "আন্তর্জাতিক ট্যুর" },
                    { id: "domestic", label: "বাংলাদেশ ভ্রমণ" },
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? "bg-[#00453d] text-white shadow-sm"
                        : "bg-[#ecf6f1] text-[#3f4946] hover:bg-[#dbe5e0]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 self-end md:self-auto">
                <span className="text-[11px] text-[#3f4946] font-semibold whitespace-nowrap">সর্টিং:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "price_low" | "price_high" | "duration")}
                  className="p-1.5 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs text-[#141d1a] focus:outline-none"
                >
                  <option value="featured">জনপ্রিয় / ফিচার্ড</option>
                  <option value="price_low">কম মূল্য থেকে বেশি</option>
                  <option value="price_high">বেশি মূল্য থেকে কম</option>
                  <option value="duration">সফরের সময়কাল</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-[#3f4946] font-medium mb-6">
            <span>
              মোট <strong>{filteredPackages.length}</strong> টি প্যাকেজ পাওয়া গেছে
            </span>
            {compareList.length > 0 && (
              <span className="text-[#00453d] font-bold">
                {compareList.length} টি প্যাকেজ তুলনায় যুক্ত রয়েছে
              </span>
            )}
          </div>

          {/* Packages Grid / Empty State */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#dbe5e0] shadow-sm max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#ecf6f1] text-[#00453d] flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">travel_explore</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#00453d] mb-2">
                কোনো প্যাকেজ পাওয়া যায়নি
              </h3>
              <p className="text-sm text-[#3f4946] mb-6">
                আপনার বর্তমান অনুসন্ধান বা ফিল্টারের সাথে মিল রেখে কোনো প্যাকেজ খুঁজে পাওয়া যায়নি। অনুসন্ধান কীওয়ার্ড অথবা ক্যাটাগরি পরিবর্তন করে চেষ্টা করুন।
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSortBy("featured");
                }}
                className="px-6 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white text-xs font-semibold rounded-lg shadow-sm transition-all uppercase tracking-wider"
              >
                সব ফিল্টার রিসেট করুন
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPackages.map((pkg) => {
                const isWishlisted = wishlist.includes(pkg.id);
                const isCompared = compareList.includes(pkg.id);

                return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#dbe5e0] flex flex-col justify-between group hover:shadow-md transition-all"
                >
                  <div>
                    {/* Image & Badges */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={pkg.imageUrl}
                        alt={pkg.titleBn || pkg.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {pkg.badge && (
                          <span className="px-2.5 py-0.5 bg-white text-[#735c00] font-label-sm text-[11px] font-bold rounded-full shadow">
                            {pkg.badge}
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 bg-[#00453d] text-white font-label-sm text-[11px] font-semibold rounded-full shadow">
                          {pkg.durationDays} দিন / {pkg.durationNights} রাত
                        </span>
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(pkg.id)}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isWishlisted
                            ? "bg-red-50 text-red-600 shadow-md"
                            : "bg-white/80 hover:bg-white text-[#3f4946] shadow"
                        }`}
                        title={isWishlisted ? "সংরক্ষণ থেকে সরান" : "সংরক্ষণ করুন"}
                      >
                        <span className="material-symbols-outlined text-base">
                          {isWishlisted ? "favorite" : "favorite_border"}
                        </span>
                      </button>

                      {/* Rating Banner */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs">
                        <span className="material-symbols-outlined text-sm text-[#fed65b]">star</span>
                        <span className="font-bold">{pkg.rating || 4.9}</span>
                        <span className="text-[10px] text-[#a2b5af]">({pkg.reviewCount || 40})</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="font-label-sm text-[11px] text-[#735c00] font-bold uppercase tracking-wider block">
                        {pkg.destinationBn || pkg.destination}
                      </span>
                      <h3 className="font-title-lg text-lg font-bold text-[#00453d] font-serif mt-1 line-clamp-2">
                        {pkg.titleBn || pkg.title}
                      </h3>
                      <p className="font-body-sm text-xs text-[#3f4946] mt-2 line-clamp-2">
                        {pkg.overview}
                      </p>

                      {/* Hotel distance info if Umrah/Hajj */}
                      {pkg.distanceToHaramMakkah && (
                        <div className="mt-3 pt-2 border-t border-[#dbe5e0]/60 flex items-center gap-2 text-xs text-[#141d1a]">
                          <span className="material-symbols-outlined text-sm text-[#00453d]">apartment</span>
                          <span className="font-medium">{pkg.hotelMakkah || "মক্কা হোটেল"}:</span>
                          <span className="font-bold text-[#735c00]">{pkg.distanceToHaramMakkah}</span>
                        </div>
                      )}

                      {/* Inclusions pill preview */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {pkg.inclusions.slice(0, 2).map((inc, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#f2fcf6] text-[#00453d] font-label-sm text-[10px] font-semibold rounded border border-[#dbe5e0]"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price and Action Strip */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-[#dbe5e0] flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-[#3f4946] block">প্যাকেজ শুরু</span>
                        <span className="font-headline-md text-xl text-[#00453d] font-bold font-serif">
                          {pkg.priceBn || `৳ ${pkg.price.toLocaleString("bn-BD")}`}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#735c00] font-semibold">
                        ট্যাক্স অন্তর্ভুক্ত
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="py-2.5 px-3 border border-[#00453d] text-[#00453d] hover:bg-[#ecf6f1] font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg transition-all text-center"
                      >
                        বিস্তারিত দেখুন
                      </Link>
                      <button
                        type="button"
                        onClick={() => openBookingModal(pkg)}
                        className="py-2.5 px-3 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all text-center"
                      >
                        বুকিং করুন
                      </button>
                    </div>

                    {/* Compare Button */}
                    <button
                      type="button"
                      onClick={() => toggleCompare(pkg.id)}
                      className={`w-full mt-2 py-1.5 text-[11px] font-semibold rounded transition-colors flex items-center justify-center gap-1 ${
                        isCompared
                          ? "bg-[#fed65b] text-[#745c00]"
                          : "text-[#3f4946] hover:text-[#00453d] hover:bg-[#ecf6f1]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xs">compare_arrows</span>
                      <span>{isCompared ? "তুলনা থেকে বাদ দিন" : "অন্য প্যাকেজের সাথে তুলনা করুন"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
