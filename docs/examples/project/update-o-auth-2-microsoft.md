```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Microsoft({
    applicationId: '<APPLICATION_ID>', // optional
    applicationSecret: '<APPLICATION_SECRET>', // optional
    tenant: '<TENANT>', // optional
    enabled: false // optional
});

console.log(result);
```
