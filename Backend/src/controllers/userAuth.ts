import { NextFunction, Request } from "express"
import { Response } from "express"
import { loginValidation, signupValidation } from "../services/inputValidation";
import { PrismaClient } from "@prisma/client";

const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

// ...................................................................................................................................
export const singupAuth = async (req: Request, res: Response, next: NextFunction) => {

    try {

        //zod
        const createPayload = req.body;
        const parsePayload = signupValidation.safeParse(createPayload);

        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Input send by the bitch",
                errors: parsePayload.error.errors
            });
        }

        //checking wheather user already exist or not 
        const userExist = await prisma.user.findFirst({
            where: { email: createPayload.email }
        });

        if (userExist) {
            res.status(409).json({
                msg: "User alreagy eaxist Please login bitch",
            })
        }
        // if user doesn't exist already we will create a entry for him.

        const newUser = await prisma.user.create({
            data: {
                name: createPayload.name,
                email: createPayload.email,
                phone_no: createPayload.phone_no,
                password: createPayload.password
            }
        });

        // adding jwt
        const token = jwt.sign({
            data: newUser.id
        }, 'secret', { expiresIn: '5hr' });

        res.status(201).json({
            msg: "User Ceated Successfully",
            token
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "errors in singupAuth login in controller logic"
        })
        console.error(err);
    }
};

// .......................................................................................................................................................
export const loginLogic = async (req: Request, res: Response, nest: NextFunction) => {
    try {

        //zod 
        const createPayload = req.body;
        const parsePayload = loginValidation.safeParse(createPayload);

        if (!parsePayload.success) {
            return res.status(404).json({
                msg: "Invalid Inout by the user bitch",
                errors: parsePayload.error.errors
            })
        }

        //checking wheather user exist or not in db
        const userExists = await prisma.user.findFirst({
            where: {
                email: createPayload.email,
                password: createPayload.password
            }
        });

        if (userExists) {
            const token = jwt.sign({
                data: userExists.id
            }, "secret", { expiresIn: '5hr' });

            res.status(200).json({
                msg: 'User have logged in succesfully',
                token
            });
        }
    }
    catch (err) {
        res.status(500).json({
            msg: "errors in loginAuth login in controller logic"
        })
        console.error(err);
    }
    finally {
        console.log("User Loged in Successfully")
    }
}

//................................................................................................