```javascript
import { Client, Organization, ProjectKeyScopes } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.createProjectKey({
    projectId: '<PROJECT_ID>',
    keyId: '<KEY_ID>',
    name: '<NAME>',
    scopes: [ProjectKeyScopes.ProjectRead],
    expire: '2020-10-15T06:38:00.000+00:00', // optional
});

console.log(result);
```
