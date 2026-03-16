```javascript
import { Client, VectorsDB, UsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.getCollectionUsage({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    range: UsageRange.TwentyFourHours // optional
});

console.log(result);
```
