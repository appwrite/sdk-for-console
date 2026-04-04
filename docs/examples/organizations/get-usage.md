```javascript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.getUsage({
    organizationId: '<ORGANIZATION_ID>',
    startDate: '2020-10-15T06:38:00.000+00:00', // optional
    endDate: '2020-10-15T06:38:00.000+00:00' // optional
});

console.log(result);
```
