```javascript
import { Client, Postgresql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const postgresql = new Postgresql(client);

const result = await postgresql.updatePooler({
    databaseId: '<DATABASE_ID>',
    mode: 'transaction', // optional
    maxConnections: 10, // optional
    defaultPoolSize: 1, // optional
    readWriteSplitting: false, // optional
    poolerCpuRequest: '<POOLER_CPU_REQUEST>', // optional
    poolerCpuLimit: '<POOLER_CPU_LIMIT>', // optional
    poolerMemoryRequest: '<POOLER_MEMORY_REQUEST>', // optional
    poolerMemoryLimit: '<POOLER_MEMORY_LIMIT>', // optional
});

console.log(result);
```
