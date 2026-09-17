```javascript
import { Client, Users } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const users = new Users(client);

const result = await users.createScryptUser({
    userId: '<USER_ID>',
    email: 'email@example.com',
    password: 'password',
    passwordSalt: '<PASSWORD_SALT>',
    passwordCpu: 8,
    passwordMemory: 65536,
    passwordParallel: 1,
    passwordLength: 64,
    name: '<NAME>', // optional
});

console.log(result);
```
