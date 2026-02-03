import { Client, Organizations, Scopes } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organizations = new Organizations(client);

const result = await organizations.updateKey({
    organizationId: '<ORGANIZATION_ID>',
    keyId: '<KEY_ID>',
    name: '<NAME>',
    scopes: [Scopes.PlatformsRead],
    expire: '' // optional
});

console.log(result);
