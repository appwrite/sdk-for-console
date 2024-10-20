```typescript
import { Client, Backups } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.getRestoration(
    '<RESTORATION_ID>' // restorationId
);

console.log(result);

```