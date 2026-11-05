```javascript
import { Client, Users } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const users = new Users(client);

const result = await users.createBcryptUser({
    userId: '<USER_ID>',
    email: 'email@example.com',
    password: '$2y$10$vBiMe4NOvlbYL1iJUNdqkO.QJy17fvslZQ5oiqKq1G4uwyRWvdrXC',
    name: '<NAME>', // optional
});

console.log(result);
```
