```javascript
import { Client, Functions, FunctionRuntime, FunctionTemplateUseCase } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.listTemplates({
    runtimes: [FunctionRuntime.Node145], // optional
    useCases: [FunctionTemplateUseCase.Starter], // optional
    limit: 1, // optional
    offset: 0, // optional
    total: false // optional
});

console.log(result);
```
