```javascript
import { Client, DocumentsDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const documentsDB = new DocumentsDB(client);

const result = await documentsDB.listIndexes({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    queries: [], // optional
    total: false // optional
});

console.log(result);
```
