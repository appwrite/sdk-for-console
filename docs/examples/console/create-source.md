```typescript
import { Client, Console } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const console = new Console(client);

const result = await console.createSource(
    '<REF>', // ref (optional)
    'https://example.com', // referrer (optional)
    '<UTM_SOURCE>', // utmSource (optional)
    '<UTM_CAMPAIGN>', // utmCampaign (optional)
    '<UTM_MEDIUM>' // utmMedium (optional)
);

console.log(result);

```