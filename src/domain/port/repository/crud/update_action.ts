abstract class UpdateAction<T> {
  abstract update(id: string, option: T): Promise<T>;
}

export { UpdateAction };
