import express, { Request, Response } from 'express';
import { Card } from '../models/card';

const router = express.Router();

router.get('/api/card', async (req: Request, res: Response) => {
  const tickets = await Card.find({});

  res.send(tickets);
});

export { router as showCardRouter };
