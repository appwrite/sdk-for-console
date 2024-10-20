```typescript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.setBillingAddress(
    '<ORGANIZATION_ID>', // organizationId
    '<BILLING_ADDRESS_ID>' // billingAddressId
);

console.log(result);

```