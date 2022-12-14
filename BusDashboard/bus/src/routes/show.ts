import express, { Request, Response } from "express";
import { NotFoundError } from "@cygnetops/common-v2";
import { Ticket } from "../models/bus";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
