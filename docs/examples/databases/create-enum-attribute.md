import { Client, Databases } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2'); // Your project ID

const databases = new Databases(client);

const result = await databases.createEnumAttribute(
    '<DATABASE_ID>', // databaseId
    '<COLLECTION_ID>', // collectionId
    '', // key
    [], // elements
    false, // required
    '<DEFAULT>', // default (optional)
    false // array (optional)
);

console.log(response);
