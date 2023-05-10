import app from './app'
const PORT = process.env.PORT || 3000
import cron from 'node-cron';
import { updateRequestStatusImport } from '../src/tasks/update-state-imports-job'
import { updateRequestStatusExport } from '../src/tasks/update-state-exports-job'

app.listen(PORT, () => console.log("Server is running at PORT 3000 🚀"))

// Schedule the cron job to run every minute
cron.schedule('* * * * *', async () => {
  try {
    await updateRequestStatusImport();
    await updateRequestStatusExport();
  } catch (error) {
    console.error('Failed to update request status:', error);
  }
});
