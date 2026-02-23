```javascript
import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.createPurchase({
    domain: '',
    teamId: '<TEAM_ID>',
    firstName: '<FIRST_NAME>',
    lastName: '<LAST_NAME>',
    email: 'email@example.com',
    phone: '+12065550100',
    billingAddressId: '<BILLING_ADDRESS_ID>',
    paymentMethodId: '<PAYMENT_METHOD_ID>',
    addressLine3: '<ADDRESS_LINE3>', // optional
    companyName: '<COMPANY_NAME>', // optional
    periodYears: 1 // optional
});

console.log(result);
```
