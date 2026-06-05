```javascript
import { Client, Project } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updatePasswordStrengthPolicy({
    min: 8, // optional
    uppercase: false, // optional
    lowercase: false, // optional
    number: false, // optional
    symbols: false // optional
});

console.log(result);
```
