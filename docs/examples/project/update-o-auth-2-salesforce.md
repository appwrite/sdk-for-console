```javascript
import {
    Client,
    Project,
    ProjectOAuth2SalesforcePrompt,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateOAuth2Salesforce({
    customerKey: '<CUSTOMER_KEY>', // optional
    customerSecret: '<CUSTOMER_SECRET>', // optional
    prompt: [ProjectOAuth2SalesforcePrompt.Login], // optional
    enabled: false, // optional
});

console.log(result);
```
