```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetTime: null // optional
});

console.log(result);
```
