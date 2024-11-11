"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailerPass = process.env.NODEMAILER_PASS;
const sendWelcomeEmail = (_a) => __awaiter(void 0, [_a], void 0, function* ({ to, username }) {
    try {
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: 'vanshkalra1379@gmail.com',
                pass: nodemailerPass
            }
        });
        const mailOptions = {
            from: "vanshkalra1379@gmail.com", // sender address
            to, // receiver address
            subject: "Welcome to V-Pay!", // Subject line
            text: `Hello ${username},\n\nWelcome to shoppr! Your account has been created successfully. Horray you gota coupon code for 20% discount {NEW20} use it and enjoy your shopping journey. \n\nThank you for joining us!`, // plain text body
            html: `<p>Hello ${username},</p><p>Welcome to shoppr! Your account has been created successfully. Horray you gota coupon code for 20% discount {NEW20} use it and enjoy your shopping journey.</p><p>Thank you for joining us!</p>` // html body
        };
        const info = yield transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        return info;
    }
    catch (err) {
        console.error("Error sending email:", err);
    }
});
exports.sendWelcomeEmail = sendWelcomeEmail;
