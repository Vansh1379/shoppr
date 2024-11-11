"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderApi_1 = require("../controllers/OrderApi");
const router = (0, express_1.Router)();
router.post("/razorpay", OrderApi_1.orderApi);
exports.default = router;
