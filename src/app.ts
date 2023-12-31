import express, { Application, Request, Response } from "express";
import cors from "cors";
import { createUserRoute } from "./app/modules/user.route";
const app: Application = express();

//application middleware
app.use(express.json());
app.use(cors());

//application rotues
app.use("/api", createUserRoute);
app.use("/api", createUserRoute);
app.use("/api", createUserRoute);
app.use("/api/users", createUserRoute);
app.use("/api/users", createUserRoute);
app.use("/api/users", createUserRoute);
app.use("/api/users", createUserRoute);
app.use("/api/users", createUserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
