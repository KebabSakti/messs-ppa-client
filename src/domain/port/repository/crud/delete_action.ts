abstract class DeleteAction {
  abstract delete(id: string): Promise<void>;
}

export { DeleteAction };
