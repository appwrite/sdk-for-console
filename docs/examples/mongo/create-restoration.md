```javascript
import { Client, Mongo } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mongo = new Mongo(client);

const result = await mongo.createRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetDatabaseId: '<TARGET_DATABASE_ID>', // optional
    targetTime: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
