export interface Muallim {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  /** Empty string = render monogram crest instead */
  photoUrl: string;
  /** Empty string = monogram initial to render */
  monogram: string;
  isSampleSlot: boolean;
  experienceYears: number;
  hajjCount: number;
  umrahCount: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  education: string;
  specialties: string[];
  bio: string;
  verificationLevel: "Shoccho Master Muallim" | "Ministry Certified" | "Verified Scholar" | "Pending Verification";
  upcomingBatches: { batchName: string; departureDate: string; packageId: string }[];
  reviews: { id: string; author: string; year: string; rating: number; text: string }[];
}

export const muallimsData: Muallim[] = [
  // ─── REAL PROFILE ───────────────────────────────────────────────────────────
  // হাফেজ মাওলানা মোঃ ফজল রাব্বি is the real, named founder.
  // Monogram crest used — no stock/AI photo under a named real person.
  {
    id: "muallim-1",
    name: "হাফেজ মাওলানা মোঃ ফজল রাব্বি",
    nameEn: "Hafez Mawlana Md. Fazle Rabbi",
    title: "প্রধান মোয়াল্লিম ও চেয়ারম্যান",
    photoUrl: "",
    monogram: "ফ",
    isSampleSlot: false,
    experienceYears: 14,
    hajjCount: 9,
    umrahCount: 48,
    rating: 4.98,
    reviewCount: 186,
    languages: ["বাংলা", "আরবি", "উর্দু", "ইংরেজি"],
    education: "জামিয়া শারইয়্যাহ মালিবাগ (দাওরায়ে হাদিস), উচ্চতর আরবি সাহিত্য ডিপ্লোমা",
    specialties: ["হজের মাসায়েল ও আমল", "ঐতিহাসিক জিয়ারত ইতিহাস", "প্রবীণ ও অসুস্থ হাজীদের বিশেষ যত্ন"],
    bio: "বিগত ১৪ বছর ধরে নিষ্ঠার সাথে শত শত বাংলাদেশি হাজীদের খেদমতে নিয়োজিত। সহীহ তরিকায় হজ্জ ও ওমরাহ পালনে আন্তরিক দিকনির্দেশনা প্রদান করেন।",
    verificationLevel: "Shoccho Master Muallim",
    upcomingBatches: [
      { batchName: "১৫ রমজান ভিআইপি ওমরাহ কাফেলা", departureDate: "২০ মার্চ ২০২৬", packageId: "pkg-umrah-ramadan" },
      { batchName: "হজ্জ ২০২৬ প্রিমিয়াম এক্সিকিউটিভ গ্রুপ", departureDate: "২০ মে ২০২৬", packageId: "pkg-hajj-executive" },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "হাজী মোস্তাক আহমেদ",
        year: "ওমরাহ ২০২৫",
        rating: 5,
        text: "হুজুরের সান্নিধ্যে আমাদের পুরো সফরটা অসাধারণ কেটেছে। তাওয়াফ এবং সাঈ-এর সময় প্রতিটি দোয়া অত্যন্ত সহজ ভাষায় বুঝিয়ে দিয়েছেন।",
      },
      {
        id: "rev-2",
        author: "অধ্যাপক মোঃ শহিদুল্লাহ",
        year: "হজ্জ ২০২৪",
        rating: 5,
        text: "মিনায় চরম ভিড়ের মাঝেও উনি যেভাবে আমাদের বয়স্ক সঙ্গীদের শান্ত রেখেছেন এবং পাথর নিক্ষেপের সঠিক সময় গাইড করেছেন তা প্রশংসনীয়।",
      },
    ],
  },

  // ─── SAMPLE SLOTS ───────────────────────────────────────────────────────────
  // These two profiles are placeholder slots for future verified muallims.
  // isSampleSlot: true → the UI renders a "নমুনা স্লট" badge instead of
  // a verified badge, shows no rating/reviews, and uses a monogram avatar.
  // Stock photos and fabricated Islamic credentials (Madinah University,
  // Al-Azhar) have been removed — they could misrepresent real institutions.
  {
    id: "muallim-2",
    name: "আলেম প্রোফাইল — অনবোর্ডিং প্রক্রিয়াধীন",
    nameEn: "Scholar Profile — Pending Verified Onboarding",
    title: "সিনিয়র মোয়াল্লিম (নমুনা স্লট)",
    photoUrl: "",
    monogram: "আ",
    isSampleSlot: true,
    experienceYears: 0,
    hajjCount: 0,
    umrahCount: 0,
    rating: 0,
    reviewCount: 0,
    languages: ["বাংলা", "আরবি", "ইংরেজি"],
    education: "তথ্য সংযুক্ত হবে — লঞ্চের পর যাচাইকৃত প্রোফাইল প্রদর্শিত হবে",
    specialties: ["মহিলা হাজীদের বিশেষ মাসায়েল", "মদিনা মুনাওয়ারার ঐতিহাসিক স্থানসমূহ", "ইহরামের আধুনিক সমাধান"],
    bio: "এই স্লটটি একটি নমুনা প্রোফাইল। অফিশিয়াল লঞ্চের পর সম্মতিপ্রাপ্ত ও যাচাইকৃত মোয়াল্লিমদের প্রকৃত তথ্য এখানে প্রকাশিত হবে।",
    verificationLevel: "Pending Verification",
    upcomingBatches: [
      { batchName: "শাবান ওমরাহ কাফেলা", departureDate: "২৮ ফেব্রুয়ারি ২০২৬", packageId: "pkg-umrah-deluxe" },
    ],
    reviews: [],
  },
  {
    id: "muallim-3",
    name: "আলেম প্রোফাইল — অনবোর্ডিং প্রক্রিয়াধীন",
    nameEn: "Scholar Profile — Pending Verified Onboarding",
    title: "জিয়ারত স্পেশালিস্ট ও ক্বারী (নমুনা স্লট)",
    photoUrl: "",
    monogram: "ক",
    isSampleSlot: true,
    experienceYears: 0,
    hajjCount: 0,
    umrahCount: 0,
    rating: 0,
    reviewCount: 0,
    languages: ["বাংলা", "আরবি"],
    education: "তথ্য সংযুক্ত হবে — লঞ্চের পর যাচাইকৃত প্রোফাইল প্রদর্শিত হবে",
    specialties: ["মক্কা ও তায়েফের সিরাত জার্নি", "কোরআন তেলাওয়াত ও দোয়ার মহড়া", "বদরের প্রান্তর সফর"],
    bio: "এই স্লটটি একটি নমুনা প্রোফাইল। অফিশিয়াল লঞ্চের পর সম্মতিপ্রাপ্ত ও যাচাইকৃত মোয়াল্লিমদের প্রকৃত তথ্য এখানে প্রকাশিত হবে।",
    verificationLevel: "Pending Verification",
    upcomingBatches: [
      { batchName: "রজব-শাবান কম্বো ওমরাহ", departureDate: "১২ ফেব্রুয়ারি ২০২৬", packageId: "pkg-umrah-standard" },
    ],
    reviews: [],
  },
];
