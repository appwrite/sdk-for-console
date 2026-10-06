```javascript
import { Client, Videos } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = await videos.createProfile({
    name: '<NAME>',
    videoBitRate: 32,
    audioBitRate: 32,
    width: 16,
    height: 16,
});

console.log(result);
```
