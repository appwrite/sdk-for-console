```javascript
import { Client, Manager, ResourceType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.createBlock({
    projectId: '<PROJECT_ID>',
    resourceType: ResourceType.Projects,
    resourceId: '<RESOURCE_ID>', // optional
    reason: '<REASON>', // optional
    expiredAt: '2020-10-15T06:38:00.000+00:00' // optional
});

console.log(result);
```
