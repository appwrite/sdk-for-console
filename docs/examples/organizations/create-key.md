```javascript
import { Client, Organizations, Scopes } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.createKey({
    organizationId: '<ORGANIZATION_ID>',
    name: '<NAME>',
    scopes: [Scopes.ProjectsRead],
    expire: '2020-10-15T06:38:00.000+00:00' // optional
});

console.log(result);
```
