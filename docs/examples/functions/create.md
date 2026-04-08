```javascript
import { Client, Functions, Runtime, Scopes } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const functions = new Functions(client);

const result = await functions.create({
    functionId: '<FUNCTION_ID>',
    name: '<NAME>',
    runtime: Runtime.Node145,
    execute: ["any"], // optional
    events: [], // optional
    schedule: '', // optional
    timeout: 1, // optional
    enabled: false, // optional
    logging: false, // optional
    entrypoint: '<ENTRYPOINT>', // optional
    commands: '<COMMANDS>', // optional
    scopes: [Scopes.SessionsWrite], // optional
    installationId: '<INSTALLATION_ID>', // optional
    providerRepositoryId: '<PROVIDER_REPOSITORY_ID>', // optional
    providerBranch: '<PROVIDER_BRANCH>', // optional
    providerSilentMode: false, // optional
    providerRootDirectory: '<PROVIDER_ROOT_DIRECTORY>', // optional
    buildSpecification: '', // optional
    runtimeSpecification: '', // optional
    templateRepository: '<TEMPLATE_REPOSITORY>', // optional
    templateOwner: '<TEMPLATE_OWNER>', // optional
    templateRootDirectory: '<TEMPLATE_ROOT_DIRECTORY>', // optional
    templateVersion: '<TEMPLATE_VERSION>', // optional
    deploymentRetention: 0 // optional
});

console.log(result);
```
