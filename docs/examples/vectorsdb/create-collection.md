```javascript
import { Client, VectorsDB, Permission, Role } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.createCollection({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    name: '<NAME>',
    dimension: 1,
    permissions: [Permission.read(Role.any())], // optional
    documentSecurity: false, // optional
    enabled: false // optional
});

console.log(result);
```
