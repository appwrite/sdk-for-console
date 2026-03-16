```javascript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.getKey({
    organizationId: '<ORGANIZATION_ID>',
    keyId: '<KEY_ID>'
});

console.log(result);
```
