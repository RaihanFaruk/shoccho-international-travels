"use client";

const trustPillars = [
  {
    icon: "verified",
    title: "সরকারি অনুমোদন",
    desc: "হজ ও ওমরাহ বিষয়ক মন্ত্রণালয় কর্তৃক সরকার-অনুমোদিত নিবন্ধিত প্রতিষ্ঠান।",
    isPrimary: false,
  },
  {
    icon: "payments",
    title: "শতভাগ স্বচ্ছ হিসাব",
    desc: "কোনো লুকায়িত খরচ বা অতিরিক্ত ফি ছাড়া পূর্ণ স্বচ্ছ ভাউচারিং।",
    isPrimary: true,
  },
  {
    icon: "support_agent",
    title: "ব্যক্তিগত কনসালট্যান্ট",
    desc: "আপনার প্রতি প্যাকেজে ডেডিকেটেড এক্সিকিউটিভ গাইডেন্স ও ফলো-আপ।",
    isPrimary: false,
  },
  {
    icon: "airline_seat_recline_extra",
    title: "অনুমোদিত এয়ার পার্টনার",
    desc: "সাউদিয়া ও বিমান বাংলাদেশ এয়ারলাইন্সের অফিশিয়াল ডিলিং ডেস্ক।",
    isPrimary: true,
  },
  {
    icon: "schedule",
    title: "২৪/৭ ইমার্জেন্সি ডেস্ক",
    desc: "ভ্রমণ চলাকালীন যেকোনো জরুরি প্রয়োজনে তাৎক্ষণিক সাপোর্ট ব্যবস্থা।",
    isPrimary: false,
  },
];

export function WhyShoccho() {
  return (
    <section className="w-full bg-[#ffffff] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="why-shoccho">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#735c00] font-bold block">
            PILLARS OF REPUTATION
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#00453d] font-serif font-semibold mt-1">
            আমাদের আস্থার ৫টি শক্ত ভিত্তি
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustPillars.map((p) => (
            <div
              key={p.title}
              className="p-5 bg-[#ecf6f1] rounded-xl text-center flex flex-col items-center border border-[#dbe5e0]/60 hover:shadow-md transition-all"
            >
              <div
                className={`w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center mb-3 shadow-sm ${
                  p.isPrimary ? "text-[#00453d]" : "text-[#735c00]"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{p.icon}</span>
              </div>
              <h3 className="font-title-lg text-base text-[#00453d] font-semibold mb-1">
                {p.title}
              </h3>
              <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
