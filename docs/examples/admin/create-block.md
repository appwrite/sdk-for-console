```javascript
import {
    Client,
    Admin,
    BlockResourceType,
    BlockMode,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.createBlock({
    projectId: '<PROJECT_ID>',
    resourceType: BlockResourceType.Projects,
    resourceId: '<RESOURCE_ID>', // optional
    mode: BlockMode.Full, // optional
    reason: '<REASON>', // optional
    expiredAt: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
