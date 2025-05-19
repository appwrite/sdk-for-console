import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.getBillingAddress(
    '<ORGANIZATION_ID>', // organizationId
    '<BILLING_ADDRESS_ID>' // billingAddressId
);

console.log(result);
