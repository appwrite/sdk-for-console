```javascript
import { Client, Proxy, RedirectStatusCode, ProxyResourceType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const proxy = new Proxy(client);

const result = await proxy.createRedirectRule({
    domain: '',
    url: 'https://example.com',
    statusCode: RedirectStatusCode.MovedPermanently,
    resourceId: '<RESOURCE_ID>',
    resourceType: ProxyResourceType.Site
});

console.log(result);
```
