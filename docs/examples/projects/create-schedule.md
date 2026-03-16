```javascript
import { Client, Projects, ResourceType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const projects = new Projects(client);

const result = await projects.createSchedule({
    projectId: '<PROJECT_ID>',
    resourceType: ResourceType.Function,
    resourceId: '<RESOURCE_ID>',
    schedule: '',
    active: false, // optional
    data: {} // optional
});

console.log(result);
```
