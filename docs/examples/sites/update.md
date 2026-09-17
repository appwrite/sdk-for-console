```javascript
import {
    Client,
    Sites,
    Framework,
    BuildRuntime,
    Adapter,
    ProjectKeyScopes,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const sites = new Sites(client);

const result = await sites.update({
    siteId: '<SITE_ID>',
    name: '<NAME>',
    framework: Framework.Analog,
    enabled: false, // optional
    logging: false, // optional
    timeout: 1, // optional
    installCommand: '<INSTALL_COMMAND>', // optional
    buildCommand: '<BUILD_COMMAND>', // optional
    startCommand: '<START_COMMAND>', // optional
    outputDirectory: '<OUTPUT_DIRECTORY>', // optional
    buildRuntime: BuildRuntime.Node145, // optional
    adapter: Adapter.Static, // optional
    fallbackFile: '<FALLBACK_FILE>', // optional
    installationId: '<INSTALLATION_ID>', // optional
    providerRepositoryId: '<PROVIDER_REPOSITORY_ID>', // optional
    providerBranch: '<PROVIDER_BRANCH>', // optional
    providerSilentMode: false, // optional
    providerRootDirectory: '<PROVIDER_ROOT_DIRECTORY>', // optional
    providerBranches: [], // optional
    providerPaths: [], // optional
    buildSpecification: 's-1vcpu-512mb', // optional
    runtimeSpecification: 's-1vcpu-512mb', // optional
    deploymentRetention: 0, // optional
    scopes: [ProjectKeyScopes.ProjectRead], // optional
});

console.log(result);
```
