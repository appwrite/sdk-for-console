```javascript
import { Client, Mongo } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mongo = new Mongo(client);

const result = await mongo.createRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetTime: null // optional
});

console.log(result);
```
