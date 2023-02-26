import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RemoteApi } from "../../../common/config/remote_api";
import { HttpExceptionModel } from "../../../domain/entity/http_exception_model";
import { HttpResponseModel } from "../../../domain/entity/http_response_model";
import { AppInteractor } from "../../../domain/interactor/app_interactor";
import { HttpService } from "../../../domain/port/service/http_service";

class AxiosClient implements HttpService {
  private appInteractor: AppInteractor;

  constructor(appInteractor: AppInteractor) {
    this.appInteractor = appInteractor;
  }

  private instance(): AxiosInstance {
    const appConfig = this.appInteractor.config();

    let config: AxiosRequestConfig = {
      baseURL: RemoteApi.base,
      headers: { "Content-Type": "application/json" },
    };

    if (appConfig != null) {
      config = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${appConfig.auth}`,
        },
      };
    }

    const instance = axios.create(config);

    return instance;
  }

  async get(
    url: string,
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel> {
    try {
      const request = await this.instance().get(url, {
        params: params,
      });

      const results: HttpResponseModel = {
        status: request.status,
        data: request.data,
      };

      return results;
    } catch (error: any) {
      const exception: HttpExceptionModel = {
        status: error.response.status,
        message: error.response.data,
      };

      throw exception;
    }
  }

  async post(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any } | undefined
  ): Promise<HttpResponseModel> {
    try {
      const request = await this.instance().post(url, {
        data: data,
        params: params,
      });

      const results: HttpResponseModel = {
        status: request.status,
        data: request.data,
      };

      return results;
    } catch (error: any) {
      const exception: HttpExceptionModel = {
        status: error.response.status,
        message: error.response.data,
      };

      throw exception;
    }
  }

  async put(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any } | undefined
  ): Promise<HttpResponseModel> {
    try {
      const request = await this.instance().put(url, {
        data: data,
        params: params,
      });

      const results: HttpResponseModel = {
        status: request.status,
        data: request.data,
      };

      return results;
    } catch (error: any) {
      const exception: HttpExceptionModel = {
        status: error.response.status,
        message: error.response.data,
      };

      throw exception;
    }
  }

  async delete(
    url: string,
    data: { [key: string]: any },
    params?: { [key: string]: any } | undefined
  ): Promise<HttpResponseModel> {
    try {
      const request = await this.instance().delete(url, {
        data: data,
        params: params,
      });

      const results: HttpResponseModel = {
        status: request.status,
        data: request.data,
      };

      return results;
    } catch (error: any) {
      const exception: HttpExceptionModel = {
        status: error.response.status,
        message: error.response.data,
      };

      throw exception;
    }
  }
}

export { AxiosClient };
