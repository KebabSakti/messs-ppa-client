import { BookingModel } from "../../../domain/entity/booking_model";
import { BookingRepository } from "../../../domain/port/repository/booking_repository";

class BookingLocal implements BookingRepository {
  private datas: BookingModel[] = [
    {
      id: "BK001",
      mess: "Asoka",
      room: "Kamar 01",
      picture:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Off",
      checkinDate: "14 Jan 2023 06:00 PM",
      checkoutDate: "-",
      note: "-",
      location: "Lantai 1",
      checkin: true,
    },
    {
      id: "BK002",
      mess: "Asoka",
      room: "Kamar 01",
      picture:
        "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      description: "Off",
      checkinDate: "10 Jan 2023 06:00 PM",
      checkoutDate: "11 Jan 2023 06:00 PM",
      note: "-",
      location: "Lantai 1",
      checkin: false,
    },
    {
      id: "BK003",
      mess: "Asoka",
      room: "Kamar 01",
      picture:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "Off",
      checkinDate: "08 Jan 2023 06:00 PM",
      checkoutDate: "09 Jan 2023 06:00 PM",
      note: "-",
      location: "Lantai 1",
      checkin: false,
    },
    {
      id: "BK004",
      mess: "Asoka",
      room: "Kamar 01",
      picture:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "Off",
      checkinDate: "05 Jan 2023 06:00 PM",
      checkoutDate: "06 Jan 2023 06:00 PM",
      note: "-",
      location: "Lantai 1",
      checkin: false,
    },
    {
      id: "BK005",
      mess: "Asoka",
      room: "Kamar 01",
      picture:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "Off",
      checkinDate: "02 Jan 2023 06:00 PM",
      checkoutDate: "02 Jan 2023 06:00 PM",
      note: "-",
      location: "Lantai 1",
      checkin: false,
    },
  ];

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<BookingModel>((resolve, reject) => {
      const results = this.datas.find((e) => e.id == option!["id"]);

      if (results != undefined) {
        resolve(results);
      }

      reject();
    });
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<BookingModel[]> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<BookingModel[]>((resolve, reject) => {
      const results = this.datas;
      resolve(results);
    });
  }

  async store(option: { [key: string]: any }): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  }
}

export { BookingLocal };
