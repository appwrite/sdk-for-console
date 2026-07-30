```javascript
import { Client, TablesDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.update({
    databaseId: '<DATABASE_ID>',
    name: '<NAME>', // optional
    enabled: false, // optional
    specification: 'serverless', // optional
    replicas: 0, // optional
    syncMode: 'async' // optional
});

console.log(result);
```
