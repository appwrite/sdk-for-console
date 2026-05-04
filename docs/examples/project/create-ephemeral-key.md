```javascript
import { Client, Project, Scopes } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.createEphemeralKey({
    scopes: [Scopes.ProjectRead],
    duration: 1
});

console.log(result);
```
