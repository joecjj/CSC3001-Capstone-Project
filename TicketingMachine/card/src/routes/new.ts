import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@cygnetops/common-v2";
import { Card } from "../models/card";

const router = express.Router();

router.post(
  "/api/card",
  async (req: Request, res: Response) => {
    const { lat, long,neareststop,currentstop } = req.body;

    const card = Card.build({
      lat,
      long,
     neareststop,
     currentstop
    });
    await card.save();

    res.status(201).send(card);
  }
);

export { router as createCardRouter };
