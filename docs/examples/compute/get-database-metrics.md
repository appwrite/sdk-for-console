```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.getDatabaseMetrics({
    databaseId: '<DATABASE_ID>',
    period: '1h' // optional
});

console.log(result);
```
