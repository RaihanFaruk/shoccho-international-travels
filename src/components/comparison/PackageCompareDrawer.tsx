"use client";

import { useState } from "react";
import Image from "next/image";
import { usePlatform } from "@/context/PlatformContext";
import { packagesData } from "@/data/packages";

export function PackageCompareDrawer() {
  const { compareList, toggleCompare, clearCompare, openBookingModal } = usePlatform();
  const [isOpen, setIsOpen] = useState(false);

  if (compareList.length === 0) return null;

  const comparedPackages = packagesData.filter((pkg) => compareList.includes(pkg.id));

  return (
    <>
      {/* Floating Pill Trigger at Bottom-Right */}
      {!isOpen && (
        <aside aria-label="প্যাকেজ তুলনা" className="fixed bottom-20 lg:bottom-6 right-4 lg:right-8 z-40 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-3 bg-[#00453d] text-white rounded-full shadow-2xl flex items-center gap-3 border border-[#fed65b]/40 hover:bg-[#075e54] transition-all group"
          >
            <span className="material-symbols-outlined text-[#fed65b] text-xl group-hover:rotate-12 transition-transform">
              compare_arrows
            </span>
            <div className="text-left">
              <span className="font-label-md text-xs font-bold block">
                প্যাকেজ তুলনা ({compareList.length}/৩)
              </span>
              <span className="text-[10px] text-[#a2b5af] block">
                পাশাপাশি পার্থক্য দেখুন
              </span>
            </div>
            <span className="w-6 h-6 rounded-full bg-[#fed65b] text-[#745c00] text-xs font-bold flex items-center justify-center ml-1">
              {compareList.length}
            </span>
          </button>
        </aside>
      )}

      {/* Full Comparison Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141d1a]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#dbe5e0] overflow-hidden flex flex-col max-h-[92vh]">
            {/* Header */}
            <div className="px-6 py-4 bg-[#00453d] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fed65b] text-2xl">
                  compare_arrows
                </span>
                <div>
                  <h3 className="font-title-lg text-lg font-bold font-serif">
                    প্যাকেজ তুলনা ও বিশ্লেষণ
                  </h3>
                  <span className="font-label-sm text-xs text-[#a2b5af]">
                    সুবিধা, দূরত্ব ও মূল্যের তুলনা
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearCompare}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-xs text-[#fed65b] rounded-lg transition-colors font-medium"
                >
                  সব মুছুন
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-[#dbe5e0]">
                    <th className="py-3 px-4 text-xs font-bold uppercase text-[#3f4946] w-1/4 bg-[#f2fcf6]">
                      বৈশিষ্ট্য
                    </th>
                    {comparedPackages.map((pkg) => (
                      <th key={pkg.id} className="py-3 px-4 text-left w-1/4">
                        <div className="relative h-28 rounded-xl overflow-hidden mb-2 border border-[#dbe5e0]">
                          <Image
                            src={pkg.imageUrl}
                            alt={pkg.titleBn || pkg.title}
                            fill
                            className="object-cover"
                          />
                          <button
                            onClick={() => toggleCompare(pkg.id)}
                            className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-black/60 hover:bg-red-600 text-white text-xs flex items-center justify-center"
                            title="তালিকা থেকে বাদ দিন"
                          >
                            ✕
                          </button>
                        </div>
                        <h4 className="font-title-sm text-xs font-bold text-[#00453d] line-clamp-2">
                          {pkg.titleBn || pkg.title}
                        </h4>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-[#dbe5e0]">
                  {/* Price Row */}
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">প্যাকেজ মূল্য</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-3 px-4">
                        <span className="font-headline-sm text-base text-[#00453d] font-bold font-serif">
                          {pkg.priceBn || `৳ ${pkg.price.toLocaleString("bn-BD")}`}
                        </span>
                        <span className="text-[10px] text-[#735c00] block">সব ট্যাক্স অন্তর্ভুক্ত</span>
                      </td>
                    ))}
                  </tr>

                  {/* Duration Row */}
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">সফরের সময়কাল</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-3 px-4 font-semibold text-[#141d1a]">
                        {pkg.durationDays} দিন / {pkg.durationNights} রাত
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">গ্রাহক সন্তুষ্টি</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-3 px-4">
                        <div className="flex items-center gap-1 text-[#735c00] font-bold">
                          <span className="material-symbols-outlined text-sm">star</span>
                          <span>{pkg.rating || "4.9"}</span>
                          <span className="text-[10px] text-[#3f4946] font-normal">
                            ({pkg.reviewCount || 40}+ রিভিউ)
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Hotel Makkah */}
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">মক্কার হোটেল ও দূরত্ব</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-3 px-4 text-[#141d1a]">
                        <strong>{pkg.hotelMakkah || "প্রিমিয়াম হোটেল"}</strong>
                        <span className="text-[11px] text-[#00453d] block mt-0.5">
                          {pkg.distanceToHaramMakkah || "হারামের সন্নিকটে"}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Hotel Madinah */}
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">মদিনার হোটেল ও দূরত্ব</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-3 px-4 text-[#141d1a]">
                        <strong>{pkg.hotelMadinah || "মারকাজিয়া হোটেল"}</strong>
                        <span className="text-[11px] text-[#00453d] block mt-0.5">
                          {pkg.distanceToHaramMadinah || "মারকাজিয়া এরিয়া"}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Action Row */}
                  <tr>
                    <td className="py-4 px-4 font-bold text-[#3f4946] bg-[#f2fcf6]">বুকিং আবেদন</td>
                    {comparedPackages.map((pkg) => (
                      <td key={pkg.id} className="py-4 px-4">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            openBookingModal(pkg);
                          }}
                          className="w-full px-3 py-2 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all text-center"
                        >
                          বুকিং শুরু করুন
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
