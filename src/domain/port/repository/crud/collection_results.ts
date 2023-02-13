abstract class CollectionResult<T> {
  abstract collections(): Promise<T[]>;
}

export { CollectionResult };
