```javascript
import { Client, TablesDB } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.createBigIntColumn({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    key: '<KEY>',
    required: false,
    min: 0, // optional
    max: 1000000, // optional
    xdefault: 0, // optional
    array: false, // optional
});

console.log(result);
```
