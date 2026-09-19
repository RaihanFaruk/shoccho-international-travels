export interface BookingInquiry {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  destinationId?: string;
  packageId?: string;
  travelDate?: string;
  travelersCount: number;
  specialRequests?: string;
}
