```javascript
import { Client, Mongo } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mongo = new Mongo(client);

const result = await mongo.getBackup({
    databaseId: '<DATABASE_ID>',
    backupId: '<BACKUP_ID>'
});

console.log(result);
```
