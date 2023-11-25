import express, { Request, Response } from "express";
import cors from "cors";
import { createUserRoute } from "./app/modules/user.route";
const app = express();

//application middleware
app.use(express.json());
app.use(cors());

//application rotues
app.use("/POST/api", createUserRoute);
app.use("/GET/api", createUserRoute);
app.use("/GET/api", createUserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
