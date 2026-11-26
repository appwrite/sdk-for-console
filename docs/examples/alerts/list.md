```javascript
import { Client, Alerts } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const alerts = new Alerts(client);

const result = await alerts.list({
    queries: [], // optional
    total: false, // optional
});

console.log(result);
```
