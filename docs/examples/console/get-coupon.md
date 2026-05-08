```javascript
import { Client, Console } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const xconsole = new Console(client);

const result = await xconsole.getCoupon({
    couponId: '<COUPON_ID>'
});

console.log(result);
```
