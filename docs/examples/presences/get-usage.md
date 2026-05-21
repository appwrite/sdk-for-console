```javascript
import { Client, Presences, UsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const presences = new Presences(client);

const result = await presences.getUsage({
    range: UsageRange.24h // optional
});

console.log(result);
```
