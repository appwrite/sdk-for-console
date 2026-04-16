```javascript
import { Client, DocumentsDB, UsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const documentsDB = new DocumentsDB(client);

const result = await documentsDB.getCollectionUsage({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    range: UsageRange.TwentyFourHours // optional
});

console.log(result);
```
