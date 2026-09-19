"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import { useNavbarState } from "@/context/NavbarStateContext";

export function NotificationDropdown() {
  const { notifications, markNotificationAsRead } = useNavbarState();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 text-[#141d1a] transition-colors"
        aria-label="নোটিফিকেশন"
        title="নোটিফিকেশন"
      >
        <Bell aria-hidden="true" className="h-5 w-5 text-[#00453d]" strokeWidth={2} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#735c00] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#dbe5e0] overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150 text-[#141d1a]">
          <div className="px-4 py-3 bg-[#00453d] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#fed65b] text-sm">notifications_active</span>
              <h4 className="font-title-sm text-xs font-bold font-serif">
                প্ল্যাটফর্ম নোটিফিকেশন
              </h4>
            </div>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 bg-[#fed65b] text-[#745c00] text-[10px] rounded-full font-bold">
                {unreadCount} টি নতুন
              </span>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-[#dbe5e0]/60">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#3f4946]">
                কোনো নতুন নোটিফিকেশন নেই
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => markNotificationAsRead(notif.id)}
                  className={`p-3.5 transition-colors hover:bg-[#f2fcf6] cursor-pointer ${
                    !notif.isRead ? "bg-[#ecf6f1]/60" : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#735c00] shrink-0 mt-0.5">
                      {notif.type === "booking"
                        ? "task_alt"
                        : notif.type === "visa"
                        ? "verified_user"
                        : "campaign"}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-title-sm text-xs font-bold text-[#00453d]">
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-[#3f4946]">{notif.timeAgo}</span>
                      </div>
                      <p className="font-body-sm text-xs text-[#3f4946] mt-0.5 line-clamp-2">
                        {notif.message}
                      </p>
                      {notif.link && (
                        <Link
                          href={notif.link}
                          onClick={() => setIsOpen(false)}
                          className="inline-block mt-1 text-[11px] text-[#00453d] font-bold hover:underline"
                        >
                          বিস্তারিত দেখুন ➔
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-2.5 bg-[#f2fcf6] border-t border-[#dbe5e0] text-center">
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-[#00453d] hover:underline"
            >
              ড্যাশবোর্ডে সকল অ্যাক্টিভিটি দেখুন
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
