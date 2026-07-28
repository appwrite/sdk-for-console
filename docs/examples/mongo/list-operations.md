```javascript
import { Client, Mongo } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mongo = new Mongo(client);

const result = await mongo.listOperations({
    databaseId: '<DATABASE_ID>',
    status: 'running', // optional
    limit: 1, // optional
    offset: 0 // optional
});

console.log(result);
```
