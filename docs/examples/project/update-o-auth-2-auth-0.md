```javascript
import {
    Client,
    Project,
    ProjectOAuth2Auth0Prompt,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Auth0({
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>', // optional
    endpoint: '<ENDPOINT>', // optional
    prompt: [ProjectOAuth2Auth0Prompt.None], // optional
    enabled: false, // optional
});

console.log(result);
```
