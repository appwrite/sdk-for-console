```javascript
import { Client, Mysql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const mysql = new Mysql(client);

const result = await mysql.updateBackupStorage({
    databaseId: '<DATABASE_ID>',
    provider: 's3',
    bucket: '<BUCKET>',
    accessKey: '<ACCESS_KEY>',
    secretKey: '<SECRET_KEY>',
    region: '<REGION>', // optional
    prefix: '<PREFIX>', // optional
    endpoint: '<ENDPOINT>', // optional
});

console.log(result);
```
