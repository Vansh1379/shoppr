import express from "express";
import { Request } from "express";
import { Response } from "express";

const port = 3000;
const app = express();

app.use(express.json());



app.listen(port, () => {
    console.log(`Your app is running at port ${port}`);
})