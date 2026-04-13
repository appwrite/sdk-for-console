```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateAndroidPlatform({
    platformId: '<PLATFORM_ID>',
    name: '<NAME>',
    applicationId: '<APPLICATION_ID>'
});

console.log(result);
```
