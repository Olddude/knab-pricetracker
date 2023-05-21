import { Router, Response } from "express";
import { Request } from "../types/types";
import cryptoService from "../services/cryptoService";
import validateCryptoData from "../middlewares/validateCryptoData";

const router = Router();

router.post("/", validateCryptoData, async (req: Request, res: Response) => {
  const { email, cryptocurrency } = req.body;
  await cryptoService.startSendingCryptoUpdates(email, cryptocurrency);
  res.json({ success: true });
});

export default router;
