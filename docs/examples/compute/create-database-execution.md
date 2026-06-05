```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseExecution({
    databaseId: '<DATABASE_ID>',
    sql: '<SQL>',
    bindings: {}, // optional
    timeoutSeconds: 1 // optional
});

console.log(result);
```
