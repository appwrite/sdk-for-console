```javascript
import { Client, Project, ProtocolId } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateProtocol({
    protocolId: ProtocolId.Rest,
    enabled: false
});

console.log(result);
```
