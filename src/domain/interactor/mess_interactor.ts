import { MessModel } from "../entity/mess_model";
import { MessRepository } from "../port/repository/mess_repository";

class MessInteractor {
  private messRepository: MessRepository;

  constructor(messRepository: MessRepository) {
    this.messRepository = messRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel> {
    const results = await this.messRepository.single(option);
    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel[]> {
    const results = await this.messRepository.collections(option);
    return results;
  }
}

export { MessInteractor };
