```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Apple({
    serviceId: '<SERVICE_ID>', // optional
    keyId: '<KEY_ID>', // optional
    teamId: '<TEAM_ID>', // optional
    p8File: '<P8_FILE>', // optional
    enabled: false // optional
});

console.log(result);
```
