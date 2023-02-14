import { VoucherModel } from "../entity/voucher_model";
import { VoucherRepository } from "../port/repository/voucher_repository";

class VoucherInteractor {
  private voucherRepository: VoucherRepository;

  constructor(voucherRepository: VoucherRepository) {
    this.voucherRepository = voucherRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel> {
    const results = await this.voucherRepository.single(option);
    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<VoucherModel[]> {
    const results = await this.voucherRepository.collections(option);
    return results;
  }

  async update(id: string, option: { [key: string]: any }): Promise<void> {
    await this.voucherRepository.update(option);
  }
}

export { VoucherInteractor };
