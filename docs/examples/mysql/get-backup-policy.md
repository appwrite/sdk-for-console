```javascript
import { Client, Mysql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.getBackupPolicy({
    databaseId: '<DATABASE_ID>',
    policyId: '<POLICY_ID>'
});

console.log(result);
```
