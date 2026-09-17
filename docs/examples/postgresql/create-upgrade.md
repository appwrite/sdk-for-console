```javascript
import { Client, Postgresql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.createUpgrade({
    databaseId: '<DATABASE_ID>',
    targetVersion: '<TARGET_VERSION>',
});

console.log(result);
```
