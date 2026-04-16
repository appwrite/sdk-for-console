```javascript
import { Client, DocumentsDB, DocumentsDBIndexType, OrderBy } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const documentsDB = new DocumentsDB(client);

const result = await documentsDB.createIndex({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '',
    type: DocumentsDBIndexType.Key,
    attributes: [],
    orders: [OrderBy.Asc], // optional
    lengths: [] // optional
});

console.log(result);
```
