import { Router } from "express";
import { loginLogic, singupAuth } from "../controllers/userAuth";
import { ProductAuth } from "../controllers/productAuth";

const router = Router();

router.post("/signup", singupAuth);
router.post("/login", loginLogic);
router.post("/add_product", ProductAuth);
router.get("/product", );


export default router;