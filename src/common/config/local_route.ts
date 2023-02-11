class LocalRoute {
  static root = "/";
  static guest = "/guest";
  static app = "/app";
  static home = `${this.app}/home`;
}

export { LocalRoute };
