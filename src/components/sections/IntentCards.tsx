import Link from "next/link";
import { Compass, FileCheck2, MoonStar } from "lucide-react";

const intents = [
  {
    href: "/hajj-umrah",
    eyebrow: "পবিত্র সফর",
    title: "আমি হজ / ওমরাহ করতে চাই",
    description: "লাইসেন্সপ্রাপ্ত কাফেলা, আবাসন ও মোয়াল্লিম সহ পুরো যাত্রা দেখুন।",
    icon: MoonStar,
    accent: "text-[#735c00] bg-[#fff8dc]",
  },
  {
    href: "/visa",
    eyebrow: "ভিসা কনসিয়ার্জ",
    title: "আমার ভিসা দরকার",
    description: "গন্তব্য অনুযায়ী ডকুমেন্ট, প্রসেসিং ও বিশেষজ্ঞ পরামর্শ নিন।",
    icon: FileCheck2,
    accent: "text-[#00453d] bg-[#e8f5ef]",
  },
  {
    href: "/packages",
    eyebrow: "আন্তর্জাতিক ভ্রমণ",
    title: "আমি ঘুরতে যেতে চাই",
    description: "পরিবার, যুগল বা লাক্সারি ভ্রমণের জন্য বাছাই করা প্যাকেজ ব্রাউজ করুন।",
    icon: Compass,
    accent: "text-[#7d4d32] bg-[#f8eee8]",
  },
];

export function IntentCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-16" aria-labelledby="intent-heading">
      <div className="mb-7 flex flex-col gap-2 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-label-sm text-xs font-bold uppercase tracking-[0.18em] text-[#735c00]">YOUR JOURNEY STARTS HERE</span>
          <h2 id="intent-heading" className="mt-2 font-serif text-2xl font-bold leading-tight tracking-wide text-[#00453d] sm:text-3xl">
            আপনি কীভাবে যাত্রা শুরু করতে চান?
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#3f4946]">একটি পথ বেছে নিন, আমরা আপনার জন্য সঠিক প্যাকেজ ও পরবর্তী ধাপ সাজিয়ে দিচ্ছি।</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {intents.map(({ href, eyebrow, title, description, icon: Icon, accent }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-2xl border border-[#dbe5e0] bg-white p-5 shadow-[0_12px_32px_rgba(0,69,61,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,69,61,0.13)] sm:p-6"
          >
            <div className="mb-8 flex items-start justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent} shadow-sm`}>
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <span className="font-label-sm text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a9691]">01 / 02 / 03</span>
            </div>
            <span className="font-label-sm text-xs font-bold uppercase tracking-[0.16em] text-[#735c00]">{eyebrow}</span>
            <h3 className="mt-2 font-serif text-xl font-bold leading-snug tracking-wide text-[#141d1a] group-hover:text-[#00453d]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#3f4946]">{description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#00453d]">
              পথটি দেখুন <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
