```javascript
import { Client, Postgresql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.createRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetDatabaseId: '<TARGET_DATABASE_ID>', // optional
    targetTime: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
