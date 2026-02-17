```javascript
import { Client, Backups, BackupServices } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.createArchive({
    services: [BackupServices.Databases],
    resourceId: '<RESOURCE_ID>' // optional
});

console.log(result);
```
