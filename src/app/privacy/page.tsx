import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি (Privacy Policy) | স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস",
  description:
    "স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস-এর ডেটা সুরক্ষা, পাসপোর্ট ও ভিসা তথ্য সংরক্ষণ এবং গোপনীয়তা বিষয়ক স্পষ্ট নীতিমালা।",
};

export default function PrivacyPage() {
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
            <span className="text-[#00453d] font-semibold">গোপনীয়তা নীতি</span>
          </nav>

          {/* Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ecf6f1] text-[#00453d] text-xs font-bold rounded-full mb-4">
              <span className="material-symbols-outlined text-sm">security</span>
              <span>ডেটা সুরক্ষা ও নিরাপত্তা নির্দেশিকা</span>
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#00453d] mb-3">
              স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস গোপনীয়তা নীতি
            </h1>
            <p className="text-xs sm:text-sm text-[#3f4946] font-sans">
              সর্বশেষ সংস্করণ: জানুয়ারি ২০২৫ • আমাদের সম্মানিত যাত্রীদের ব্যক্তিগত ও বায়োমেট্রিক তথ্যের সুরক্ষা আমাদের সর্বোচ্চ অগ্রাধিকার।
            </p>
          </div>

          {/* Privacy Content Sections */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#dbe5e0] space-y-8 text-sm sm:text-base text-[#3f4946] leading-relaxed">
            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ১. তথ্যের সংগ্রহ ও পরিধি (Information We Collect)
              </h2>
              <p className="mb-3">
                পবিত্র হজ, ওমরাহ কাফেলা, আন্তর্জাতিক এয়ার টিকিট ও ভিসা কনসিয়ার্জ সেবা সুচারুভাবে পরিচালনার জন্য আমরা সম্মানিত যাত্রীদের নিম্নোক্ত তথ্যাদি সংগ্রহ করি:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#141d1a]">
                <li>পূর্ণ নাম, স্থায়ী ও বর্তমান ঠিকানা, জন্মতারিখ ও পিতা-মাতার নাম</li>
                <li>আন্তর্জাতিক পাসপোর্ট কপি (এমআরপি / ই-পাসপোর্ট স্ক্যান) ও এনআইডি কপি</li>
                <li>সৌদি হজ মন্ত্রণালয় ও এম্বাসির বিধিমোতাবেক ল্যাব টেস্ট ও টিকাদান সনদ (Meningitis/Polio)</li>
                <li>যোগাযোগের মোবাইল নম্বর, ইমেইল ও জরুরি যোগাযোগের অভিভাবকের তথ্য</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ২. তথ্যের বিধিসম্মত ব্যবহার (How We Use Your Data)
              </h2>
              <p className="mb-3">
                সংগৃহীত তথ্যাদি কেবল সরাসরি ভ্রমণ প্রক্রিয়া বাস্তবায়নের জন্য সরকারি ও অনুমোদিত আন্তর্জাতিক সংস্থায় উপস্থাপিত হয়:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm text-[#141d1a]">
                <li>সৌদি নুসুক (Nusuk) প্ল্যাটফর্ম ও পররাষ্ট্র মন্ত্রণালয়ের ওমরাহ/হজ ভিসা অনুমোদন</li>
                <li>আইএটিএ (IATA) সার্টিফাইড এয়ারলাইন্স বুকিং সিস্টেমে টিকিট ইস্যু</li>
                <li>মক্কা ও মদিনার অনুমোদিত পাঁচ-তারকা ও প্রিমিয়াম হোটেলের চেক-ইন তালিকা প্রণয়ন</li>
                <li>বাংলাদেশ ধর্ম মন্ত্রণালয় ও হজ অনুবিভাগে হজযাত্রীদের সরকারি নিবন্ধন নিশ্চিতকরণ</li>
              </ul>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৩. কোনো তৃতীয় পক্ষের কাছে তথ্য বিক্রয় নয় (Zero Third-Party Commercial Sharing)
              </h2>
              <p>
                স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস নিশ্চিত করে যে, কোনো অবস্থাতেই আপনার ফোন নম্বর, ইমেইল বা ভ্রমণ ইতিহাস কোনো বাণিজ্যিক বিপণন সংস্থা, বিজ্ঞাপনী প্রতিষ্ঠান বা অননুমোদিত তৃতীয় পক্ষের কাছে বিক্রয়, ভাড়া বা অপব্যবহার করা হবে না।
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৪. ডেটা নিরাপত্তা ও এনক্রিপশন (Data Security)
              </h2>
              <p>
                ডিজিটাল প্ল্যাটফর্মে সংরক্ষিত সকল ডাটা ইন্ডাস্ট্রি-স্ট্যান্ডার্ড এনক্রিপশন প্রটোকল দ্বারা সুরক্ষিত। আমাদের অভ্যন্তরীণ সার্ভারে শারীরিক ও প্রযুক্তিগত এক্সেস কঠোরভাবে নির্দিষ্ট দায়িত্বপ্রাপ্ত কমপ্লায়েন্স অফিসারের অধীনে সীমিত রাখা হয়।
              </p>
            </section>

            <section>
              <h2 className="font-headline-md text-lg sm:text-xl font-serif font-bold text-[#00453d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#735c00]" />
                ৫. যোগাযোগ ও ডাটা অফিসার (Contact Our Privacy Officer)
              </h2>
              <p className="mb-2">
                গোপনীয়তা বিষয়ক যেকোনো জিজ্ঞাসা, তথ্য সংশোধন বা ডাটা অপসারণের অনুরোধের জন্য আমাদের কমপ্লায়েন্স ডেস্কে সরাসরি যোগাযোগ করতে পারেন:
              </p>
              <div className="p-4 bg-[#f8faf9] rounded-xl border border-[#dbe5e0] text-xs sm:text-sm space-y-1">
                <p><strong>স্বচ্ছ ইন্টারন্যাশনাল ট্রাভেলস (প্রধান কার্যালয়)</strong></p>
                <p>জয়তুন প্লাজা, কুড়গাঁও, নবীনগর, আশুলিয়া, সাভার, ঢাকা-১৩৪১</p>
                <p>ইমেইল: <a href="mailto:shoccho0191@gmail.com" className="text-[#00453d] underline">shoccho0191@gmail.com</a></p>
                <p>হটলাইন: <a href="tel:01312583165" className="text-[#00453d] underline">01312-583165</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
