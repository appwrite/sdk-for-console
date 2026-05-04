```javascript
import { Client, Project, PolicyId } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.getPolicy({
    policyId: PolicyId.PasswordDictionary
});

console.log(result);
```
