```javascript
import { Client, Usage } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const usage = new Usage(client);

const result = await usage.listGauges({
    queries: [], // optional
    total: false // optional
});

console.log(result);
```
