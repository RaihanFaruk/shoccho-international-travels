export interface TravelStory {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

export const travelStoriesData: TravelStory[] = [
  {
    id: "story-1",
    title: "The Ultimate Guide to Luxury Dubai in 2026: Hidden Desert Retreats & High-Life Dining",
    excerpt: "Beyond the gleaming towers of Downtown, discover private oasis sanctuaries, Michelin-starred dhow culinary journeys, and secret dunes.",
    category: "Destination Guide",
    readTime: "5 min read",
    date: "March 12, 2026",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sabrina Karim",
      role: "Luxury Travel Editor",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "story-2",
    title: "Spiritual Preparedness: The Step-by-Step Umrah Checklist for First-Time Pilgrims",
    excerpt: "Everything you need to know about Ihram requirements, Makkah clock-tower logistics, prayer etiquette, and peace of mind during your sacred journey.",
    category: "Pilgrimage Insight",
    readTime: "7 min read",
    date: "February 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Maulana R. Haque",
      role: "Pilgrimage Counselor",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
  },
  {
    id: "story-3",
    title: "Navigating Southeast Asian Visas with Zero Stress: Bangladesh Passport Guide",
    excerpt: "Insider secrets from our consular experts on achieving swift approvals for Thailand, Malaysia, Singapore, and Vietnam tourist visas.",
    category: "Visa & Consular",
    readTime: "4 min read",
    date: "January 20, 2026",
    imageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Imtiaz Chowdhury",
      role: "Head of Consular Operations",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    },
  },
];
