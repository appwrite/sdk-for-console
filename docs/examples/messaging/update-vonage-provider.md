import { Client, Messaging } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const messaging = new Messaging(client);

const result = await messaging.updateVonageProvider(
    '<PROVIDER_ID>', // providerId
    '<NAME>', // name (optional)
    false, // enabled (optional)
    '<API_KEY>', // apiKey (optional)
    '<API_SECRET>', // apiSecret (optional)
    '<FROM>' // from (optional)
);

console.log(result);
