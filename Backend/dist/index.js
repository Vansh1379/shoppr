"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./routes/mainRouter"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/v1", mainRouter_1.default);
app.listen(port, () => {
    console.log(`Your app is running at port ${port}`);
});
