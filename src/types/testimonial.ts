export interface Testimonial {
  id: string;
  authorName: string;
  authorRole?: string;
  avatarUrl?: string;
  location: string;
  rating: number;
  comment: string;
  travelDate?: string;
  packageTitle?: string;
}
