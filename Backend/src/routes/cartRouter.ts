import { Router } from "express";
import { AddToCart, GetCartId, GetCartItem } from "../controllers/cartApi";

const router = Router();

router.post("/add", AddToCart);
router.get("/cartItem", GetCartItem);
router.get("/cartid", GetCartId);

export default router;