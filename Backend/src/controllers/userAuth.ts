import { NextFunction, Request } from "express"
import { Response } from "express"
import { loginValidation, signupValidation } from "../services/inputValidation";

export const singupAuth = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const createPayload = req.body;
        const parsePayload = signupValidation.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Input send by the bitch"
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "errors in singupAuth login in controller logic"
        })
        console.error(err);
    }
    finally {
        console.log("Signup Successful");
    }
};


export const loginLogic = async (req: Request, res: Response, nest: NextFunction) => {
    try {
        const createPayload = req.body;
        const parsePayload = loginValidation.safeParse(createPayload);
        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Inout by the user bitch"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "errors in loginAuth login in controller logic"
        })
        console.error(err);
    }
    finally{
        console.log("User Loged in Successfully")
    }
}