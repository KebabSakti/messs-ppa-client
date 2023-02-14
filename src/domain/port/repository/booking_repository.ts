import { BookingModel } from "../../entity/booking_model";
import { ReadRepository } from "./crud/read_repository";
import { StoreAction } from "./crud/store_action";

abstract class BookingRepository
  implements ReadRepository<BookingModel>, StoreAction
{
  abstract single(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel>;

  abstract collections(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel[]>;

  abstract store(option: { [key: string]: any }): Promise<void>;
}

export { BookingRepository };
