abstract class UpdateAction {
  abstract update(id: string, option: { [key: string]: any }): Promise<void>;
}

export { UpdateAction };
