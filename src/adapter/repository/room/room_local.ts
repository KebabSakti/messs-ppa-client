import { RoomModel } from "../../../domain/entity/room_model";
import { RoomRepository } from "../../../domain/port/repository/room_repository";

class RoomLocal implements RoomRepository {
  private datas: RoomModel[] = [
    {
      id: "1",
      messId: "1",
      locationId: "1",
      location: "Lantai 1",
      mess: "Asoka",
      picture:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Ruang No 01",
      available: true,
    },
    {
      id: "2",
      messId: "2",
      locationId: "2",
      location: "Lantai 2",
      mess: "Mawar",
      picture:
        "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      name: "Ruang No 01",
      available: true,
    },
    {
      id: "3",
      messId: "2",
      locationId: "2",
      location: "Lantai 2",
      mess: "Mawar",
      picture:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      name: "Ruang No 02",
      available: false,
    },
    {
      id: "4",
      messId: "2",
      locationId: "2",
      location: "Lantai 2",
      mess: "Mawar",
      picture:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      name: "Ruang No 03",
      available: true,
    },
    {
      id: "5",
      messId: "2",
      locationId: "2",
      location: "Lantai 2",
      mess: "Mawar",
      picture:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      name: "Ruang No 04",
      available: true,
    },
    {
      id: "6",
      messId: "2",
      locationId: "2",
      location: "Lantai 2",
      mess: "Mawar",
      picture:
        "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      name: "Ruang No 05",
      available: true,
    },
  ];

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<RoomModel>((resolve, reject) => {
      const results = this.datas.find((e) => e === option!["id"]);

      if (results != undefined) {
        resolve(results);
      }

      reject();
    });
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<RoomModel[]> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<RoomModel[]>((resolve, reject) => {
      const results = this.datas;
      resolve(results);
    });
  }
}

export { RoomLocal };
