"use client";

export function OfficeLocation() {
  return (
    <div className="w-full bg-surface-container-lowest pb-margin">
      <div className="max-w-7xl mx-auto px-gutter-lg">
        {/* Interactive Map Visual Experience Card */}
        <div className="rounded-2xl overflow-hidden shadow-md bg-surface-container relative">
          <div
            className="w-full h-80 sm:h-96 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            data-location="Joytun Plaza, Kurgaon, Nabinagar, Ashulia, Savar, Dhaka"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-space-md left-space-md right-space-md p-space-md bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm z-10 border border-outline-variant/30">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-xl">pin_drop</span>
              </div>
              <div>
                <span className="font-title-lg text-title-lg text-primary font-semibold block">
                  জয়তুন প্লাজা শাখা কার্যালয়
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  কুড়গাঁও, নবীনগর বাসস্ট্যান্ড সংলগ্ন, আশুলিয়া, সাভার
                </span>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm uppercase font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap"
              href="https://maps.google.com/?q=Joytun+Plaza+Nabinagar+Savar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>গুগল ম্যাপে দিকনির্দেশনা পান</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

