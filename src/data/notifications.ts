export interface PlatformNotification {
  id: string;
  title: string;
  message: string;
  timeAgo: string;
  type: "booking" | "visa" | "offer" | "system";
  isRead: boolean;
  link?: string;
}

export const initialNotifications: PlatformNotification[] = [
  {
    id: "notif-1",
    title: "বুকিং নিশ্চিতকরণ আপডেট",
    message: "আপনার ১৫ রমজান ভিআইপি ওমরাহ কাফেলার প্রাথমিক কোটা সংরক্ষিত হয়েছে। বিস্তারিত ড্যাশবোর্ডে দেখুন।",
    timeAgo: "১০ মিনিট আগে",
    type: "booking",
    isRead: false,
    link: "/dashboard",
  },
  {
    id: "notif-2",
    title: "ভিসা প্রসেসিং সম্পন্ন",
    message: "সৌদি আরব ১ বছর মাল্টিপল এন্ট্রি ই-ভিসা অনুমোদিত হয়েছে। ভাউচার ডাউনলোড করুন।",
    timeAgo: "২ ঘণ্টা আগে",
    type: "visa",
    isRead: false,
    link: "/dashboard",
  },
  {
    id: "notif-3",
    title: "নতুন রমজান প্যাকেজ প্রকাশ",
    message: "২০২৬ সালের জন্য আল-আকসা ও ওমরাহ স্পেশাল প্যাকেজের শেষ ব্যাচের আসন উন্মুক্ত হয়েছে।",
    timeAgo: "১ দিন আগে",
    type: "offer",
    isRead: true,
    link: "/packages",
  },
];
