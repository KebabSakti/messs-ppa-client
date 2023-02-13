import { DeleteAction } from "./delete_action";
import { StoreAction } from "./store_action";
import { UpdateAction } from "./update_action";

abstract class WriteRepository<T>
  implements StoreAction<T>, UpdateAction<T>, DeleteAction<T>
{
  abstract store(option: T): Promise<T>;
  abstract update(id: string, option: T): Promise<T>;
  abstract delete(id: string): Promise<T>;
}

export { WriteRepository };
