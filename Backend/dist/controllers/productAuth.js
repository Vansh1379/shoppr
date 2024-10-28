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
exports.ProductById = exports.deleteProduct = exports.GetAllProduct = exports.ProductAuth = void 0;
const client_1 = require("@prisma/client");
const inputValidation_1 = require("../services/inputValidation");
const prisma = new client_1.PrismaClient();
const ProductAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createPayload = req.body;
        const parsePayload = inputValidation_1.productValidation.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Input send by the bitch",
                errors: parsePayload.error.errors
            });
        }
        const newProduct = yield prisma.product.create({
            data: {
                name: createPayload.name,
                description: createPayload.description,
                catageory: createPayload.catageory,
                price: createPayload.price,
                orignalPrice: createPayload.orignalPrice,
                quantity: createPayload.quantity,
                discount: createPayload.discount,
                img: createPayload.img
            }
        });
        if (newProduct) {
            res.status(200).json({
                msg: "Product has been added"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "The product have been added to the Database"
        });
        console.error(err);
    }
});
exports.ProductAuth = ProductAuth;
//..........................................................................................................
const GetAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const getProduct = yield prisma.product.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            catageory: true,
            price: true,
            orignalPrice: true,
            quantity: true,
            discount: true,
            img: true
        }
    });
    if (getProduct) {
        res.status(202).json({
            msg: "You have got all the product listed",
            getProduct
        });
    }
});
exports.GetAllProduct = GetAllProduct;
//.......................................................................................................
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteProduct = deleteProduct;
// ................................................................................................................
const ProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let productID = Number(req.params.id);
    try {
        const getProductById = yield prisma.product.findUnique({
            where: {
                id: productID,
            }
        });
        if (getProductById) {
            res.status(202).json({
                getProductById
            });
        }
    }
    catch (error) {
        console.error(`this is the fucking error ${error}`);
    }
});
exports.ProductById = ProductById;
