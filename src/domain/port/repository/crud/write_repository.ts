import { DeleteAction } from "./delete_action";
import { StoreAction } from "./store_action";
import { UpdateAction } from "./update_action";

abstract class WriteRepository<T>
  implements StoreAction, UpdateAction, DeleteAction
{
  abstract store(option: { [key: string]: any }): Promise<void>;
  abstract update(id: string, option: { [key: string]: any }): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

export { WriteRepository };
