import { RoomModel } from "../../entity/room_model";
import { ReadRepository } from "./crud/read_repository";

abstract class RoomRepository extends ReadRepository<RoomModel> {}

export { RoomRepository };
