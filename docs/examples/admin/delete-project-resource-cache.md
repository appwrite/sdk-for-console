```javascript
import { Client, Admin, ProjectResourceType } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.deleteProjectResourceCache({
    projectId: '<PROJECT_ID>',
    resourceType: ProjectResourceType.Users,
    resourceId: '<RESOURCE_ID>', // optional
});

console.log(result);
```
