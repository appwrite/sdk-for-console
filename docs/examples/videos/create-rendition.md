```javascript
import { Client, Videos, VideoOutput } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = await videos.createRendition({
    videoId: '<VIDEO_ID>',
    profileId: '<PROFILE_ID>',
    output: VideoOutput.Hls,
});

console.log(result);
```
