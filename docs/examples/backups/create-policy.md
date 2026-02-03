import { Client, Backups, Services } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.createPolicy({
    policyId: '<POLICY_ID>',
    services: [Services.Databases],
    retention: 1,
    schedule: '',
    name: '<NAME>', // optional
    resourceId: '<RESOURCE_ID>', // optional
    enabled: false // optional
});

console.log(result);
