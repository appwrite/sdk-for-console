```javascript
import { Client, Growth } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const growth = new Growth(client);

const result = await growth.createInstallation({
    email: 'email@example.com', // optional
    name: '<NAME>', // optional
    version: '<VERSION>', // optional
    domain: '<DOMAIN>', // optional
    database: '<DATABASE>', // optional
    hostIp: '<HOST_IP>', // optional
    userAgent: '<USER_AGENT>', // optional
    os: '<OS>', // optional
    arch: '<ARCH>', // optional
    cpus: null, // optional
    ram: null, // optional
});

console.log(result);
```
