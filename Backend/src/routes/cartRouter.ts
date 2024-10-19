import { Router } from "express";
import { AddToCart, GetCartId, GetCartItem } from "../controllers/cartApi";

const router = Router();

router.post("/add", AddToCart);
router.get("/cartItem/:cartId", GetCartItem);
router.get("/cartid/:userId", GetCartId);

export default router;