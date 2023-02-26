import { RemoteApi } from "../../../common/config/remote_api";
import { VoucherModel } from "../../../domain/entity/voucher_model";
import { VoucherRepository } from "../../../domain/port/repository/voucher_repository";
import { HttpService } from "../../../domain/port/service/http_service";

class VoucherRemote implements VoucherRepository {
  private http: HttpService;

  constructor(http: HttpService) {
    this.http = http;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel> {
    const request = await this.http.get(RemoteApi.vouchers);

    const results: VoucherModel = {
      id: request.data?.id,
    };

    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel[]> {
    const request = await this.http.get(RemoteApi.vouchers, option);
    const results: VoucherModel[] = request.data?.map((e: VoucherModel) => e);
    return results;
  }

  async update(id: string, option: { [key: string]: any }): Promise<void> {
    await this.http.post(RemoteApi.vouchers, option);
  }
}

export { VoucherRemote };
