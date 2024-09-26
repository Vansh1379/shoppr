import { Router } from "express";
import { loginLogic, singupAuth } from "../controllers/userAuth";

const router = Router();

router.post("/signup", singupAuth);
router.post("/login", loginLogic);


export default router;