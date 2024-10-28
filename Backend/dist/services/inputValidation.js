"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.loginValidation = exports.signupValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const signupValidation = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    phone_no: zod_1.default.string().regex(/^\d{10}$/),
    address: zod_1.default.string().optional(),
    password: zod_1.default.string().min(3),
});
exports.signupValidation = signupValidation;
const loginValidation = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(3),
});
exports.loginValidation = loginValidation;
const productValidation = zod_1.default.object({
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    catageory: zod_1.default.string(),
    price: zod_1.default.number(),
    orignalPrice: zod_1.default.number(),
    quanity: zod_1.default.string(),
    discount: zod_1.default.number(),
    img: zod_1.default.string().optional(),
});
exports.productValidation = productValidation;
