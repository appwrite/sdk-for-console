```javascript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.validatePayment({
    organizationId: '<ORGANIZATION_ID>',
    invites: [] // optional
});

console.log(result);
```
