import express, { Request, Response } from 'express';
import { Bus } from '../models/bus';

const router = express.Router();

router.get('/api/bus', async (req: Request, res: Response) => {
  const tickets = await Bus.find({});

  res.send(tickets);
});

export { router as showBusRouter };
