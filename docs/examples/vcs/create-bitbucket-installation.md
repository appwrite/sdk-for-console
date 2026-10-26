```javascript
import { Client, Vcs } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vcs = new Vcs(client);

vcs.createBitbucketInstallation({
    success: 'https://example.com', // optional
    failure: 'https://example.com', // optional
});
```
