import { CollectionResult } from "./collection_results";
import { SingleResult } from "./single_result";

abstract class Reader<T> implements SingleResult<T>, CollectionResult<T> {
  abstract single(): Promise<T>;
  abstract collections(): Promise<T[]>;
}

export { Reader };
