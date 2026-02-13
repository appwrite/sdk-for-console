```javascript
import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.getInvoice({
    organizationId: '<ORGANIZATION_ID>',
    invoiceId: '<INVOICE_ID>'
});

console.log(result);
```
