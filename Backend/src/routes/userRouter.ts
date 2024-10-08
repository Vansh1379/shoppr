import { Router } from "express";
import { loginLogic, signupAuth } from "../controllers/userAuth";

const router = Router();

router.post("/signup", signupAuth);
router.post("/login", loginLogic);


export default router;