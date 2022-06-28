"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activity = void 0;
const Database_1 = require("../Configs/Database");
const sequelize_1 = require("sequelize");
exports.activity = Database_1.posDB.define('activity', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
    },
    data: {
        type: sequelize_1.DataTypes.JSONB
    },
    total_price: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false
});
exports.activity.sync({ alter: true });
