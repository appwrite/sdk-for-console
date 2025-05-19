import { Client, Backups } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.createArchive(
    [], // services
    '<RESOURCE_ID>' // resourceId (optional)
);

console.log(result);
