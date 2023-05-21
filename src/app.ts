import express from "express";
import dotenv from "dotenv";
import cryptoController from "./controllers/cryptoController";
import errorMiddleware from "./middlewares/errorMiddleware";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/crypto", cryptoController);
app.use(errorMiddleware);

export default app;
