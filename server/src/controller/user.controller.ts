import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User.entity";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  //@ts-ignore
  let { search }: string | undefined = req.query;
  //@ts-ignore
  const { limit } = req.query;
  const query = getRepository(User).createQueryBuilder("user"); //this refers to task entity
  query.where("LOWER(user.name) like :name", {
    //@ts-ignore

    name: `%${search.toLowerCase()}%`,
  });
  /*   query.orWhere(" LOWER( user.company ) like :name", {
    name: `%${search.toLowerCase()}%`,
  }); */
  console.log(limit);
  if (limit) {
    //@ts-ignore
    query.limit(limit);
  } else {
    query.limit(5);
  }
  const users = await query.getMany();
  return res.json(users);
  /*   if (search) {
    query.andWhere(
      "(task.title LIKE :search) OR (task.description LIKE :search)",
      { search: `%${search}%` } // el LIKE y los porcentajes es para buscar parcialmente el termino
    );
  } */

  /* const users = await getRepository(User).find();
  return res.json(users); */
};
