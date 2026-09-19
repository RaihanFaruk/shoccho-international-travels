"use client";

const testimonials = [
  {
    quote:
      "গত রমজানে স্বচ্ছ ট্রাভেলস-এর মাধ্যমে ওমরাহ পালন করেছি। তাদের মক্কার হোটেল হারামাইনের একেবারে কাছাকাছি ছিল এবং মোয়াল্লিম সাহেবের গাইডেন্স অতুলনীয় ছিল।",
    initial: "হাজী",
    author: "হাজী রফিকুল ইসলাম",
    info: "উত্তরা, ঢাকা • ওমরাহ কাফেলা (নমুনা পর্যালোচনা)",
  },
  {
    quote:
      "পরিবার নিয়ে মালদ্বীপ ট্যুর প্যাকেজ বুক করেছিলাম। এয়ারপোর্ট ট্রান্সফার, ওয়াটার ভিলা এবং রিসোর্টের হালাল খাবার—সবকিছুই নিখুঁত ও চমৎকার ব্যবস্থাপনায় সম্পন্ন হয়েছে।",
    initial: "সাদিয়া",
    author: "সাদিয়া আখতার ও পরিবার",
    info: "ধানমন্ডি, ঢাকা • মালদ্বীপ প্যাকেজ (নমুনা পর্যালোচনা)",
  },
  {
    quote:
      "জরুরি ব্যবসায়িক কাজে তুরস্কের ভিসা ও এয়ার টিকিট প্রয়োজন ছিল। স্বচ্ছ ট্রাভেলস মাত্র ৪ কার্যদিবসের মধ্যে সব প্রসেসিং সম্পন্ন করে দিয়েছে। সার্ভিস সততা প্রশংসনীয়।",
    initial: "মাহতাব",
    author: "ইঞ্জিনিয়ার মাহতাব উদ্দিন",
    info: "মিরপুর, ঢাকা • ভিসা ও এয়ার টিকিট (নমুনা পর্যালোচনা)",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f2fcf6] py-12 sm:py-16 border-t border-[#dbe5e0]/60" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#e0eae5] rounded-full mb-2 border border-[#bec9c5]/50">
              <span className="w-2 h-2 rounded-full bg-[#735c00]" />
              <span className="font-label-sm text-xs text-[#735c00] font-bold tracking-wider uppercase">
                DEMO PREVIEW &bull; ফেজ-১ নমুনা পর্যালোচনা
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#00453d] font-serif font-bold mt-1">
              যাত্রীদের আস্থার প্রতিচ্ছবি
            </h2>
          </div>
          <span className="font-label-sm text-xs sm:text-sm text-[#3f4946]">
            (প্রাথমিক ডেমো প্রিভিউ • অফিশিয়াল লঞ্চের পর যাচাইকৃত সম্মানিত গ্রাহক রিভিউ প্রকাশিত হবে)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#ffffff] rounded-xl shadow-sm border border-[#dbe5e0]/80 flex flex-col justify-between hover:shadow-md transition-all relative group"
            >
              <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#ecf6f1] text-[#735c00] text-[10px] font-semibold rounded border border-[#dbe5e0]/60">
                ডেমো
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#735c00] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-sm text-[#3f4946] mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#e6f0eb]">
                <div className="w-10 h-10 rounded-full bg-[#e0eae5] flex items-center justify-center text-[#00453d] font-bold text-xs shrink-0">
                  {t.initial}
                </div>
                <div>
                  <span className="font-title-lg text-sm text-[#141d1a] font-semibold block leading-tight">
                    {t.author}
                  </span>
                  <span className="font-label-sm text-[11px] text-[#3f4946]">
                    {t.info}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

