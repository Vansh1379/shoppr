import { Router } from "express";
import { deleteProduct, GetAllProduct, ProductAuth } from "../controllers/productAuth";

const router = Router();

router.post("/add_product", ProductAuth);
router.get("/product", GetAllProduct);
router.post("/delete", deleteProduct);

export default router;