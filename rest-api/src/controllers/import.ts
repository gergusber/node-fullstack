
import { ImportRequest } from "../models/Import";
import { States } from '../models/Action'

//here controllers will consume repositories that holds the DAL
export const importRequests: ImportRequest[] = [];

export const create = (req: any, res: any) => {
  const { bookId, type, url } = req.body;

  if (!bookId || !type || !url) {
    return res.status(400).send('Invalid request');
  }

  const importRequest: ImportRequest = {
    bookId,
    type,
    url,
    state: States.pending,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  importRequests.push(importRequest);

  res.status(200).json({ status: 'success', message: 'Import created' })
};

export const get = (req: any, res: any) => {
  const requestsPending = importRequests.find(x => x.state === States.pending)
  const requestsFinished = importRequests.find(x => x.state === States.finished)

  res.status(200).json({ status: 'success', data: { pending: requestsPending, finished: requestsFinished } })
};
