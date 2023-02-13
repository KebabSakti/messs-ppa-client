abstract class StoreAction<T> {
  abstract store(option: T): Promise<T>;
}

export { StoreAction };
