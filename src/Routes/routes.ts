import { Router } from "express";
import {
    getAllProduct,
    getDetailProduct,
    createProduct,
    updateProduct,
    removeProduct
} from '../Controllers/product'

import {
    getAllQueue,
    createQueue,
    deleteQueueFromID,
    deleteAllData
} from '../Controllers/queue'

import {
     getActivity,
     addActivity,
     deleteActivity,
     deleteAllActivity
} from "../Controllers/activity";

export const router = Router();

// product router
router.get('/api/product', getAllProduct)
router.get('/api/product/:id', getDetailProduct)
router.post('/api/product', createProduct)
router.put('/api/product/update/:id', updateProduct)
router.delete('/api/product/delete/:id',removeProduct)

// queue router
router.get('/api/queue', getAllQueue)
router.post('/api/queue', createQueue)
router.delete('/api/queue/delete/:id', deleteQueueFromID)
router.delete('/api/queue/deleteAllData', deleteAllData)

// activity router
router.get('/api/activity', getActivity)
router.post('/api/activity', addActivity)
router.delete('/api/activity/delete/:id', deleteActivity)
router.delete('/api/activity/deleteAll', deleteAllActivity)