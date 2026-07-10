```javascript
import { Client, Mysql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.updateBackupPolicy({
    databaseId: '<DATABASE_ID>',
    policyId: '<POLICY_ID>',
    name: '<NAME>', // optional
    schedule: '', // optional
    retention: 1, // optional
    enabled: false // optional
});

console.log(result);
```
