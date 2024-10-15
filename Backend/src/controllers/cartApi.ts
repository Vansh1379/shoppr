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

        // Check if the cart exists
        const cartExist = await prisma.cart.findUnique({
            where: { id: cartId }
        });

        if (!cartExist) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Check if the product exists
        const productExist = await prisma.product.findUnique({
            where: { id: productId }
        });

        if (!productExist) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Add the product to the cart
        const addProductToCart = await prisma.cartItem.create({
            data: {
                cartId: cartId,
                productId: productId,
            }
        });

        res.status(200).json({ message: "Product added to cart successfully", cartItem: addProductToCart });
    } catch (error) {
        console.error(`This error is caught in AddToCart${error}`);
        next(error);
    }
};

export const GetCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { cartId } = req.body;

        // checking whaether cart exist or not 
        const cartExist = await prisma.cart.findUnique({
            where: { id: cartId }
        });

        if (!cartExist) {
            return res.status(404).json({ msg: "Cart donot exist" });
        }

        // Getting all cart Items 
        const GetCartItem = prisma.cartItem.findMany({
            where: { cartId: cartId },
            select: {
                productId: true
            }
        });


        res.status(200).json({ msg: "AllItems of the cart are these", cartItems: GetCartItem });
    } catch (error) {
        console.error(`This is fuck.. error caught in getcartItem ${error}`);
        next(error);
    }
};