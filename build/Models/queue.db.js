"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queue = void 0;
const Database_1 = require("../Configs/Database");
const sequelize_1 = require("sequelize");
exports.queue = Database_1.posDB.define('queue', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    data: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true
    },
    total_price: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});
// If have changes in db column, ignone comment sync in bottom!
exports.queue.sync();
