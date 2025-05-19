import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.list(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

console.log(result);
