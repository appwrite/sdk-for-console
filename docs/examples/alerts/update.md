```javascript
import { Client, Alerts } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const alerts = new Alerts(client);

const result = await alerts.update({
    alertId: '<ALERT_ID>',
    acknowledged: true,
});

console.log(result);
```
