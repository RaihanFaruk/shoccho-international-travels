import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destinations",
    href: "/destinations",
    children: [
      { title: "Dubai & UAE", href: "/destinations/dubai" },
      { title: "Thailand", href: "/destinations/thailand" },
      { title: "Malaysia", href: "/destinations/malaysia" },
      { title: "Singapore", href: "/destinations/singapore" },
      { title: "Turkey", href: "/destinations/turkey" },
    ],
  },
  {
    title: "Tour Packages",
    href: "/packages",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Flight Booking", href: "/services/flights" },
      { title: "Visa Processing", href: "/services/visa" },
      { title: "Hotel Reservations", href: "/services/hotels" },
      { title: "Hajj & Umrah", href: "/services/umrah" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const companyContact = {
  name: "Shoccho International Travels",
  tagline: "Your Trusted Gateway to the World",
  phone: "+880 1700-000000",
  email: "info@shocchotravels.com",
  address: "Gulshan-1, Dhaka, Bangladesh",
  businessHours: "Saturday - Thursday: 9:30 AM - 7:30 PM",
};
