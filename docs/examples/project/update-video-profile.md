```javascript
import { Client, Project } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateVideoProfile({
    profileId: '<PROFILE_ID>',
    name: '<NAME>', // optional
    videoBitRate: 32000, // optional
    audioBitRate: 32000, // optional
    width: 16, // optional
    height: 16, // optional
});

console.log(result);
```
