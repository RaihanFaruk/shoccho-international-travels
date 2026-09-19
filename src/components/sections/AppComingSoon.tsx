"use client";

import { useState } from "react";

export function AppComingSoon() {
  const [contact, setContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setIsSubmitted(true);
  };

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

              {/* Functional Waitlist Email/Mobile Capture */}
              <div className="max-w-lg">
                {isSubmitted ? (
                  <div className="p-4 rounded-xl bg-surface-container-lowest/15 backdrop-blur-md border border-on-primary/20 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-2xl">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-title-md text-sm font-semibold text-white">
                        ধন্যবাদ! আপনি ওয়েটলিস্টে অন্তর্ভুক্ত হয়েছেন
                      </h4>
                      <p className="text-xs text-on-primary/80 mt-0.5">
                        অ্যাপ উন্মোচনের সাথে সাথে আপনাকে সরাসরি লিংক পাঠানো হবে।
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="space-y-2.5">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <label htmlFor="app-waitlist-input" className="sr-only">
                          মোবাইল নম্বর বা ইমেইল ঠিকানা
                        </label>
                        <input
                          id="app-waitlist-input"
                          type="text"
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="আপনার মোবাইল নম্বর বা ইমেইল লিখুন"
                          aria-label="মোবাইল নম্বর বা ইমেইল ঠিকানা"
                          className="w-full px-4 py-3 bg-surface-container-lowest/10 backdrop-blur-md rounded-xl text-white placeholder-on-primary/60 border border-on-primary/20 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-3 bg-[#fed65b] hover:bg-[#ffe088] text-[#00453d] font-semibold text-sm rounded-xl shadow-md transition-all whitespace-nowrap flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span className="material-symbols-outlined text-sm">notifications_active</span>
                        <span>লঞ্চ নোটিফিকেশন পান</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-on-primary/75 pt-1">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs text-secondary-fixed">check</span>
                        <span>Android ও iOS এর জন্য প্রস্তুত হচ্ছে</span>
                      </span>
                      <span>•</span>
                      <span>কোনো স্প্যাম নয়</span>
                    </div>
                  </form>
                )}
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
