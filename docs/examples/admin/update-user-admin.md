```javascript
import { Client, Admin } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const admin = new Admin(client);

const result = await admin.updateUserAdmin({
    userId: '<USER_ID>',
    admin: false,
});

console.log(result);
```
