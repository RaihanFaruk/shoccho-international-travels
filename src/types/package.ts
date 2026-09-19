export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  durationDays: number;
  durationNights: number;
  price: number;
  currency: string;
  badge?: string;
  imageUrl?: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}
