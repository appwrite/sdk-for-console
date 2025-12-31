import { Client, Console } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const console = new Console(client);

const result = await console.createSource({
    ref: '<REF>', // optional
    referrer: 'https://example.com', // optional
    utmSource: '<UTM_SOURCE>', // optional
    utmCampaign: '<UTM_CAMPAIGN>', // optional
    utmMedium: '<UTM_MEDIUM>' // optional
});

console.log(result);
