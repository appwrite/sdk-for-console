import { Client, Users } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const users = new Users(client);

const result = await users.updateEmail(
    '<USER_ID>', // userId
    'email@example.com' // email
);

console.log(response);
