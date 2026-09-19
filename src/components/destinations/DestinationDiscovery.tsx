"use client";

import { useState } from "react";
import Image from "next/image";
import { QuickInquiryModal } from "@/components/booking/QuickInquiryModal";

const asiaDestinations = [
  {
    id: "d1",
    tag: "বাংলাদেশ",
    title: "কক্সবাজার সমুদ্র সৈকত",
    subtitle: "বিশ্বের দীর্ঘতম প্রাকৃতিক সৈকত",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCahESIwopAgnFJcbA6FnyQcTZ0RX-C13svpaxWONkYbie0jMivLIR7Z4nGuDTgAEpTs5gpHfc19XtQDV87rDmh53Fx6Mgtt-mWFmxrvKQrhcvbuQodI12GRHJZLx0ZEm9d74rcX39ayNUDoIwJXB9yKSCZFn6SslEGAugN271IK9BEukTIDvFiVkns0sc_e4Q4i4_cXAecXYQ8aAhlHVdCB9EHOmPwc-xXYEqyOHWcrPMig8YGYlEu",
  },
  {
    id: "d2",
    tag: "সিলেট",
    title: "শ্রীমঙ্গল চা বাগান ও লাউয়াছড়া",
    subtitle: "সবুজের কোলে প্রশান্তির ছোঁয়া",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4WErqT0_KGiEpqQtaWznRaf7aeLf_k6x_ZRBk48pEQ2kfwf1tA8B45qThYffNLULwl62_KzA6P3TFOf1_rbQ3AN5YMLi7ZhGOmVfMAkB8Ro1zfrB19X7vfctwJwLAXUAv6Svv0_XXk74v1L8V5yOM-Jma1qJq6pdKBcPvCFt38YUOQ-ngdzGkfCmraNZz25X3Q_0CEu-A_VkfWhcsjBRewF0sYLK2FvxfplPyWHCHVDhZaw-KcfY7",
  },
  {
    id: "d3",
    tag: "মালয়েশিয়া",
    title: "কুয়ালালামপুর ও লংকাউই",
    subtitle: "আধুনিক শহর ও শান্ত দ্বীপের মিলন",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA90R_EsYWWnuE8octKF_JI38K6WlKfuz36XRqbvyVDnzs7iGIQs5wkYp_gZuh_CC__2hddXsopCRkG5CfIPWoLnRqYllnpNsV-9phx7wUfkWt9yuylqKrOnpILoEXIfjGS-CucodxrsWCRlRsmz60PUYgRJar9uZ3jQTbJF_XLZC_NQHoXbiGD-4qatXoRE0E-7RSWhp1wYjNVDfO2WvRHEUW4u1Eqa1ZWhmpbnsFCch0JcX1UJf9D",
  },
  {
    id: "d4",
    tag: "থাইল্যান্ড",
    title: "ব্যাংকক ও পাতায়া বিচ",
    subtitle: "শপিং, কালচার ও রিফ্রেশিং ট্যুর",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1F2JFv7vtQcQ1wg85HaFYyo8vgweMmOKFLJV58bXlZXjDpHfDAXLSDVW-PJgM7IEwG6_L7eq7d0g1_hFgZ7bhL3spxT-t20Evs5SPMO1ZbnTJRXM1Q78lveWCiJZj66GLVilmkyqPLmBIrpD0h78MHszqD5fS-eWLDGIfmVddIBMUPu-suwXShNYU8_AOjlZwM1uDZn0XxBnRt_8VHrFMnpwCpAsN764JIfDNpTGH8W3qbAOdkbBf",
  },
];

const middleEastDestinations = [
  {
    id: "d5",
    tag: "ইউএই",
    title: "দুবাই ডাউনটাউন ও ডেজার্ট",
    subtitle: "বুর্জ খলিফা, মেরিনা ক্রুজ ও সাফারি",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZTjGOT1a9TnX5wkuiB605C1-ocW5eW8fHA81QsniOOo3E_uNamuICq8oyFR6lGOU11nyjfhnVdlTV_NfWk7tSBs0JzeuwtDtNPWKsvyz0Z_acFWoY0kZGvRw7vvycu1JUbzhU0jPLD3T_qDHuagPYtksZFHzmNzk4K7DwLV6GQ4-RMSYA4oQujDF24nkcNmc8fh7W9CmRy_axdTfQKQr13cxsew3O7ix03011Oa0bwwErRYUIhBPP",
  },
  {
    id: "d6",
    tag: "তুরস্ক",
    title: "ইস্তাম্বুল ও কাপাডোকিয়া",
    subtitle: "ঐতিহাসিক অটোমান সাম্রাজ্য ও হট এয়ার বেলুন",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJmjhoL_5ERt_YfUDnkqVM9Tnce-TwHcyTx7CQFH-o5XrrzIHtmjE_1rQYWinScrggGTFaCNnkX2e5uuQ34Q7ZOE7eHeIyaOQV0SmK6zNDZY1ZAjv8ajR_D8ycI31JCxqrcsI4khItgDuj6yQ7E3-Bnn02-KC1VUraSJuxEciJ4J3hprCfWdZG2xLL7A8-0obRkWZ1QXP8YfbKAPb_yWsESs-XJhzhO_AJPMHwZh3xgtAiqnqpoOLe",
  },
  {
    id: "d7",
    tag: "মালদ্বীপ",
    title: "প্রাইভেট ওয়াটার ভিলা রিসোর্ট",
    subtitle: "স্ফটিক স্বচ্ছ নীল সমুদ্র ও প্রবাল প্রাচীর",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWef_OdDpZq7jYIhtKbXMKzn-QtvomPuw9MEIDnQjGiyzmJG5KShEw84HlUpVYgAPZKUPAZplsQI01Nj-nXiXdsky1JfUgAJyZ0oi6PO-aBnTxDjT12fD1p9fO4Bt1LWXM5IiLdiGLGqLbUL0VSGI0MLxZTAzIQOEupITwSxJapWyNHKOj7l5_bFr0FUGZ9aJV2dinkwqTkdAxVWUNM1RwjJjvCbriPkPFL8aypR4mAhg0vVWkEoyA",
  },
  {
    id: "d8",
    tag: "সৌদি আরব",
    title: "মক্কা ও মদিনা শরীফ যিয়ারত",
    subtitle: "পবিত্র হারামাইন শরিফাইন বরকতময় সফর",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6HiB7WNy60_7IN4MmmWsyK1FtEc-HLX3UNafPUM_JbidlHSQJ7h2Ec7rdC-kZhrecPBxFO368DqjJpuHn4na1AI6BdmX_HfMJX1H1Po8TMCMzGDxAzfc-tH-rJIyVVsYFVSAwCU2JX2UwhoxF4HsAoK6HnzC2nbJYJZUZtsE1_NGFNPmV8YSvIvv8Wd0eg6exw8hJlRIos-e-UCd2zchafnUHPdLboklRAyTCN5-OpFo_1tS8h5vu",
  },
];

export function DestinationDiscovery() {
  const [activeTab, setActiveTab] = useState<"asia" | "middleEast">("asia");
  const [selectedDest, setSelectedDest] = useState<string | null>(null);

  const currentList = activeTab === "asia" ? asiaDestinations : middleEastDestinations;

  return (
    <>
      <section className="w-full bg-[#ffffff] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735c00] font-bold block">
                WORLD AT YOUR REACH
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#00453d] font-serif font-semibold mt-1">
                দেশ ও বিদেশের সেরা গন্তব্যসমূহ
              </h2>
            </div>
            
            {/* Region Filter Toggle */}
            <div className="inline-flex p-1 bg-[#ecf6f1] rounded-xl border border-[#dbe5e0]/60 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("asia")}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeTab === "asia"
                    ? "bg-[#00453d] text-white font-semibold shadow-sm"
                    : "text-[#3f4946] hover:text-[#141d1a]"
                }`}
              >
                বাংলাদেশ ও এশিয়া
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("middleEast")}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all ${
                  activeTab === "middleEast"
                    ? "bg-[#00453d] text-white font-semibold shadow-sm"
                    : "text-[#3f4946] hover:text-[#141d1a]"
                }`}
              >
                মিডল ইস্ট ও ইউরোপ
              </button>
            </div>
          </div>

          {/* Destination Matrix Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentList.map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest.title)}
                className="relative h-72 rounded-xl overflow-hidden group shadow-sm cursor-pointer border border-[#dbe5e0]/60"
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141d1a]/90 via-[#141d1a]/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-label-sm text-label-sm text-[#ffe088] uppercase tracking-wider block mb-0.5">
                    {dest.tag}
                  </span>
                  <h4 className="font-title-lg text-lg font-serif font-bold group-hover:text-[#ffe088] transition-colors leading-snug">
                    {dest.title}
                  </h4>
                  <span className="font-body-sm text-[12px] text-[#dbe5e0] block mt-0.5">
                    {dest.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={Boolean(selectedDest)}
        onClose={() => setSelectedDest(null)}
        defaultTitle={`গন্তব্য পরামর্শ: ${selectedDest || ""}`}
        defaultCategory="ট্যুর প্যাকেজ অনুসন্ধান"
      />
    </>
  );
}
