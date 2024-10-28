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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetail = exports.loginLogic = exports.signupAuth = void 0;
const inputValidation_1 = require("../services/inputValidation");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
// ...................................................................................................................................
const signupAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Zod validation
        const createPayload = req.body;
        const parsePayload = inputValidation_1.signupValidation.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(400).json({
                msg: "Invalid input",
                errors: parsePayload.error.errors
            });
        }
        // Check if user already exists
        const userExist = yield prisma.user.findFirst({
            where: { email: createPayload.email }
        });
        if (userExist) {
            return res.status(409).json({
                msg: "User already exists. Please login.",
            });
        }
        // Create new user
        const newUser = yield prisma.user.create({
            data: {
                name: createPayload.name,
                email: createPayload.email,
                phone_no: createPayload.phone_no,
                address: createPayload.address,
                password: createPayload.password,
                cart: {
                    create: {} // This creates a new cart linked to the user
                },
                orders: {
                    create: [] // This prepares the orders relation, but doesn't create any orders yet
                }
            },
            include: {
                cart: true,
                orders: true
            }
        });
        // Generate JWT
        const token = jsonwebtoken_1.default.sign({
            data: newUser.id
        }, 'secret', { expiresIn: '5h' });
        res.status(201).json({
            token,
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                cartId: (_a = newUser.cart) === null || _a === void 0 ? void 0 : _a.id
            }
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "Error in signupAuth controller logic"
        });
        console.error(err);
    }
});
exports.signupAuth = signupAuth;
//.......................................................................................................................................................
const loginLogic = (req, res, nest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //zod
        const createPayload = req.body;
        const parsePayload = inputValidation_1.loginValidation.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Inout by the user bitch",
                errors: parsePayload.error.errors
            });
        }
        //checking wheather user exist or not in db
        const userExists = yield prisma.user.findFirst({
            where: {
                email: createPayload.email,
                password: createPayload.password
            }
        });
        if (userExists) {
            const token = jsonwebtoken_1.default.sign({
                data: userExists.id
            }, "secret", { expiresIn: '5hr' });
            res.status(200).json({
                token
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "errors in loginAuth login in controller logic"
        });
        console.error(err);
    }
    finally {
        console.log("User Loged in Successfully");
    }
});
exports.loginLogic = loginLogic;
//................................................................................................
const UserDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const userDetails = yield prisma.user.findUnique({
            where: { id: userId },
            select: { name: true, email: true, phone_no: true, address: true }
        });
        if (!userDetails) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({
            msg: "This is the cartId of the user",
            data: userDetails
        });
    }
    catch (error) {
        console.error(`This is the error while hetting user details ${error}`);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
});
exports.UserDetail = UserDetail;
