import { createConnection, getRepository } from "typeorm";
import { User } from "../entity/User.entity";
import data from "./seedData.json";

async function seed() {
  console.log("hello");
  let retries = 5;
  while (retries) {
    console.log("trying", retries);
    try {
      const connection = await createConnection();
      console.log("working?");

      connection.manager.delete(User, {});

      for (let userSeeded of data) {
        const user = new User();

        for (let key in userSeeded) {
          user[key] = userSeeded[key];
        }
        console.log(user);

        await connection.manager.save(user);
      }
      break;
    } catch (err) {
      console.log(err, "the error");
      retries--;
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
}
seed();
