```javascript
import { Client, Webhooks } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const webhooks = new Webhooks(client);

const result = await webhooks.get({
    webhookId: '<WEBHOOK_ID>'
});

console.log(result);
```
