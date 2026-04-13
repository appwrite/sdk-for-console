```javascript
import { Client, Webhooks } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const webhooks = new Webhooks(client);

const result = await webhooks.create({
    webhookId: '<WEBHOOK_ID>',
    url: '',
    name: '<NAME>',
    events: [],
    enabled: false, // optional
    tls: false, // optional
    authUsername: '<AUTH_USERNAME>', // optional
    authPassword: '<AUTH_PASSWORD>' // optional
});

console.log(result);
```
