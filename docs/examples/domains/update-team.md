```javascript
import { Client, Domains } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.updateTeam({
    domainId: '<DOMAIN_ID>',
    teamId: '<TEAM_ID>'
});

console.log(result);
```
