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
exports.updateCategory = exports.deleteCategory = exports.createCategory = exports.getCategory = void 0;
const category_db_1 = require("../Models/category.db");
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield category_db_1.category.findAll();
        res.send(data);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.getCategory = getCategory;
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.body;
    try {
        yield category_db_1.category.create({
            id: id,
            name: name
        });
        res.status(200).json({
            message: 'success create new category'
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
exports.createCategory = createCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield category_db_1.category.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'deleted!'
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
exports.deleteCategory = deleteCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name } = req.body;
    try {
        yield category_db_1.category.update({
            id: id,
            name: name
        }, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'updated!'
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
exports.updateCategory = updateCategory;
