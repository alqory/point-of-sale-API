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
exports.deleteAllData = exports.deleteQueueFromID = exports.createQueue = exports.getAllQueue = void 0;
const queue_db_1 = require("../Models/queue.db");
const getAllQueue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allData = yield queue_db_1.queue.findAll();
        res.status(200).send(allData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
});
exports.getAllQueue = getAllQueue;
const createQueue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data, total_price, name } = req.body;
    try {
        yield queue_db_1.queue.create({
            id: id,
            data: data,
            total_price: total_price,
            name: name
        });
        res.status(200).json({
            message: "success!"
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
});
exports.createQueue = createQueue;
const deleteQueueFromID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield queue_db_1.queue.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            message: 'success deleted!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
});
exports.deleteQueueFromID = deleteQueueFromID;
const deleteAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield queue_db_1.queue.truncate();
        res.status(200).json({
            message: 'success deleted all data!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message
            });
        }
    }
});
exports.deleteAllData = deleteAllData;
