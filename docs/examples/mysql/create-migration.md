```javascript
import { Client, Mysql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.createMigration({
    databaseId: '<DATABASE_ID>',
    targetType: 'shared',
    specification: '<SPECIFICATION>', // optional
});

console.log(result);
```
