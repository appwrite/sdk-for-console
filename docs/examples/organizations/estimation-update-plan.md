import { Client, Organizations, BillingPlan } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.estimationUpdatePlan({
    organizationId: '<ORGANIZATION_ID>',
    billingPlan: BillingPlan.Tier0,
    invites: [], // optional
    couponId: '<COUPON_ID>' // optional
});

console.log(result);
