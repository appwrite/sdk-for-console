```javascript
import { Client, Account, Scopes } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const account = new Account(client);

const result = await account.createKey({
    name: '<NAME>',
    scopes: [Scopes.Account],
    expire: '2020-10-15T06:38:00.000+00:00' // optional
});

console.log(result);
```
