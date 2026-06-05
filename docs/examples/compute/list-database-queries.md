```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.listDatabaseQueries({
    databaseId: '<DATABASE_ID>',
    limit: 1, // optional
    thresholdMs: 0 // optional
});

console.log(result);
```
