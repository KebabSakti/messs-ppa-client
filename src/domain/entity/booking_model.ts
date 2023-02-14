interface BookingModel {
  id?: string;
  mess?: string;
  room?: string;
  picture?: string;
  location?: string;
  checkinDate?: string;
  checkoutDate?: string;
  description?: string;
  note?: string;
  checkin?: boolean;
}

export type { BookingModel };
