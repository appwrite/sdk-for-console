```javascript
import {
    Client,
    Manager,
    BlockResourceType,
    BlockMode,
} from '@appwrite.io/console';

const client = new Client().setEndpoint(
    'https://<REGION>.cloud.appwrite.io/v1',
); // Your API Endpoint

const manager = new Manager(client);

const result = await manager.createBlock({
    projectId: '<PROJECT_ID>',
    resourceType: BlockResourceType.Projects,
    resourceId: '<RESOURCE_ID>', // optional
    mode: BlockMode.Full, // optional
    reason: '<REASON>', // optional
    expiredAt: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
