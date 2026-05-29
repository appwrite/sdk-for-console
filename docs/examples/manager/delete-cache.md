```javascript
import { Client, Manager, Region, CacheTarget, CacheDatabase } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.deleteCache({
    region: Region.Fra, // optional
    cache: CacheTarget.Cache, // optional
    all: false, // optional
    database: CacheDatabase.Console, // optional
    projectId: '<PROJECT_ID>', // optional
    collectionId: '<COLLECTION_ID>', // optional
    documentId: '<DOCUMENT_ID>' // optional
});

console.log(result);
```
