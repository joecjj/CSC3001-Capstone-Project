import express, { Request, Response } from "express";
import { NotFoundError } from "@cygnetops/common-v2";
import { Card } from "../models/card";

const router = express.Router();

router.get("/api/card/:id", async (req: Request, res: Response) => {
  const card = await Card.findById(req.params.id);

  if (!card) {
    throw new NotFoundError();
  }

  res.send(card);
});

export { router as showCardRouter };
