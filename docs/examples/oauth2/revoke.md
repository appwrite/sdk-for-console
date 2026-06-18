```javascript
import { Client, Oauth2 } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProjectPath('<YOUR_PROJECT_ID>'); // Your project ID

const oauth2 = new Oauth2(client);

const result = await oauth2.revoke({
    token: '<TOKEN>',
    tokenTypeHint: 'access_token', // optional
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>' // optional
});

console.log(result);
```
