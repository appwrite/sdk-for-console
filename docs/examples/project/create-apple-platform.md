```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.createApplePlatform({
    platformId: '<PLATFORM_ID>',
    name: '<NAME>',
    bundleIdentifier: '<BUNDLE_IDENTIFIER>'
});

console.log(result);
```
