"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlatform, PassengerInfo } from "@/context/PlatformContext";

export function BookingFlowModal() {
  const { bookingModalPackage, closeBookingModal, addBooking } = usePlatform();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDeparture, setSelectedDeparture] = useState<string>("");
  const [roomType, setRoomType] = useState<"quad" | "triple" | "double" | "single">("quad");
  const [contactName, setContactName] = useState("তানভীর আহমেদ");
  const [contactPhone, setContactPhone] = useState("01711223344");
  const [contactEmail, setContactEmail] = useState("tanvir.shoccho@example.com");

  const [passengers, setPassengers] = useState<PassengerInfo[]>([
    {
      fullName: "তানভীর আহমেদ",
      gender: "male",
      dob: "1988-06-14",
      passportNumber: "A04892154",
      passportExpiry: "2030-08-20",
    },
  ]);

  const [confirmedRef, setConfirmedRef] = useState<string>("");

  if (!bookingModalPackage) return null;

  const departures = bookingModalPackage.departures || [
    {
      id: "dep-default",
      date: "১৫ মার্চ ২০২৬",
      seatsTotal: 40,
      seatsLeft: 12,
      status: "available",
      quadPrice: bookingModalPackage.price,
      triplePrice: Math.round(bookingModalPackage.price * 1.12),
      doublePrice: Math.round(bookingModalPackage.price * 1.25),
    },
  ];

  const currentDepDate = selectedDeparture || departures[0]?.date || "শীঘ্রই ঘোষিত হবে";

  // Calculate price based on room type
  const getPerPersonPrice = () => {
    const base = bookingModalPackage.price;
    switch (roomType) {
      case "single":
        return Math.round(base * 1.45);
      case "double":
        return Math.round(base * 1.25);
      case "triple":
        return Math.round(base * 1.12);
      default:
        return base;
    }
  };

  const perPersonPrice = getPerPersonPrice();
  const totalPrice = perPersonPrice * passengers.length;

  const handleAddPassenger = () => {
    setPassengers((prev) => [
      ...prev,
      {
        fullName: "",
        gender: "male",
        dob: "",
        passportNumber: "",
        passportExpiry: "",
      },
    ]);
  };

  const handleRemovePassenger = (index: number) => {
    if (passengers.length <= 1) return;
    setPassengers((prev) => prev.filter((_, i) => i !== index));
  };

  const updatePassenger = (index: number, field: keyof PassengerInfo, val: string) => {
    setPassengers((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: val } : p))
    );
  };

  const handleConfirmBooking = () => {
    const newBooking = addBooking({
      packageId: bookingModalPackage.id,
      packageTitle: bookingModalPackage.titleBn || bookingModalPackage.title,
      destination: bookingModalPackage.destinationBn || bookingModalPackage.destination,
      departureDate: currentDepDate,
      roomType,
      passengers,
      totalAmount: totalPrice,
      contactName,
      contactPhone,
      contactEmail,
    });
    setConfirmedRef(newBooking.referenceCode);
    setStep(4);
  };

  const handleClose = () => {
    setStep(1);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141d1a]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#dbe5e0] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#00453d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fed65b] text-2xl">
              flight_takeoff
            </span>
            <div>
              <h3 className="font-title-lg text-lg font-bold font-serif leading-tight">
                স্মার্ট বুকিং কনসিয়ার্জ
              </h3>
              <span className="font-label-sm text-xs text-[#a2b5af] block">
                {bookingModalPackage.titleBn || bookingModalPackage.title}
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 py-3 bg-[#ecf6f1] border-b border-[#dbe5e0] flex items-center justify-between text-xs font-semibold text-[#3f4946] shrink-0">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? "text-[#00453d] font-bold" : ""}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? "bg-[#00453d] text-white" : "bg-[#dbe5e0]"}`}>১</span>
            <span>তারিখ ও রুম</span>
          </div>
          <span className="text-[#bec9c5]">➔</span>
          <div className={`flex items-center gap-1.5 ${step >= 2 ? "text-[#00453d] font-bold" : ""}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? "bg-[#00453d] text-white" : "bg-[#dbe5e0]"}`}>২</span>
            <span>যাত্রী তথ্য</span>
          </div>
          <span className="text-[#bec9c5]">➔</span>
          <div className={`flex items-center gap-1.5 ${step >= 3 ? "text-[#00453d] font-bold" : ""}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? "bg-[#00453d] text-white" : "bg-[#dbe5e0]"}`}>৩</span>
            <span>নিশ্চিতকরণ</span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#141d1a]">
          {/* STEP 1: Date & Room Type */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="font-label-sm text-xs uppercase tracking-wider text-[#3f4946] font-bold block mb-2">
                  ১. কাফেলা / যাত্রার তারিখ নির্বাচন করুন
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {departures.map((dep, idx) => (
                    <button
                      key={dep.id || idx}
                      type="button"
                      onClick={() => setSelectedDeparture(dep.date)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        (selectedDeparture === dep.date || (!selectedDeparture && idx === 0))
                          ? "border-[#00453d] bg-[#f2fcf6] ring-2 ring-[#00453d]/20"
                          : "border-[#dbe5e0] hover:border-[#bec9c5] bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-title-md text-sm font-bold text-[#141d1a]">
                          {dep.date}
                        </span>
                        <span className="font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-[#ecf6f1] text-[#00453d] font-semibold">
                          {dep.seatsLeft} সিট বাকি
                        </span>
                      </div>
                      <span className="font-body-sm text-xs text-[#735c00] font-semibold mt-2">
                        কোয়াড শেয়ারিং: ৳ {dep.quadPrice?.toLocaleString("bn-BD")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-label-sm text-xs uppercase tracking-wider text-[#3f4946] font-bold block mb-2">
                  ২. রুম শেয়ারিং ক্যাটাগরি
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(
                    [
                      { id: "quad", label: "কোয়াড (৪ জন)", desc: "সাশ্রয়ী রুম" },
                      { id: "triple", label: "ট্রিপল (৩ জন)", desc: "স্ট্যান্ডার্ড" },
                      { id: "double", label: "ডাবল (২ জন)", desc: "দম্পতি স্পেশাল" },
                      { id: "single", label: "সিঙ্গেল (১ জন)", desc: "প্রাইভেট রুম" },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setRoomType(item.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        roomType === item.id
                          ? "border-[#00453d] bg-[#00453d] text-white"
                          : "border-[#dbe5e0] hover:bg-[#f2fcf6] text-[#141d1a]"
                      }`}
                    >
                      <span className="font-label-md text-xs font-bold block">
                        {item.label}
                      </span>
                      <span className={`text-[10px] block mt-0.5 ${roomType === item.id ? "text-[#a2b5af]" : "text-[#3f4946]"}`}>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Calculation Banner */}
              <div className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-xs text-[#3f4946] block">জনপ্রতি আনুমানিক প্যাকেজ মূল্য</span>
                  <span className="font-headline-sm text-xl text-[#00453d] font-bold font-serif">
                    ৳ {perPersonPrice.toLocaleString("bn-BD")}{" "}
                    <span className="text-xs text-[#735c00] font-sans font-normal">(সব ট্যাক্স সহ)</span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-label-sm text-xs text-[#3f4946] block">মোট যাত্রী</span>
                  <span className="font-title-md text-base font-bold text-[#141d1a]">
                    {passengers.length} জন
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Passengers Form */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-title-md text-sm font-bold text-[#00453d]">
                    যাত্রীদের পাসপোর্ট ও বায়োডাটা
                  </h4>
                  <p className="font-body-sm text-xs text-[#3f4946]">
                    ভিসা ও বিমান টিকিট ইস্যু করার জন্য সঠিক পাসপোর্ট নম্বর প্রয়োজন।
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddPassenger}
                  className="px-3 py-1.5 bg-[#ecf6f1] hover:bg-[#dbe5e0] text-[#00453d] font-label-sm text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <span className="text-sm">+</span> যাত্রী যোগ করুন
                </button>
              </div>

              <div className="space-y-4">
                {passengers.map((p, idx) => (
                  <div key={idx} className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] relative">
                    <div className="flex items-center justify-between pb-2 border-b border-[#bec9c5]/40 mb-3">
                      <span className="font-label-sm text-xs font-bold text-[#00453d]">
                        যাত্রী নং {idx + 1}
                      </span>
                      {passengers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemovePassenger(idx)}
                          className="text-xs text-red-600 hover:underline font-semibold"
                        >
                          মুছে ফেলুন
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                          পাসপোর্ট অনুযায়ী পুরো নাম
                        </label>
                        <input
                          type="text"
                          required
                          value={p.fullName}
                          onChange={(e) => updatePassenger(idx, "fullName", e.target.value)}
                          placeholder="MD TANVIR AHMED"
                          className="w-full px-3 py-2 bg-white border border-[#dbe5e0] rounded-lg text-xs text-[#141d1a] focus:ring-1 focus:ring-[#00453d] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                          লিঙ্গ
                        </label>
                        <select
                          value={p.gender}
                          onChange={(e) => updatePassenger(idx, "gender", e.target.value as "male" | "female")}
                          className="w-full px-3 py-2 bg-white border border-[#dbe5e0] rounded-lg text-xs text-[#141d1a] focus:ring-1 focus:ring-[#00453d] focus:outline-none"
                        >
                          <option value="male">পুরুষ (Male)</option>
                          <option value="female">মহিলা (Female)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                          পাসপোর্ট নম্বর
                        </label>
                        <input
                          type="text"
                          required
                          value={p.passportNumber}
                          onChange={(e) => updatePassenger(idx, "passportNumber", e.target.value)}
                          placeholder="A04892154"
                          className="w-full px-3 py-2 bg-white border border-[#dbe5e0] rounded-lg text-xs text-[#141d1a] focus:ring-1 focus:ring-[#00453d] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">
                          পাসপোর্ট মেয়াদোত্তীর্ণের তারিখ
                        </label>
                        <input
                          type="date"
                          value={p.passportExpiry}
                          onChange={(e) => updatePassenger(idx, "passportExpiry", e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#dbe5e0] rounded-lg text-xs text-[#141d1a] focus:ring-1 focus:ring-[#00453d] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Contact Details */}
              <div className="p-4 bg-white rounded-xl border border-[#dbe5e0]">
                <h5 className="font-label-md text-xs font-bold text-[#00453d] mb-2">
                  প্রধান বুকিং প্রতিনিধির ফোন ও ইমেইল
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">প্রতিনিধির নাম</label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">মোবাইল নম্বর (হোয়াটসঅ্যাপ)</label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-label-sm text-[11px] text-[#3f4946] block mb-1">ইমেইল ঠিকানা</label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#f2fcf6] border border-[#dbe5e0] rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Review & Summary */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#bec9c5]/40">
                  <span className="font-title-md text-sm font-bold text-[#00453d]">
                    বুকিং সারসংক্ষেপ
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#fed65b] text-[#745c00] font-label-sm text-[10px] rounded-full font-bold">
                    ডেমো প্রিভিউ মোড
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#3f4946] block">প্যাকেজের নাম:</span>
                    <strong className="text-[#141d1a]">{bookingModalPackage.titleBn || bookingModalPackage.title}</strong>
                  </div>
                  <div>
                    <span className="text-[#3f4946] block">যাত্রার তারিখ:</span>
                    <strong className="text-[#141d1a]">{currentDepDate}</strong>
                  </div>
                  <div>
                    <span className="text-[#3f4946] block">রুম টাইপ:</span>
                    <strong className="text-[#141d1a] capitalize">{roomType} Room</strong>
                  </div>
                  <div>
                    <span className="text-[#3f4946] block">মোট যাত্রী:</span>
                    <strong className="text-[#141d1a]">{passengers.length} জন</strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#bec9c5]/40 flex items-center justify-between">
                  <span className="font-label-md text-xs font-bold text-[#3f4946]">সর্বমোট প্রদেয় মূল্য</span>
                  <span className="font-headline-md text-xl text-[#00453d] font-bold font-serif">
                    ৳ {totalPrice.toLocaleString("bn-BD")}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#ecf6f1] rounded-xl border border-[#dbe5e0] text-xs text-[#3f4946] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#00453d]">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>স্বচ্ছ মূল্য নিশ্চয়তা পলিসি:</span>
                </div>
                <p>
                  কোনো গোপন চার্জ নেই। রিটার্ন টিকিট, ভিসা, ৫-স্টার হোটেল ও খাবার সব অন্তর্ভুক্ত রয়েছে। বুকিং সাবমিট করার পর আমাদের সিনিয়র কনসিয়ার্জ অফিসার আপনার সাথে যোগাযোগ করবেন।
                </p>
              </div>
            </div>
          )}

          {/* STEP 4: Success Screen */}
          {step === 4 && (
            <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#00453d] text-[#fed65b] rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">
                ✓
              </div>
              <h4 className="font-headline-sm text-2xl text-[#00453d] font-serif font-bold">
                বুকিং আবেদন সফলভাবে গৃহীত হয়েছে!
              </h4>
              <p className="font-body-md text-sm text-[#3f4946] max-w-md mx-auto">
                আলহামদুলিল্লাহ! আপনার বুকিং রেফারেন্স কোড তৈরি হয়েছে। আমাদের টিম খুব শীঘ্রই আপনার আসন সংরক্ষণের বিষয়ে যোগাযোগ করবে।
              </p>

              <div className="p-4 bg-[#f2fcf6] rounded-xl border border-[#dbe5e0] inline-block px-8 py-3">
                <span className="font-label-sm text-xs text-[#3f4946] block uppercase tracking-wider">
                  বুকিং রেফারেন্স নম্বর
                </span>
                <span className="font-headline-md text-2xl text-[#735c00] font-mono font-bold tracking-widest">
                  {confirmedRef}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <Link
                  href="/dashboard"
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  কাস্টমার ড্যাশবোর্ডে দেখুন
                </Link>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#ecf6f1] hover:bg-[#dbe5e0] text-[#141d1a] font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                >
                  উইন্ডো বন্ধ করুন
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step < 4 && (
          <div className="px-6 py-4 bg-[#f2fcf6] border-t border-[#dbe5e0] flex items-center justify-between shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : 1))}
                className="px-4 py-2 border border-[#dbe5e0] rounded-lg text-xs font-semibold text-[#141d1a] hover:bg-white transition-colors"
              >
                আগের ধাপ
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s < 3 ? ((s + 1) as 2 | 3) : 3))}
                className="px-6 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                পরবর্তী ধাপ ➔
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="px-6 py-2.5 bg-[#00453d] hover:bg-[#075e54] text-white font-label-md text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                <span>বুকিং কনফার্ম করুন</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
