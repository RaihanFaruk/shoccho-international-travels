
import Image from "next/image";

export function OfficeLocation() {
  return (
    <section className="w-full bg-surface-container-lowest py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid items-center gap-8 rounded-2xl border border-outline-variant/40 bg-surface-container p-5 shadow-md sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
              VISIT OUR OFFICE
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl text-primary font-serif font-bold sm:text-3xl">
              স্বচ্ছতার কথা সামনাসামনি বলি
            </h2>
            <p className="mt-4 max-w-lg font-body-md text-sm leading-relaxed text-on-surface-variant">
              আপনার হজ, ওমরাহ বা আন্তর্জাতিক ভ্রমণ পরিকল্পনা নিয়ে আমাদের Savar টিমের সঙ্গে সরাসরি পরামর্শ করুন।
            </p>
            <div className="mt-6 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-xl">pin_drop</span>
              </div>
              <div>
                <span className="font-title-lg text-primary font-semibold block">
                  জয়তুন প্লাজা শাখা কার্যালয়
                </span>
                <span className="font-body-sm text-on-surface-variant">
                  কুড়গাঁও, নবীনগর বাসস্ট্যান্ড সংলগ্ন, আশুলিয়া, সাভার
                </span>
              </div>
            </div>
            <a
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition-all hover:bg-primary-container"
              href="https://maps.google.com/?q=Joytun+Plaza+Nabinagar+Savar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>গুগল ম্যাপে দিকনির্দেশনা পান</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="পরিষ্কার আধুনিক অফিসে ট্রাভেল পরামর্শের বৈঠক"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

