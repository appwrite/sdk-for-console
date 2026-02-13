```javascript
import { Client, Organizations, Platform } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.estimationCreateOrganization({
    billingPlan: 'tier-0',
    paymentMethodId: '<PAYMENT_METHOD_ID>', // optional
    invites: [], // optional
    couponId: '<COUPON_ID>', // optional
    platform: Platform.Appwrite // optional
});

console.log(result);
```
