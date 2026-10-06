```javascript
import { Client, Analytics } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const analytics = new Analytics(client);

const result = await analytics.getProperty({
    propertyId: '<PROPERTY_ID>',
});

console.log(result);
```
