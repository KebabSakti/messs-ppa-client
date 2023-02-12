class LocalRoute {
  static root = "/";
  static guest = "/guest";
  static app = "/app";
  static home = `${this.app}/home`;
  static status = `${this.app}/status`;
  static voucher = `${this.app}/voucher`;
  static user = `${this.app}/user`;
}

export { LocalRoute };
