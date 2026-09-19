"use client";

export function ContactCTA() {
  return (
    <div className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-lg py-space-lg">
        <div className="text-center max-w-xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            CONTACT CONCIERGE
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-semibold mt-1">
            কথা বলি? সরাসরি যোগাযোগের সহজ মাধ্যম
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Channel 1: Hotline */}
          <div className="p-space-lg bg-surface-container-low rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center mb-space-md shadow-sm">
                <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-bold mb-1">
                ২৪/৭ হটলাইন ও হেল্পডেস্ক
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                যেকোনো তথ্য, সিট রিজার্ভেশন ও এয়ার টিকিট সংক্রান্ত তথ্যে সরাসরি ফোন করুন।
              </p>
              <div className="space-y-1">
                <a
                  className="font-headline-md text-headline-md text-primary font-serif font-bold block hover:underline"
                  href="tel:01312583165"
                >
                  01312-583165
                </a>
                <a
                  className="font-title-lg text-title-lg text-on-surface font-semibold block hover:underline"
                  href="tel:01911583165"
                >
                  01911-583165
                </a>
              </div>
            </div>
            <div className="pt-space-md mt-space-md border-t border-outline-variant/30 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-xs">check_circle</span>
              ২৪ ঘণ্টা গ্রাহক সেবা সক্রিয়
            </div>
          </div>

          {/* Channel 2: Office Visit */}
          <div className="p-space-lg bg-surface-container-low rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-secondary flex items-center justify-center mb-space-md shadow-sm">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-bold mb-1">
                প্রধান কার্যালয় ভিজিট
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                স্বাচ্ছন্দ্যে চায়ের আমন্ত্রণে আমাদের অফিসে এসে সরাসরি কনসালট্যান্টের সাথে আলোচনা করুন।
              </p>
              <address className="not-italic font-body-md text-body-md text-on-surface font-medium leading-snug">
                জয়তুন প্লাজা, কুড়গাঁও,
                <br />
                নবীনগর, আশুলিয়া, সাভার,
                <br />
                ঢাকা-১৩৪১, বাংলাদেশ।
              </address>
            </div>
            <div className="pt-space-md mt-space-md border-t border-outline-variant/30 flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-xs text-primary">schedule</span>
              সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন খোলা)
            </div>
          </div>

          {/* Channel 3: Digital / Email */}
          <div className="p-space-lg bg-surface-container-low rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center mb-space-md shadow-sm">
                <span className="material-symbols-outlined text-2xl">mark_email_read</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary font-bold mb-1">
                ইমেইল ও কর্পোরেট কুয়েরি
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                কর্পোরেট গ্রুপ ট্যুর, কাস্টম কোটেশন এবং অফিশিয়াল ডকুমেন্ট প্রেরণের ঠিকানা।
              </p>
              <a
                className="font-title-lg text-title-lg text-primary font-serif font-bold block hover:underline"
                href="mailto:shoccho0191@gmail.com"
              >
                shoccho0191@gmail.com
              </a>
            </div>
            <div className="pt-space-md mt-space-md border-t border-outline-variant/30 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-xs">speed</span>
              দ্রুত রিপ্লাই নিশ্চিত
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

