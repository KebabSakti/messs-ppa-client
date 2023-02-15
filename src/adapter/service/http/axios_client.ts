import axios, { AxiosRequestConfig } from "axios";
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

  private config(): AxiosRequestConfig {
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

    return config;
  }

  async get(
    url: string,
    params?: { [key: string]: any }
  ): Promise<HttpResponseModel> {
    try {
      const request = await axios.get(url, {
        ...this.config(),
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
        message: error.response.statusText,
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
      const request = await axios.post(url, {
        ...this.config(),
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
        message: error.response.statusText,
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
      const request = await axios.put(url, {
        ...this.config(),
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
        message: error.response.statusText,
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
      const request = await axios.delete(url, {
        ...this.config(),
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
        message: error.response.statusText,
      };

      throw exception;
    }
  }
}

export { AxiosClient };
