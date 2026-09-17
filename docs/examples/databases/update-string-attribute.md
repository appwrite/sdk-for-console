```javascript
import { Client, Databases } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const databases = new Databases(client);

const result = await databases.updateStringAttribute({
    databaseId: '<DATABASE_ID>',
    collectionId: '<COLLECTION_ID>',
    key: '<KEY>',
    required: false,
    xdefault: 'Hello World',
    size: 1, // optional
    newKey: '<NEW_KEY>', // optional
});

console.log(result);
```
