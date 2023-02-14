import { VoucherModel } from "../../../domain/entity/voucher_model";
import { VoucherRepository } from "../../../domain/port/repository/voucher_repository";

class VoucherLocal implements VoucherRepository {
  private datas: VoucherModel[] = [
    {
      id: "1",
      used: false,
      expired: "1676336879",
    },
    {
      id: "2",
      used: true,
      expired: "1676336879",
    },
    {
      id: "3",
      used: true,
      expired: "1676336879",
    },
    {
      id: "4",
      used: true,
      expired: "1676336879",
    },
    {
      id: "5",
      used: true,
      expired: "1676336879",
    },
  ];

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<VoucherModel>((resolve, reject) => {
      const results = this.datas.find((e) => e.id == option!["id"]);

      if (results != undefined) {
        resolve(results);
      }

      reject();
    });
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel[]> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<VoucherModel[]>((resolve, reject) => {
      const results = this.datas;
      resolve(results);
    });
  }

  async update(id: string, option: { [key: string]: any }): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  }
}

export { VoucherLocal };
