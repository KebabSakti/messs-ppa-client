import { RemoteApi } from "../../../common/config/remote_api";
import { RoomModel } from "../../../domain/entity/room_model";
import { RoomRepository } from "../../../domain/port/repository/room_repository";
import { HttpService } from "../../../domain/port/service/http_service";

class RoomRemote implements RoomRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel> {
    const request = await this.http.get(`${RemoteApi.rooms}/${option!.id}`);

    const results: RoomModel = {
      id: request.data?.id,
      locationId: request.data?.locationId,
      mess: request.data?.mess,
      location: request.data?.location,
      name: request.data?.name,
      picture: request.data?.picture,
      capacity: request.data?.capacity,
      user: request.data?.user,
      full: request.data?.full,
    };

    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel[]> {
    const request = await this.http.get(RemoteApi.rooms, option);
    const results: RoomModel[] = request.data?.map((e: RoomModel) => e);
    return results;
  }
}

export { RoomRemote };
