import { Client, Backups } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const backups = new Backups(client);

const result = await backups.createRestoration(
    '<ARCHIVE_ID>', // archiveId
    [], // services
    '<NEW_RESOURCE_ID>', // newResourceId (optional)
    '<NEW_RESOURCE_NAME>' // newResourceName (optional)
);

console.log(result);
