"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const Database_1 = require("../Configs/Database");
const sequelize_1 = require("sequelize");
exports.product = Database_1.posDB.define('product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    category: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    images: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    qty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    decs: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    total_price: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    timestamps: false
});
exports.product.sync({
    force: true
});
