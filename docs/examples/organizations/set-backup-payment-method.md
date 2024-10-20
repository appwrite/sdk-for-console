```typescript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.setBackupPaymentMethod(
    '<ORGANIZATION_ID>', // organizationId
    '<PAYMENT_METHOD_ID>' // paymentMethodId
);

console.log(result);

```