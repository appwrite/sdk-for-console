```javascript
import { Client, Postgresql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.updateMaintenance({
    databaseId: '<DATABASE_ID>',
    day: 'sun',
    hourUtc: 0,
});

console.log(result);
```
