import { MessModel } from "../../entity/mess_model";
import { ReadRepository } from "./crud/read_repository";

abstract class MessRepository extends ReadRepository<MessModel> {}

export { MessRepository };
