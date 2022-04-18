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
exports.dbAuthenticate = exports.posDB = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Develpoment db setting
exports.posDB = new sequelize_1.Sequelize('posdb', 'postgres', '123456', {
    host: 'localhost',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
// Production setting
// export const posDB = new Sequelize(`${process.env.DATABASE_URI}`,{
//     dialectOptions : {
//         ssl :  {
//                     require: true,
//                     rejectUnauthorized: false
//                 }
//     }
// })
const dbAuthenticate = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.posDB.authenticate();
        console.log('Database connected . . . ');
    }
    catch (error) {
        console.log(error);
    }
});
exports.dbAuthenticate = dbAuthenticate;
