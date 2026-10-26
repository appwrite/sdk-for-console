```javascript
import { Client, Graphql } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const graphql = new Graphql(client);

const result = await graphql.get({
    query: 'query { localeGet { ip } }',
    operationName: '<OPERATION_NAME>', // optional
    variables: '<VARIABLES>', // optional
});

console.log(result);
```
