```javascript
import { Client, Videos, ImageFormat } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const videos = new Videos(client);

const result = videos.getPreview({
    videoId: '<VIDEO_ID>',
    previewId: '<PREVIEW_ID>',
    width: 0, // optional
    height: 0, // optional
    output: ImageFormat.Jpg, // optional
});

console.log(result);
```
