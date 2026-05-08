```javascript
import { Client, Console } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const console = new Console(client);

const result = await console.createProgramMembership({
    programId: '<PROGRAM_ID>'
});

console.log(result);
```
