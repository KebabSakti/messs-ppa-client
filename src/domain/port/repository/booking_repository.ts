import { BookingModel } from "../../entity/booking_model";
import { ReadRepository } from "./crud/read_repository";
import { StoreAction } from "./crud/store_action";
import { UpdateAction } from "./crud/update_action";

abstract class BookingRepository
  implements ReadRepository<BookingModel>, StoreAction, UpdateAction
{
  abstract single(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel>;

  abstract collections(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel[]>;

  abstract store(option: { [key: string]: any }): Promise<void>;

  abstract update(id: string, option: { [key: string]: any }): Promise<void>;
}

export { BookingRepository };
