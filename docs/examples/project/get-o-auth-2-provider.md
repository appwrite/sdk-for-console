```javascript
import { Client, Project, OAuthProvider } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.getOAuth2Provider({
    providerId: OAuthProvider.Amazon
});

console.log(result);
```
