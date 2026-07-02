```javascript
import { Client, Waf } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const waf = new Waf(client);

const result = await waf.createRedirectRule({
    ruleId: '<RULE_ID>',
    resourceType: 'api',
    name: '<NAME>',
    location: '<LOCATION>',
    statusCode: 300,
    resourceId: '<RESOURCE_ID>', // optional
    description: '<DESCRIPTION>', // optional
    priority: -100000, // optional
    enabled: false, // optional
    conditions: '' // optional
});

console.log(result);
```
