import { Router } from "express";
import userRouter from "./userRouter"
import productRouter from "./productRouter"
import cartRouter from "./cartRouter"

const router = Router();

router.use("/", userRouter);
router.use("/pro", productRouter);
router.use("/cart", cartRouter);

export default router;