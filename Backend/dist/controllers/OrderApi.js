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
exports.orderApi = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const razorpay = new razorpay_1.default({
    key_id: process.env.RAZORPAY_API_KEY || "",
    key_secret: process.env.RAZORPAY_API_SECRET || "",
});
const orderApi = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_API_SECRET) {
            throw new Error("Razorpay API keys are not configured");
        }
        const { amount, currency, receipt, notes } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount. Amount must be greater than 0"
            });
        }
        if (!currency) {
            return res.status(400).json({
                success: false,
                message: "Currency is required"
            });
        }
        const orderOptions = {
            amount,
            currency,
        };
        // Create Razorpay order
        const order = yield razorpay.orders.create(orderOptions);
        if (!order) {
            return res.status(500).json({
                success: false,
                message: "Failed to create order"
            });
        }
        res.status(200).json({ order });
    }
    catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({
            success: false,
            message: "Failed to process order",
            error: error instanceof Error ? error.message : "Unknown error occurred"
        });
    }
});
exports.orderApi = orderApi;
