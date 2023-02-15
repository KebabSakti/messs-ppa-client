import { HttpResponseModel } from "../../entity/http_response_model";

abstract class HttpService {
  abstract get(
    url: string,
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel>;

  abstract post(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel>;

  abstract put(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel>;

  abstract delete(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel>;
}

export { HttpService };
