import { MessModel } from "../../../domain/entity/mess_model";
import { MessRepository } from "../../../domain/port/repository/mess_repository";

class MessLocal implements MessRepository {
  private static datas: MessModel[] = [];

  async single(): Promise<MessModel> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    return await new Promise<MessModel>((resolve) => {
      const results: MessModel = {
        id: "1",
        name: "Asoka",
        picture:
          "https://lh3.googleusercontent.com/yjDoBdvT5hee7GpGXk5fSi43sU0E_4_f2YeopUW99NJODjcMWAHbDWhkLO6KvjwTXvjQwlyRR0gQx2w2CnGfyohY8ETkGVzVwo-O5ti6uk8gaHecDEMA4w4yyiCAHepf29ZGXE8M",
        full: false,
      };

      resolve(results);
    });
  }

  async collections(): Promise<MessModel[]> {
    throw new Error("Method not implemented.");
  }
}

export { MessLocal };
