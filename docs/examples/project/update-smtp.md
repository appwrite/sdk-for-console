```javascript
import { Client, Project, ProjectSMTPSecure } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.updateSMTP({
    host: '', // optional
    port: null, // optional
    username: '<USERNAME>', // optional
    password: 'password', // optional
    senderEmail: 'email@example.com', // optional
    senderName: '<SENDER_NAME>', // optional
    replyToEmail: 'email@example.com', // optional
    replyToName: '<REPLY_TO_NAME>', // optional
    secure: ProjectSMTPSecure.Tls, // optional
    enabled: false // optional
});

console.log(result);
```
