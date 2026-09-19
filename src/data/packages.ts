export interface DepartureDate {
  id: string;
  date: string;
  seatsTotal: number;
  seatsLeft: number;
  status: "available" | "fast_filling" | "sold_out";
  quadPrice: number;
  triplePrice: number;
  doublePrice: number;
}

export interface TourPackage {
  id: string;
  title: string;
  titleBn?: string;
  destination: string;
  destinationBn?: string;
  category: "umrah" | "hajj" | "international" | "domestic";
  durationDays: number;
  durationNights: number;
  price: number;
  priceBn?: string;
  currency: string;
  badge?: string;
  imageUrl: string;
  galleryUrls?: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  hotelMakkah?: string;
  hotelMadinah?: string;
  distanceToHaramMakkah?: string;
  distanceToHaramMadinah?: string;
  departures?: DepartureDate[];
  itinerary?: { day: number; title: string; description: string }[];
  assignedMuallimId?: string;
}

export const packagesData: TourPackage[] = [
  {
    id: "pkg-umrah-flagship",
    title: "14-Day Al-Aqsa & Umrah Flagship Kafela",
    titleBn: "১৪ দিনের আল-আকসা ও ওমরাহ ফ্ল্যাগশিপ কাফেলা",
    destination: "Makkah & Madinah, Saudi Arabia",
    destinationBn: "মক্কা ও মদিনা, সৌদি আরব",
    category: "umrah",
    durationDays: 14,
    durationNights: 13,
    price: 175000,
    priceBn: "৳ ১,৭৫,০০০",
    currency: "BDT",
    badge: "ফ্ল্যাগশিপ কাফেলা",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    ],
    overview: "পবিত্র কাবা প্রাঙ্গণে ৫-স্টার ক্লক টাওয়ার হোটেলের আরামদায়ক আবাসন, সার্বক্ষণিক অভিজ্ঞ মোয়াল্লিমের সান্নিধ্য এবং সম্পূর্ণ স্বচ্ছ ব্যয়ের নিশ্চয়তা নিয়ে আমাদের ফ্ল্যাগশিপ ওমরাহ প্যাকেজ।",
    highlights: [
      "মক্কা ক্লক টাওয়ারে প্রিমিয়াম ৫-স্টার হোটেল (হারাম থেকে মাত্র ৫০ মিটার)",
      "মদিনা মুনাওয়ারায় মারকাজিয়া এলাকার লাক্সারি হোটেল (মাত্র ২ মিনিট হাঁটা দূরত্ব)",
      "প্রধান মোয়াল্লিম হাফেজ মাওলানা মোঃ ফজল রাব্বির সার্বক্ষণিক তত্ত্বাবধান",
      "সাউদিয়া এয়ারলাইন্স অথবা বাংলাদেশ বিমানের সরাসরি ফ্লাইট ও স্পেশাল ৪৬ কেজি লাগেজ",
      "মক্কা ও মদিনার সকল ঐতিহাসিক স্থানে অভিজ্ঞ গাইডসহ শীতাতপ নিয়ন্ত্রিত ভিআইপি বাস সফর",
    ],
    inclusions: [
      "রিটার্ন কনফার্মড ডাইরেক্ট ফ্লাইট টিকিট (ঢাকা-জেদ্দা-মদিনা-ঢাকা)",
      "১ বছর মেয়াদী মাল্টিপল এন্ট্রি সৌদি ওমরাহ ই-ভিসা ও হেলথ ইন্স্যুরেন্স",
      "মক্কা ও মদিনায় নির্ধারিত ৫-স্টার হোটেলের লাক্সারি রুম শেয়ারিং",
      "তিন বেলা উন্নতমানের পুষ্টিকর হালাল দেশীয় বুফে খাবার",
      "জেদ্দা-মক্কা-মদিনা ইন্টারসিটি ভিআইপি কোস্টার ট্রান্সপোর্ট",
      "তাওয়াফ ও সাঈ-এর সার্বক্ষণিক নির্দেশিকা এবং কমপ্লিমেন্টারি ওমরাহ কিট ও জমজম পানি",
    ],
    exclusions: [
      "ব্যক্তিগত কেনাকাটা ও লন্ড্রি খরচ",
      "হোটেল রুম সার্ভিস অতিরিক্ত অর্ডার",
    ],
    featured: true,
    rating: 4.98,
    reviewCount: 164,
    hotelMakkah: "Makkah Clock Royal Tower, A Fairmont Hotel",
    hotelMadinah: "Dar Al Taqwa Hotel Madinah",
    distanceToHaramMakkah: "৫০ মিটার (জিরো ডিস্টেন্স)",
    distanceToHaramMadinah: "১০০ মিটার (২ মিনিট হাঁটা)",
    assignedMuallimId: "muallim-1",
    departures: [
      { id: "dep-1", date: "১৫ ফেব্রুয়ারি ২০২৬", seatsTotal: 40, seatsLeft: 8, status: "fast_filling", quadPrice: 175000, triplePrice: 195000, doublePrice: 220000 },
      { id: "dep-2", date: "২৮ ফেব্রুয়ারি ২০২৬", seatsTotal: 40, seatsLeft: 14, status: "available", quadPrice: 175000, triplePrice: 195000, doublePrice: 220000 },
      { id: "dep-3", date: "১৫ মার্চ ২০২৬ (রমজান স্পেশাল)", seatsTotal: 45, seatsLeft: 4, status: "fast_filling", quadPrice: 215000, triplePrice: 235000, doublePrice: 265000 },
    ],
    itinerary: [
      { day: 1, title: "ঢাকা থেকে জেদ্দা ও মক্কা শরিফে আগমন", description: "শাহজালাল বিমানবন্দর থেকে রওয়ানা হয়ে জেদ্দা বিমানবন্দরে অবতরণ। বিশেষ ট্রান্সপোর্টে মক্কার হোটেলে চেক-ইন এবং রাতেই মোয়াল্লিমের নেতৃত্বে প্রথম ওমরাহ সম্পন্ন।" },
      { day: 2, title: "হারাম শরিফে ইবাদত ও নফল তাওয়াফ", description: "হারাম প্রাঙ্গণে দিনব্যাপী পাঁচ ওয়াক্ত নামাজ, নফল তাওয়াফ ও মোয়াল্লিমের সাথে প্রশ্নোত্তর পর্ব।" },
      { day: 3, title: "মক্কার ঐতিহাসিক স্থান জিয়ারত", description: "জাবালে নুর (হেরা গুহা), জাবালে সাওর, মিনা, মুজদালিফা ও আরাফাতের ময়দান পরিদর্শন।" },
      { day: 7, title: "মদিনা মুনাওয়ারার উদ্দেশ্যে যাত্রা", description: "হারামাইন হাই স্পিড বুলেট ট্রেনে মদিনা আগমন এবং মসজিদে নববীর সন্নিকটে হোটেলে চেক-ইন।" },
      { day: 8, title: "মসজিদে নববীতে নামাজ ও রওজা শরিফ জেয়ারত", description: "রাসুলুল্লাহ (সাঃ) এর পবিত্র রওজা মোবারক সালাম পেশ ও রিয়াজুল জান্নাহে ইবাদত।" },
      { day: 14, title: "দেশে প্রত্যাবর্তন", description: "মদিনা বিমানবন্দর থেকে সরাসরি ফ্লাইটে ঢাকায় নিরাপদ প্রত্যাবর্তন।" },
    ],
  },
  {
    id: "pkg-umrah-ramadan",
    title: "Ramadan VIP Umrah 2026 (Last 15 Days)",
    titleBn: "রমজানুল মোবারক শেষ ১৫ দিন ভিআইপি ওমরাহ কাফেলা",
    destination: "Makkah & Madinah, Saudi Arabia",
    destinationBn: "মক্কা ও মদিনা, সৌদি আরব",
    category: "umrah",
    durationDays: 16,
    durationNights: 15,
    price: 215000,
    priceBn: "৳ ২,১৫,০০০",
    currency: "BDT",
    badge: "রমজান স্পেশাল",
    imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80",
    overview: "লাইলাতুল কদরের পুণ্যময় রজনী ও পবিত্র ঈদুল ফিতরের দিনগুলোতে কাবা ও মসজিদে নববীর পবিত্র সান্নিধ্যে কাটানোর সুবর্ণ সুযোগ।",
    highlights: [
      "মক্কায় শবে কদর ও খতমে কোরআন তারাবিহতে অংশগ্রহণ",
      "মদিনা মুনাওয়ারায় ঈদের জামাত আদায়ের দুর্লভ সৌভাগ্য",
      "৫-স্টার মারকাজিয়া হোটেল সুবিধা ও প্রতিদিনের সাহরি-ইফতার আয়োজন",
    ],
    inclusions: [
      "ডাইরেক্ট এয়ার টিকিট",
      "রমজান ওমরাহ ভিসা ও ইন্স্যুরেন্স",
      "সাহরি ও ইফতার বুফে",
      "অভিজ্ঞ মোয়াল্লিম গাইড",
    ],
    exclusions: ["ব্যক্তিগত খরচ"],
    featured: true,
    rating: 4.99,
    reviewCount: 98,
    hotelMakkah: "Swissôtel Al Maqam Makkah",
    hotelMadinah: "Pullman Zamzam Madina",
    distanceToHaramMakkah: "৫০ মিটার",
    distanceToHaramMadinah: "১৫০ মিটার",
    assignedMuallimId: "muallim-1",
    departures: [
      { id: "dep-ramadan-1", date: "২০ মার্চ ২০২৬", seatsTotal: 40, seatsLeft: 5, status: "fast_filling", quadPrice: 215000, triplePrice: 245000, doublePrice: 285000 },
    ],
  },
  {
    id: "pkg-hajj-executive",
    title: "Hajj 2026 Executive Luxury Kafela",
    titleBn: "হজ্জ ২০২৬ ভিআইপি এক্সিকিউটিভ প্রিমিয়াম প্যাকেজ",
    destination: "Makkah, Madinah, Mina, Saudi Arabia",
    destinationBn: "মক্কা, মদিনা ও মিনা, সৌদি আরব",
    category: "hajj",
    durationDays: 25,
    durationNights: 24,
    price: 685000,
    priceBn: "৳ ৬,৮৫,০০০",
    currency: "BDT",
    badge: "হজ্জ ২০২৬ প্রিমিয়াম",
    imageUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    overview: "সরকারি লাইসেন্সপ্রাপ্ত স্বচ্ছ ট্রাভেলসের তত্ত্বাবধানে মিনায় জোন-১ এসির তাঁবু, ক্লক টাওয়ার হোটেল এবং উচ্চমানের সার্বক্ষণিক সেবাসহ হজের নির্ভরযোগ্য আয়োজন।",
    highlights: [
      "মিনায় জোন-১ ভিআইপি জিপসাম তাঁবু (জামারাতের সবচেয়ে কাছে)",
      "মক্কায় ৫-স্টার ক্লক টাওয়ার হোটেল ও মদিনায় কেন্দ্রীয় মারকাজিয়া হোটেল",
      "আরাফাত ও মুজদালিফায় ব্যক্তিগত খাবার ও কমফোর্ট লজিস্টিকস",
    ],
    inclusions: [
      "হজের বিমান টিকিট",
      "হজ ভিসা ও মোয়াল্লিম ফি",
      "মিনা-আরাফাত সকল গ্রাউন্ড লজিস্টিকস",
      "৩ বেলা দেশীয় সুস্বাদু খাবার",
      "কুরবানি ও জমজম পানি",
    ],
    exclusions: ["অতিরিক্ত ব্যক্তিগত খরচ"],
    featured: true,
    rating: 5.0,
    reviewCount: 76,
    hotelMakkah: "Fairmont Clock Tower",
    hotelMadinah: "Dar Al Taqwa",
    distanceToHaramMakkah: "জিরো ডিস্টেন্স",
    distanceToHaramMadinah: "১০০ মিটার",
    assignedMuallimId: "muallim-1",
    departures: [
      { id: "dep-hajj-1", date: "২০ মে ২০২৬", seatsTotal: 50, seatsLeft: 12, status: "fast_filling", quadPrice: 685000, triplePrice: 745000, doublePrice: 825000 },
    ],
  },
  {
    id: "pkg-turkey-cruise",
    title: "Historic Turkey, Bosphorus Cruise & Cappadocia",
    titleBn: "তুরস্কের ঐতিহাসিক ইস্তাম্বুল, বসফরাস ক্রুজ ও ক্যাপাডোসিয়া",
    destination: "Turkey",
    destinationBn: "ইস্তাম্বুল ও ক্যাপাডোসিয়া, তুরস্ক",
    category: "international",
    durationDays: 8,
    durationNights: 7,
    price: 135000,
    priceBn: "৳ ১,৩৫,০০০",
    currency: "BDT",
    badge: "হনিমুুন ও ফ্যামিলি স্পেশাল",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    overview: "উসমানীয় সাম্রাজ্যের রাজকীয় স্থাপত্য, ইস্তাম্বুলের প্রাইভেট বসফরাস ক্রুজ ও ক্যাপাডোসিয়ার আকাশে হট এয়ার বেলুনের রোমাঞ্চকর ভ্রমণ।",
    highlights: [
      "ক্যাপাডোসিয়া হট এয়ার বেলুন ফ্লাইট দেখার অভিজ্ঞতা",
      "প্রাইভেট বসফরাস সানসেট ইয়ট ক্রুজ",
      "হায়া সোফিয়া ও তোপকাপি সুলতানি প্রাসাদ দর্শন",
    ],
    inclusions: [
      "ইন্টারন্যাশনাল ও ডমেস্টিক ফ্লাইট",
      "৪ ও ৫-স্টার বুটিক কেভ রিসোর্ট",
      "প্রতিদিনের বুফে ব্রেকফাস্ট",
      "অভিজ্ঞ ইংরেজি/বাংলাভাষী গাইড",
    ],
    exclusions: ["তুরস্ক ভিসা ফি", "ব্যক্তিগত খাবার"],
    featured: true,
    rating: 4.96,
    reviewCount: 89,
    departures: [
      { id: "dep-turkey-1", date: "১০ মার্চ ২০২৬", seatsTotal: 25, seatsLeft: 7, status: "available", quadPrice: 135000, triplePrice: 145000, doublePrice: 160000 },
      { id: "dep-turkey-2", date: "২৫ এপ্রিল ২০২৬", seatsTotal: 25, seatsLeft: 15, status: "available", quadPrice: 135000, triplePrice: 145000, doublePrice: 160000 },
    ],
  },
  {
    id: "pkg-maldives-luxury",
    title: "Premium Maldives Island Escape & Water Villa",
    titleBn: "প্রিমিয়াম মালদ্বীপ আইল্যান্ড এস্কেপ ও লাক্সারি ওয়াটার ভিলা",
    destination: "Maldives",
    destinationBn: "মালে ও রিসোর্ট আইল্যান্ড, মালদ্বীপ",
    category: "international",
    durationDays: 4,
    durationNights: 3,
    price: 110000,
    priceBn: "৳ ১,১০,০০০",
    currency: "BDT",
    badge: "লাক্সারি রিট্রিট",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    overview: "স্ফটিক স্বচ্ছ নীল জলরাশির ওপর ওভার-ওয়াটার ভিলা, প্রাইভেট স্পিডবোট ড্রাইভ এবং আন্তর্জাতিক মানের অতিথিপরায়ণতা।",
    highlights: [
      "ওভার ওয়াটার ভিলা স্টে ও প্রাইভেট সানডেক",
      "মালে এয়ারপোর্ট থেকে সিপ্লেন অথবা স্পিডবোট ট্রান্সফার",
      "স্নরকেলিং ও ডলফিন সাফারি ক্রুজ",
    ],
    inclusions: [
      "রিটার্ন এয়ার টিকিট",
      "৪-স্টার ওয়াটার রিসোর্ট স্টে",
      "অল-ইনক্লুসিভ মিল প্ল্যান",
      "স্পিডবোট ট্রান্সফার",
    ],
    exclusions: ["ব্যক্তিগত ওয়াটার স্পোর্টস ফি"],
    featured: true,
    rating: 4.94,
    reviewCount: 65,
    departures: [
      { id: "dep-maldives-1", date: "১২ মার্চ ২০২৬", seatsTotal: 20, seatsLeft: 6, status: "available", quadPrice: 110000, triplePrice: 120000, doublePrice: 135000 },
    ],
  },
  {
    id: "pkg-dubai-safari",
    title: "Luxury Dubai, Desert Safari & Marina Cruise",
    titleBn: "লাক্সারি দুবাই স্কাইলাইন, মরু সাফারি ও মেরিনা ক্রুজ",
    destination: "Dubai, United Arab Emirates",
    destinationBn: "দুবাই, সংযুক্ত আরব আমিরাত",
    category: "international",
    durationDays: 5,
    durationNights: 4,
    price: 78500,
    priceBn: "৳ ৭৮,৫০০",
    currency: "BDT",
    badge: "বেস্টসেলার ট্যুর",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    overview: "বুর্জ খলিফার ১২৪ তলার বিস্ময়, মরুভূমির বুকে ৪x৪ ল্যান্ড ক্রুজার ডুন ব্যাশিং এবং দুবাই মেরিনার বিলাসবহুল ডিনার ক্রুজ।",
    highlights: [
      "বুর্জ খলিফা ১২৪ তলা অবজারভেশন ডেক প্রবেশাধিকার",
      "ভিআইপি মরু সাফারি ও বারবিকিউ ডিনার শো",
      "দুবাই মেরিনা লাক্সারি দো ডিনার ক্রুজ",
    ],
    inclusions: [
      "রিটার্ন এয়ার টিকিট",
      "দুবাই ই-ভিসা ও ইন্স্যুরেন্স",
      "৪-স্টার ডাউনটাউন হোটেল",
      "সমস্ত সাইটসিয়িং ও এন্ট্রি টিকিট",
    ],
    exclusions: ["ট্যুরিজম দিরহাম ফি"],
    featured: true,
    rating: 4.91,
    reviewCount: 142,
    departures: [
      { id: "dep-dubai-1", date: "১৮ ফেব্রুয়ারি ২০২৬", seatsTotal: 30, seatsLeft: 9, status: "available", quadPrice: 78500, triplePrice: 85000, doublePrice: 95000 },
      { id: "dep-dubai-2", date: "১০ এপ্রিল ২০২৬", seatsTotal: 30, seatsLeft: 18, status: "available", quadPrice: 78500, triplePrice: 85000, doublePrice: 95000 },
    ],
  },
  {
    id: "pkg-kashmir-paradise",
    title: "Kashmir Paradise & Gulmarg Gondola Experience",
    titleBn: "কাশ্মীর স্বর্গরাজ্য ও গুলমার্গ গন্ডোলা কেবল কার ট্যুর",
    destination: "Kashmir, India",
    destinationBn: "কাশ্মীর ও শ্রীনগর",
    category: "international",
    durationDays: 6,
    durationNights: 5,
    price: 65000,
    priceBn: "৳ ৬৫,০০০",
    currency: "BDT",
    badge: "প্রাকৃতিক স্বর্গ",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    overview: "ডাল লেকের বিলাসবহুল হাউসবোট, গুলমার্গের বরফশোভিত পাহাড়ে কেবল কার রাইড এবং পাহেলগামের সবুজ পাইন বনের মনোমুগ্ধকর যাত্রা।",
    highlights: [
      "ডাল লেকে শিকারা রাইড ও ঐতিহ্যবাহী হাউসবোটে রাত্রিযাপন",
      "গুলমার্গ গন্ডোলা কেবল কার ফেজ-১ ও ২",
      "বেতাব ভ্যালি ও আরু ভ্যালি ভ্রমণ",
    ],
    inclusions: ["এয়ার টিকিট", "হাউসবোট ও রিসোর্ট", "দৈনিক প্রাতরাশ ও রাতের খাবার", "প্রাইভেট ক্যাব"],
    exclusions: ["ভিসা ফি", "ব্যক্তিগত রাইড টিকিট"],
    featured: false,
    rating: 4.88,
    reviewCount: 54,
  },
  {
    id: "pkg-sajek-valley",
    title: "Sajek Valley Eco Cloud Tour",
    titleBn: "সাজেক ভ্যালি মেঘের রাজ্য ও কংলাক পাহাড় ইকো ট্যুর",
    destination: "Sajek, Bangladesh",
    destinationBn: "সাজেক ও খাগড়াছড়ি, বাংলাদেশ",
    category: "domestic",
    durationDays: 3,
    durationNights: 2,
    price: 9500,
    priceBn: "৳ ৯,৫০০",
    currency: "BDT",
    badge: "উইকেন্ড স্পেশাল",
    imageUrl: "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80",
    overview: "সাজেকের মেঘের রাজ্যে রিসোর্টে থাকার অসাধারণ অভিজ্ঞতা, রুইলুই পাড়া ও কংলাক পাহাড়ের মনোরম সূর্যাস্ত।",
    highlights: ["মেঘের ভিউ বিশিষ্ট প্রিমিয়াম রিসোর্ট", "চান্দের গাড়ি রাইড ও খাগড়াছড়ি আলুটিলা গুহা"],
    inclusions: ["ঢাকা-খাগড়াছড়ি এসি বাস", "রিসোর্ট স্টে", "খাবার", "চান্দের গাড়ি"],
    exclusions: ["ব্যক্তিগত খরচ"],
    featured: false,
    rating: 4.85,
    reviewCount: 88,
  },
];
