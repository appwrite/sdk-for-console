```javascript
import { Client, Growth, ConversationType } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const growth = new Growth(client);

const result = await growth.createConversation({
    type: ConversationType.Support,
    email: 'email@example.com', // optional
    name: '<NAME>', // optional
    subject: '<SUBJECT>', // optional
    message: '<MESSAGE>', // optional
    organizationId: '<ORGANIZATION_ID>', // optional
    projectId: '<PROJECT_ID>', // optional
    attributes: {}, // optional
    attachment: document.getElementById('uploader').files[0], // optional
});

console.log(result);
```
