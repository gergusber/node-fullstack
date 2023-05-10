import moment from 'moment';
import { importRequests } from '../controllers/import'
import { States } from '../models/Action'

// Define the processing times for each job type
const JOB_PROCESSING_TIMES = {
  epub_export: 10,
  pdf_export: 25,
  import: 60
};

// Define a function to update the status of export and import requests
export async function updateRequestStatusImport() {
  const requestsPending = importRequests.filter(x => x.state === States.pending)

  // For each pending request, check if the processing time has elapsed
  for (const request of requestsPending) {
    const elapsedTimeInMin = moment().diff(moment(request.createdAt), 'minutes');
    console.log('elapsedTimeInMin', elapsedTimeInMin)

    if (elapsedTimeInMin >= JOB_PROCESSING_TIMES.import) {
      request.state = States.finished;
      request.updatedAt = moment().toDate();
    }
  }
}

