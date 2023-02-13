abstract class UpdateAction<T> {
  abstract update(): Promise<T>;
}

export { UpdateAction };
