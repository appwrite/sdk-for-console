```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseConnection({
    databaseId: '<DATABASE_ID>',
    username: '<USERNAME>',
    role: '<ROLE>' // optional
});

console.log(result);
```
