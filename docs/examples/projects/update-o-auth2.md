import { Client, Projects, OAuthProvider } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const projects = new Projects(client);

const result = await projects.updateOAuth2(
    '<PROJECT_ID>', // projectId
    OAuthProvider.Amazon, // provider
    '<APP_ID>', // appId (optional)
    '<SECRET>', // secret (optional)
    false // enabled (optional)
);

console.log(response);
