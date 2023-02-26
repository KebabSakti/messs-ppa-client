import { RemoteApi } from "../../../common/config/remote_api";
import { BookingModel } from "../../../domain/entity/booking_model";
import { BookingRepository } from "../../../domain/port/repository/booking_repository";
import { HttpService } from "../../../domain/port/service/http_service";

class BookingRemote implements BookingRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel> {
    const request = await this.http.get(`${RemoteApi.bookings}/${option!.id}`);

    const results: BookingModel = {
      id: request.data?.id,
      roomId: request.data?.roomId,
      bookingId: request.data?.bookingId,
      checkin: request.data?.checkin,
      checkout: request.data?.checkout,
      name: request.data?.name,
      phone: request.data?.phone,
      nrp: request.data?.nrp,
      mess: request.data?.mess,
      location: request.data?.location,
      room: request.data?.room,
      checkinNote: request.data?.checkinNote,
      checkoutNote: request.data?.checkoutNote,
      extra: request.data?.extra,
      note: request.data?.note,
      guest: request.data?.guest,
      picture: request.data?.picture,
    };

    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel[]> {
    const request = await this.http.get(RemoteApi.bookings, option);
    const results: BookingModel[] = request.data?.map((e: BookingModel) => e);
    return results;
  }

  async store(option: { [key: string]: any }): Promise<void> {
    await this.http.post(RemoteApi.bookings, option);
  }

  async update(id: string, option: { [key: string]: any }): Promise<void> {
    await this.http.put(`${RemoteApi.bookings}/${id}`, option);
  }
}

export { BookingRemote };
