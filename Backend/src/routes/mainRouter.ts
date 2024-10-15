import { Router } from "express";
import userRouter from "./userRouter"
import productRouter from "./productRouter"
import { AddToCart } from "../controllers/cartApi";

const router = Router();

router.use("/", userRouter);
router.use("/pro", productRouter);

export default router;