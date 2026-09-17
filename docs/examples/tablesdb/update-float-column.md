```javascript
import { Client, TablesDB } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tablesDB = new TablesDB(client);

const result = await tablesDB.updateFloatColumn({
    databaseId: '<DATABASE_ID>',
    tableId: '<TABLE_ID>',
    key: '<KEY>',
    required: false,
    xdefault: 10.5,
    min: 0, // optional
    max: 100, // optional
    newKey: '<NEW_KEY>', // optional
});

console.log(result);
```
