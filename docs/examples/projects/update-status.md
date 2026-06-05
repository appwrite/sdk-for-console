```javascript
import { Client, Projects, Status } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const projects = new Projects(client);

const result = await projects.updateStatus({
    projectId: '<PROJECT_ID>',
    status: Status.Active
});

console.log(result);
```
