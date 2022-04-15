import { activity } from "../Models/activity.db";
import { Request, Response } from "express";
import { productType } from '../Types/Type'

type activityTypes = {
    id : number
    date : string
    data : Array<productType>
    total_price : number

}

export const getActivity = async(req:Request, res:Response):Promise<void> => {
    try {
        const data = await activity.findAll();
        res.status(200).send(data)
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const addActivity = async(req:Request<{},{},activityTypes,{}>, res:Response):Promise<void> => {
   
    const { id, date, data, total_price } = req.body

    try {
        await activity.create({
            id : id,
            date : date,
            data : data,
            total_price : total_price
        })
        res.status(200).json({
            message : 'Success add activity!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const deleteActivity = async(req:Request<{id:number},{},{},{}>, res:Response):Promise<void> => {
    try {
        await activity.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json({
            message : 'success deleted!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const deleteAllActivity = async(req:Request, res:Response):Promise<void> => {
    try {
        await activity.truncate()
        res.json({
            message : 'success deleted all rows!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}