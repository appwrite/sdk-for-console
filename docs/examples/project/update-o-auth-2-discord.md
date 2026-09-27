```javascript
import {
    Client,
    Project,
    ProjectOAuth2DiscordPrompt,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Discord({
    clientId: '<CLIENT_ID>', // optional
    clientSecret: '<CLIENT_SECRET>', // optional
    prompt: [ProjectOAuth2DiscordPrompt.None], // optional
    enabled: false, // optional
});

console.log(result);
```
