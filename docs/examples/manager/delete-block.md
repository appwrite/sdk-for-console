```javascript
import { Client, Manager, BlockResourceType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.deleteBlock({
    projectId: '<PROJECT_ID>',
    resourceType: BlockResourceType.Projects,
    resourceId: '<RESOURCE_ID>' // optional
});

console.log(result);
```
