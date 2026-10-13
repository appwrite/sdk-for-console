```javascript
import {
    Client,
    Admin,
    ThreatResourceType,
    ThreatStatus,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.createThreat({
    projectId: '<PROJECT_ID>',
    resourceType: ThreatResourceType.Projects,
    resourceId: '<RESOURCE_ID>',
    description: '<DESCRIPTION>', // optional
    status: ThreatStatus.Open, // optional
});

console.log(result);
```
