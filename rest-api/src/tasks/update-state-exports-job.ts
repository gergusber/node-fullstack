import moment from 'moment';
import { exportRequests } from '../controllers/export'
import { States } from '../models/Action'
import { ExportTypes } from "../models/Export";

// Define the processing times for each job type
const JOB_PROCESSING_TIMES = {
  epub_export: 10,
  pdf_export: 25
};

// Define a function to update the status of export and import requestse
export async function updateRequestStatusExport() {
  const requestsPending = exportRequests.filter(x => x.state === States.pending)
  // For each pending request, check if the processing time has elapsed
  for (const request of requestsPending) {
    const elapsedTimeInMin = moment().diff(moment(request.createdAt), 'minutes');

    if (request.type === ExportTypes.epub && (elapsedTimeInMin >= JOB_PROCESSING_TIMES.epub_export)) {
      request.state = States.finished;
      request.updatedAt = moment().toDate();
    }
    
    if (request.type === ExportTypes.epub && (elapsedTimeInMin >= JOB_PROCESSING_TIMES.pdf_export)) {
      request.state = States.finished;
      request.updatedAt = moment().toDate();
    }
  }
}

