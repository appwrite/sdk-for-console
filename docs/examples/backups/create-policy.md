```typescript
import { Client, Backups } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.createPolicy(
    '<POLICY_ID>', // policyId
    [], // services
    1, // retention
    '', // schedule
    '<NAME>', // name (optional)
    '<RESOURCE_ID>', // resourceId (optional)
    false // enabled (optional)
);

console.log(result);

```