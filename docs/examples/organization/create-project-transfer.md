```javascript
import { Client, Organization } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.createProjectTransfer({
    projectId: '<PROJECT_ID>',
    recipientId: '<RECIPIENT_ID>', // optional
    expire: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
