```javascript
import { Client, Console, QuerySuggestionResource } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const xconsole = new Console(client);

const result = await xconsole.suggestQueries({
    resource: QuerySuggestionResource.Activities,
    input: '<INPUT>',
    databaseId: '<DATABASE_ID>', // optional
    tableId: '<TABLE_ID>' // optional
});

console.log(result);
```
