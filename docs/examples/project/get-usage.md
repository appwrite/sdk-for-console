```javascript
import { Client, Project, ProjectUsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.getUsage({
    startDate: '2020-10-15T06:38:00.000+00:00',
    endDate: '2020-10-15T06:38:00.000+00:00',
    period: ProjectUsageRange.OneHour // optional
});

console.log(result);
```
