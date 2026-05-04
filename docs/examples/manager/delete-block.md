```javascript
import { Client, Manager, ResourceType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.deleteBlock({
    projectId: '<PROJECT_ID>',
    resourceType: ResourceType.Projects,
    resourceId: '<RESOURCE_ID>' // optional
});

console.log(result);
```
