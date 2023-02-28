import { ConfigModel } from "../../../domain/entity/config_model";
import { ConfigRepository } from "../../../domain/port/repository/config_repository";
import { HttpService } from "../../../domain/port/service/http_service";
import { RemoteApi } from "../../../common/config/remote_api";

class ConfigRemote implements ConfigRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<ConfigModel> {
    const request = await this.http.get(`${RemoteApi.configs}/${option!.key}`);

    const results: ConfigModel = {
      id: request.data?.id,
      key: request.data?.key,
      value: request.data?.value,
    };

    return results;
  }
}

export { ConfigRemote };
