```javascript
import { Client, Project, EnvironmentResource } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.createEnvironment({
    environmentId: '<ENVIRONMENT_ID>',
    name: '<NAME>',
    resources: [
        EnvironmentResource.Database,
        EnvironmentResource.Table,
        EnvironmentResource.Column,
        EnvironmentResource.Index,
        EnvironmentResource.Bucket,
        EnvironmentResource.Team,
        EnvironmentResource.Function,
        EnvironmentResource.EnvironmentVariable,
    ], // optional
});

console.log(result);
```
