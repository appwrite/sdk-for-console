import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.createRecordNS(
    '<DOMAIN_ID>', // domainId
    '<NAME>', // name
    '<VALUE>', // value
    1, // ttl
    '<COMMENT>' // comment (optional)
);

console.log(result);
