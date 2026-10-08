```javascript
import { Client, Admin } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.deleteProjectCache({
    projectId: '<PROJECT_ID>',
});

console.log(result);
```
