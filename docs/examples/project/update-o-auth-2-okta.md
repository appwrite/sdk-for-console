```javascript
import { Client, Project, ProjectOAuth2OktaPrompt } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Okta({
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>', // optional
    domain: 'example.com', // optional
    authorizationServerId: '<AUTHORIZATION_SERVER_ID>', // optional
    prompt: [ProjectOAuth2OktaPrompt.None], // optional
    enabled: false, // optional
});

console.log(result);
```
