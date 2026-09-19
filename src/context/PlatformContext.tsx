"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TourPackage } from "@/data/packages";
import { PlatformNotification } from "@/data/notifications";
import { useNavbarState } from "@/context/NavbarStateContext";

export type BookingStatus =
  | "inquiry"
  | "pending"
  | "confirmed"
  | "payment_pending"
  | "paid"
  | "processing"
  | "completed"
  | "cancelled";

export interface PassengerInfo {
  fullName: string;
  gender: "male" | "female";
  dob: string;
  passportNumber: string;
  passportExpiry: string;
}

export interface DemoBooking {
  id: string;
  referenceCode: string;
  packageId: string;
  packageTitle: string;
  destination: string;
  departureDate: string;
  roomType: "quad" | "triple" | "double" | "single";
  passengers: PassengerInfo[];
  totalAmount: number;
  paidAmount: number;
  status: BookingStatus;
  createdAt: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}

interface PlatformContextType {
  compareList: string[];
  toggleCompare: (packageId: string) => void;
  clearCompare: () => void;
  bookings: DemoBooking[];
  addBooking: (data: Omit<DemoBooking, "id" | "referenceCode" | "createdAt" | "status" | "paidAmount">) => DemoBooking;
  updateBookingStatus: (id: string, status: BookingStatus) => void;
  bookingModalPackage: TourPackage | null;
  openBookingModal: (pkg: TourPackage) => void;
  closeBookingModal: () => void;
}

const initialDemoBookings: DemoBooking[] = [
  {
    id: "booking-seed-1",
    referenceCode: "SH-2026-8941",
    packageId: "pkg-umrah-flagship",
    packageTitle: "১৪ দিনের আল-আকসা ও ওমরাহ ফ্ল্যাগশিপ কাফেলা",
    destination: "মক্কা ও মদিনা, সৌদি আরব",
    departureDate: "১৫ মার্চ ২০২৬",
    roomType: "double",
    passengers: [
      {
        fullName: "তানভীর আহমেদ",
        gender: "male",
        dob: "1988-06-14",
        passportNumber: "A04892154",
        passportExpiry: "2030-08-20",
      },
      {
        fullName: "নুসরাত জাহান",
        gender: "female",
        dob: "1992-11-25",
        passportNumber: "A07612349",
        passportExpiry: "2029-04-12",
      },
    ],
    totalAmount: 430000,
    paidAmount: 200000,
    status: "confirmed",
    createdAt: "2026-02-01T10:30:00Z",
    contactName: "তানভীর আহমেদ",
    contactPhone: "01711223344",
    contactEmail: "tanvir.shoccho@example.com",
  },
];

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const { addNotification } = useNavbarState();
  const [compareList, setCompareList] = useState<string[]>([]);
  const [bookings, setBookings] = useState<DemoBooking[]>(initialDemoBookings);
  const [bookingModalPackage, setBookingModalPackage] = useState<TourPackage | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage safely on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedCompare = localStorage.getItem("shoccho_compare");
        if (savedCompare) setCompareList(JSON.parse(savedCompare));

        const savedBookings = localStorage.getItem("shoccho_bookings");
        if (savedBookings) {
          const parsed = JSON.parse(savedBookings);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setBookings(parsed);
          }
        }

      } catch {
        // ignore storage errors
      }
      setIsLoaded(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("shoccho_compare", JSON.stringify(compareList));
    } catch {}
  }, [compareList, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("shoccho_bookings", JSON.stringify(bookings));
    } catch {}
  }, [bookings, isLoaded]);

  const toggleCompare = (packageId: string) => {
    setCompareList((prev) => {
      if (prev.includes(packageId)) {
        return prev.filter((id) => id !== packageId);
      }
      if (prev.length >= 3) {
        alert("আপনি একসাথে সর্বোচ্চ ৩টি প্যাকেজ তুলনা করতে পারবেন।");
        return prev;
      }
      return [...prev, packageId];
    });
  };

  const clearCompare = () => setCompareList([]);

  const addBooking = (data: Omit<DemoBooking, "id" | "referenceCode" | "createdAt" | "status" | "paidAmount">) => {
    const randomCode = `SH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: DemoBooking = {
      ...data,
      id: `booking-${Date.now()}`,
      referenceCode: randomCode,
      paidAmount: 0,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Push simulated notification
    const newNotif: PlatformNotification = {
      id: `notif-${Date.now()}`,
      title: "নতুন বুকিং আবেদন গৃহীত হয়েছে",
      message: `রেফারেন্স নং ${randomCode} এর আওতায় আপনার বুকিং আবেদনটি পর্যালোচনায় রয়েছে।`,
      timeAgo: "এখনই",
      type: "booking",
      isRead: false,
      link: "/dashboard",
    };
    addNotification(newNotif);

    return newBooking;
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  const openBookingModal = (pkg: TourPackage) => setBookingModalPackage(pkg);
  const closeBookingModal = () => setBookingModalPackage(null);

  return (
    <PlatformContext.Provider
      value={{
        compareList,
        toggleCompare,
        clearCompare,
        bookings,
        addBooking,
        updateBookingStatus,
        bookingModalPackage,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error("usePlatform must be used within a PlatformProvider");
  }
  return context;
}
