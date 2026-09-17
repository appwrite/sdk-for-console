```javascript
import { Client, Waf } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const waf = new Waf(client);

const result = await waf.listRules({
    queries: [], // optional
    search: '<SEARCH>', // optional
    total: false, // optional
});

console.log(result);
```
