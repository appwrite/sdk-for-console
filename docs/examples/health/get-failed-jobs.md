```javascript
import { Client, Health, HealthQueueName } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const health = new Health(client);

const result = await health.getFailedJobs({
    name: HealthQueueName.V1Database,
    threshold: null // optional
});

console.log(result);
```
