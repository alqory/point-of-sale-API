import { Request, Response } from 'express';
import { product } from '../Models/product.db';
import { productType } from '../Types/Type'


type createOrUpdateProductType = 
    Pick<productType, 'title' | 'category' | 'images' | 'price'>

export const getAllProduct = async(req: Request<{},{},{},{category:string}>, res: Response):Promise<void> => {
    const { category } = req.query;
    
    try {
        if(category){
            res.send(
                await product.findAll({
                    where : {
                        category : category
                    }
                })
            )
        }else{
            const allProduct = await product.findAll();
            res.status(200).send(allProduct)  
        }

    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }else{
            res.send(error)
        }
    }
}

export const getDetailProduct = async(req:Request<{id:number}, {}, {}, {}>, res:Response):Promise<void> => {
    const { id } = req.params;
    try {
        const detailProduct = await product.findAll({
            where : {
                id : id
            }
        })
        res.status(200).send(detailProduct)

    } catch (error) {
        if(error instanceof Error){
            res.json({
                message : error.message
            })
        }else{
            res.send(error)
        }
    }
}

export const createProduct = async(req:Request<{},{},createOrUpdateProductType,{}>, res:Response):Promise<void> => {
    const { title, category, images, price } = req.body;
    try {
        await product.create({
            
            title       : title,
            category    : category,
            images      : images,
            price       : price
        })
        res.status(200).json({
            message : "success create product!"
        })
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
            
            res.status(400).json({
                message : error.message
            })
        }else{
            res.send(error)
        }
    }
}

export const updateProduct = async(req:Request<{id:number},{},createOrUpdateProductType,{}>, res:Response):Promise<void> => {
    const { id } = req.params;
    const { title, category, images, price } = req.body;

    try {
        await product.update({
            title    : title,
            category : category,
            images   : images,
            price     :price
        },{
            where : {
                id : id
            }
        })
        
        res.status(200).json({
            message : "success updated!"
        })
        

    } catch (error) {
        if(error instanceof Error){
            console.log(id);
            
            res.status(400).json({
                message : error.message
            })
        }else{
            res.send(error)
        }
    }
}

export const removeProduct = async(req:Request<{id:number}, {}, {}, {}>, res:Response):Promise<void> =>{
    try {
        await  product.destroy({
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            message : "suceess deleted"
        })

    } catch (error) {
        if(error instanceof Error){   
            res.status(400).json({
                message : error.message
            })
        }
    }
}

