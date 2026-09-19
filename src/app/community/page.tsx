"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import {
  travelStoriesData,
  travelMomentsData,
  communityQAData,
  TravelStory,
  TravelMoment,
} from "@/data/community";

export default function CommunityPage() {
  const [tab, setTab] = useState<"stories" | "moments" | "qa">("stories");
  const [stories, setStories] = useState(travelStoriesData);
  const [moments, setMoments] = useState(travelMomentsData);
  const [selectedStory, setSelectedStory] = useState<TravelStory | null>(null);

  // New moment creation form state
  const [newMomentText, setNewMomentText] = useState("");
  const [newMomentLocation, setNewMomentLocation] = useState("মসজিদে নববী, মদিনা");

  const handleHelpfulStory = (id: string) => {
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, helpfulCount: s.helpfulCount + 1 } : s))
    );
  };

  const handleHelpfulMoment = (id: string) => {
    setMoments((prev) =>
      prev.map((m) => (m.id === id ? { ...m, helpfulCount: m.helpfulCount + 1 } : m))
    );
  };

  const handleCreateMoment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMomentText.trim()) return;

    const newMoment: TravelMoment = {
      id: `moment-${Date.now()}`,
      author: "তানভীর আহমেদ (আপনি)",
      location: newMomentLocation,
      timeAgo: "এইমাত্র",
      text: newMomentText,
      helpfulCount: 0,
      verifiedTraveler: true,
    };

    setMoments([newMoment, ...moments]);
    setNewMomentText("");
  };

  return (
    <div className="min-h-screen bg-[#f2fcf6] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1 bg-[#ffffff] text-[#735c00] border border-[#dbe5e0] font-label-sm text-xs rounded-full font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
              যাত্রীদের অভিজ্ঞতা ও জ্ঞান আদান-প্রদান
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#00453d] font-serif font-bold tracking-tight">
              স্বচ্ছ ট্রাভেলার্স কমিউনিটি
            </h1>
            <p className="font-body-md text-sm sm:text-base text-[#3f4946] mt-3 leading-relaxed">
              তীর্থযাত্রী ও পর্যটকদের বাস্তব ভ্রমণের স্মৃতি, নির্ভরযোগ্য ফিল্ড টিপস এবং বিজ্ঞ আলেমদের যাচাইকৃত প্রশ্নোত্তর।
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {(
              [
                { id: "stories", label: "📖 ভ্রমণ কাহিনি ও অভিজ্ঞতা", icon: "auto_stories" },
                { id: "moments", label: "⚡ লাইভ ট্রাভেল মোমেন্টস", icon: "forum" },
                { id: "qa", label: "❓ ট্রাভেল প্রশ্নোত্তর (Q&A)", icon: "quiz" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  tab === item.id
                    ? "bg-[#00453d] text-white shadow-md"
                    : "bg-white text-[#3f4946] hover:bg-[#ecf6f1] border border-[#dbe5e0]"
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* TAB 1: TRAVEL STORIES */}
          {tab === "stories" && (
            <div className="space-y-8 max-w-5xl mx-auto">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#dbe5e0] grid grid-cols-1 md:grid-cols-12 group hover:shadow-md transition-all"
                >
                  <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white font-label-sm text-xs rounded-full">
                      {story.destination}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#fed65b]">
                          <Image
                            src={story.authorAvatar}
                            alt={story.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="font-title-sm text-xs font-bold text-[#141d1a] block">
                            {story.author}
                          </span>
                          <span className="font-label-sm text-[10px] text-[#735c00] font-semibold">
                            {story.authorRole} • {story.date}
                          </span>
                        </div>
                      </div>

                      <h2 className="font-headline-sm text-xl font-bold font-serif text-[#00453d] leading-snug">
                        {story.title}
                      </h2>
                      <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#dbe5e0] flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-xs text-[#3f4946]">
                        <button
                          onClick={() => handleHelpfulStory(story.id)}
                          className="flex items-center gap-1 hover:text-[#00453d] font-semibold transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm text-[#735c00]">thumb_up</span>
                          <span>{story.helpfulCount} জন সহমত</span>
                        </button>
                        <span>{story.readTime}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedStory(story)}
                        className="px-4 py-2 bg-[#00453d] hover:bg-[#075e54] text-white text-xs font-semibold rounded-lg transition-colors"
                      >
                        সম্পূর্ণ পড়ুন ➔
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* TAB 2: LIVE TRAVEL MOMENTS */}
          {tab === "moments" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Share a moment box */}
              <form onSubmit={handleCreateMoment} className="bg-white p-5 rounded-2xl shadow-sm border border-[#dbe5e0] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-title-sm text-xs font-bold text-[#00453d]">
                    গ্রাউন্ড ট্রাভেল মোমেন্ট শেয়ার করুন
                  </span>
                  <select
                    value={newMomentLocation}
                    onChange={(e) => setNewMomentLocation(e.target.value)}
                    className="text-xs p-1.5 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg"
                  >
                    <option>মসজিদে নববী, মদিনা</option>
                    <option>হারাম শরীফ, মক্কা</option>
                    <option>জেদ্দা এয়ারপোর্ট</option>
                    <option>দুবাই ডাউনটাউন</option>
                  </select>
                </div>
                <textarea
                  rows={2}
                  required
                  value={newMomentText}
                  onChange={(e) => setNewMomentText(e.target.value)}
                  placeholder="আপনার বর্তমান অবস্থানের অভিজ্ঞতা, আবহাওয়া বা প্রয়োজনীয় টিপস শেয়ার করুন..."
                  className="w-full p-3 bg-[#f2fcf6] border border-[#dbe5e0] rounded-xl text-xs text-[#141d1a] focus:outline-none focus:ring-1 focus:ring-[#00453d]"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-[#735c00] font-semibold">
                    ✓ স্বচ্ছ ভেরিফাইড ট্রাভেলার হিসেবে পোস্ট হচ্ছে
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#00453d] hover:bg-[#075e54] text-white text-xs font-semibold rounded-lg shadow-sm"
                  >
                    পোস্ট করুন
                  </button>
                </div>
              </form>

              {/* Moments List */}
              <div className="space-y-4">
                {moments.map((m) => (
                  <div key={m.id} className="bg-white p-5 rounded-2xl shadow-sm border border-[#dbe5e0] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#00453d]">verified_user</span>
                        <strong className="text-xs text-[#141d1a]">{m.author}</strong>
                        <span className="text-[10px] px-2 py-0.5 bg-[#ecf6f1] text-[#00453d] rounded-full font-semibold">
                          {m.location}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#3f4946]">{m.timeAgo}</span>
                    </div>

                    <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed">
                      {m.text}
                    </p>

                    <div className="pt-2 border-t border-[#dbe5e0]/60 flex items-center justify-between text-xs text-[#3f4946]">
                      <button
                        type="button"
                        onClick={() => handleHelpfulMoment(m.id)}
                        className="flex items-center gap-1 hover:text-[#00453d] font-semibold"
                      >
                        <span className="material-symbols-outlined text-sm text-[#735c00]">thumb_up</span>
                        <span>{m.helpfulCount} জন তথ্যটি সহায়ক মনে করেছেন</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Q&A HUB */}
          {tab === "qa" && (
            <div className="max-w-3xl mx-auto space-y-5">
              <div className="p-4 bg-[#ecf6f1] rounded-2xl border border-[#dbe5e0] text-xs text-[#3f4946] flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl text-[#00453d]">verified</span>
                <div>
                  <strong className="text-[#00453d] block">স্বচ্ছ প্রাতিষ্ঠানিক ফতোয়া ও পরামর্শ গ্যারান্টি:</strong>
                  সকল ধর্মীয় প্রশ্নের উত্তর আমাদের প্রধান মোয়াল্লিম ও ফিকহ গবেষকদের দ্বারা যাচাইকৃত।
                </div>
              </div>

              {communityQAData.map((qa) => (
                <div key={qa.id} className="bg-white p-6 rounded-2xl shadow-sm border border-[#dbe5e0] space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#3f4946] mb-1">
                      <span className="px-2.5 py-0.5 bg-[#f2fcf6] text-[#735c00] rounded font-semibold border border-[#dbe5e0]">
                        #{qa.category}
                      </span>
                      <span>{qa.timeAgo} • {qa.askedBy}</span>
                    </div>
                    <h3 className="font-title-md text-sm sm:text-base font-bold text-[#141d1a]">
                      {qa.question}
                    </h3>
                  </div>

                  {qa.answer && (
                    <div className="p-4 bg-[#f2fcf6] rounded-xl border-l-4 border-[#00453d] space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#00453d]">check_circle</span>
                        <strong className="text-xs text-[#00453d]">{qa.answer.answeredBy}</strong>
                        <span className="text-[10px] px-2 py-0.5 bg-[#00453d] text-white rounded font-semibold">
                          {qa.answer.role}
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-[#3f4946] leading-relaxed">
                        {qa.answer.text}
                      </p>
                      <div className="text-[11px] text-[#735c00] font-semibold pt-1">
                        ✓ {qa.answer.upvotes} জন হজযাত্রী এই সমাধানটিকে গ্রহণ করেছেন
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Full Story Modal */}
          {selectedStory && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141d1a]/80 backdrop-blur-sm animate-in fade-in duration-200">
              <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#dbe5e0] overflow-hidden flex flex-col max-h-[92vh]">
                <div className="px-6 py-4 bg-[#00453d] text-white flex items-center justify-between shrink-0">
                  <span className="font-title-md text-sm font-bold font-serif">
                    ভ্রমণ কাহিনি
                  </span>
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-[#141d1a]">
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-serif font-bold text-[#00453d]">
                    {selectedStory.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs text-[#735c00]">
                    <span>লেখক: {selectedStory.author} ({selectedStory.authorRole})</span>
                    <span>•</span>
                    <span>{selectedStory.date}</span>
                  </div>

                  <div className="relative h-64 rounded-2xl overflow-hidden border border-[#dbe5e0]">
                    <Image
                      src={selectedStory.coverImage}
                      alt={selectedStory.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3 font-body-md text-sm text-[#3f4946] leading-relaxed">
                    {selectedStory.content.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {selectedStory.packageRef && (
                    <div className="p-4 bg-[#ecf6f1] rounded-2xl border border-[#dbe5e0] flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-[#3f4946] block">সম্পর্কিত প্যাকেজ</span>
                        <strong className="text-sm text-[#00453d]">{selectedStory.packageRef.name}</strong>
                      </div>
                      <Link
                        href="/packages"
                        onClick={() => setSelectedStory(null)}
                        className="px-4 py-2 bg-[#00453d] text-white text-xs font-semibold rounded-lg"
                      >
                        প্যাকেজ দেখুন ➔
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
