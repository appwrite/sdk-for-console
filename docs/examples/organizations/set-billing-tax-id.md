import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.setBillingTaxId(
    '<ORGANIZATION_ID>', // organizationId
    '<TAX_ID>' // taxId
);

console.log(result);
