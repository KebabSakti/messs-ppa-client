import { VoucherModel } from "../../entity/voucher_model";
import { ReadRepository } from "./crud/read_repository";
import { UpdateAction } from "./crud/update_action";

abstract class VoucherRepository
  implements ReadRepository<VoucherModel>, UpdateAction
{
  abstract single(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel>;

  abstract collections(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel[]>;

  abstract update(id: string, option: { [key: string]: any }): Promise<void>;
}

export { VoucherRepository };
