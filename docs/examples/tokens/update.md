```javascript
import { Client, Tokens } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const tokens = new Tokens(client);

const result = await tokens.update({
    tokenId: '<TOKEN_ID>',
    expire: '2020-10-15T06:38:00.000+00:00' // optional
});

console.log(result);
```
