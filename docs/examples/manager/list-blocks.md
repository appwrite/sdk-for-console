```javascript
import { Client, Manager } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint

const manager = new Manager(client);

const result = await manager.listBlocks({
    projectId: '<PROJECT_ID>'
});

console.log(result);
```
