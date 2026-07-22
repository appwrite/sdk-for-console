```javascript
import { Client, TablesDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.createFailover({
    databaseId: '<DATABASE_ID>',
    targetReplicaId: '<TARGET_REPLICA_ID>' // optional
});

console.log(result);
```
