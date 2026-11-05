```javascript
import { Client, Admin, PlanEffective } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.updateOrganizationPlan({
    organizationId: '<ORGANIZATION_ID>',
    billingPlan: 'tier-0',
    effective: PlanEffective.Now, // optional
});

console.log(result);
```
