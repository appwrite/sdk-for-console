```javascript
import { Client, Postgresql } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.createBackup({
    databaseId: '<DATABASE_ID>',
    type: 'full' // optional
});

console.log(result);
```
