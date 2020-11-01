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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entity/User.entity");
const seedData_json_1 = __importDefault(require("./seedData.json"));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hello");
        try {
            const connection = yield typeorm_1.createConnection();
            console.log("working?");
            connection.manager.delete(User_entity_1.User, {});
            for (let userSeeded of seedData_json_1.default) {
                const user = new User_entity_1.User();
                for (let key in userSeeded) {
                    user[key] = userSeeded[key];
                }
                console.log(user);
                yield connection.manager.save(user);
            }
        }
        catch (err) {
            console.log(err, "the error");
        }
    });
}
seed();
//# sourceMappingURL=seeds.js.map