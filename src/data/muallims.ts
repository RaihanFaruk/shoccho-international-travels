export interface Muallim {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  photoUrl: string;
  experienceYears: number;
  hajjCount: number;
  umrahCount: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  education: string;
  specialties: string[];
  bio: string;
  verificationLevel: "Shoccho Master Muallim" | "Ministry Certified" | "Verified Scholar";
  upcomingBatches: { batchName: string; departureDate: string; packageId: string }[];
  reviews: { id: string; author: string; year: string; rating: number; text: string }[];
}

export const muallimsData: Muallim[] = [
  {
    id: "muallim-1",
    name: "হাফেজ মাওলানা মোঃ ফজল রাব্বি",
    nameEn: "Hafez Mawlana Md. Fazle Rabbi",
    title: "প্রধান মোয়াল্লিম ও চেয়ারম্যান",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
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
      { batchName: "হজ্জ ২০২৬ প্রিমিয়াম এক্সিকিউটিভ গ্রুপ", departureDate: "২০ মে ২০২৬", packageId: "pkg-hajj-executive" },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "হাজী মোস্তাক আহমেদ",
        year: "ওমরাহ ২০২৫",
        rating: 5,
        text: "হুজুরের সান্নিধ্যে আমাদের পুরো সফরটা অসাধারণ কেটেছে। তাওয়াফ এবং সাঈ-এর সময় প্রতিটি দোয়া অত্যন্ত সহজ ভাষায় বুঝিয়ে দিয়েছেন।",
      },
      {
        id: "rev-2",
        author: "অধ্যাপক মোঃ শহিদুল্লাহ",
        year: "হজ্জ ২০২৪",
        rating: 5,
        text: "মিনায় চরম ভিড়ের মাঝেও উনি যেভাবে আমাদের বয়স্ক সঙ্গীদের শান্ত রেখেছেন এবং পাথর নিক্ষেপের সঠিক সময় গাইড করেছেন তা প্রশংসনীয়।",
      },
    ],
  },
  {
    id: "muallim-2",
    name: "মুফতি আব্দুল্লাহ আল-মাহমুদ",
    nameEn: "Mufti Abdullah Al-Mahmud",
    title: "সিনিয়র মোয়াল্লিম ও ফিকহ গবেষক",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experienceYears: 10,
    hajjCount: 6,
    umrahCount: 32,
    rating: 4.94,
    reviewCount: 124,
    languages: ["বাংলা", "আরবি", "ইংরেজি"],
    education: "মদিনা ইসলামিক বিশ্ববিদ্যালয় (বিএ অনার্স ইন হাদিস স্টাডিজ), দারুল উলুম হাটহাজারী (ইফতা)",
    specialties: ["মহিলা হাজীদের বিশেষ মাসায়েল", "মদিনা মুনাওয়ারার ঐতিহাসিক স্থানসমূহ", "ইহরামের আধুনিক সমাধান"],
    bio: "মদিনা ইসলামিক বিশ্ববিদ্যালয় থেকে শিক্ষাপ্রাপ্ত মুফতি আব্দুল্লাহ সমসাময়িক ফিকহি প্রশ্নের নিখুঁত সমাধানে অত্যন্ত পারদর্শী।",
    verificationLevel: "Ministry Certified",
    upcomingBatches: [
      { batchName: "শাবান ওমরাহ কাফেলা", departureDate: "২৮ ফেব্রুয়ারি ২০২৬", packageId: "pkg-umrah-deluxe" },
      { batchName: "পোস্ট-ঈদ ওমরাহ রিট্রিট", departureDate: "১৫ এপ্রিল ২০২৬", packageId: "pkg-umrah-budget" },
    ],
    reviews: [
      {
        id: "rev-3",
        author: "ফারহানা সুলতানা",
        year: "ওমরাহ ২০২৫",
        rating: 5,
        text: "মহিলাদের জন্য ইহরাম ও রওজা শরীফ জেয়ারতের নিয়মাবলী খুব সুন্দর ও সাবলীলভাবে বুঝিয়ে দিয়েছিলেন মুফতি সাহেব।",
      },
    ],
  },
  {
    id: "muallim-3",
    name: "মাওলানা ক্বারী নুরুল ইসলাম",
    nameEn: "Mawlana Qari Nurul Islam",
    title: "জিয়ারত স্পেশালিস্ট ও ক্বারী",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    experienceYears: 8,
    hajjCount: 4,
    umrahCount: 22,
    rating: 4.89,
    reviewCount: 95,
    languages: ["বাংলা", "আরবি"],
    education: "আল-আজহার বিশ্ববিদ্যালয় ট্রেনিং কোর্স সম্পন্ন, জামিয়া কুরআনিয়া লালবাগ",
    specialties: ["মক্কা ও তায়েফের সিরাত জার্নি", "কোরআন তেলাওয়াত ও দোয়ার মহড়া", "বদরের প্রান্তর সফর"],
    bio: "মক্কা ও মদিনার প্রতিটি ঐতিহাসিক অলিতে-গলিতে রাসুলুল্লাহ (সাঃ) এর স্মৃতি বিজড়িত স্থানগুলোর সচিত্র ইতিহাস বয়ানে তিনি অতুলনীয়।",
    verificationLevel: "Verified Scholar",
    upcomingBatches: [
      { batchName: "রজব-শাবান কম্বো ওমরাহ", departureDate: "১২ ফেব্রুয়ারি ২০২৬", packageId: "pkg-umrah-standard" },
    ],
    reviews: [
      {
        id: "rev-4",
        author: "ডাঃ রফিকুল হাসান",
        year: "ওমরাহ ২০২৪",
        rating: 5,
        text: "তায়েফের ঐতিহাসিক স্থানে হুজুরের বয়ান শুনে চোখে পানি ধরে রাখা যায়নি। অত্যন্ত আবেগময় ও শিক্ষণীয় সফর ছিল।",
      },
    ],
  },
];
