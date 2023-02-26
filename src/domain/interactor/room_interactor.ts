import { RoomModel } from "../entity/room_model";
import { RoomRepository } from "../port/repository/room_repository";

class RoomInteractor {
  private roomRepository: RoomRepository;

  constructor(roomRepository: RoomRepository) {
    this.roomRepository = roomRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel> {
    const results = await this.roomRepository.single(option);
    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel[]> {
    const results = await this.roomRepository.collections(option);
    return results;
  }
}

export { RoomInteractor };

