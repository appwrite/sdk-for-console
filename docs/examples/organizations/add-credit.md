import { Client, Organizations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.addCredit({
    organizationId: '<ORGANIZATION_ID>',
    couponId: '<COUPON_ID>'
});

console.log(result);
