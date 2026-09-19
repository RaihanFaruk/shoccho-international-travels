import dynamic from "next/dynamic";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileStickyBar } from "@/components/navigation/MobileStickyBar";
import { HeroSection } from "@/components/hero/HeroSection";
import { SmartTravelSearch } from "@/components/hero/SmartTravelSearch";
import { IntentCards } from "@/components/sections/IntentCards";
import { PersonalizedDiscovery } from "@/components/sections/PersonalizedDiscovery";
import { FeaturedPackages } from "@/components/packages/FeaturedPackages";

// Server components — static, no JS needed client-side
import { WhyShoccho } from "@/components/sections/WhyShoccho";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { TravelStories } from "@/components/sections/TravelStories";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { OfficeLocation } from "@/components/sections/OfficeLocation";
import { Footer } from "@/components/layout/Footer";

// Client components lazy-loaded — below the fold, loaded after LCP
const HajjUmrahFeature = dynamic(
  () => import("@/components/sections/HajjUmrahFeature").then((m) => ({ default: m.HajjUmrahFeature })),
  { ssr: true }
);
const DestinationDiscovery = dynamic(
  () => import("@/components/destinations/DestinationDiscovery").then((m) => ({ default: m.DestinationDiscovery })),
  { ssr: true }
);
const ServicesSection = dynamic(
  () => import("@/components/services/ServicesSection").then((m) => ({ default: m.ServicesSection })),
  { ssr: true }
);
const AppComingSoon = dynamic(
  () => import("@/components/sections/AppComingSoon").then((m) => ({ default: m.AppComingSoon })),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased overflow-x-hidden selection:bg-secondary/20 selection:text-primary pb-16 lg:pb-0">
      {/* 1. Premium Responsive Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Luxury Editorial Hero Portal */}
        <HeroSection />

        {/* 3. First-time visitor wayfinding */}
        <IntentCards />

        {/* 4. Guided search and results handoff */}
        <SmartTravelSearch />

        {/* 5. Featured Journeys and direct booking path */}
        <div id="featured-journeys">
          <FeaturedPackages />
        </div>

        {/* 6. Flagship pilgrimage journey */}
        <div id="hajj-umrah">
          <HajjUmrahFeature />
        </div>

        {/* 7. Recommended package discovery */}
        <PersonalizedDiscovery />

        {/* 8. Destination Matrix & Tour Explorer */}
        <div id="destinations">
          <DestinationDiscovery />
        </div>

        {/* 9. Smart Visa & Flight Concierge Engine */}
        <div id="visa-engine">
          <ServicesSection />
        </div>

        {/* 10. Trust Architecture and reassurance */}
        <div id="why-shoccho">
          <WhyShoccho />
        </div>
        <div id="founder">
          <FounderSection />
        </div>

        {/* 11. Testimonials and editorial inspiration */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="stories">
          <TravelStories />
        </div>

        {/* 12. Secondary contact and product content */}
        <div id="contact">
          <AppComingSoon />
          <ContactCTA />
          <OfficeLocation />
        </div>
      </main>

      {/* 12. 5-Column Design System Footer */}
      <Footer />

      {/* 13. Mobile Thumb-Friendly Sticky Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
