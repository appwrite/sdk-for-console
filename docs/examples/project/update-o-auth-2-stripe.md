```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Stripe({
    clientId: '<CLIENT_ID>', // optional
    apiSecretKey: '<API_SECRET_KEY>', // optional
    enabled: false // optional
});

console.log(result);
```
