```javascript
import { Client, Postgresql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.listRestorations({
    databaseId: '<DATABASE_ID>',
    status: 'pending', // optional
    type: 'backup', // optional
    limit: 1, // optional
    offset: 0, // optional
});

console.log(result);
```
