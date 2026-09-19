import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";

export const metadata: Metadata = {
  title: "শর্তাবলী ও নিয়মাবলী (Terms of Service) | স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস",
  description:
    "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস-এর সাধারণ বুকিং নীতিমালা, রিফান্ড পলিসি, ভিসা প্রসেসিং ডিসক্লেইমার ও সেবার শর্তাবলী।",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between font-sans text-[#141d1a]">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#3f4946] mb-8 font-sans">
            <Link href="/" className="hover:text-[#00453d] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">home</span>
              <span>হোম</span>
            </Link>
            <span className="text-[#bec9c5]">/</span>
            <span className="text-[#00453d] font-semibold">শর্তাবলী ও নিয়মাবলী</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ecf6f1] text-[#00453d] text-xs font-bold rounded-full mb-4">
              <span className="material-symbols-outlined text-sm">gavel</span>
              <span>আইনি ও চুক্তিভিত্তিক শর্তাবলী</span>
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d] mb-3">
              স্বচ্ছ ট্রাভেলস শর্তাবলী ও সেবা নীতিমালা
            </h1>
            <p className="text-xs sm:text-sm text-[#3f4946] font-sans">
              কার্যকরী তারিখ: ১ জানুয়ারি ২০২৫ • বুকিং সম্পন্ন করার পূর্বে অনুগ্রহ করে প্রতিটি শর্ত মনোযোগ দিয়ে পড়ুন।
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] space-y-8 text-sm sm:text-base text-[#3f4946] leading-relaxed">
            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ১. শতভাগ স্বচ্ছতা ও কস্টিং ক্লজ (Radical Transparency Clause)
              </h2>
              <p>
                স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস কোনো অবস্থাতেই বুকিং চূড়ান্ত হওয়ার পর অপ্রকাশিত বা হিডেন ফি দাবি করে না। এয়ারলাইন টিকেটের ট্যাক্স, সৌদি সরকার নির্ধারিত ওমরাহ/হজ ফি, মোয়াল্লিম ভাতা এবং হোটেলের ক্যাটাগরি চুক্তিনামায় সুস্পষ্টভাবে লিপিবদ্ধ থাকে।
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ২. বুকিং ও পেমেন্ট শিডিউল (Booking & Payment Terms)
              </h2>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#141d1a]">
                <li>ওমরাহ ও ট্যুর প্যাকেজের ক্ষেত্রে বুকিং নিশ্চিত করতে মোট প্যাকেজ মূল্যের ৩০% অগ্রিম জমা দিতে হবে।</li>
                <li>হজ নিবন্ধনের ক্ষেত্রে বাংলাদেশ সরকার ও ধর্ম বিষয়ক মন্ত্রণালয়ের ঘোষিত নিয়মানুযায়ী প্রাথমিক নিবন্ধন ফি নির্ধারিত ব্যাংকে জমা বাধ্যতামূলক।</li>
                <li>যাত্রার কমপক্ষে ১৫ দিন পূর্বে অবশিষ্ট সম্পূর্ণ পেমেন্ট পরিশোধ করে ট্রাভেল ভাউচার ও ই-ভিসা সংগ্রহ করতে হবে।</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৩. বাতিলকরণ ও রিফান্ড নীতিমালা (Cancellation & Refund Policy)
              </h2>
              <div className="overflow-x-auto my-3">
                <table className="w-full text-xs sm:text-sm text-left border border-[#dbe5e0] rounded-xl overflow-hidden">
                  <thead className="bg-[#f2fcf6] text-[#00453d] font-semibold border-b border-[#dbe5e0]">
                    <tr>
                      <th className="p-3">বাতিলের সময়সীমা</th>
                      <th className="p-3">রিফান্ডের হার</th>
                      <th className="p-3">মন্তব্য</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dbe5e0] text-[#3f4946]">
                    <tr>
                      <td className="p-3 font-medium text-[#141d1a]">যাত্রার ৩০+ দিন পূর্বে</td>
                      <td className="p-3 text-[#00453d] font-bold">৯০% রিফান্ড</td>
                      <td className="p-3">শুধুমাত্র নন-রিফান্ডেবল টিকিট/ভিসা সরকারি ফি ব্যতীত</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[#141d1a]">যাত্রার ১৫-২৯ দিন পূর্বে</td>
                      <td className="p-3 text-[#00453d] font-bold">৭০% রিফান্ড</td>
                      <td className="p-3">হোটেল বুকিং চার্জ সমন্বয় সাপেক্ষে</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[#141d1a]">যাত্রার ৭-১৪ দিন পূর্বে</td>
                      <td className="p-3 text-[#735c00] font-bold">৪০% রিফান্ড</td>
                      <td className="p-3">এয়ারলাইন্স ক্যান্সেলেশন রুলস প্রযোজ্য</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[#141d1a]">যাত্রার ৭ দিনের কম সময়ে</td>
                      <td className="p-3 text-red-600 font-bold">রিফান্ড প্রযোজ্য নয়</td>
                      <td className="p-3">সর্বোচ্চ পর্যায়ে টিকিট ও হোটেল লকড থাকে</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৪. ভিসা প্রসেসিং ও এম্বাসি সংক্রান্ত ডিসক্লেইমার (Embassy Disclaimer)
              </h2>
              <p>
                ভিসা অনুমোদন বা প্রত্যাখ্যানের চূড়ান্ত এখতিয়ার সম্পূর্ণভাবে সংশ্লিষ্ট দেশের দূতাবাস বা পররাষ্ট্র মন্ত্রণালয়ের সার্বভৌম অধিকার। স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস একজন দায়িত্বশীল ফ্যাসিলিটেটর হিসেবে নির্ভুল ফাইল প্রস্তুত করে দেয়; তবে এম্বাসির অপ্রত্যাশিত ভিসা রিজেকশন বা বিলম্বের ক্ষেত্রে এজেন্সি কোনো আইনি দায় বহন করে না। রিজেকশন বাবদ সরকারি এম্বাসি ফি ফেরতযোগ্য নয়।
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৫. প্রাকৃতিক দুর্যোগ ও ফোর্স মেজার (Force Majeure)
              </h2>
              <p>
                প্রাকৃতিক দুর্যোগ, মহামারি, এয়ারলাইন্স শিডিউল বিপর্যয়, রাজনৈতিক অস্থিরতা বা সৌদি হজ মন্ত্রণালয়ের আকস্মিক নিয়ম পরিবর্তনের কারণে কোনো ফ্লাইট বা ইভেন্ট পরিবর্তিত হলে স্বচ্ছ ট্রাভেলস যাত্রীদের নিরাপত্তা ও স্বার্থ রক্ষায় সর্বোত্তম বিকল্প ব্যবস্থা গ্রহণে সচেষ্ট থাকবে।
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
