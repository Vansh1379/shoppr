import { Router } from "express";
import { AddToCart, GetCartItem } from "../controllers/cartApi";

const router = Router();

router.post("/add", AddToCart);
router.get("/cartItem", GetCartItem);

export default router;