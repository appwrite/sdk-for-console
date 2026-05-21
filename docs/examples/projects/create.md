```javascript
import { Client, Projects, Region } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const projects = new Projects(client);

const result = await projects.create({
    projectId: '',
    name: '<NAME>',
    teamId: '<TEAM_ID>',
    region: Region.Fra // optional
});

console.log(result);
```
