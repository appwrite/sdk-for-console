```javascript
import { Client, Videos } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = videos.getCmafStreamManifest({
    videoId: '<VIDEO_ID>',
    renditionId: '<RENDITION_ID>',
    streamId: 0,
});

console.log(result);
```
