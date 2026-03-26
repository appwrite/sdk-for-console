```javascript
import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.createTransferIn({
    domain: '',
    organizationId: '<ORGANIZATION_ID>',
    authCode: '<AUTH_CODE>',
    paymentMethodId: '<PAYMENT_METHOD_ID>',
    autoRenewal: false // optional
});

console.log(result);
```
