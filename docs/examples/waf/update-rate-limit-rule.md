```javascript
import { Client, Waf } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const waf = new Waf(client);

const result = await waf.updateRateLimitRule({
    ruleId: '<RULE_ID>',
    resourceType: 'api', // optional
    resourceId: '<RESOURCE_ID>', // optional
    name: '<NAME>', // optional
    description: '<DESCRIPTION>', // optional
    limit: 1, // optional
    interval: 1, // optional
    priority: -100000, // optional
    enabled: false, // optional
    conditions: '' // optional
});

console.log(result);
```
