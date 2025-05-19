import { Client, Organizations,  } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.create(
    '<ORGANIZATION_ID>', // organizationId
    '<NAME>', // name
    .Tier0, // billingPlan
    '<PAYMENT_METHOD_ID>', // paymentMethodId (optional)
    '<BILLING_ADDRESS_ID>', // billingAddressId (optional)
    [], // invites (optional)
    '<COUPON_ID>', // couponId (optional)
    '<TAX_ID>', // taxId (optional)
    0 // budget (optional)
);

console.log(result);
