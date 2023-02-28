import { ConfigModel } from "../../entity/config_model";
import { SingleResult } from "./crud/single_result";

abstract class ConfigRepository implements SingleResult<ConfigModel> {
  abstract single(
    option?: { [key: string]: any } | undefined
  ): Promise<ConfigModel>;
}

export { ConfigRepository };
