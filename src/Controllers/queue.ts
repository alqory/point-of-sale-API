import { Request, Response } from 'express';
import { queue } from '../Models/queue.db';
import { productType } from '../Types/Type'

type queueTypes = {
    id : number,
    serial_id : number,
    data : productType[],
    total_price :number,
    name : string
}

export const getAllQueue = async(req:Request, res:Response):Promise<void> => {
    try {
        const allData = await queue.findAll();
        res.status(200).send(allData)

    } catch (error) {
        if(error instanceof Error){
            res.status(404).json({
                message : error.message
            })
        }
    }
}

export const createQueue = async(req:Request<{},{}, queueTypes,{}>, res:Response):Promise<void> => {
    const { serial_id, data, total_price, name } = req.body;
    try {
       await queue.create({
           serial_id     : serial_id,
           data          : data,
           total_price   : total_price,
           name          : name
       }) 
       res.status(200).json({
           message : "success!"
       })

    } catch (error) {
        if(error instanceof Error){
            res.status(404).json({
                message : error.message
            })
        }
    }
}

export const deleteQueueFromID = async(req:Request<{id:number},{},{},{}>, res:Response):Promise<void> => {
    try {
        await queue.destroy({
            where : {
                id : req.params.id
            }
        })

        res.status(200).json({
            message : 'success deleted!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.status(404).json({
                message : error.message
            })
        }
    }
}

export const deleteAllData = async(req:Request, res:Response):Promise<void> => {
    try {
        await queue.truncate();
        res.status(200).json({
            message : 'success deleted all data!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.status(404).json({
                message : error.message
            })
        }
    }
}