import { DeleteAction } from "./delete_action";
import { StoreAction } from "./store_action";
import { UpdateAction } from "./update_action";

abstract class Writer<T>
  implements StoreAction<T>, UpdateAction<T>, DeleteAction<T>
{
  abstract store(): Promise<T>;
  abstract update(): Promise<T>;
  abstract delete(): Promise<T>;
}

export { Writer };
