```javascript
import { Client, Mysql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.createRestoration({
    databaseId: '<DATABASE_ID>',
    type: 'backup', // optional
    backupId: '<BACKUP_ID>', // optional
    targetTime: null // optional
});

console.log(result);
```
