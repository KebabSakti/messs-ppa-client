abstract class DeleteAction<T> {
  abstract delete(): Promise<T>;
}

export { DeleteAction };
