"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { initialNotifications, PlatformNotification } from "@/data/notifications";

interface NavbarStateContextType {
  wishlist: string[];
  toggleWishlist: (packageId: string) => void;
  notifications: PlatformNotification[];
  markNotificationAsRead: (id: string) => void;
  addNotification: (notification: PlatformNotification) => void;
}

const NavbarStateContext = createContext<NavbarStateContextType | undefined>(undefined);

export function NavbarStateProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<PlatformNotification[]>(initialNotifications);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedWishlist = localStorage.getItem("shoccho_wishlist");
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

        const savedNotifications = localStorage.getItem("shoccho_notifications");
        if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
      } catch {
        // Ignore storage errors and keep the seeded state.
      }
      setIsLoaded(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("shoccho_wishlist", JSON.stringify(wishlist));
    } catch {}
  }, [wishlist, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("shoccho_notifications", JSON.stringify(notifications));
    } catch {}
  }, [notifications, isLoaded]);

  const toggleWishlist = (packageId: string) => {
    setWishlist((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId]
    );
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const addNotification = (notification: PlatformNotification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  return (
    <NavbarStateContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        notifications,
        markNotificationAsRead,
        addNotification,
      }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
}

export function useNavbarState() {
  const context = useContext(NavbarStateContext);
  if (!context) {
    throw new Error("useNavbarState must be used within a NavbarStateProvider");
  }
  return context;
}
