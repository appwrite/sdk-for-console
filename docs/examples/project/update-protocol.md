```javascript
import { Client, Project, ProjectProtocolId } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateProtocol({
    protocolId: ProjectProtocolId.Rest,
    enabled: false
});

console.log(result);
```
