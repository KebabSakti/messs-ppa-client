import { LocationModel } from "../entity/location_model";
import { LocationRepository } from "../port/repository/location_repository";

class LocationInteractor {
  private locationRepository: LocationRepository;

  constructor(locationRepository: LocationRepository) {
    this.locationRepository = locationRepository;
  }

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel> {
    const results = await this.locationRepository.single(option);
    return results;
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel[]> {
    const results = await this.locationRepository.collections(option);
    return results;
  }
}

export { LocationInteractor };
