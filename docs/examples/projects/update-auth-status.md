import { Client, Projects, AuthMethod } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const projects = new Projects(client);

const result = await projects.updateAuthStatus(
    '<PROJECT_ID>', // projectId
    AuthMethod.EmailPassword, // method
    false // status
);

console.log(response);
