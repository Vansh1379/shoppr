import { PrismaClient } from "@prisma/client";
import { NextFunction, Request } from "express";
import { Response } from "express";
import { productValidation } from "../services/inputValidation";

const prisma = new PrismaClient();

export const ProductAuth = async (req:Request, res:Response, next:NextFunction)=>{
    try{

        const createPayload = req.body;
        const parsePayload = productValidation.safeParse(createPayload);

        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Input send by the bitch",
                errors: parsePayload.error.errors
            });
        }

        const newProduct = await prisma.product.create({
            data: {
                name: createPayload.name,
                description: createPayload.description,
                catageory: createPayload.catageory,
                price: createPayload.price,
                img: createPayload.img
            }
        });

        if(newProduct){
            res.status(200).json({
                msg: "Product has been added"
            })
        }

    }
    catch(err){
        res.status(500).json({
            msg: "The product have been added to the Database"
        })
        console.error(err);
    }
};

//..........................................................................................................

export const GetAllProduct = async(req:Request, res:Response, next:NextFunction)=>{
    
}