import { Client, Functions } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const functions = new Functions(client);

const result = await functions.listDeployments(
    '<FUNCTION_ID>', // functionId
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

console.log(response);
