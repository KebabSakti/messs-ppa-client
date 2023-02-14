import { LocationModel } from "../../../domain/entity/location_model";
import { LocationRepository } from "../../../domain/port/repository/location_repository";

class LocationLocal implements LocationRepository {
  private datas: LocationModel[] = [
    {
      id: "1",
      messId: "1",
      map: "https://ihategreenjello.com/wp-content/uploads/2022/11/275459303_1611318435915433_7969747202810879452_n.jpg",
      mess: "Asoka",
      name: "Lantai 1",
      available: true,
    },
    {
      id: "2",
      messId: "1",
      map: "https://cdn-cms.pgimgs.com/static/2019/05/53-denah-desain-rumah-minimalis-modern-7.jpg",
      mess: "Asoka",
      name: "Lantai 2",
      available: false,
    },
    {
      id: "3",
      messId: "1",
      map: "https://i.pinimg.com/originals/68/8a/0c/688a0c006cb413fce8b85a6db868564b.png",
      mess: "Asoka",
      name: "Ground",
      available: false,
    },
  ];

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<LocationModel>((resolve, reject) => {
      const results = this.datas.find((e) => e.id == option!["id"]);

      if (results != undefined) {
        resolve(results);
      }

      reject();
    });
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<LocationModel[]> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<LocationModel[]>((resolve, _) => {
      const results = this.datas;
      resolve(results);
    });
  }
}

export { LocationLocal };
