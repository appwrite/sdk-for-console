import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.addCredit(
    '<ORGANIZATION_ID>', // organizationId
    '<COUPON_ID>' // couponId
);

console.log(result);
