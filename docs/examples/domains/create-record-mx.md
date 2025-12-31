import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.createRecordMX({
    domainId: '<DOMAIN_ID>',
    name: '<NAME>',
    value: '<VALUE>',
    ttl: 1,
    priority: null,
    comment: '<COMMENT>' // optional
});

console.log(result);
