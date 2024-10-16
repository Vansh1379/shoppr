import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

interface AddToCartBody {
    cartId: number;
    productId: number;
}

//.............................................................................................................

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

// ....................................................................................................................

export const GetCartItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { cartId } = req.body;

        console.log(cartId, "cardID")

        // checking whaether cart exist or not 
        const cartExist = await prisma.cart.findUnique({
            where: { id: cartId }
        });

        if (!cartExist) {
            return res.status(404).json({ msg: "Cart donot exist" });
        }

        // Getting all cart Items 
        const GetCartItem = await prisma.cartItem.findMany({
            where: { cartId: cartId },
            select: { productId: true }
        });


        res.status(200).json({ msg: "AllItems of the cart are these", cartItems: GetCartItem });
    } catch (error) {
        console.error(`This is fuck.. error caught in getcartItem ${error}`);
        next(error);
    }
};

// ......................................................................................................................

export const GetCartId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body;

        // checking wheather user exist or not 
        const userExist = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!userExist) {
            return res.status(404).json({ msg: "user donot Exist" });
        }

        const cartId = await prisma.cart.findFirst({
            where: { userId: userId },
            select: { id: true }
        });

        return res.status(200).json({ msg: "this is cartid of user", cartId })
    } catch (error) {
        console.error(`this is error in getcartId ${error}`);
        next(error);
    }
}