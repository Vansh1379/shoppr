"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const cartRouter_1 = __importDefault(require("./cartRouter"));
const orderRouter_1 = __importDefault(require("./orderRouter"));
const router = (0, express_1.Router)();
router.use("/", userRouter_1.default);
router.use("/pro", productRouter_1.default);
router.use("/cart", cartRouter_1.default);
router.use("/order", orderRouter_1.default);
exports.default = router;
