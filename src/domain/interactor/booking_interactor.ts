import { MessModel } from "../entity/mess_model";
import { BookingRepository } from "../port/repository/booking_repository";

class BookingInteractor {
  private bookingRepository: BookingRepository;

  constructor(bookingRepository: BookingRepository) {
    this.bookingRepository = bookingRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel> {
    const results = await this.bookingRepository.single(option);
    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel[]> {
    const results = await this.bookingRepository.collections(option);
    return results;
  }

  async store(option: { [key: string]: any }): Promise<void> {
    await this.bookingRepository.store(option);
  }

  async update(id: string, option: { [key: string]: any }): Promise<void> {
    await this.bookingRepository.update(id, option);
  }
}

export { BookingInteractor };
