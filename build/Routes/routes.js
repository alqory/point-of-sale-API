"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_1 = require("../Controllers/product");
const queue_1 = require("../Controllers/queue");
const activity_1 = require("../Controllers/activity");
exports.router = (0, express_1.Router)();
// product router
exports.router.get('/api/product', product_1.getAllProduct);
exports.router.get('/api/product/:id', product_1.getDetailProduct);
exports.router.post('/api/product', product_1.createProduct);
exports.router.put('/api/product/update/:id', product_1.updateProduct);
exports.router.delete('/api/product/delete/:id', product_1.removeProduct);
// queue router
exports.router.get('/api/queue', queue_1.getAllQueue);
exports.router.post('/api/queue', queue_1.createQueue);
exports.router.delete('/api/queue/delete/:id', queue_1.deleteQueueFromID);
exports.router.delete('/api/queue/deleteAllData', queue_1.deleteAllData);
// activity router
exports.router.get('/api/activity', activity_1.getActivity);
exports.router.post('/api/activity', activity_1.addActivity);
exports.router.delete('/api/activity/delete/:id', activity_1.deleteActivity);
exports.router.delete('/api/activity/deleteAll', activity_1.deleteAllActivity);
