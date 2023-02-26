import { RemoteApi } from "../../../common/config/remote_api";
import { MessModel } from "../../../domain/entity/mess_model";
import { MessRepository } from "../../../domain/port/repository/mess_repository";
import { HttpService } from "../../../domain/port/service/http_service";

class MessRemote implements MessRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel> {
    const request = await this.http.get(`${RemoteApi.mess}/${option!.id}`);

    const results: MessModel = {
      id: request.data?.id,
      name: request.data?.name,
      picture: request.data?.picture,
      map: request.data?.map,
      full: request.data?.full,
    };

    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel[]> {
    const request = await this.http.get(RemoteApi.mess, option);
    const results: MessModel[] = request.data?.map((e: MessModel) => e);
    return results;
  }
}

export { MessRemote };
