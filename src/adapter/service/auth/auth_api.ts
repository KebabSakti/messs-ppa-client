import { RemoteApi } from "../../../common/config/remote_api";
import type { AuthModel } from "../../../domain/entity/auth_model";
import type { AuthService } from "../../../domain/port/service/auth_service";
import { HttpService } from "../../../domain/port/service/http_service";

class AuthApi implements AuthService {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async login(option: AuthModel): Promise<string> {
    const endPoint = option.employee
      ? RemoteApi.authEmployee
      : RemoteApi.authGuest;

    const request = await this.http.post(endPoint, option);
    const results = request.data!.toString();
    return results;
  }

  async logout(): Promise<void> {
    //
  }
}

export { AuthApi };
