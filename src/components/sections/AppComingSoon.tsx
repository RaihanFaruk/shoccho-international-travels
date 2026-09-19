"use client";

export function AppComingSoon() {
  return (
    <div className="w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter-lg pt-margin pb-space-lg">
        {/* Mobile App Banner */}
        <div className="bg-primary rounded-2xl p-space-lg md:p-space-xl text-on-primary overflow-hidden relative shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-container rounded-full mb-space-sm">
                <span className="material-symbols-outlined text-secondary text-sm">phone_iphone</span>
                <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold tracking-widest">
                  শীঘ্রই আসছে • COMING SOON
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-serif font-bold mb-space-sm leading-tight">
                আপনার আঙুলের ডগায় সম্পূর্ণ ভ্রমণ ব্যবস্থাপনা
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-space-lg leading-relaxed">
                স্বচ্ছ ট্রাভেলস মোবাইল অ্যাপের মাধ্যমে রিয়েল-টাইম ফ্লাইট ট্র্যাকিং, ওমরাহ তাওয়াফ ও সাঈ ট্র্যাকার, ই-পাসপোর্ট স্ট্যাটাস এবং জরুরি মোয়াল্লিম ডিরেক্টরি সাপোর্ট পাওয়া যাবে এক প্ল্যাটফর্মে।
              </p>
              <div className="flex flex-wrap items-center gap-space-md">
                <div className="px-space-md py-2.5 bg-surface-container-lowest/10 backdrop-blur-md rounded-xl flex items-center gap-space-sm border border-on-primary/10">
                  <span className="material-symbols-outlined text-2xl">install_mobile</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-primary/70 uppercase">Available on</span>
                    <span className="font-title-lg text-title-lg font-semibold">Google Play</span>
                  </div>
                </div>
                <div className="px-space-md py-2.5 bg-surface-container-lowest/10 backdrop-blur-md rounded-xl flex items-center gap-space-sm border border-on-primary/10">
                  <span className="material-symbols-outlined text-2xl">file_download</span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-primary/70 uppercase">Download on</span>
                    <span className="font-title-lg text-title-lg font-semibold">App Store</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-64 h-80 bg-surface-container-lowest/10 rounded-2xl p-4 backdrop-blur-lg flex flex-col justify-between shadow-2xl border border-on-primary/20">
                <div className="flex items-center justify-between pb-2 border-b border-on-primary/20">
                  <span className="font-label-sm text-label-sm text-secondary-fixed font-bold">SHOCCHO APP</span>
                  <span className="material-symbols-outlined text-sm">wifi</span>
                </div>
                <div className="space-y-2 py-4 font-sans">
                  <div className="p-2.5 bg-primary-container rounded-lg text-xs flex items-center gap-2">
                    <span className="text-base">🕋</span>
                    <span>মক্কা রিয়েল-টাইম প্রেয়ার কাউন্টডাউন</span>
                  </div>
                  <div className="p-2.5 bg-primary-container rounded-lg text-xs flex items-center gap-2">
                    <span className="text-base">✈️</span>
                    <span>ঢাকা - জেদ্দা ফ্লাইট পিএনআর কনফার্মড</span>
                  </div>
                  <div className="p-2.5 bg-primary-container rounded-lg text-xs flex items-center gap-2">
                    <span className="text-base">📄</span>
                    <span>ওমরাহ ই-ভিসা ডাউনলোডে প্রস্তুত</span>
                  </div>
                </div>
                <span className="text-center font-label-sm text-label-sm text-on-primary/70">
                  স্বচ্ছ ট্রাভেলস স্মার্ট পোর্টাল
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

