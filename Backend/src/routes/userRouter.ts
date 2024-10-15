import { Router } from "express";
import { loginLogic, signupAuth } from "../controllers/userAuth";
import { AddToCart } from "../controllers/cartApi";

const router = Router();

router.post("/signup", signupAuth);
router.post("/login", loginLogic);
router.post("/cart", AddToCart);


export default router;