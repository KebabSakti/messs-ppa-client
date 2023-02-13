abstract class SingleResult<T> {
  abstract single(): Promise<T>;
}

export { SingleResult };
