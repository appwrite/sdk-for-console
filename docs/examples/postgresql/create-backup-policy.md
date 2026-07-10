```javascript
import { Client, Postgresql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.createBackupPolicy({
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
