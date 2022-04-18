import { category } from '../Models/category.db'
import { Request, Response } from 'express'

type categoryType = {
    id : number,
    name : string
}

export const getCategory = async(req:Request, res:Response):Promise<void> => {
    try {
        const data = await category.findAll()
        res.send(data)
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const createCategory = async(req:Request<{},{},categoryType,{}>, res:Response):Promise<void> => {
    const { id, name } = req.body
    try {
        await category.create({
            id : id,
            name : name
        })
        res.status(200).json({
            message : 'success create new category'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const deleteCategory = async(req:Request<{id:number},{},{},{}>, res:Response):Promise<void> => {
    try {
        await category.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json({
            message : 'deleted!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}

export const updateCategory = async(req:Request<{id:number},{},categoryType,{}>, res:Response):Promise<void> => {
    const { id, name } = req.body
    try {
        await category.update({
            id : id,
            name : name
        },{
            where : {
                id : req.params.id
            }
        })
        res.json({
            message : 'updated!'
        })
    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }
    }
}