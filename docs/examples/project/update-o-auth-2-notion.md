```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Notion({
    oauthClientId: '<OAUTH_CLIENT_ID>', // optional
    oauthClientSecret: '<OAUTH_CLIENT_SECRET>', // optional
    enabled: false // optional
});

console.log(result);
```
