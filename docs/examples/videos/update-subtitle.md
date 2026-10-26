```javascript
import { Client, Videos } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = await videos.updateSubtitle({
    videoId: '<VIDEO_ID>',
    subtitleId: '<SUBTITLE_ID>',
    bucketId: '<BUCKET_ID>', // optional
    fileId: '<FILE_ID>', // optional
    name: '<NAME>', // optional
    code: 'aar', // optional
    xdefault: false, // optional
});

console.log(result);
```
