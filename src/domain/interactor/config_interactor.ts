import { ConfigModel } from "../entity/config_model";
import { ConfigRepository } from "../port/repository/config_repository";

class ConfigInteractor {
  private configRepository: ConfigRepository;

  constructor(configRepository: ConfigRepository) {
    this.configRepository = configRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<ConfigModel> {
    const results = await this.configRepository.single(option);
    return results;
  }
}

export { ConfigInteractor };
