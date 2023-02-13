import { MessModel } from "../../entity/mess_model";
import { Reader } from "./crud/reader";

abstract class MessRepository extends Reader<MessModel> {}

export { MessRepository };
