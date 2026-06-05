```javascript
import { Client, Compute } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const compute = new Compute(client);

const result = await compute.createDatabaseBackupPolicy({
    databaseId: '<DATABASE_ID>',
    policyId: '<POLICY_ID>',
    name: '<NAME>',
    schedule: '',
    retention: 1,
    type: 'full', // optional
    enabled: false // optional
});

console.log(result);
```
