export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  imageUrl: string;
  popularFor: string[];
  startingPrice?: number;
  featured?: boolean;
}
