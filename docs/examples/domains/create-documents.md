import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.createDocuments(
    '<DATABASE_ID>', // databaseId
    '<COLLECTION_ID>', // collectionId
    [] // documents
);

console.log(result);
