"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCartItem = exports.GetCartId = exports.GetCartItem = exports.AddToCart = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//.............................................................................................................
const AddToCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartId, productId } = req.body;
        // Check if the cart exists
        const cartExist = yield prisma.cart.findUnique({
            where: { id: cartId }
        });
        if (!cartExist) {
            return res.status(404).json({ message: "Cart not found" });
        }
        // Check if the product exists
        const productExist = yield prisma.product.findUnique({
            where: { id: productId }
        });
        if (!productExist) {
            return res.status(404).json({ message: "Product not found" });
        }
        // Add the product to the cart
        const addProductToCart = yield prisma.cartItem.create({
            data: {
                cartId: cartId,
                productId: productId,
            }
        });
        res.status(200).json({ message: "Product added to cart successfully", cartItem: addProductToCart });
    }
    catch (error) {
        console.error(`This error is caught in AddToCart${error}`);
        next(error);
    }
});
exports.AddToCart = AddToCart;
// ....................................................................................................................
const GetCartItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cartId = parseInt(req.params.cartId);
        // checking whaether cart exist or not 
        const cartExist = yield prisma.cart.findUnique({
            where: { id: cartId }
        });
        if (!cartExist) {
            return res.status(404).json({ msg: "Cart donot exist" });
        }
        // Getting all cart Items 
        const GetCartItem = yield prisma.cartItem.findMany({
            where: { cartId: cartId },
            select: { productId: true }
        });
        res.status(200).json({ msg: "AllItems of the cart are these", cartItems: GetCartItem });
    }
    catch (error) {
        console.error(`This is fuck.. error caught in getcartItem ${error}`);
        next(error);
    }
});
exports.GetCartItem = GetCartItem;
// ......................................................................................................................
const GetCartId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.userId);
        console.log(userId);
        // Check whether user exists or not
        const userExist = yield prisma.user.findUnique({
            where: { id: userId }
        });
        if (!userExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        const cartId = yield prisma.cart.findFirst({
            where: { userId: userId },
            select: { id: true }
        });
        return res.status(200).json({ msg: "This is the cartId of the user", cartId });
    }
    catch (error) {
        console.error(`Error in GetCartId: ${error}`);
        next(error);
    }
});
exports.GetCartId = GetCartId;
// .....................................................................................................................................................................
const DeleteCartItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log(`this is error in deletecartitem ${error}`);
    }
});
exports.DeleteCartItem = DeleteCartItem;
