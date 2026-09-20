```javascript
import { Client, Organization, ProjectKeyScopes } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.createEphemeralProjectKey({
    projectId: '<PROJECT_ID>',
    scopes: [ProjectKeyScopes.ProjectRead],
    duration: 600,
});

console.log(result);
```
