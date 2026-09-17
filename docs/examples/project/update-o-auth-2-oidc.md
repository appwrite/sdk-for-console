```javascript
import { Client, Project, ProjectOAuth2OidcPrompt } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Oidc({
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>', // optional
    wellKnownURL: 'https://example.com', // optional
    authorizationURL: 'https://example.com', // optional
    tokenURL: 'https://example.com', // optional
    userInfoURL: 'https://example.com', // optional
    prompt: [ProjectOAuth2OidcPrompt.None], // optional
    maxAge: 0, // optional
    enabled: false, // optional
});

console.log(result);
```
