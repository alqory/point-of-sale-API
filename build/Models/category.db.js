"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const Database_1 = require("../Configs/Database");
const sequelize_1 = require("sequelize");
exports.category = Database_1.posDB.define('category', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.category.sync({ alter: true });
