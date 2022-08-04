import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@cygnetops/common-v2";
import { Bus } from "../models/bus";

const router = express.Router();

router.post(
  "/api/bus",
  async (req: Request, res: Response) => {
    const { lat, long,neareststop,currentstop } = req.body;

    const bus = Bus.build({
      lat,
      long,
     neareststop,
     currentstop
    });
    await bus.save();

    res.status(201).send(bus);
  }
);

export { router as createBusRouter };
