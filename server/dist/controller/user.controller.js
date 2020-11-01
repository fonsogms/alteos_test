"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entity/User.entity");
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    let { search } = req.query;
    //@ts-ignore
    const { limit } = req.query;
    const query = typeorm_1.getRepository(User_entity_1.User).createQueryBuilder("user"); //this refers to task entity
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
    }
    else {
        query.limit(5);
    }
    const users = yield query.getMany();
    return res.json(users);
    /*   if (search) {
      query.andWhere(
        "(task.title LIKE :search) OR (task.description LIKE :search)",
        { search: `%${search}%` } // el LIKE y los porcentajes es para buscar parcialmente el termino
      );
    } */
    /* const users = await getRepository(User).find();
    return res.json(users); */
});
//# sourceMappingURL=user.controller.js.map