import { Client, Functions } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const functions = new Functions(client);

const result = await functions.createVariable(
    '<FUNCTION_ID>', // functionId
    '<KEY>', // key
    '<VALUE>' // value
);

console.log(response);
