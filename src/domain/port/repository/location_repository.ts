import { LocationModel } from "../../entity/location_model";
import { ReadRepository } from "./crud/read_repository";

abstract class LocationRepository extends ReadRepository<LocationModel> {}

export { LocationRepository };

