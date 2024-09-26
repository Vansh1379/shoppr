import { Router } from "express";
import { deleteProduct, GetAllProduct, ProductAuth } from "../controllers/productAuth";

const router = Router();

router.post("/add_product", ProductAuth);
router.get("/product", GetAllProduct);
router.delete("/delete", deleteProduct);

export default router;