```javascript
import { Client, Admin, PlatformResourceType } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.deletePlatformResourceCache({
    resourceType: PlatformResourceType.Projects,
    resourceId: '<RESOURCE_ID>', // optional
});

console.log(result);
```
