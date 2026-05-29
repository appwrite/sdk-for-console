```javascript
import { Client, Organization, Region } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const organization = new Organization(client);

const result = await organization.createProject({
    projectId: '',
    name: '<NAME>',
    region: Region.Fra // optional
});

console.log(result);
```
