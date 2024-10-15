import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface AddToCartBody {
    cartId: number;
    productId: number;
}

export const AddToCart = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { cartId, productId } = req.body as AddToCartBody;

        const cartExist = await prisma.cart.findUnique({
            where: { id: cartId }
        });

        if (!cartExist) {
            return res.status(404).json({ message: "Cart not found" });
        }
        else {
            const AddProductToCart = await prisma.cartItem.create({
                data: {
                    cartId: cartId,
                    productId: productId, 
                }
            })
        }


        res.status(200).json({ message: "Product added to cart successfully" });
    } catch (error) {
        next(error);
    }
};