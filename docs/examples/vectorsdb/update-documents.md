```javascript
import { Client, VectorsDB } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.updateDocuments({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    data: {}, // optional
    queries: [], // optional
    transactionId: '<TRANSACTION_ID>' // optional
});

console.log(result);
```
