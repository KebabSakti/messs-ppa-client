interface BookingModel {
  id?: string;
  roomId?: string;
  bookingId?: string;
  checkin?: string;
  checkout?: string;
  name?: string;
  phone?: string;
  nrp?: string;
  mess?: string;
  location?: string;
  room?: string;
  checkinNote?: string;
  checkoutNote?: string;
  extra?: string;
  note?: string;
  guest?: boolean;
  picture?: string;
}

export type { BookingModel };
