import { ExportRequest } from "../models/Export";
import { States } from '../models/Action'


export const exportRequests: ExportRequest[] = [];

export const create = (req: any, res: any) => {
  const { bookId, type } = req.body;

  if (!bookId || !type) {
    return res.status(400).send('Invalid request');
  }

  const exportRequest: ExportRequest = {
    bookId,
    type,
    state: States.pending,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  exportRequests.push(exportRequest);


  res.status(200).json({ status: 'success', message: 'Export created' })
};

export const get = (req: any, res: any) => {
  const requestsPending = exportRequests.find(x => x.state === States.pending)
  const requestsFinished = exportRequests.find(x => x.state === States.finished)

  res.status(200).json({ status: 'success', data: { pending: requestsPending, finished: requestsFinished } })
};
