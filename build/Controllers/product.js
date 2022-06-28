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
exports.removeProduct = exports.updateProduct = exports.createProduct = exports.getDetailProduct = exports.getAllProduct = void 0;
const product_db_1 = require("../Models/product.db");
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.query;
    try {
        if (category) {
            res.send(yield product_db_1.product.findAll({
                where: {
                    category: category
                }
            }));
        }
        else {
            const allProduct = yield product_db_1.product.findAll();
            res.status(200).send(allProduct);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
        else {
            res.send(error);
        }
    }
});
exports.getAllProduct = getAllProduct;
const getDetailProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const detailProduct = yield product_db_1.product.findAll({
            where: {
                id: id
            }
        });
        res.status(200).send(detailProduct);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({
                message: error.message
            });
        }
        else {
            res.send(error);
        }
    }
});
exports.getDetailProduct = getDetailProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, category, images, price } = req.body;
    try {
        yield product_db_1.product.create({
            title: title,
            category: category,
            images: images,
            price: price
        });
        res.status(200).json({
            message: "success create product!"
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(400).json({
                message: error.message
            });
        }
        else {
            res.send(error);
        }
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, category, images, price } = req.body;
    try {
        yield product_db_1.product.update({
            title: title,
            category: category,
            images: images,
            price: price
        }, {
            where: {
                id: id
            }
        });
        res.status(200).json({
            message: "success updated!"
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(id);
            res.status(400).json({
                message: error.message
            });
        }
        else {
            res.send(error);
        }
    }
});
exports.updateProduct = updateProduct;
const removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_db_1.product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            message: "suceess deleted"
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
});
exports.removeProduct = removeProduct;
