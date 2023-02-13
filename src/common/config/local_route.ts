class LocalRoute {
  static root = "/";
  static guest = "/guest";
  static app = "/app";
  static home = `${this.app}/home`;
  static status = `${this.app}/status`;
  static voucher = `${this.app}/voucher`;
  static user = `${this.app}/user`;
  static mess = `${this.app}/mess`;
  static location = `${this.app}/location`;
  static room = `${this.app}/room`;
  static book = `${this.app}/book`;
  static vcs = `${this.app}/vcs`;
}

export { LocalRoute };
