```javascript
import { Client, VectorsDB } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.createDocuments({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    documents: [
        {
            $id: 'example1',
            embeddings: [0.12, -0.55, 0.88, 1.02],
            metadata: {
                name: 'First document',
            },
        },
    ],
    transactionId: '<TRANSACTION_ID>', // optional
});

console.log(result);
```
