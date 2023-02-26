import { RemoteApi } from "../../../common/config/remote_api";
import { LocationModel } from "../../../domain/entity/location_model";
import { LocationRepository } from "../../../domain/port/repository/location_repository";
import { HttpService } from "../../../domain/port/service/http_service";

class LocationRemote implements LocationRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel> {
    const request = await this.http.get(`${RemoteApi.locations}/${option!.id}`);

    const results: LocationModel = {
      id: request.data?.id,
      innId: request.data?.innId,
      inn: request.data?.inn,
      name: request.data?.name,
      map: request.data?.map,
      full: request.data?.full,
    };

    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel[]> {
    const request = await this.http.get(RemoteApi.locations, option);
    const results: LocationModel[] = request.data?.map((e: LocationModel) => e);
    return results;
  }
}

export { LocationRemote };
