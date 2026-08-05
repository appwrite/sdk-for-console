```javascript
import { Client, Affiliates } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const affiliates = new Affiliates(client);

const result = await affiliates.updateReward({
    rewardId: '<REWARD_ID>',
    status: 'claimed',
    organizationId: '<ORGANIZATION_ID>'
});

console.log(result);
```
