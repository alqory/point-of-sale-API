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
exports.deleteAllActivity = exports.deleteActivity = exports.addActivity = exports.getActivity = void 0;
const activity_db_1 = require("../Models/activity.db");
const getActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield activity_db_1.activity.findAll();
        res.status(200).send(data);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.getActivity = getActivity;
const addActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, date, data, total_price } = req.body;
    try {
        yield activity_db_1.activity.create({
            id: id,
            date: date,
            data: data,
            total_price: total_price
        });
        res.status(200).json({
            message: 'Success add activity!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.addActivity = addActivity;
const deleteActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield activity_db_1.activity.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'success deleted!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.deleteActivity = deleteActivity;
const deleteAllActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield activity_db_1.activity.truncate();
        res.json({
            message: 'success deleted all rows!'
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.deleteAllActivity = deleteAllActivity;
