abstract class StoreAction<T> {
  abstract store(): Promise<T>;
}

export { StoreAction };
