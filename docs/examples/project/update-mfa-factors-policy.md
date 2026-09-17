```javascript
import { Client, Project } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateMFAFactorsPolicy({
    totp: false, // optional
    email: false, // optional
    phone: false, // optional
    custom: false, // optional
});

console.log(result);
```
