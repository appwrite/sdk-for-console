import { Client, Messaging } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('&lt;YOUR_PROJECT_ID&gt;'); // Your project ID

const messaging = new Messaging(client);

const result = await messaging.createTelesignProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name
    '+12065550100', // from (optional)
    '<CUSTOMER_ID>', // customerId (optional)
    '<API_KEY>', // apiKey (optional)
    false // enabled (optional)
);

console.log(response);
