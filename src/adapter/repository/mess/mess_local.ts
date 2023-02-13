import { MessModel } from "../../../domain/entity/mess_model";
import { MessRepository } from "../../../domain/port/repository/mess_repository";

class MessLocal implements MessRepository {
  private datas: MessModel[] = [
    {
      id: "1",
      name: "Asoka",
      picture:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      full: false,
    },
    {
      id: "2",
      name: "Mawar",
      picture:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
      full: true,
    },
    {
      id: "3",
      name: "Anggrek",
      picture:
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      full: false,
    },
  ];

  async single(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<MessModel>((resolve, reject) => {
      const results = this.datas.find((e) => e === option!["id"]);

      if (results != undefined) {
        resolve(results);
      }

      reject();
    });
  }

  async collections(
    option?: { [key: string]: any } | undefined
  ): Promise<MessModel[]> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<MessModel[]>((resolve, reject) => {
      const results = this.datas;
      resolve(results);
    });
  }
}

export { MessLocal };
