class RemoteApi {
  static url = "https://amm-cottage.com/"; //"https://amm-cottage.com/"; //"http://192.168.3.126:1001/";
  static base = this.url + "rest/";

  static authGuest = "auth/guest";
  static authEmployee = "auth/employee";

  static mess = "public/inns";
  static rooms = "public/rooms";
  static locations = "public/locations";
  static bookings = "public/bookings";
  static vouchers = "public/vouchers";
  static configs = "public/configs";
}

export { RemoteApi };
