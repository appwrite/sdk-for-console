import { Client, Databases } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2'); // Your project ID

const databases = new Databases(client);

const result = await databases.listLogs(
    '<DATABASE_ID>', // databaseId
    [] // queries (optional)
);

console.log(response);
