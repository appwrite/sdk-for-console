```javascript
import { Client, Organizations, Platform } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.create({
    organizationId: '<ORGANIZATION_ID>',
    name: '<NAME>',
    billingPlan: 'tier-0',
    paymentMethodId: '<PAYMENT_METHOD_ID>', // optional
    billingAddressId: '<BILLING_ADDRESS_ID>', // optional
    invites: [], // optional
    couponId: '<COUPON_ID>', // optional
    taxId: '<TAX_ID>', // optional
    budget: 0, // optional
    platform: Platform.Appwrite // optional
});

console.log(result);
```
