abstract class DeleteAction<T> {
  abstract delete(id: string): Promise<T>;
}

export { DeleteAction };
