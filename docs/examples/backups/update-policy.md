```javascript
import { Client, Backups } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.updatePolicy({
    policyId: '<POLICY_ID>',
    name: '<NAME>', // optional
    retention: 1, // optional
    schedule: '', // optional
    enabled: false // optional
});

console.log(result);
```
