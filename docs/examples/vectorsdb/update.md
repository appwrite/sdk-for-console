```javascript
import { Client, VectorsDB } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.update({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>',
    enabled: false, // optional
    specification: 'serverless', // optional
    replicas: 0, // optional
    syncMode: 'async', // optional
});

console.log(result);
```
