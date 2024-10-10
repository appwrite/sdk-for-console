import { Client, Organizations,  } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.updatePlan(
    '<ORGANIZATION_ID>', // organizationId
    .Tier0, // billingPlan
    '<PAYMENT_METHOD_ID>', // paymentMethodId (optional)
    '<BILLING_ADDRESS_ID>' // billingAddressId (optional)
);

console.log(result);
