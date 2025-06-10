import { Client, Organizations,  } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.estimationUpdatePlan(
    '<ORGANIZATION_ID>', // organizationId
    .Tier0, // billingPlan
    [], // invites (optional)
    '<COUPON_ID>' // couponId (optional)
);

console.log(result);
