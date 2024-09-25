import bodyParser from "body-parser";
import express from "express";
import { Request } from "express";
import { Response } from "express";
import mainRouter from "./routes/mainRouter"

const port = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", mainRouter);

app.listen(port, () => {
    console.log(`Your app is running at port ${port}`);
})