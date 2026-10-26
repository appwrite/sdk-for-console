```javascript
import {
    Client,
    Videos,
    VideoOutput,
    VideoRenditionStatus,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = await videos.listRenditions({
    videoId: '<VIDEO_ID>',
    output: VideoOutput.Hls, // optional
    status: VideoRenditionStatus.Pending, // optional
});

console.log(result);
```
